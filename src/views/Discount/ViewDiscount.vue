<template>
    <div class="body-page view view-dis" id="body-page">
        <div class="body">
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
                                                <v-card-title style="padding-bottom: 7px;">خصم اوتوماتيكي</v-card-title>
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
                            :page.sync="page" @page-count="pageCount = $event" :hide-default-footer="true">
                            <template v-slot:items="props">
                                <td>{{ props.item.id }}</td>
                                <td>{{ props.item.type }}</td>
                                <td>{{ props.item.dis }}</td>
                                <td>{{ props.item.num }}</td>
                                <td>{{ props.item.status }}</td>
                            </template>
                            <template v-slot:top>
                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title class="justify-content-center" style="padding-top: 30px">هل انت
                                            متأكد من انك تريد حذف الخصم؟
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
                            <template v-slot:[`item.management`]="{ item }">
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
    name: "ViewDiscount",
    data() {
        return {
            page: 1,
            pageCount: 0,
            search: '',
            dialogAdd: false,
            dialogDelete: false,
            headers: [
                {
                    text: 'الخصم',
                    align: 'start',
                    value: 'id',
                },
                { text: 'النوع', value: 'type' },
                { text: 'الوصف', value: 'dis' },
                { text: 'عدد المستخدمين', value: 'num' },
                { text: 'الحالة', value: 'status' },
                { text: 'ادارة', value: 'management' , sortable: false,},
            ],
            rows:[],
            // rows: [ '1', 'كود', '10%', '23', 'active'],
            editedIndex: -1,
            delete: '', 
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
            console.log("Delete")
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
            this.axios.get('https://jsonplaceholder.typicode.com/users')
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
@import '@/assets/css/Discount/ViewDiscount.css';
</style>
