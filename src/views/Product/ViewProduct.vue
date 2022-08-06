<template>
    <div class="body-page view view-pro" id="body-page">
        <div class="body" >
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        المنتجات
                        <div class="d-flex justify-content-end ">
                            <router-link to="/grid-product" style="margin-left:15px">
                                <b-button class="button-view"> عرض شبكة</b-button>
                            </router-link>
                            <router-link to="/add-product1">
                                <b-button class="button-view">إضافة منتج</b-button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <v-app>
                        <v-card-title class="search">
                            <b-form-input v-model="search" class="col-lg-3 input-field" label="Search"
                                placeholder="ابحث" append-icon="mdi-magnify" single-line hide-details>
                            </b-form-input>
                        </v-card-title>
                        <v-data-table class="col-lg-12 my-table" :headers="headers" :items="rows" :search="search"
                            :fixed-header="true" :page.sync="page" @page-count="pageCount = $event"
                            :hide-default-footer="true" v-if="status == 'OK'">

                            <template v-slot:[`item.image`]="{ item }">
                                <img :src="getImage(item)">
                            </template>

                            <template v-slot:[`item.return_or_replace`]="{ item }">
                                <td v-if="item.return_or_replace ==  '1'">ممكن</td>
                                <td v-else-if="item.return_or_replace == '0'">غير ممكن</td>
                            </template>

                            <template v-slot:[`item.gift`]="{ item }">
                                <td v-if="item.gift ==  '1'">ممكن</td>
                                <td v-else-if="item.gift == '0'">غير ممكن</td>
                            </template>

                            <template v-slot:[`item.review`]="{ item }">
                                <td v-if="item.review ==  0">
                                    <v-icon color="red" >mdi-emoticon-sad-outline</v-icon>
                                </td>
                                <td v-else-if="item.review == 1">
                                    <v-icon color="yellow" >mdi-emoticon-neutral-outline</v-icon>
                                </td>
                                <td v-else-if="item.review == 2">
                                    <v-icon color="green" >mdi-emoticon-excited-outline</v-icon>
                                </td>
                                <td v-else-if="item.review == 3">لايوجد</td>
                            </template>

                            <template v-slot:[`item.classification`]="{ item }">
                                <div class="row" style="justify-content: center;">
                                    <div class="classification" v-for="(i, index) in item.classification" :key="index">
                                        <td>{{ i }}  </td>
                                    </div>
                                </div>
                            </template>

                            <template v-slot:top>

                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title class="justify-content-center" style="padding-top: 30px">هل انت
                                            متأكد من انك تريد حذف المنتج؟
                                        </v-card-title>
                                        <v-card-actions style="padding-bottom: 30px">
                                            <v-spacer></v-spacer>
                                            <v-btn color="var(--gray-medium)" text @click="closeDelete">لا تراجع
                                            </v-btn>
                                            <v-btn color="red" text @click="deleteItemConfirm">نعم تأكيد
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </template>
                            <template v-slot:[`item.mangement`]="{ item }">
                                <font-awesome-icon icon="fa fa-trash" class="fa-trash" @click="deleteItem(item)" />
                                <font-awesome-icon icon="fas fa-edit" class=" fa-edit"  @click="editItem(item)"/>
                            </template>
                        </v-data-table>
                        <div v-else>
                            <v-progress-circular :size="70" :width="7" color="var(--main-color)"
                            indeterminate style="margin-top: 100px; margin-bottom: 150px;">
                            </v-progress-circular>
                        </div>
                        <div class="text-center">
                            <v-pagination color=var(--main-color) v-model="page" :length="pageCount" circle>
                            </v-pagination>
                        </div>
                    </v-app>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ViewProduct",
    data() {
        return {
            page: 1,
            pageCount: 0,
            search: '',
            dialogDelete: false,
            headers: [
                { text: 'رقم', value: 'product_id', align: 'center', width:'120'},
                { text: 'اسم المنتج', value: 'product_name', align: 'center', width:'120' },
                { text: 'صورة', value: 'image', align: 'center', width:'120' },
                { text: 'شرح', value: 'discription', align: 'center', width:'120'  },
                { text: 'سعر المبيع', value: 'selling_price', align: 'center' , width:'120' },
                { text: 'سعر التكلفة', value: 'cost_price', align: 'center' , width:'140' },
                { text: 'المجموعة', value: 'collection', align: 'center', width:'120' },
                { text: 'التصنيف', value: 'classification', align: 'center', width:'220' },
                { text: 'تبديل', value: 'return_or_replace', align: 'center', width:'120' },
                { text: 'تغليف كهدية', value: 'gift', align: 'center' , width:'140'},
                { text: 'المناسبة', value: 'party', align: 'center', width:'120' },
                { text: 'الوقت المتوقع للتحضير', value: 'prepration_time', align: 'center', width:'190' },
                { text: 'العمر', value: 'age', align: 'center', width:'120' },
                { text: 'عدد مرات البيع', value: 'num_cell', align: 'center', width:'150' },
                { text: 'التقييم', value: 'review', align: 'center', width:'150' },
                { text: 'إدارة', value: 'mangement' , sortable: false, align: 'center', width:'120'},
            ],
            rows: [],
            editedIndex: -1,
            delete: '',
            status:'',
        };
    },
    components: {
    },
    watch: {
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },
    methods: {
        getImage(item){
            return "http://"+this.$store.state.ip+"uploads/product/"+item.image
        },
        editItem(item){
            this.$router.replace({ name: 'edit-product1', params: {id: item.product_id} })
        },
        deleteItem (item) {
            this.editedIndex = this.rows.indexOf(item)
            this.delete = item
            this.dialogDelete = true
        },
        deleteItemConfirm () {
            this.rows.splice(this.editedIndex, 1)
            this.sendIdDeleted()
            this.closeDelete()
        },
        closeDelete () {
            this.dialogDelete = false
        },
        sendIdDeleted() {
            this.axios
                .post("http://"+this.$store.state.ip+"api/product/delete",{id: this.delete.product_id})
                .then((res) => {
                    // console.log(res.data)
                    // console.log(this.delete.product_id)
                })
        },
        getData(){
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios.get("http://"+this.$store.state.ip+"api/product/index/"+ this.$store.state.id_store)
            .then(res => {
                this.rows = res.data
                this.status = res.statusText
                console.log(res.data)
                // console.log(this.rows.length)
            });
        }
    },
    mounted(){
        console.log(this.rows.length)
        this.getData()
    },
    
};
</script>

<style lang="scss">
.view-pro img{
    width: 70px;
    height: 70px;
}
.view-pro .classification{
    padding: 5px 8px 5px 8px;
    background-color: var(--second-color);
    border-radius: 20px;
    margin: 2px;
}
</style>
