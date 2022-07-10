<template>
    <div class="body-page add-dinamic add-dinamic2" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        إنشاء خصم ديناميكي
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
                            <div class="event-active">
                                <div class="detail"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-xl-7 col-lg-7 col-md-12">
                            <v-app>
                                <form class="form-input">

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="applied-to" class="col-lg-4  col-md-4 label-input">يطبق
                                                على</label>
                                            <v-radio-group v-model="appliedTo" column>
                                                <v-radio label="جميع المنتجات" value="all"></v-radio>
                                                <v-radio label="منتجات محددة" value="product"></v-radio>
                                                <div v-if="appliedTo == 'product'">
                                                    <v-select multiple  v-model="selectProduct"
                                                        class="col-lg-9 col-md-9 col-sm-11 col-11 input-field optinal"
                                                        :items="products" color=var(--main-color) label="تحديد منتجات" dense
                                                        solo style="margin-bottom: 10px"></v-select>
                                                    <v-tooltip color="error" right v-if="v$.selectProduct.$error">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                                mdi-exclamation
                                                            </v-icon>
                                                        </template>
                                                        <span>{{ v$.selectProduct.$errors[0].$message }}</span>
                                                    </v-tooltip>
                                                </div>
                                                <v-radio label="مجموعات محددة" value="group"></v-radio>

                                                <div v-if="appliedTo == 'group'">
                                                    <v-select multiple  v-model="selectGroup"
                                                        class="col-lg-9 col-md-9 col-sm-11 col-11 input-field optinal"
                                                        :items="groups" color=var(--main-color) label="تحديد مجموعات" dense
                                                        solo></v-select>
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

                                    <div class="form-row"></div>

                                    <div class="form-row" style="margin-top:70px">
                                        <div class="my-input col-lg-12 row" >
                                            <label for="date" class="col-lg-4 col-md-4 label-input" style="margin-top: 10px">مدة التفعيل
                                            </label>
                                            <v-dialog ref="dialog" v-model="modal" :return-value.sync="dates" persistent
                                                width="290px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field  v-model="dateRangeText" readonly class="col-lg-9 col-md-9 col-sm-11 col-11 input-field date-input"
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
                                            <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />
                                            التالي
                                        </b-button>
                                        <!-- </router-link> -->
                                    </div>
                                </form>
                            </v-app>
                        </div>
                        <div class="col-lg-5 d-none d-xl-block">
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
import { required, minLength, minValue, helpers, requiredIf } from '@vuelidate/validators'

export default {
    name: "AddDinamic2",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            appliedTo: 'all',
            groups: [],
            products: [],
            selectGroup: [],
            selectProduct: [],
            dates: [(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),],
            modal: false,
        };
    },
    validations() {
        return {
            selectProduct: {
                requiredIf: helpers.withMessage('هذا مطلوب', requiredIf(this.appliedTo == 'product')),
            },
            selectGroup: {
                requiredIf: helpers.withMessage('هذا الحقل مطلوب', requiredIf(this.appliedTo == 'group')),
            },
        }
    },
    components: {
    },
    watch: {
        appliedTo: function () {
            if (this.appliedTo == 'group') {
                this.getGroup()
            }
            if (this.appliedTo == 'product') {
                this.getProduct()
            }
        },
    },
    computed: {
        code() {
            return this.$store.state.dinamic;
        },
        
        dateRangeText () {
            return this.dates.join(' ~ ')
        },
    },
    methods: {
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error){
                this.$store.state.dinamic.type = 1;
                this.$store.state.dinamic.appliedTo = this.appliedTo;
                if (this.$store.state.dinamic.appliedTo == 'group')
                    this.$store.state.dinamic.product = this.selectGroup
                else if (this.$store.state.dinamic.appliedTo == 'product')
                    this.$store.state.dinamic.product = this.selectProduct
                if (this.dates[0] > this.dates[1]){
                    this.$store.state.dinamic.startDate = this.dates[1]
                    this.$store.state.dinamic.endDate = this.dates[0]
                }
                else{
                    this.$store.state.dinamic.startDate = this.dates[0]
                    this.$store.state.dinamic.endDate = this.dates[1]
                }
                if (this.$store.state.dinamic.endDate == null)
                    this.$store.state.dinamic.endDate = this.dates[0]
                // console.log(this.$store.state.dinamic.type)
                // console.log(this.$store.state.dinamic.appliedTo)
                // console.log(this.$store.state.dinamic.product)
                // console.log(this.$store.state.dinamic.startDate)
                // console.log(this.$store.state.dinamic.endDate)
                console.log("--------------------------------------------------")
                this.axios.post("https://jsonplaceholder.typicode.com/posts", {
                    type: this.$store.state.dinamic.type,
                    title: this.$store.state.dinamic.name,
                    value: this.$store.state.dinamic.value,
                    apply_to: this.$store.state.dinamic.appliedTo,
                    product: this.$store.state.dinamic.product,
                    start_date: this.$store.state.dinamic.startDate,
                    end_date: this.$store.state.dinamic.endDate,
                })
                .then((res) => console.log(res));
            }
        },
        getGroup() {
            this.axios.get('https://jsonplaceholder.typicode.com/users/3')
                .then(res => {
                    this.groups = res.data.id;
                    console.log(this.groups);
                });
        },
        getProduct() {
            this.axios.get('https://jsonplaceholder.typicode.com/users/4')
                .then(res => {
                    this.products = res.data.id;
                    console.log(this.products);
                });
        },
    },
};
</script>


<style lang="scss">
@import '@/assets/css/Discount/AddDinamic.css';
@import '@/assets/css/Discount/AddDinamic2.css';
</style>

