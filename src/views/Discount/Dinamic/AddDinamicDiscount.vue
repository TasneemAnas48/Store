<template>
    <div class="body-page add-dinamic1 add-dinamic" id="body-page">
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
                            <div class="event-active">
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
                                            <label for="name" class="col-lg-4 col-md-3 label-input">العنوان</label>
                                            <b-form-input v-model="dinamic.name" class="col-lg-7 col-md-7 col-sm-11 col-11 input-field" name="name">
                                            </b-form-input>
                                            <v-tooltip color="error" right v-if="v$.dinamic.name.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.dinamic.name.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="value" class="col-lg-4 col-md-3  label-input">القيمة</label>
                                            <b-form-input type="number" v-model="dinamic.value" class="col-lg-7 col-md-7 col-sm-11 col-11 input-field" name="value">
                                            </b-form-input>
                                            <v-tooltip color="error" right v-if="v$.dinamic.value.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.dinamic.value.$errors[0].$message }}</span>
                                            </v-tooltip>
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
import { required, minValue, maxLength, helpers } from '@vuelidate/validators'

export default {
    name: "AddDinamic",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
        };
    },
    validations() {
        return {
            dinamic: {
                name: { required: helpers.withMessage('هذا الحقل مطلوب', required), 
                        maxLength: helpers.withMessage('أقصى طول مسموح به هو 10', maxLength(10)), },
                value: {
                    required: helpers.withMessage('هذا الحقل مطلوب', required),
                    minValue: helpers.withMessage('يجب ادخال رقم موجب', minValue(0)),
                },
            }
        }
    },
    components: {
    },
    computed: {
        dinamic() {
            return this.$store.state.dinamic;
        }
    },
    methods: {
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error){
                console.log( this.$store.state.dinamic.name)
                console.log( this.$store.state.dinamic.value)
                this.$router.replace({ name: 'add-dinamic2' })
            }
        },
    },
};
</script>


<style lang="scss">
@import '@/assets/css/Discount/AddDinamic.css';
@import '@/assets/css/Discount/AddDinamic1.css';
</style>

