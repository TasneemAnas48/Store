<template>
    <div class="body-page view" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        <div class="p-2 bd-highlight">
                            الطلبات المقبولة
                        </div>
                        <div class="p-2 bd-highlight">
                            <router-link to="/receive-order" style="margin-left: 20px">
                                <b-button class="button-view">الطلبات المعلقة</b-button>
                            </router-link>

                            <router-link to="/finish-order">
                                <b-button class="button-view">الطلبات المسلمة</b-button>
                            </router-link>
                        </div>
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
                            :fixed-header="true" :page.sync="page" @page-count="pageCount = $event"
                            :hide-default-footer="true"  v-if="status == 'OK'">

                            <template v-slot:top>
                                <v-dialog v-model="dialogAccept" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title class="justify-content-center" style="padding-top: 30px">هل انت
                                            متأكد من انك قمت بتسليم الطلب للزبون؟
                                        </v-card-title>
                                        <v-card-actions style="padding-bottom: 30px">
                                            <v-spacer></v-spacer>
                                            <v-btn color="var(--gray-medium)" text @click="closeAccept">لا تراجع
                                            </v-btn>
                                            <v-btn color="green" text @click="acceptItemConfirm">نعم تأكيد
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
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
                            <template v-slot:[`item.managment`]="{ item }">
                                <font-awesome-icon icon="fa fa-check" class=" fa-check" @click="acceptItem(item)" />
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
    name: "AcceptOrder",
    data() {
        return {
            page: 1,
            pageCount: 0,
            search: '',
            dialogShow: false,
            dialogAccept: false,
            headers: [
                { text: 'رقم الزبون', value: 'id', align: 'center'},
                { text: 'اسم الزبون', value: 'customer_name', align: 'center' },
                { text: 'تاريخ الطلب', value: 'created_at', align: 'center' },
                { text: 'المبلغ', value: 'delivery_price', align: 'center' },
                { text: 'التاريخ المتوقع للتسليم', value: 'delivery_time', align: 'center'},
                { text: 'تفاصيل الطلب', value: 'details', sortable: false, align: 'center'},
                { text: 'تسليم الطلب', value: 'managment', sortable: false, align: 'center'},

            ],
            rows: [],
            show: '',
            checkedIndex: -1,
            accept: '',
            detail:'',
            status:'',
        };
    },
    components: {
    },
    methods: {
        getImage(item){
            return "http://"+this.$store.state.ip+"uploads/product/"+item.image
        },
        acceptItem (item) {
            this.checkedIndex = this.rows.indexOf(item)
            this.accept = item
            this.dialogAccept = true
        },
        acceptItemConfirm () {
            this.rows.splice(this.checkedIndex, 1)
            this.sendIdAccept()
            this.closeAccept()
        },
        closeAccept () {
            this.dialogAccept = false
        },
        sendIdAccept() {
            this.axios.post("http://"+this.$store.state.ip+"api/myorder/deliver_order/"+ this.accept.id)
                .then((res) => {
                    console.log(res)
                    console.log(this.accept.id)
                });
        },
        getData(){
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios.get("http://"+this.$store.state.ip+"api/myorder/all_my_order/"+ this.$store.state.id_store+"/2")
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
                console.log(res.data.data)
            });
        }
    },
    mounted() {
        this.getData()
    },
    
};
</script>

<style lang="scss">
</style>
