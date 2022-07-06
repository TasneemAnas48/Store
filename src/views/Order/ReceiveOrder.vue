<template>
    <div class="body-page view" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        <div class="p-2 bd-highlight">
                            الطلبات المستلمة 
                        </div>
                        <div class="p-2 bd-highlight">
                            <router-link to="/accept-order" style="margin-left: 20px">
                                <b-button class="button-view">الطلبات المقبولة</b-button>
                            </router-link>

                            <router-link to="/finish-order">
                                <b-button class="button-view">الطلبات المنفذة</b-button>
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
                            :hide-default-footer="true">
                            <template v-slot:items="props">
                                <td>{{ props.item.id }}</td>
                                <td>{{ props.item.title }}</td>
                                <td>{{ props.item.userId }}</td>
                            </template>

                            <template v-slot:top>
                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title class="justify-content-center" style="padding-top: 30px">هل انت
                                            متأكد من انك تريد رفض طلب الزبون؟
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
                                <v-dialog v-model="dialogAccept" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title class="justify-content-center" style="padding-top: 30px">هل انت
                                            متأكد من انك تريد قبول طلب الزبون؟
                                        </v-card-title>
                                        <v-card-actions style="padding-bottom: 30px">
                                            <v-spacer></v-spacer>
                                            <v-btn color="var(--gray-medium)" text @click="closeAccept">لا تراجع
                                            </v-btn>
                                            <v-btn color="green" text @click="acceptItemConfirm">نعم تأكيد
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                                <v-dialog v-model="dialogShow" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title style="color: var(--main-color)">تفاصيل الطلب</v-card-title>
                                        <v-divider style="margin-top:10px"></v-divider>
                                        <v-card-actions style="padding-bottom: 30px">
                                            <div class="row">
                                                <div class="col-lg-6" style="margin-right:15px">
                                                    <div class="product-name">حقيبة كروشيه</div>
                                                    <div class="details"></div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <img src="../../assets/img/product.jpg"
                                                        class="img-thumbnail img product-img" />
                                                </div>
                                            </div>

                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </template>
                            <template v-slot:[`item.managment`]="{ item }">
                                <font-awesome-icon icon="fa fa-close" class="fa-close" @click="deleteItem(item)" />
                                <font-awesome-icon icon="fa fa-check" class=" fa-check" @click="acceptItem(item)" />
                            </template>
                            <template v-slot:[`item.details`]="{ item }">
                                <font-awesome-icon icon="fas fa-expand-arrows-alt" class="fa-expand-arrows-alt"
                                    @click="showDetailItem(item)" />
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
    name: "ReceiveOrder",
    data() {
        return {
            page: 1,
            pageCount: 0,
            search: '',
            dialogDelete: false,
            dialogAccept: false,
            dialogShow: false,
            headers: [
                {
                    text: 'رقم الزبون',
                    align: 'start',
                    value: 'id',
                },
                { text: 'اسم الزبون', value: 'name' },
                { text: 'تاريخ الطلب', value: 'date' },
                { text: 'تفاصيل الطلب', value: 'details', sortable: false, align: 'center'},
                { text: 'معالجة الطلب', value: 'managment', sortable: false, align: 'center'},
            ],
            rows: [],
            checkedIndex: -1,
            delete: '',
            accept: '',
            show: '',
        };
    },
    components: {
    },
    watch: {
        dialogDelete (val) {
            val || this.closeDelete()
        },
        dialogAccept (val) {
            val || this.closeAccept()
        },
    },
    methods: {
        deleteItem (item) {
            this.checkedIndex = this.rows.indexOf(item)
            this.delete = item
            this.dialogDelete = true
        },
        deleteItemConfirm () {
            this.rows.splice(this.checkedIndex, 1)
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
        acceptItem (item) {
            this.checkedIndex = this.rows.indexOf(item)
            this.accept = item
            this.dialogAccept = true
        },
        acceptItemConfirm () {
            this.rows.splice(this.checkedIndex, 1)
            this.sendIdAccept()
            this.closeAccept()
        },
        closeAccept () {
            this.dialogAccept = false
        },
        sendIdAccept() {
            this.axios
                .post("https://jsonplaceholder.typicode.com/posts",this.accept.id)
                .then((res) => {
                    console.log(res.data);
                    console.log(this.accept.id);
                });
        },
        getData(){
            this.axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.rows = res.data;
                // console.log(res.data);
            });
        },
        showDetailItem(item){
            this.dialogShow = true;
            this.show = item
            console.log(this.show.id)
        }
    },
    mounted() {
        this.getData()
    },
    
};
</script>

<style lang="scss">
.view .my-table .fa-close {
    color: #dc3545;
    background: #ff00003b;
    border-radius: 7px;
    padding: 7px;
    font-size: 14px;
    margin-top: 5px;
    margin-left: 10px;
    padding-left: 9px;
    padding-right: 9px;
}

.view .my-table .fa-close:hover {
    color: white;
    background-color: #dc3545;
    cursor: pointer;
}

.view .my-table .fa-check {
    color: #1eb018;
    background: rgb(64 201 59 / 21%);
    border-radius: 7px;
    padding: 7px;
    font-size: 14px;
    margin-top: 5px;
    margin-left: 5px;
}

.view .my-table .fa-check:hover {
    color: white;
    background-color: #1eb018;
    cursor: pointer;
}

.view .my-table .fa-expand-arrows-alt {
    color: var(--main-color);
    background: var(--second-color);
    border-radius: 7px;
    padding: 7px;
    font-size: 14px;
    margin-top: 5px;
    margin-left: 10px;
    padding-left: 8px;
    padding-right: 9px;
}

.view .my-table .fa-expand-arrows-alt:hover {
    color: white;
    background-color: var(--main-color);
    cursor: pointer;
}

.view .product-img {
    border-radius: 30px;
}

.view .product-name {
    text-align: right;
    font-size: 18px;
}

.view .v-dialog {
    border-radius: 20px !important;
}
</style>
