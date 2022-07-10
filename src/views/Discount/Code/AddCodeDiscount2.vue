<template>
    <div class="body-page add-code add-code2" id="body-page">
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
                            <div class="event-active">
                                <div class="detail"></div>
                            </div>
                            <div class="event">
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

                                    <div class="form-row" style="margin-top: 70px">
                                        <div class="my-input col-lg-12 row" >
                                            <label for="use-number" class="col-lg-4 col-md-4 label-input">عدد مرات
                                                الاستخدام</label>
                                            <v-radio-group v-model="useNumber" column>
                                                <v-radio label="مرة واحدة لكل زبون" value="once"></v-radio>
                                                <v-radio label="عدد مرات معين لكل زبون" value="multi"></v-radio>
                                                <b-form-input v-if="useNumber == 'multi'" type="number" v-model="number"
                                                    class="col-lg-8=9 col-md-9 col-sm-11 col-11 input-field custom"
                                                    name="number">
                                                </b-form-input>
                                                <v-tooltip color="error" right v-if="v$.number.$error">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-icon color="red" dark v-bind="attrs" v-on="on" style="left: -154px; top: -46px;">
                                                            mdi-exclamation
                                                        </v-icon>
                                                    </template>
                                                    <span>{{ v$.number.$errors[0].$message }}</span>
                                                </v-tooltip>
                                            </v-radio-group>
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
    name: "AddCode2",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            appliedTo: 'all',
            useNumber: 'once',
            number:'',
            groups: [],
            products: [],
            selectGroup: [],
            selectProduct: [],
        };
    },
    validations() {
        return {
            number: {
                requiredIf: helpers.withMessage('هذا الحقل مطلوب', requiredIf(this.useNumber == 'multi')),
                minValue: helpers.withMessage('يجب ادخال رقم موجب', minValue(0)),
            },
            selectProduct: {requiredIf: helpers.withMessage('هذا مطلوب', requiredIf(this.appliedTo == 'product')),},
            selectGroup: {requiredIf: helpers.withMessage('هذا الحقل مطلوب', requiredIf(this.appliedTo == 'group')),},
            
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
            return this.$store.state.code;
        }
    },
    methods: {
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error)
            {
                this.$store.state.code.appliedTo = this.appliedTo;
                this.$store.state.code.useNumber = this.useNumber;
                if (this.$store.state.code.appliedTo == 'group')
                    this.$store.state.code.product = this.selectGroup
                else if (this.$store.state.code.appliedTo == 'product')
                    this.$store.state.code.product = this.selectProduct
                if (this.$store.state.code.useNumber == 'once')
                    this.$store.state.code.useNumber = 1
                else if (this.$store.state.code.useNumber == 'multi')
                    this.$store.state.code.useNumber = this.number
                console.log(this.$store.state.code.appliedTo)
                console.log(this.$store.state.code.product)
                console.log(this.$store.state.code.useNumber)
                this.$router.replace({ name: 'add-code3' })
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
@import '@/assets/css/Discount/AddCode.css';
@import '@/assets/css/Discount/AddCode2.css';
</style>

