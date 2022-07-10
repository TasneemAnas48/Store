<template>
    <div class="body-page view" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        الزبائن

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
                            :page.sync="page" @page-count="pageCount = $event" :hide-default-footer="true">
                            <template v-slot:items="props">
                                <td>{{ props.item.id }}</td>
                                <td>{{ props.item.title }}</td>
                                <td>{{ props.item.userId }}</td>
                                <td>{{ props.item.userId }}</td>
                            </template>

                            <template v-slot:[`item.chat`]="{ item }">
                                <font-awesome-icon icon="fa fa-comments" class="fa-comments" @click="getId(item)"/>
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
    name: "ViewCustomer",
    data() {
        return {
            page: 1,
            pageCount: 0,
            search: '',
            headers: [
                {
                    text: 'الاسم',
                    align: 'start',
                    value: 'id',
                },
                { text: 'تاريخ الانضمام', value: 'title' },
                { text: 'عدد الطلبات', value: 'userId' },
                { text: 'المبلغ', value: 'userId' },
                { text: 'مراسلة', value: 'chat' , sortable: false,},
            ],
            rows: [],
        };
    },
    components: {
    },
    methods:{
        getData(){
            this.axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.rows = res.data;
                console.log(res.data);
            });
        },
        getId(item){
            console.log(item.id)
        }
    },
    mounted() {
        this.getData()
    },
    
};
</script>

<style lang="scss">
@import '@/assets/css/Customer/ViewCustomer.css';
</style>
