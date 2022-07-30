<template>
    <div class="body-page view view-dis" id="body-page">
        <div class="body" >
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        الخصومات
                        <v-dialog v-model="dialogAdd" scrollable max-width="600px">
                            <template v-slot:activator="{ on, attrs }">
                                <b-button class="button-view" v-bind="attrs" v-on="on">إنشاء خصم</b-button>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="header">إنشاء خصم</span>
                                </v-card-title>
                                <v-divider></v-divider>
                                <router-link to="/add-code" >
                                    <v-card-text class="v-card-text">
                                        <v-container>
                                            <div class="option">
                                                <v-card-title style="padding-bottom: 7px;">كود خصم</v-card-title>
                                                <v-card-text style="text-align: right; padding-bottom: 25px">سيحصل الزبائن على الخصم عند إدخال الرمز</v-card-text>
                                                <b-icon icon="chevron-left" class="h2 icon1" style="color:var(--main-color)"></b-icon>
                                            </div>
                                        </v-container>
                                    </v-card-text>
                                </router-link>
                                <router-link to="/add-dinamic" style="margin-bottom:50px">
                                    <v-card-text class="v-card-text">
                                        <v-container>
                                            <div class="option">
                                                <v-card-title style="padding-bottom: 7px;">خصم منتج</v-card-title>
                                                <v-card-text style="text-align: right; padding-bottom: 25px">سيحصل الزبائن على الخصم تلقائيا في سلة التسوق الخاصة بهم</v-card-text>
                                                <b-icon icon="chevron-left" class="h2 icon2" style="color:var(--main-color)"></b-icon>
                                            </div>
                                        </v-container>
                                    </v-card-text>
                                </router-link>
                            </v-card>
                        </v-dialog>
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
                            :page.sync="page" @page-count="pageCount = $event" :hide-default-footer="true" v-if="status == 'OK'">
                            <template v-slot:items="props">
                                <td>{{ props.item.discounts_id }}</td>
                                <td>{{ props.item.title }}</td>
                                
                                <td>{{ props.item.value }}</td>
                                <td>{{ props.item.start_date }}</td>
                                <td>{{ props.item.end_date }}</td>
                            </template>
                            <template v-slot:[`item.type`]="{ item }">
                                <td v-if="item.type ==  '1'">خصم منتج</td>
                                <td v-else-if="item.type == '2'">كود خصم</td>
                            </template>
                            <template v-slot:[`item.status`]="{ item }">
                                <td v-if="today <= item.end_date && today >= item.start_date">
                                    <b-button type="button" class=" button-active">فعال 
                                    </b-button>
                                </td>
                                <td v-else>
                                    <b-button type="button" class="button-unactive">غير فعال 
                                    </b-button> 
                                </td>
                            </template>
                            <template v-slot:[`item.management`]="{ item }">
                                <font-awesome-icon icon="fas fa-edit" class=" fa-edit" @click="editItem(item)"/>
                            </template>
                            <template v-slot:top>
                            <v-dialog v-model="dialogShow" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title style="color: var(--main-color)">تفاصيل الخصم</v-card-title>
                                        <v-divider style="margin-top:10px"></v-divider>
                                        
                                        <v-card-actions style="padding-bottom: 30px" >
                                            <div class="row" style="justify-content: center;align-items: center;" v-if="detail.type == '2'">
                                                <div class="col-lg-9 details" style="margin-right:30px">
                                                        <div class="row" style="margin-top: 0px">
                                                            <p class="col-lg-6 left"> كود الخصم</p>
                                                            <p class="col-lg-6 right"> {{detail.discount_code}}</p>
                                                        </div>
                                                        <div class="row" style="margin-top: 0px">
                                                            <p class="col-lg-6 left" v-if="detail.condition == '2'"> الحد الادنى لمبلغ الشراء</p>
                                                            <p class="col-lg-6 left" v-if="detail.condition == '1'"> الحد الادنى لعدد العناصر</p>
                                                            <p class="col-lg-6 right"> {{detail.condition_value}}</p>
                                                        </div>
                                                        <div class="row" style="margin-top: 0px">
                                                            <p class="col-lg-6 left"> نسبة الخصم </p>
                                                            <p class="col-lg-6 right"> {{detail.value}}</p>
                                                        </div>
                                                        <div class="row" style="margin-top: 0px">
                                                            <p class="col-lg-6 left">  تاريخ البدء </p>
                                                            <p class="col-lg-6 right"> {{detail.start_date}}</p>
                                                        </div>
                                                        <div class="row" style="margin-top: 0px">
                                                            <p class="col-lg-6 left">  تاريخ الانتهاء </p>
                                                            <p class="col-lg-6 right"> {{detail.end_date}}</p>
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="row" style="justify-content: center;align-items: center;" v-if="detail.type == '1'">
                                                <div class="col-lg-9 details" style="margin-right:30px">
                                                        <div class="row" style="margin-top: 0px">
                                                            <p class="col-lg-6 left">عنوان الخصم </p>
                                                            <p class="col-lg-6 right"> {{detail.title}}</p>
                                                        </div>
                                                        <div class="row" style="margin-top: 0px">
                                                            <p class="col-lg-6 left"> نسبة الخصم </p>
                                                            <p class="col-lg-6 right"> {{detail.value}}</p>
                                                        </div>
                                                        <div class="row" style="margin-top: 0px">
                                                            <p class="col-lg-6 left"> يطبق على </p>
                                                            <p class="col-lg-6 right" v-if="detail.apply_to == 'p'">منتجات محددة</p>
                                                            <p class="col-lg-6 right" v-if="detail.apply_to == 'c'">مجموعات محددة</p>
                                                            <p class="col-lg-6 right" v-if="detail.apply_to == 'all'">جميع المنتجات </p>
                                                        </div>
                                                        <div class="row" style="margin-top: 0px" v-if="detail.apply_to == 'p'">
                                                            <p class="col-lg-6 left">المنتجات </p>
                                                            <div class="col-lg-6 right" >
                                                                <div v-for="(p,i) in detail.products" :key="i" style="padding:10px; background: var(--second-color);margin:20px">{{p}}</div>
                                                            </div>
                                                        </div>
                                                        <div class="row" style="margin-top: 0px" v-if="detail.apply_to == 'c'">
                                                            <p class="col-lg-6 left">المجموعات </p>
                                                            <p class="col-lg-6 right" v-for="(p,i) in detail.products" :key="i">{{p}}</p>
                                                        </div>
                                                        <div class="row" style="margin-top: 0px">
                                                            <p class="col-lg-6 left">  تاريخ البدء </p>
                                                            <p class="col-lg-6 right"> {{detail.start_date}}</p>
                                                        </div>
                                                        <div class="row" style="margin-top: 0px">
                                                            <p class="col-lg-6 left">  تاريخ الانتهاء </p>
                                                            <p class="col-lg-6 right"> {{detail.end_date}}</p>
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                                </template>
                            <template v-slot:[`item.details`]="{ item }">
                                <font-awesome-icon icon="fas fa-expand-arrows-alt" class="fa-expand-arrows-alt"
                                    @click="showDetailItem(item)" />
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

