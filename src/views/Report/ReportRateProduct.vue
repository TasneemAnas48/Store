<template>
    <div class="body-page view dashboard" id="body-page">
        <!-- table -->

        <div class="container">
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center add">
                                تقييمات المنتجات
                            </div>
                        </div>
                        <div class="card-body" style="padding: 0px">
                            <v-app>
                                <v-data-table ref="myTable" class="col-lg-12 my-table" :headers="headersRateProduct"
                                    :items="rowsRateProduct" :hide-default-footer="true">
                                    <template v-slot:items="props">
                                        <td>{{ props.item.name }}</td>
                                        <td>{{ props.item.$product }}</td>
                                        <td>{{ props.item.notes }}</td>
                                        <td>{{ props.item.created_at }}</td>
                                    </template>
                                    <template v-slot:[`item.value`]="{ item }">
                                        <td v-if="item.value ==  0">
                                            <v-icon color="red" >mdi-emoticon-sad-outline</v-icon>
                                        </td>
                                        <td v-else-if="item.value == 1">
                                            <v-icon color="yellow" >mdi-emoticon-neutral-outline</v-icon>
                                        </td>
                                        <td v-else-if="item.value == 2">
                                            <v-icon color="green" >mdi-emoticon-excited-outline</v-icon>
                                        </td>
                                        <td v-else-if="item.value == 3">لايوجد</td>
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
           //rate-product-table
            headersRateProduct: [
                { text: 'اسم الزبون', value: 'name', align: 'center'},
                { text: 'المنتج', value: '$product', align: 'center'},
                { text: 'التقييم', value: 'value', align: 'center' },
                { text: 'ملاحظات', value: 'notes', align: 'center' },
                { text: 'التاريخ', value: 'created_at', align: 'center' },
            ],
            rowsRateProduct: [],
        };
    },

    methods: {
        getData(){
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios.get("http://"+this.$store.state.ip+"api/report/rate_product/"+ this.$store.state.id_store)
            .then(res => {
                this.rowsRateProduct = res.data.data
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
