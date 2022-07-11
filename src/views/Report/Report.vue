<template>
    <div class="body-page view dashboard" id="body-page">

        <!-- header -->
        <div class="container">
            <div class="body row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <button @click="sales">
                        <div class="card mini-card"  v-bind:class="{activee: report == 'sales'}">
                            <div class="card-body">
                                <div class="row row-header">
                                    <img src="../../assets/img/add_product2.png" style="max-width: 100%;margin-top:30px" />
                                </div>
                                <div class="row" style="justify-content: center; margin-top:23px">
                                    <h5 class="color">المبيعات</h5>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <button @click="order">
                        <div class="card mini-card" v-bind:class="{activee: report == 'order'}">
                            <div class="card-body">
                                <div class="row row-header">
                                    <img src="../../assets/img/accept_order.png"
                                        style="max-width: 70%; margin-right: 15px" />
                                </div>
                                <div class="row" style="justify-content: center">
                                    <h5 class="color">الطلبات</h5>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <button @click="rateStore">
                        <div class="card mini-card" v-bind:class="{activee: report == 'rate-store'}">
                            <div class="card-body">
                                <div class="row row-header">
                                    <img src="../../assets/img/rate.png" style="
                                        margin-bottom: 0px;
                                        margin-right: 23px;
                                        margin-top: 9px;
                                        max-width: 67%;" />
                                </div>
                                <div class="row" style="justify-content: center">
                                    <h5 class="color">تقييمات المتجر</h5>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <button @click="rateProduct">
                        <div class="card mini-card" v-bind:class="{activee: report == 'rate-product'}">
                            <div class="card-body">
                                <div class="row row-header">
                                    <img src="../../assets/img/product.png" style="margin-right: 37px; max-width: 52%" />
                                </div>
                                <div class="row" style="justify-content: center">
                                    <h5 class="color">تقييمات المنتجات</h5>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>

            </div>
        </div>

        <!-- Sales Table -->
        <div class="container" v-if="report == 'sales'">
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center add">
                                المبيعات
                            <router-link to="/report-sales">
                                <b-button class="button-view" style="margin-left:30px">طباعة التقرير</b-button>
                            </router-link>
                            </div>
                        </div>
                        <div class="card-body" style="padding: 0px">
                            <v-app>
                                
                                <v-data-table ref="myTable" class="col-lg-12 my-table" :headers="headersSales"
                                    :items="rowsSales" :hide-default-footer="true">
                                    <template v-slot:items="props">
                                        <td>{{ props.item.id }}</td>
                                        <td>{{ props.item.username }}</td>
                                        <td>{{ props.item.name }}</td>
                                        <td>{{ props.item.email }}</td>
                                    </template>
                                </v-data-table>
                            </v-app>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Order Table -->
        <div class="container" v-if="report == 'order'">
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center add">
                                الطلبات
                            <router-link to="/report-sales">
                                <b-button class="button-view" style="margin-left:30px">طباعة التقرير</b-button>
                            </router-link>
                            </div>
                        </div>
                        <div class="card-body" style="padding: 0px">
                            <v-app>
                                
                                <v-data-table ref="myTable" class="col-lg-12 my-table" :headers="headersOrder"
                                    :items="rowsSales" :hide-default-footer="true">
                                    <template v-slot:items="props">
                                        <td>{{ props.item.id }}</td>
                                        <td>{{ props.item.username }}</td>
                                        <td>{{ props.item.name }}</td>
                                        <td>{{ props.item.name }}</td>
                                        <td>{{ props.item.email }}</td>
                                    </template>
                                </v-data-table>
                            </v-app>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Rate Store Table -->
        <div class="container" v-if="report == 'rate-store'">
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center add">
                                تقييمات المتجر
                            <router-link to="/report-sales">
                                <b-button class="button-view" style="margin-left:30px">طباعة التقرير</b-button>
                            </router-link>
                            </div>
                        </div>
                        <div class="card-body" style="padding: 0px">
                            <v-app>
                                
                                <v-data-table ref="myTable" class="col-lg-12 my-table" :headers="headersRateStore"
                                    :items="rowsSales" :hide-default-footer="true">
                                    <template v-slot:items="props">
                                        <td>{{ props.item.id }}</td>
                                        <td>{{ props.item.username }}</td>
                                        <td>{{ props.item.username }}</td>
                                        <td>{{ props.item.name }}</td>
                                    </template>
                                </v-data-table>
                            </v-app>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Rate Product Table -->
        <div class="container" v-if="report == 'rate-product'">
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center add">
                                تقييمات المنتجات
                            <router-link to="/report-sales">
                                <b-button class="button-view" style="margin-left:30px">طباعة التقرير</b-button>
                            </router-link>
                            </div>
                        </div>
                        <div class="card-body" style="padding: 0px">
                            <v-app>
                                
                                <v-data-table ref="myTable" class="col-lg-12 my-table" :headers="headersRateProduct"
                                    :items="rowsSales" :hide-default-footer="true">
                                    <template v-slot:items="props">
                                        <td>{{ props.item.id }}</td>
                                        <td>{{ props.item.username }}</td>
                                        <td>{{ props.item.name }}</td>
                                        <td>{{ props.item.name }}</td>
                                    </template>
                                </v-data-table>
                            </v-app>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "Report",
    data() {
        return {
            report:'sales',

            //sales-table
            headersSales: [
                {text: 'رقم المنتج', value: 'id', align: 'center' },
                { text: 'اسم المنتج', value: 'username', align: 'center' },
                { text: 'سعر المنتج', value: 'username', align: 'center' },
                { text: 'عدد مرات البيع', value: 'name', align: 'center' },
            ],
            rowsSales: [],

            //order-table
            headersOrder: [
                { text: 'رقم الزبون', value: 'id', align: 'center'},
                { text: 'اسم الزبون', value: 'username', align: 'center' },
                { text: 'قيمة الطلب', value: 'username', align: 'center' },
                { text: 'تاريخ الطلب', value: 'username', align: 'center' },
                { text: 'تاريخ التسليم', value: 'name', align: 'center' },
            ],
            rowsOrder: [],

            //rate-store-table
            headersRateStore: [
                { text: 'اسم الزبون', value: 'id', align: 'center'},
                { text: 'التقييم', value: 'username', align: 'center' },
                { text: 'ملاحظات', value: 'username', align: 'center' },
                { text: 'التاريخ', value: 'username', align: 'center' },
            ],
            rowsRateStore: [],

            //rate-product-table
            headersRateProduct: [
                { text: 'اسم الزبون', value: 'id', align: 'center'},
                { text: 'المنتج', value: 'id', align: 'center'},
                { text: 'التقييم', value: 'username', align: 'center' },
                { text: 'التاريخ', value: 'username', align: 'center' },
            ],
            rowsRateProduct: [],
        };
    },
    methods: {
        sales(){
            this.report = 'sales'
            console.log(this.report)
        },
        order(){
            this.report = 'order'
            console.log(this.report)
        },
        rateStore(){
            this.report = 'rate-store'
            console.log(this.report)
        },
        rateProduct(){
            this.report = 'rate-product'
            console.log(this.report)
        },
        getSales(){
            this.axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.rowsSales = res.data;
                console.log(res.data);
            });
        },
        getOrder(){
            this.axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.rowsOrder = res.data;
                console.log(res.data);
            });
        },
        getRateStore(){
            this.axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.rowsRateStore = res.data;
                console.log(res.data);
            });
        },
        getRateProduct(){
            this.axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.rowsRateProduct = res.data;
                console.log(res.data);
            });
        },
        
    },
    mounted() {
        if (this.report == 'sales')
            this.getSales()
        if (this.report == 'order')
            this.getOrder()
        if (this.report == 'rate-store')
            this.getRateStore()
        if (this.report == 'rate-product')
            this.getRateProduct()
    },
};
</script>

<style lang="scss">
@import '@/assets/css/Main/Dashboard.css';
.activee{
    box-shadow: 1px 0px 14px 8px rgb(62 6 24 / 35%) !important;
    transition: all 0.5s;
}
</style>
