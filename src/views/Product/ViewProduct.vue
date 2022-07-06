<template>
    <div class="body-page view" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                    المنتجات
                        <router-link to="/add-product1">
                            <b-button class="button-view">إنشاء منتج</b-button>
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
                        <v-data-table class="col-lg-12 my-table" :headers="headers" :items="rows" :search="search" :fixed-header="true"
                            :page.sync="page" @page-count="pageCount = $event" :hide-default-footer="true">
                            <template v-slot:items="props">
                                <td>{{ props.item.id }}</td>
                                <td>{{ props.item.title }}</td>
                                <td>{{ props.item.userId }}</td>
                                <td>{{ props.item.userId }}</td>
                                <td>{{ props.item.userId }}</td>
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
                                <font-awesome-icon icon="fas fa-edit" class=" fa-edit" />
                            </template>
                        </v-data-table>
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
    name: "ViewProduct",
    data() {
        return {
            page: 1,
            pageCount: 0,
            search: '',
            dialogDelete: false,
            headers: [
                {
                    text: 'عنوان',
                    align: 'start',
                    value: 'id',
                },
                { text: 'شرح', value: 'title', sortable: false, width: '270px', },
                { text: 'سعر المبيع', value: 'userId' },
                { text: 'سعر التكلفة', value: 'userId' },
                { text: 'المجموعة', value: 'userId' },
                { text: 'إدارة', value: 'mangement' , sortable: false,},
            ],
            rows: [],
            editedIndex: -1,
            delete: ''
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
                .post("https://jsonplaceholder.typicode.com/posts",this.delete.id)
                .then((res) => {
                    console.log(res.data);
                    console.log(this.delete.id);
                });
        },
        getData(){
            this.axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.rows = res.data;
                console.log(res.data);
            });
        }
    },
    mounted() {
        this.getData()
    },
    
};
</script>

<style lang="scss">

</style>
