<template>
    <div class="body-page view dashboard" id="body-page">
        <!-- table -->

        <div class="container">
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center add">
                                المبيعات
                            </div>
                        </div>
                        <div class="card-body" style="padding: 0px">
                            <v-app>
                                <v-data-table ref="myTable" class="col-lg-12 my-table" :headers="headersSales"
                                    :items="rowsSales" :hide-default-footer="true">
                                    <template v-slot:items="props">
                                        <td>{{ props.item.name }}</td>
                                        <td>{{ props.item.selling_price }}</td>
                                        <td>{{ props.item.cost_price }}</td>
                                        <td>{{ props.item.selling_count }}</td>
                                        <td>{{ props.item.Profit }}</td>
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
            //sales-table
            headersSales: [
                { text: 'اسم المنتج', value: 'name', align: 'center' },
                { text: 'سعر المبيع', value: 'selling_price', align: 'center' },
                { text: 'سعر التكلفة', value: 'cost_price', align: 'center' },
                { text: 'عدد مرات البيع', value: 'selling_count', align: 'center' },
                {text: 'الربح الكلي ', value: 'Profit', align: 'center' },
            ],
            rowsSales: [],

        };
    },


    methods: {
        getData(){
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios.get("http://"+this.$store.state.ip+"api/report/selles/"+ this.$store.state.id_store)
            .then(res => {
                this.rowsSales = res.data.data
                console.log(res.data)
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
