<template>
    <div class="body-page add-product add-product2" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        إضافة منتج
                        <router-link to="/view-product">
                            <b-button class="button-view">عرض المنتجات</b-button>
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
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <v-app>
                                <form class="form-input">
                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="sell" class="col-lg-4 col-md-5 label-input">سعر المبيع</label>
                                            <b-form-input v-model="product.sell" type="number"
                                                class="col-lg-7 col-md-11 col-sm-11 col-10 input-field" name="sell">
                                            </b-form-input>
                                            <v-tooltip color="error" right v-if="v$.product.sell.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.product.sell.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="cost" class="col-lg-4 col-md-5 label-input">سعر التكلفة</label>
                                            <v-tooltip bottom color=var(--gray-medium)>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <b-form-input v-model="product.cost" type="number"
                                                        v-bind="attrs" v-on="on"
                                                        class="col-lg-7 col-md-11 col-sm-11 col-10 input-field"
                                                        name="cost">
                                                    </b-form-input>
                                                </template>
                                                <span>لن يرى الزبائن هذا</span>
                                            </v-tooltip>
                                            <!-- <p class="parag-customer"></p> -->
                                            <v-tooltip color="error" right v-if="v$.product.cost.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.product.cost.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>
                                    <div class="float-left row-bottom">
                                        <!-- <router-link to="/add-product3"> -->
                                        <b-button type="button" class=" button-add" v-on:click="submitForm">
                                            <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />
                                            التالي
                                        </b-button>
                                        <!-- </router-link> -->
                                    </div>

                                    <div class="float-left row-bottom">
                                        <router-link to="/add-product1">
                                            <b-button type="submit" class="button-add">
                                                <font-awesome-icon icon="fas fa-arrow-right"
                                                    class="icon-button-right" />
                                                السابق
                                            </b-button>
                                        </router-link>
                                    </div>
                                </form>
                            </v-app>
                        </div>
                        <div class="col-lg-6 d-none d-xl-block d-lg-block">
                            <img src="../../assets/img/add_product2.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, maxValue, helpers, minValue } from '@vuelidate/validators'

export default {
    name: "AddProduct2",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
        };
    },
    validations() {
        return {
            product: {
                sell: { required: helpers.withMessage('هذا الحقل مطلوب', required), 
                minValue: helpers.withMessage('يجب ادخال رقم موجب', minValue(0))},
                cost: { maxValue: helpers.withMessage('يجب أن يكون سعر التكلفة اصغر من سعر المبيع', maxValue( this.$store.state.product.sell)), 
                minValue: helpers.withMessage('يجب ادخال رقم موجب', minValue(0))},
            }
        }
    },
    components: {
    },
    computed: {
        product() {
            return this.$store.state.product;
        }
    },
    methods: {
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.$router.replace({ name: 'add-product3' })
            }
        },
    }

};
</script>


<style lang="scss">

@media (max-width: 1263px) {
    .add-product2 .mdi-exclamation {
        margin-top: -1px !important;
    }
}

.add-product2 .mdi-exclamation {
    position: static !important;
    left: -29px;
    margin-right: -33px;
    z-index: 100;
    margin-top: -10px;
}
</style>
