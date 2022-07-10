<template>
    <div class="body-page view" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        <div class="p-2 bd-highlight">
                            الطلبات المنفذة
                        </div>
                        <div class="p-2 bd-highlight">
                            <router-link to="/receive-order" style="margin-left: 20px">
                                <b-button class="button-view">الطلبات المستلمة</b-button>
                            </router-link>

                            <router-link to="/accept-order">
                                <b-button class="button-view">الطلبات المقبولة</b-button>
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
                                <td>{{ props.item.name }}</td>
                                <td>{{ props.item.username }}</td>
                                <td>{{ props.item.email }}</td>
                            </template>

                            <template v-slot:top>
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
                            <template v-slot:[`item.details`]="{ item }">
                                <font-awesome-icon icon="fas fa-expand-arrows-alt" class="fa-expand-arrows-alt"
                                    @click="showDetailItem(item)" />
                            </template>
                            <template v-slot:[`item.invoice`]="{ item }">
                                <router-link to="/invoice">
                                    <font-awesome-icon icon="fa fa-file-text" class="fa-file-text"
                                        @click="showInvoice(item)" />
                                </router-link>
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
    name: "FinishOrder",
    data() {
        return {
            page: 1,
            pageCount: 0,
            search: '',
            dialogShow: false,
            headers: [
                {
                    text: 'رقم الزبون',
                    align: 'start',
                    value: 'id',
                },
                { text: 'اسم الزبون', value: 'name' },
                { text: 'تاريخ الطلب', value: 'order-date' },
                { text: 'تاريخ التسليم', value: 'delivery-date'},
                { text: 'تفاصيل الطلب', value: 'details', sortable: false, align: 'center'},
                { text: 'الفاتورة', value: 'invoice', sortable: false, align: 'center'},

            ],
            rows: [],
            show: '',
        };
    },
    components: {
    },
    methods: {
        getData(){
            this.axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.rows = res.data;
                // console.log(res.data);
            });
        },
        showDetailItem(item){
            this.dialogShow = true;
            this.show = item
            console.log(this.show.id)
        },
        showInvoice(item){
            console.log(item.id)
        }
    },
    mounted() {
        this.getData()
    },
    
};
</script>

<style lang="scss">
@import '@/assets/css/Order/FinishOrder.css';
</style>
