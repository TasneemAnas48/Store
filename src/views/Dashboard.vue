<template>
    <div class="body-page view dashboard" id="body-page">

        <!-- header -->
        <div class="container">
            <div class="body row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div class="card mini-card">
                        <div class="card-body">
                            <div class="row row-header">
                                <h3 class="color">{{order_recev_count}}</h3>
                                <img src="../assets/img/receive_order.png" style="max-width: 58%" />
                            </div>
                            <div class="row" style="justify-content: center">
                                <h5 class="color">الطلبات المعلقة</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div class="card mini-card">
                        <div class="card-body">
                            <div class="row row-header">
                                <h3 class="color">{{order_accept_count}}</h3>
                                <img src="../assets/img/accept_order.png" style="max-width: 70%; margin-right: 15px" />
                            </div>
                            <div class="row" style="justify-content: center">
                                <h5 class="color">الطلبات المقبولة</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div class="card mini-card">
                        <div class="card-body">
                            <div class="row row-header">
                                <h3 class="color">{{rate_count}}</h3>
                                <img src="../assets/img/rate.png" style="
                                        margin-bottom: 0px;
                                        margin-right: 23px;
                                        margin-top: 9px;
                                        max-width: 67%;
                                    " />
                            </div>
                            <div class="row" style="justify-content: center">
                                <h5 class="color">التقييمات</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div class="card mini-card">
                        <div class="card-body">
                            <div class="row row-header">
                                <h3 class="color">{{product_count}}</h3>
                                <img src="../assets/img/product.png" style="margin-right: 37px; max-width: 52%" />
                            </div>
                            <div class="row" style="justify-content: center">
                                <h5 class="color">عدد المنتجات</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- sales chart -->
        <div class="container">
            <div class="body">
                <div class="card" id="chart" style="margin: 0px">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center add">
                            المبيعات
                        </div>
                    </div>
                    <div class="card-body">
                        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
                        <div class="card-footer">
                            مخطط البيع السنوي لسنة 2021
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- order table -->
        <div class="container">
            <div class="body">
                <div class="card" style="margin: 0px">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center add">
                            الطلبات
                        </div>
                    </div>
                    <div class="card-body" style="padding: 0px">
                        <v-app>
                            <v-data-table class="col-lg-12 my-table" :headers="headers" :items="rowsOrder"
                                :hide-default-footer="true">
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

        <!-- customer table -->
        <div class="container">
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center add">
                                افضل الزبائن
                            </div>
                        </div>
                        <div class="card-body" style="padding: 0px">
                            <v-app>
                                <v-data-table class="col-lg-12 my-table" :headers="headersCustomer"
                                    :items="rowsCustomer" :hide-default-footer="true">
                                    <template v-slot:items="props">
                                        <td>{{ props.item.id }}</td>
                                        <td>{{ props.item.username }}</td>
                                        <td>{{ props.item.name }}</td>
                                        <td>{{ props.item.email }}</td>
                                    </template>
                                    <template v-slot:[`item.index`]="{ item }">
                                        {{ rowsCustomer.indexOf(item)+1 }}
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
        </div>

        <!-- visit chart -->
        <div class="container">
            <div class="body">
                <div class="card" id="chart" style="margin: 0px">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center add">
                            عدد الزيارات
                        </div>
                    </div>
                    <div class="card-body">
                        <apexchart type="line" height="350" :options="chartOptions2" :series="series2"></apexchart>
                        <div class="card-footer">
                            مخطط الزيارات الاسبوعي
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- rating product -->
        <div class="container">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        المنتجات الاعلى تقييما
                    </div>
                </div>
                <div class="card-body row " >
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12" v-for="(pro, i) in rating_product" :key="i">
                        <b-card :title="pro.name" :img-src="getImage(pro)" img-alt="Image"
                            img-top tag="article" style="max-width: 15rem; border-radius: 30px;" class="mb-2">
                            <b-card-text>
                                {{pro.count}} تقييما
                            </b-card-text>
                        </b-card>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
//import chart
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

export default {
    name: "Dashboard",
    data() {
        return {
            //sales chart
            series: [
                {
                    data:  [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0]
                },
            ],
            chartOptions: {
                chart: {
                    height: 350,
                    type: "area",
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "smooth",
                },
                colors: ['#af3a88', '#F5EFF3'],
                xaxis: {
                    categories: [
                        "كانون الثاني",
                        "شباط",
                        "اذار",
                        "نيسان",
                        "ايار",
                        "حزيران",
                        "تموز",
                        "اب",
                        "ايلول",
                        "تشرين الاول",
                        "تشرين الثاني",
                        "كانون الاول",
                    ],
                },
            },

            //visit chart
            series2: [
                {
                    data: [30, 41, 35, 51, 49, 62, 23],
                },
            ],
            chartOptions2: {
                chart: {
                    height: 350,
                    type: "line",
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: "smooth",
                },
                colors: ['#af3a88', '#F5EFF3'],
                xaxis: {
                    categories: [
                        "سبت",
                        "احد",
                        "اثنين",
                        "ثلاثاء",
                        "اربعاء",
                        "خميس",
                        "جمعة",
                        "سبت",
                    ],
                },
            },


            //order-table
            headers: [
                { text: 'رقم الطلب', value: 'id', align: 'center',},
                { text: 'اسم الزبون', value: 'customer_name', align: 'center' },
                { text: 'تاريخ الطلب', value: 'created_at', align: 'center' },
                { text: 'تاريخ الحد الاقصى للتسليم', value: 'delivery_time', align: 'center' },
                { text: 'قيمة الطلب', value: 'delivery_price' , align: 'center' },
            ],
            rowsOrder: [],
            
            //customer-table
            headersCustomer: [
                {text: '#',  value: 'index', align: 'center'},
                { text: 'الاسم', value: 'name', align: 'center' },
                { text: 'الايميل', value: 'email', align: 'center' },
                { text: 'المبلغ', value: 'total', align: 'center' },
                { text: 'عدد الطلبات', value: 'orders' , align: 'center' },
            ],
            rowsCustomer: [],



            //rating
            title:["لعبة", "كروشيه", "تطريز", "اكسسوار"],


            order_accept_count:'',
            order_recev_count:'',
            product_count:'',
            rate_count:'',
            rating_product:'',

            page: 1,
            pageCount: 0,



        };
    },
    components: {
        apexchart: VueApexCharts,
    },
    methods: {
        getImage(item){
            return "http://"+this.$store.state.ip+"uploads/books/"+item.image
        },
        getData(){
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios.get("http://"+this.$store.state.ip+"api/dashbord/"+ this.$store.state.id_store)
            .then(res => {
                // this.rows = res.data;
                console.log(res.data.data);
                this.order_accept_count = res.data.data.order_accept_count
                this.order_recev_count = res.data.data.order_recev_count
                this.product_count = res.data.data.product_count
                this.rate_count = res.data.data.rate_count

                this.rowsCustomer = res.data.data.customer
                this.rating_product = res.data.data.rating_product
                this.rowsOrder = res.data.data.order_accept
                // this.series.data = res.data.data.salls
                // for (let i = 0; i < 7; i++)
                //     this.series2.data[i] = res.data.data.visit[i].count
                // console.log(this.series2.data)

            });
        }
    },
    mounted() {
        this.getData()
    },
};
</script>

<style lang="scss">
@import '@/assets/css/Main/Dashboard.css';
</style>
