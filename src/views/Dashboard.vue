<template>
    <div class="body-page view dashboard" id="body-page">

        <!-- header -->
        <div class="container">
            <div class="body row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div class="card mini-card">
                        <div class="card-body">
                            <div class="row row-header">
                                <h3 class="color">14</h3>
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
                                <h3 class="color">23</h3>
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
                                <h3 class="color">52</h3>
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
                                <h3 class="color">7</h3>
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
                            <v-data-table class="col-lg-12 my-table" :headers="headers" :items="rows"
                                :hide-default-footer="true">
                                <template v-slot:items="props">
                                    <td>{{ props.item.id }}</td>
                                    <td>{{ props.item.username }}</td>
                                    <td>{{ props.item.name }}</td>
                                </template>
                                <template v-slot:[`item.status`]="{ item }">
                                    <b-button type="button" class=" button-succefull">{{ item.status }} تم التسليم
                                    </b-button>
                                    <b-button type="button" class=" button-prograse">{{ item.status }}جاري التنفيذ
                                    </b-button>
                                </template>
                            </v-data-table>

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
                                </v-data-table>
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


        <div class="container">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        المنتجات الاعلى تقييما
                    </div>
                </div>
                <div class="card-body row " >
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12" v-for="(title, i) in title" :key="i">
                        <b-card :title="title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image"
                            img-top tag="article" style="max-width: 15rem; border-radius: 30px;" class="mb-2">
                            <b-card-text>
                                35 تقييما
                            </b-card-text>
                        </b-card>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
<script></script>
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
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 65, 56, 23],
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
            headersCustomer: [
                {
                    text: 'رقم الزبون',
                    align: 'center',
                    value: 'id',
                },
                { text: 'اسم الزبون', value: 'username', align: 'center' },
                { text: 'المبلغ', value: 'name', align: 'center' },
                { text: 'عدد الطلبات', value: 'email' , sortable: false, align: 'center' },
            ],
            rowsCustomer: [],

            //customer-table
            headers: [
                {
                    text: 'رقم الطلب',
                    align: 'center',
                    value: 'id',
                },
                { text: 'اسم الزبون', value: 'username', align: 'center' },
                { text: 'تاريخ الطلب', value: 'name', align: 'center' },
                { text: 'حالة الطلب', value: 'status' , sortable: false, align: 'center' },
            ],
            rows: [],

            //rating
            title:["لعبة", "كروشيه", "تطريز", "اكسسوار"]
        };
    },
    components: {
        apexchart: VueApexCharts,
    },
    methods: {
        getData(){
            this.axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.rows = res.data;
                this.rowsCustomer = res.data;
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
@import '@/assets/css/Dashboard.css';
</style>
