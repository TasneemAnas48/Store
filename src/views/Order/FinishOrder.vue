<template>
    <div class="body-page view" id="body-page">
        <div class="body" >
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        <div class="p-2 bd-highlight">
                            الطلبات المسلمة
                        </div>
                        <div class="p-2 bd-highlight">
                            <router-link to="/receive-order" style="margin-left: 20px">
                                <b-button class="button-view">الطلبات المعلقة</b-button>
                            </router-link>

                            <router-link to="/accept-order">
                                <b-button class="button-view">الطلبات المقبولة</b-button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <v-app >
                        <v-card-title class="search">
                            <b-form-input v-model="search" class="col-lg-3 input-field" label="Search"
                                placeholder="ابحث" append-icon="mdi-magnify" single-line hide-details>
                            </b-form-input>
                        </v-card-title>
                        <v-data-table class="col-lg-12 my-table" :headers="headers" :items="rows" :search="search"
                            :fixed-header="true" :page.sync="page" @page-count="pageCount = $event"
                            :hide-default-footer="true" v-if="status == 'OK'">
                            <template v-slot:items="props">
                                <td>{{ props.item.id }}</td>
                                <td>{{ props.item.customer_name }}</td>
                                <td>{{ props.item.created_at }}</td>
                                <td>{{ props.item.delivery_time }}</td>
                            </template>

                            <template v-slot:top>
                                <v-dialog v-model="dialogShow" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title style="color: var(--main-color)">تفاصيل الطلب</v-card-title>
                                        <v-divider style="margin-top:10px"></v-divider>
                                        <v-card-actions v-if="detail.length == 0" style="justify-content: center;">
                                            <v-progress-circular :size="50" :width="7" color="var(--main-color)"
                                            indeterminate style="margin-top: 100px; margin-bottom: 150px;">
                                            </v-progress-circular>
                                        </v-card-actions>
                                        <v-card-actions v-else style="padding-bottom: 30px"  v-for="(d, i) in detail" :key="i">
                                            <div class="row" style="justify-content: center;align-items: center;">
                                                <div class="col-lg-6" style="margin-right:30px">
                                                    <div class="product-name">{{d.product}}</div>
                                                    <div class="details">
                                                        <div class="row" style="margin-top: 0px">
                                                            <p class="t"> تغليف كهدية</p>
                                                            <p v-if="d.gift == '0'" >غير مطلوب</p>
                                                            <p v-else-if="d.gift == '1'" >مطلوب</p>
                                                        </div>
                                                        <div class="row" style="margin-top: 0px" v-for="(o, index) in d.option" :key="index">
                                                            <p class="t">{{o[1]}}</p>
                                                            <p>{{o[0]}}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <img :src="getImage(d)"
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
                                <font-awesome-icon icon="fa fa-file-text" class="fa-file-text"
                                        @click="showInvoice(item)" />
                            </template>
                        </v-data-table>
                        <div v-else>
                            <v-progress-circular :size="70" :width="7" color="var(--main-color)"
                            indeterminate style="margin-top: 100px; margin-bottom: 150px;">
                            </v-progress-circular>
                        </div>
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
                { text: 'رقم الطلب', value: 'id', align: 'center'},
                { text: 'اسم الزبون', value: 'customer_name', align: 'center' },
                { text: 'تاريخ الطلب', value: 'created_at', align: 'center' },
                { text: 'تاريخ التسليم', value: 'delivery_time', align: 'center'},
                { text: 'تفاصيل الطلب', value: 'details', sortable: false, align: 'center'},
                { text: 'الفاتورة', value: 'invoice', sortable: false, align: 'center'},
            ],
            rows: [],
            show: '',
            status:'',
            detail:'',
        };
    },
    components: {
    },
    methods: {
        getImage(item){
            return "http://"+this.$store.state.ip+"uploads/product/"+item.image
        },
        getData(){
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios.get("http://"+this.$store.state.ip+"api/myorder/all_my_order/"+ this.$store.state.id_store+"/3")
            .then(res => {
                this.rows = res.data
                this.status = res.statusText
                console.log(res.data)
            });
        },
        showDetailItem(item){
            this.dialogShow = true;
            this.show = item
            this.axios.get("http://"+this.$store.state.ip+"api/myorder/order_product/"+ this.show.id)
            .then(res => {
                this.detail = res.data.data
                console.log(res)
            });
        },
        showInvoice(item){
            console.log(item.id)
            this.$router.replace({ name: 'invoice', params: {id: item.id} })
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
