<template>
    <div class="body-page view dashboard" id="body-page">
        <!-- table -->

        <div class="container" v-if="report == 'sales'">
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


    </div>
</template>


<script>
export default {
    name: "ReportSales",
    data() {
        return {
            report:'sales',

            //sales-table
            headersSales: [
                {
                    text: 'رقم المنتج',
                    align: 'center',
                    value: 'id',
                },
                { text: 'اسم المنتج', value: 'username', align: 'center' },
                { text: 'سعر المنتج', value: 'username', align: 'center' },
                { text: 'عدد مرات البيع', value: 'name', align: 'center' },
            ],
            rowsSales: [],

        };
    },


    methods: {

        getData(){
            this.axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.rowsSales = res.data;
                console.log(res.data);
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
