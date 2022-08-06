<template>
    <div class="body-page view dashboard" id="body-page">
        <!-- table -->

        <div class="container">
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center add">
                                تقييمات المتجر
                            </div>
                        </div>
                        <div class="card-body" style="padding: 0px">
                            <v-app>
                                <v-data-table ref="myTable" class="col-lg-12 my-table" :headers="headersRateStore"
                                    :items="rowsRateStore" :hide-default-footer="true">
                                    <template v-slot:items="props">
                                        <td>{{ props.item.name }}</td>
                                        <td>{{ props.item.notes }}</td>
                                        <td>{{ props.item.created_at }}</td>
                                    </template>
                                    <template v-slot:[`item.value`]="{ item }">
                                        <td v-if="item.review ==  0">
                                            لايوجد
                                        </td>
                                        <td v-else-if="item.review ==  1">
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                        </td>
                                        <td v-else-if="item.value == 2">
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                        </td>
                                        <td v-else-if="item.value == 3">
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                        </td>
                                        <td v-else-if="item.value == 4">
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                        </td>
                                        <td v-else-if="item.value == 5">
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                        </td>
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
           //rate-store-table
            headersRateStore: [
                { text: 'اسم الزبون', value: 'name', align: 'center'},
                { text: 'التقييم', value: 'value', align: 'center' },
                { text: 'ملاحظات', value: 'notes', align: 'center' },
                { text: 'التاريخ', value: 'created_at', align: 'center' },
            ],
            rowsRateStore: [],

        };
    },


    methods: {
        getData(){
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios.get("http://"+this.$store.state.ip+"api/report/rate_store/"+ this.$store.state.id_store)
            .then(res => {
                this.rowsRateStore = res.data.data
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