</script>
<script>
export default {
    name: "ViewDiscount",
    data() {
        return {
            page: 1,
            pageCount: 0,
            search: '',
            dialogAdd: false,
            dialogShow: false,
            headers: [
                { text: 'رقم', value: 'discounts_id', align: 'center'},
                { text: 'النوع', value: 'type', align: 'center' },
                { text: 'نسبة الخصم', value: 'value', align: 'center' },
                { text: 'تاريخ البدء', value: 'start_date', align: 'center' },
                { text: 'تاريخ الانتهاء', value: 'end_date', align: 'center' },
                { text: 'الحالة', value: 'status', align: 'center' },
                { text: 'تفاصيل الخصم', value: 'details' , align: 'center', sortable: false,},
                { text: 'اعادة تفعيل', value: 'management' , align: 'center', sortable: false,},
            ],
            rows:[],
            status:'',
            editedIndex: -1,
            today: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            detail:''
        };
    },
    components: {
    },

    methods: {
        showDetailItem(item){
            this.dialogShow = true;
            this.show = item
            if (item.type == '2')
                this.axios.get("http://"+this.$store.state.ip+"api/discountproduct/show/" + item.discounts_id + "/2")
                .then(res => {
                    this.detail = res.data
                    console.log(res.data)
                });
            else if(item.type == '1')
                this.axios.get("http://"+this.$store.state.ip+"api/discountproduct/show/" + item.discounts_id + "/1")
                    .then(res => {
                        this.detail = res.data
                        console.log(res.data)
                    });
        },
        editItem(item){
            if (item.type == "1")
                this.$router.replace({ name: 'edit-dinamic', params: {id: item.discounts_id} })
            else if (item.type == "2")
                this.$router.replace({ name: 'edit-code', params: {id: item.discounts_id} })
        },
        
        getData(){
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios.get("http://"+this.$store.state.ip+"api/discountproduct/index/"+ this.$store.state.id_store)
            .then(res => {
                this.rows = res.data;
                this.status = res.statusText
                console.log(this.rows);
            });
        },

    },

    mounted() {
        this.getData()
    },
    
};
</script>

<style lang="scss">
@import '@/assets/css/Discount/ViewDiscount.css';

</style>
