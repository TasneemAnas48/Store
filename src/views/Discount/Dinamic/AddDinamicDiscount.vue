<template>
    <div class="body-page add-dinamic1 add-dinamic add-dinamic2" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header"  v-if="this.route == 'edit-dinamic'">
                    <div class="d-flex justify-content-between align-items-center add">
                        اعادة تفعيل خصم منتج
                        <router-link to="/view-discount">
                            <b-button class="button-view">عرض الخصومات</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-header" v-else-if="this.route == 'add-dinamic'">
                    <div class="d-flex justify-content-between align-items-center add">
                        إنشاء خصم منتج
                        <router-link to="/view-discount">
                            <b-button class="button-view">عرض الخصومات</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <v-app>
                                <form class="form-input">
                                    <div class="form-row" v-if="this.route == 'add-dinamic'">
                                        <div class="my-input col-lg-12 row">
                                            <label for="name" class="col-lg-4 col-md-3 label-input">العنوان</label>
                                            <b-form-input v-model="name" class="col-lg-7 col-md-7 col-sm-11 col-11 input-field" name="name">
                                            </b-form-input>
                                            <v-tooltip color="error" right v-if="v$.name.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.name.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>

                                    <div class="form-row" v-if="this.route == 'add-dinamic'">
                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="value" class="col-lg-4 col-md-3  label-input">نسبة الخصم</label>
                                            <b-form-input type="number" v-model="value" class="col-lg-7 col-md-7 col-sm-11 col-11 input-field" name="value">
                                            </b-form-input>
                                            <v-tooltip color="error" right v-if="v$.value.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.value.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>

                                    </div>

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row" >
                                            <label for="date" class="col-lg-4 col-md-4 label-input" style="margin-top: 10px">مدة التفعيل
                                            </label>
                                            <v-dialog ref="dialog" v-model="modal" :return-value.sync="dates" persistent
                                                width="290px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field  v-model="dateRangeText" readonly class="col-lg-9 col-md-9 col-sm-11 col-11 input-field date-input"
                                                        prepend-icon="mdi-calendar" v-bind="attrs" v-on="on" style="min-width: 310px !important;">
                                                    </v-text-field>
                                                </template>
                                                <v-date-picker v-model="dates" range>
                                                    <v-spacer></v-spacer>
                                                    <v-btn text color="primary" @click="modal = false">
                                                        الغاء
                                                    </v-btn>
                                                    <v-btn text color="primary" @click="$refs.dialog.save(dates)">
                                                        تأكيد
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-dialog>
                                        </div>
                                    </div>

                                    <div class="form-row" v-if="this.route == 'add-dinamic'">
                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="applied-to" class="col-lg-4  col-md-4 label-input">يطبق
                                                على</label>
                                            <v-radio-group v-model="appliedTo" column>
                                                <v-radio label="جميع المنتجات" value="all"></v-radio>
                                                <v-radio label="منتجات محددة" value="p"></v-radio>
                                                <div v-if="appliedTo == 'p'">
                                                    <v-select multiple  v-model="selectProduct" 
                                                        class="col-lg-9 col-md-9 col-sm-11 col-11 input-field optinal"
                                                        :items="products"  item-value="product_id" item-text="product_name" color=var(--main-color) :label="selectProduct" dense chips
                                                        solo style="margin-bottom: 10px;min-width: 310px !important;">
                                                        <template v-slot:selection="{ item, index }">
                                                            <v-chip v-if="index === 0">
                                                            <span>{{ item.product_name }}</span>
                                                            </v-chip>
                                                            <span
                                                            v-if="index === 1"
                                                            class="grey--text text-caption"
                                                            >
                                                            (+{{ selectProduct.length - 1 }} others)
                                                            </span>
                                                        </template>
                                                        </v-select>
                                                    <v-tooltip color="error" right v-if="v$.selectProduct.$error">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                                mdi-exclamation
                                                            </v-icon>
                                                        </template>
                                                        <span>{{ v$.selectProduct.$errors[0].$message }}</span>
                                                    </v-tooltip>
                                                </div>
                                                <v-radio label="مجموعات محددة" value="c"></v-radio>

                                                <div v-if="appliedTo == 'c'">
                                                    <v-select multiple  v-model="selectGroup" style="min-width: 310px !important;"
                                                        class="col-lg-9 col-md-9 col-sm-11 col-11 input-field optinal"
                                                        :items="groups" item-value="id" item-text="title" color=var(--main-color) :label="selectGroup" dense chips
                                                        solo >
                                                        <template v-slot:selection="{ item, index }">
                                                            <v-chip v-if="index === 0">
                                                            <span>{{ item.title }}</span>
                                                            </v-chip>
                                                            <span
                                                            v-if="index === 1"
                                                            class="grey--text text-caption"
                                                            >
                                                            (+{{ selectGroup.length - 1 }} others)
                                                            </span>
                                                        </template>
                                                        </v-select>
                                                    <v-tooltip color="error" right v-if="v$.selectGroup.$error">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                                mdi-exclamation
                                                            </v-icon>
                                                        </template>
                                                        <span>{{ v$.selectGroup.$errors[0].$message }}</span>
                                                    </v-tooltip>
                                                </div>

                                            </v-radio-group>
                                        </div>
                                    </div>
                                    
                                    <div class="float-left row-bottom" style="margin-top: 90px" v-if="this.route == 'add-dinamic'">
                                        <b-button type="button" class=" button-add" v-on:click="submitForm">
                                            إنشاء
                                        </b-button>
                                    </div>
                                    <div class="float-left row-bottom" style="margin-top: 30px" v-else-if="this.route == 'edit-dinamic'">
                                        <b-button type="button" class=" button-add" v-on:click="submitForm">
                                            تفعيل
                                        </b-button>
                                    </div>
                                </form>
                            </v-app>
                        </div>
                        <div class="col-lg-6 d-none d-xl-block d-lg-block">
                            <img src="../../../assets/img/add_discount.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minValue, maxValue, maxLength, helpers, requiredIf  } from '@vuelidate/validators'

