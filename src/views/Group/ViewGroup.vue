<template>
    <div class="body-page group view" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        المجموعات
                        <router-link to="/add-group">
                            <b-button class="button-view">إنشاء مجموعة</b-button>
                        </router-link>
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

                            <template v-slot:[`item.image`]="{ item }">
                                <img :src="getImage(item)" v-if="item.image != null">
                            </template>

                            <template v-slot:top>

                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title class="justify-content-center" style="padding-top: 30px">هل انت
                                            متأكد من انك تريد حذف المجموعة؟
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
                                <font-awesome-icon icon="fas fa-edit" class=" fa-edit" @click="editItem(item)" />
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
    name: "ViewGroup",
    data() {
        return {
            page: 1,
            pageCount: 0,
            search: '',
            dialogDelete: false,
            headers: [
                { text: 'عنوان', value: 'title', align: 'center', },
                { text: 'شرح', value: 'discription', align: 'center', },
                { text: 'صورة', value: 'image' , align: 'center',},
                { text: 'عدد المنتجات', value: 'number', align: 'center', },
                { text: 'إدارة', value: 'mangement', align: 'center' , sortable: false,},
            ],
            rows: [],
            editedIndex: -1,
            delete: '',
            status:'',
        };
    },
    
    watch: {
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },

    methods: {
        getImage(item){
            return "http://"+this.$store.state.ip+"bayanImages/"+item.image
        },
        editItem(item){
            this.$router.replace({ name: 'edit-group', params: {id: item.id} })
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
                .post("http://"+this.$store.state.ip+"api/collection/delete",{id: this.delete.id})
                .then((res) => {
                    // console.log(res.data)
                    console.log(this.delete.id)
                })
        },
        getData(){
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios.get("http://"+this.$store.state.ip+"api/collection/collectionNane/"+ this.$store.state.id_store)
            .then(res => {
                this.rows = res.data
                this.status = res.statusText
                console.log(res.data)
            });
        }
    },
    mounted() {
        this.getData()
    },
    components: {
    },
};
</script>

<style lang="scss">
@import '@/assets/css/Group/ViewGroup.css';
</style>
