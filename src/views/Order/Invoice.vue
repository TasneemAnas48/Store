<template>
    <div class="body-page " id="body-page">
        <div class="body invoice">
            <div class="card-header card-invoice d-flex justify-content-between bd-highlight mb-3" style="margin-bottom:0px !important">
                    <div class="p-2 bd-highlight" style="font-size: 20px; color: var(--main-color)">
                        الفاتورة رقم {{invoice_id}}
                    </div>
                    <div class="p-2 bd-highlight">
                        <!-- <router-link to="/print-invoice"> -->
                            <b-button class="button-view" @click="print">طباعة</b-button>
                        <!-- </router-link> -->
                    </div>
            </div>
            <div class="line2"></div>
            <div class="card">
                <div class="card-body">
                    <div class="header">
                        <div class="row">
                            <h1><span class="color">اسم المشروع</span></h1>
                        </div>
                        <div class="row">
                            <table class="table table-header">
                                <tbody>
                                    <tr>
                                        <td class="head">رقم الفاتورة</td>
                                        <td>{{invoice_id}}</td>
                                    </tr>
                                    <tr>
                                        <td class="head">تاريخ الفاتورة</td>
                                        <td>{{date}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="middle">
                            <div class="table-responsive">
                                <table class=" table middle-table">
                                    <tbody class="from-body">
                                        <tr>
                                            <td colspan="2" class="text-right color">
                                                <div class="from">
                                                    <h2>البائع</h2>
                                                </div>
                                            </td>
                                            
                                            <td style="max-width: 175px;"></td>
                                            <td colspan="2" class="text-right color">
                                                <div>
                                                    <h2>المشتري</h2>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-right ">اسم المتجر</td>
                                            <td class="text-right">{{store_name}}</td>
                                            <td style="min-width: 175px;"></td>
                                            <td class="text-right">اسم الزبون</td>
                                            <td class="text-right">{{customer_name}}</td>
                                        </tr>
                                        <tr>
                                            <td class="text-right">ايميل المتجر</td>
                                            <td class="text-right">{{store_email}}</td>
                                            <td style="min-width: 175px;"></td>
                                            
                                            <td class="text-right">ايميل الزبون</td>
                                            <td class="text-right">{{customer_email}}</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        
                    </div>

                    <div class="invoice-details">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>اسم المنتج</th>
                                    <th>السعر</th>
                                    <th>الخصم %</th>
                                    <th>الاجمالي</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index) in rows" :key="index" >
                                    <td>{{row.product_name}}</td>
                                    <td>{{row.selling_price}}</td>
                                    <td>{{row.discount_products}}</td>
                                    <td>{{row.selling_price - ((row.selling_price * row.discount_products) / 100)}}</td>
                                </tr>

                            </tbody>
                            <tfoot>
                                <tr class="change-height">
                                    <td colspan="2" rowspan="1"></td>
                                    <td><b>المجموع</b></td>
                                    <td>{{total}}</td>
                                </tr>
                                
                                <tr class="change-height">
                                    <td colspan="2" rowspan="1"></td>
                                    <td><b>خصم الفاتورة %</b></td>
                                    <td>{{discount_codes}}</td>
                                </tr>
                                <tr class="change-height">
                                    <td colspan="2" rowspan="1"></td>
                                    <td><b>الصافي</b></td>
                                    <td>{{total - ((total * discount_codes) / 100 )}}</td>
                                </tr>
                                <tr class="change-height">
                                    <td colspan="2" rowspan="1"></td>
                                    <td><b>المدفوع</b></td>
                                    <td>{{total - ((total * discount_codes) / 100 )}}</td>
                                </tr>

                            </tfoot>
                        </table>
                    </div>
                    <div class="line"></div>
                        <div class="footer" >
                            <p class="comment">ملاحظات</p>
                            <p class="thank">شكرا لك</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Invoice",
    data() {
        return {
            id:'',
            invoice_id:'',
            date:'',
            store_name:'',
            store_email:'',
            customer_name:'',
            customer_email:'',
            discount_codes:'',
            rows:[],
            total:'',
        };
    },
    components: {
    },
    methods: {
        getData(){
            this.$store.state.id_manager = localStorage.getItem("id_manager")
            this.axios.get("http://"+this.$store.state.ip+"api/myorder/bill/" + this.id + "/" + this.$store.state.id_manager)
            .then(res => {
                // this.rows = res.data
                this.invoice_id = res.data.data[0].order_id
                this.date = res.data.data[0].delivery_time
                this.store_name = res.data.data[0].store_name
                this.store_email = res.data.email
                this.customer_name = res.data.data[0].customer_name
                this.customer_email = res.data.data[0].customer_email
                this.discount_codes = res.data.data[0].discount_codes
                this.rows = res.data.data
                console.log(res.data)
                
            }).finally(() => {
                for (let i = 0; i < this.rows.length; i++)
                    this.total = this.total + this.rows[i].selling_price -((this.rows[i].selling_price * this.rows[i].discount_products) / 100)
                console.log(this.total)
            })
        },
        print(){
            this.$router.replace({ name: 'print-invoice', params: {id: this.id} })
        }
    },
    mounted() {
        this.id = this.$route.params.id

        this.getData()
    },
    
};
</script>

<style lang="scss">
@import '@/assets/css/Order/Invoice.css';
</style>
