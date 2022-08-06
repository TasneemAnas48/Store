<template>
    <div class="body-page add-code1 add-code add-code3" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header"  v-if="this.route == 'edit-code'">
                    <div class="d-flex justify-content-between align-items-center add">
                        اعادة تفعيل كود خصم
                        <router-link to="/view-discount">
                            <b-button class="button-view">عرض الخصومات</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-header" v-else-if="this.route == 'add-code'">
                    <div class="d-flex justify-content-between align-items-center add">
                        إنشاء كود خصم
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
                                    <div class="form-row"  v-if="this.route == 'add-code'">
                                        <div class="my-input col-lg-12 row">
                                            <label for="name" class="col-lg-4 col-md-3 label-input">الكود</label>
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

                                    <div class="form-row" v-if="this.route == 'add-code'">
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
                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="date" class="col-lg-4 col-md-3 label-input" >مدة التفعيل
                                            </label>
                                            <v-dialog ref="dialog" v-model="modal" :return-value.sync="dates" persistent
                                                width="290px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field v-model="dateRangeText" readonly class="col-lg-7 col-md-7 col-sm-11 col-11 input-field date-input"
                                                        prepend-icon="mdi-calendar" v-bind="attrs" v-on="on">
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

                                    <div class="form-row" v-if="this.route == 'add-code'">
                                        <div class="my-input col-lg-12 row">
                                            <label for="condition" class="col-lg-4 col-md-4 label-input" style="margin-top: -7px">الحد الادنى من
                                                الشروط
                                            </label>
                                            <v-radio-group v-model="condition" column>
                                            <!-- 2 -->
                                                <v-radio label="الحد الادنى لمبلغ الشراء" value="2"></v-radio> 
                                                <div v-if="condition == '2'">
                                                    <b-form-input type="number" v-model="amount"
                                                        class="col-lg-7 col-md-7 col-sm-11 col-11 input-field"
                                                        name="amount"  style="min-width: 310px !important;">
                                                    </b-form-input>
                                                    <v-tooltip color="error" right v-if="v$.amount.$error">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                                mdi-exclamation
                                                            </v-icon>
                                                        </template>
                                                        <span>{{ v$.amount.$errors[0].$message }}</span>
                                                    </v-tooltip>
                                                </div>
                                            <!-- 1 -->
                                                <v-radio label="الحد الادنى لعدد العناصر" value="1"
                                                    style="margin-top:15px"></v-radio> 
                                                <div v-if="condition == '1'">
                                                    <b-form-input type="number" v-model="count"
                                                        class="col-lg-7 col-md-7 col-sm-11 col-11 input-field"
                                                        name="count" style="min-width: 310px !important;">
                                                    </b-form-input>
                                                    <v-tooltip color="error" right v-if="v$.count.$error">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                                mdi-exclamation
                                                            </v-icon>
                                                        </template>
                                                        <span>{{ v$.count.$errors[0].$message }}</span>
                                                    </v-tooltip>
                                                </div>
                                            </v-radio-group>
                                        </div>
                                    </div>

                                    <div class="float-left row-bottom" style="margin-top: 70px" v-if="this.route == 'add-code'">
                                        <b-button type="button" class=" button-add" v-on:click="submitForm">
                                            إنشاء
                                        </b-button>
                                    </div>
                                    <div class="float-left row-bottom" style="margin-top: 70px" v-else-if="this.route == 'edit-code'">
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
import { required, minValue, maxValue, maxLength, helpers, requiredIf } from '@vuelidate/validators'

export default {
    name: "AddCode",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            code:[
                {
                    type:'',
                    name:'',
                    value:'',
                    condition:'',
                    condition_value:'',
                    startDate:'',
                    endDate:'',
                },
            ],
            condition:'2',
            amount:'',
            count:'',
            name:'',
            value:'',
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
                    maxLength: helpers.withMessage('أقصى طول مسموح به هو 10', maxLength(10)), },
            value: { required: helpers.withMessage('هذا الحقل مطلوب', required),
                    minValue: helpers.withMessage('يجب ادخال قيمة اكبر من 0', minValue(1)),
                    maxValue: helpers.withMessage('يجب ادخال نسبة مئوية من 100', maxValue(100)),},
            amount: {
                requiredIf: helpers.withMessage('هذا الحقل مطلوب', requiredIf(this.condition == '2')),
                minValue: helpers.withMessage('يجب ادخال رقم موجب', minValue(0)),
            },
            count: {
                requiredIf: helpers.withMessage('هذا الحقل مطلوب', requiredIf(this.condition == '1')),
                minValue: helpers.withMessage('يجب ادخال رقم موجب', minValue(0)),
            },
        }
    },
    computed: {
        dateRangeText () {
            return this.dates.join(' ~ ')
        },
    },
    methods: {
        initData(){
            this.code.type = 2;
            this.code.name = this.name
            this.code.value = this.value
            if (this.condition == "2"){
                this.code.condition = "2"
                this.code.condition_value = this.amount
            } 
            else if (this.condition == "1"){
                this.code.condition = "1"
                this.code.condition_value = this.count
            }
            if (this.dates[0] > this.dates[1]){
                this.code.startDate = this.dates[1]
                this.code.endDate = this.dates[0]
            }
            else{
                this.code.startDate = this.dates[0]
                this.code.endDate = this.dates[1]
            }
            if (this.code.endDate == null)
                this.code.endDate = this.dates[0]
        },
        addData(){
            this.$store.state.id_store = localStorage.getItem("id_store")
            console.log(this.code)
            this.axios
                .post("http://" + this.$store.state.ip + "api/discountproduct/create/"+ this.$store.state.id_store + "/2",
                    {
                        type: this.code.type,
                        discount_code: this.code.name,
                        value: this.code.value,
                        start_date: this.code.startDate,
                        end_date: this.code.endDate,
                        condition: this.code.condition,
                        condition_value: this.code.condition_value,
                    }).then((res) => {
                        console.log(res)
                        if (res.statusText == "OK")
                            this.$router.replace({ name: 'view-discount' })
                })
        },
        editData(){
            this.$store.state.id_store = localStorage.getItem("id_store")
            // console.log(this.code)
            this.axios
                .post("http://" + this.$store.state.ip + "api/discountproduct/update",
                    {
                        // store_id : this.$store.state.id_store,
                        // id: this.id,
                        discounts_id: this.discounts_id,
                        // type: this.code.type,
                        start_date: this.code.startDate,
                        end_date: this.code.endDate,
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
            if (this.route == "add-code"){
                if (!this.v$.$error){
                    this.initData()
                    this.addData()
                } 
            }
            else if (this.route == "edit-code"){
                    this.initData()
                    this.editData()
                }
        },
    },
    mounted(){
        this.route = this.$route.name
        if (this.$route.name == "edit-code"){
            this.discounts_id = this.$route.params.id
            this.axios.get("http://"+this.$store.state.ip+"api/discountproduct/show/" + this.discounts_id + "/2")
            .then(res => {
                console.log(res.data)
                this.id = res.data.id
                this.name = res.data.discount_code
                this.value = res.data.value
                this.condition = res.data.condition
                if (this.condition == "1")
                    this.count = res.data.condition_value
                else if (this.condition == "2")
                    this.amount = res.data.condition_value
                this.dates[0] = res.data.start_date
                this.dates[1] = res.data.end_date
            })
        }
    },
};
</script>


<style lang="scss">
@import '@/assets/css/Discount/AddCode.css';
@import '@/assets/css/Discount/AddCode1.css';
@import '@/assets/css/Discount/AddCode3.css';
</style>

