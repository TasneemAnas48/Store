<template>
    <div class="body-page add-code add-code3" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        إنشاء كود خصم
                        <router-link to="/view-discount">
                            <b-button class="button-view">عرض الخصومات</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-body">
                    <div class="line">
                        <div class="timeline">
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event-active">
                                <div class="detail"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <v-app>
                                <form class="form-input">
                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="condition" class="col-lg-4 col-md-4 label-input" style="margin-top: -7px">الحد الادنى من
                                                الشروط
                                            </label>
                                            <v-radio-group v-model="condition" column>
                                                <v-radio label="الحد الادنى لمبلغ الشراء" value="amount"></v-radio>
                                                <div v-if="condition == 'amount'">
                                                    <b-form-input type="number" v-model="amount"
                                                        class="col-lg-9 col-md-9 col-sm-11 col-11 input-field optinal"
                                                        name="amount">
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

                                                <v-radio label="الحد الادنى لعدد العناصر" value="count"
                                                    style="margin-top:15px"></v-radio>
                                                <div v-if="condition == 'count'">
                                                    <b-form-input type="number" v-model="count"
                                                        class="col-lg-9 col-md-9 col-sm-11 col-11 input-field optinal"
                                                        name="count">
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

                                    <div class="form-row"></div>

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="date" class="col-lg-4 col-md-4 label-input" style="margin-top: 10px">مدة التفعيل
                                            </label>
                                            <v-dialog ref="dialog" v-model="modal" :return-value.sync="dates" persistent
                                                width="290px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field v-model="dateRangeText" readonly class="col-lg-9 col-md-9 col-sm-11 col-11 input-field date-input"
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

                                    <div class="float-left row-bottom">
                                        <!-- <router-link to="/add-product2"> -->
                                        <b-button type="button" class=" button-add" v-on:click="submitForm">
                                            إنشاء
                                        </b-button>
                                        <!-- </router-link> -->
                                    </div>
                                </form>
                            </v-app>
                        </div>
                        <div class="col-lg-5 d-none d-xl-block d-lg-block">
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
import { minValue, helpers, requiredIf } from '@vuelidate/validators'

export default {
    name: "AddCode2",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            condition: 'amount',
            amount:'',
            count:'',
            dates: [(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),],
            modal: false,
        };
    },
    validations() {
        return {
            amount: {
                requiredIf: helpers.withMessage('هذا الحقل مطلوب', requiredIf(this.condition == 'amount')),
                minValue: helpers.withMessage('يجب ادخال رقم موجب', minValue(0)),
            },
            count: {
                requiredIf: helpers.withMessage('هذا الحقل مطلوب', requiredIf(this.condition == 'count')),
                minValue: helpers.withMessage('يجب ادخال رقم موجب', minValue(0)),
            },
        }
    },
    components: {
    },
    computed: {
        code() {
            return this.$store.state.code;
        },
        dateRangeText () {
            return this.dates.join(' ~ ')
        },
    },
    methods: {
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.$store.state.code.type = 0;
                this.$store.state.code.condition = this.condition;
                if (this.$store.state.code.condition == 'amount')
                    this.$store.state.code.condition_value = this.amount
                else if (this.$store.state.code.condition == 'count')
                    this.$store.state.code.condition_value = this.count
                console.log(this.$store.state.code.condition)
                console.log(this.$store.state.code.condition_value)
                
                if (this.dates[0] > this.dates[1]){
                    this.$store.state.code.startDate = this.dates[1]
                    this.$store.state.code.endDate = this.dates[0]
                }
                else{
                    this.$store.state.code.startDate = this.dates[0]
                    this.$store.state.code.endDate = this.dates[1]
                }

                console.log(this.$store.state.code.startDate)
                console.log(this.$store.state.code.endDate)
            }
            console.log("--------------------------------------------------")
            this.axios
                .post("https://jsonplaceholder.typicode.com/posts", {
                    type: this.$store.state.code.type,
                    title: this.$store.state.code.name,
                    value: this.$store.state.code.value,
                    apply_to: this.$store.state.code.appliedTo,
                    product: this.$store.state.code.product,
                    usage_times: this.$store.state.code.useNumber,
                    condition: this.$store.state.code.condition,
                    condition_value: this.$store.state.code.condition_value,
                    start_date: this.$store.state.code.startDate,
                    end_date: this.$store.state.code.endDate,
                })

                .then((res) => console.log(res));
        },
    },
};
</script>


<style lang="scss">
@import '@/assets/css/Discount/AddCode.css';
@import '@/assets/css/Discount/AddCode3.css';
</style>