export default {
    name: "AddDinamic",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            dinamic:[
                {
                    type:'',
                    name:'',
                    value:'',
                    appliedTo:'',
                    product:[],
                    group:[],
                    startDate:'',
                    endDate:'',
                }
            ],
            name:'',
            value:'',
            appliedTo: 'all',
            groups: [],
            products: [],
            selectGroup: [],
            selectProduct: [],
            dates: [(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),],
            modal: false,
            id: '',
            route:'',
            discounts_id:'',
        };
    },
    validations() {
        return {
            name: { required: helpers.withMessage('هذا الحقل مطلوب', required), 
                    maxLength: helpers.withMessage('أقصى طول مسموح به هو 20', maxLength(20)), },
            value: {
                required: helpers.withMessage('هذا الحقل مطلوب', required),
                minValue: helpers.withMessage('يجب ادخال قيمة اكبر من 0', minValue(1)),
                maxValue: helpers.withMessage('يجب ادخال نسبة مئوية من 100', maxValue(100)),
            },
            selectProduct: {
                requiredIf: helpers.withMessage('هذا الحقل مطلوب', requiredIf(this.appliedTo == 'p')),
            },
            selectGroup: {
                requiredIf: helpers.withMessage('هذا الحقل مطلوب', requiredIf(this.appliedTo == 'c')),
            },
        }
    },
    watch: {
        appliedTo: function () {
            if (this.appliedTo == 'c') {
                this.getGroup()
            }
            if (this.appliedTo == 'p') {
                this.getProduct()
            }
        },
    },
    computed: {
        dateRangeText () {
            return this.dates.join(' ~ ')
        },
    },
    methods: {
        initData(){
            // console.log("init")
            this.dinamic.type = 1;
            this.dinamic.name = this.name
            this.dinamic.value = this.value
            this.dinamic.appliedTo = this.appliedTo
            // console.log(this.selectProduct)
            if (this.dinamic.appliedTo == 'c'){
                this.dinamic.group = this.selectGroup
                this.selectProduct = []
            }
            else if (this.dinamic.appliedTo == 'p'){
                this.dinamic.product = this.selectProduct
                this.selectGroup = []
            }
            if (this.dates[0] > this.dates[1]){
                this.dinamic.startDate = this.dates[1]
                this.dinamic.endDate = this.dates[0]
            }
            else{
                this.dinamic.startDate = this.dates[0]
                this.dinamic.endDate = this.dates[1]
            }
            if (this.dinamic.endDate == null)
                this.dinamic.endDate = this.dates[0]
        },
        addData(){
            console.log(this.dinamic)
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios
                .post("http://" + this.$store.state.ip + "api/discountproduct/create/"+ this.$store.state.id_store + "/2",
                    {
                        type: this.dinamic.type,
                        title: this.dinamic.name,
                        value: this.dinamic.value,
                        start_date: this.dinamic.startDate,
                        end_date: this.dinamic.endDate,
                        apply_to: this.dinamic.appliedTo,
                        product: this.dinamic.product,
                        groups: this.dinamic.group,
                    }).then((res) => {
                        // console.log(this.dinamic)
                        // console.log(res)
                        if (res.statusText == "OK")
                            this.$router.replace({ name: 'view-discount' })
                });
        },
        editData(){
            console.log("eeeeeeeeeeeeeee")
            // console.log(this.dinamic)
            // console.log(this.id)
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios
                .post("http://" + this.$store.state.ip + "api/discountproduct/update",
                    {
                        // store_id : this.$store.state.id_store,
                        // id: this.id,
                        discounts_id: this.discounts_id,
                        // type: this.dinamic.type,
                        // title: this.dinamic.name,
                        // value: this.dinamic.value,
                        start_date: this.dinamic.startDate,
                        end_date: this.dinamic.endDate,
                        // apply_to: this.dinamic.appliedTo,
                        // product: this.dinamic.product,
                        // groups: this.dinamic.group,
                        
                    }).then((res) => {
                        console.log(this.discounts_id)
                        console.log(this.dinamic.startDate)
                        console.log(this.dinamic.endDate)
                        console.log(res)
                        if (res.statusText == "OK")
                            this.$router.replace({ name: 'view-discount' })
                })
        },
        submitForm() {
            this.v$.$validate();
            if (this.route == "add-dinamic"){
                if (!this.v$.$error){
                    this.initData()
                    this.addData()
                } 
            }
            else if (this.route == "edit-dinamic"){
                    // console.log("Rrrrrrrrrrr")
                    this.initData()
                    this.editData()
                }
        },
        getGroup() {
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios.get("http://"+this.$store.state.ip+"api/collection/collectionNane/"+ this.$store.state.id_store)
            .then(res => {
                this.groups = res.data
                // console.log(res.data)
            })
        },
        getProduct() {
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios.get("http://"+this.$store.state.ip+"api/product/index/"+ this.$store.state.id_store)
            .then(res => {
                this.products = res.data
                // console.log(res.data)
            })
        },
    },
    mounted(){
        this.route = this.$route.name 
        if (this.$route.name == "edit-dinamic"){
            this.discounts_id = this.$route.params.id
            this.axios.get("http://"+this.$store.state.ip+"api/discountproduct/show/" + this.discounts_id + "/1")
            .then(res => {
                console.log(res.data)
                this.id = res.data.id
                this.name = res.data.title
                this.value = res.data.value
                this.appliedTo = res.data.apply_to
                if (this.appliedTo == 'p')
                    this.selectProduct = res.data.products
                else if (this.appliedTo == 'c')
                    this.selectGroup = res.data.products
                this.dates[0] = res.data.start_date
                this.dates[1] = res.data.end_date
                // console.log(this.selectGroup)
                // console.log(this.selectProduct)
            })
        }
    },
};
</script>


<style lang="scss">
@import '@/assets/css/Discount/AddDinamic.css';
@import '@/assets/css/Discount/AddDinamic1.css';
@import '@/assets/css/Discount/AddDinamic2.css';
</style>

