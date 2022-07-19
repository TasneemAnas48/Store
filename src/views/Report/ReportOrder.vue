<template>
    <div class="body-page view dashboard" id="body-page">
        <!-- table -->

        <div class="container">
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center add">
                                الطلبات
                            </div>
                        </div>
                        <div class="card-body" style="padding: 0px">
                            <v-app>
                                <v-data-table ref="myTable" class="col-lg-12 my-table" :headers="headersOrder"
                                    :items="rowsOrder" :hide-default-footer="true">
                                    <template v-slot:items="props">
                                        <td>{{ props.item.name }}</td>
                                        <td>{{ props.item.delivery_price }}</td>
                                        <td>{{ props.item.delivery_time }}</td>
                                        <td>{{ props.item.created_at }}</td>
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
    name: "ReportSales",
    data() {
        return {
           //order-table
            headersOrder: [
                { text: 'اسم الزبون', value: 'name', align: 'center' },
                { text: 'قيمة الطلب', value: 'delivery_price', align: 'center' },
                { text: 'تاريخ الطلب', value: 'created_at', align: 'center' },
                { text: 'تاريخ التسليم', value: 'delivery_time', align: 'center' },
            ],
            rowsOrder: [],

        };
    },


    methods: {
        getData(){
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios.get("http://"+this.$store.state.ip+"api/report/orders/"+ this.$store.state.id_store)
            .then(res => {
                this.rowsOrder = res.data.data
                console.log(res.data.data)
            })
            .finally(() => {
                window.print()
            })
        },
    },
    mounted() {
        this.getData()
    },

};
</script>

<style lang="scss">
@import '@/assets/css/Main/Dashboard.css';
</style>
