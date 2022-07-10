<template>
    <div class="body-page add-product add-product3" id="add-product3">
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
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <v-app>
                                <form class="form-input">
                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="classification"
                                                class="col-lg-4 col-md-5 label-input">التصنيف</label>
                                            <v-select class="col-lg-7 col-md-11 col-sm-11 col-10 input-field" multiple
                                                :items="classification" v-model="product.selectedClassification" dense
                                                solo></v-select>
                                            <v-tooltip color="error" right v-if="v$.product.selectedClassification.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.product.selectedClassification.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="group" class="col-lg-4 col-md-5 label-input">المجموعة</label>
                                            <v-select class="col-lg-7 col-md-11 col-sm-11 col-10 input-field"
                                                :items="group" v-model="product.selectedGroup" dense solo></v-select>
                                            <v-tooltip color="error" right v-if="v$.product.selectedGroup.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.product.selectedGroup.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>

                                    <div class="float-left row-bottom">
                                        <!-- <router-link to="/add-product4"> -->
                                        <b-button type="button" class="button-add" v-on:click="submitForm">
                                            <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />
                                            التالي
                                        </b-button>
                                        <!-- </router-link> -->
                                    </div>

                                    <div class="float-left row-bottom">
                                        <router-link to="/add-product2">
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
                            <img src="../../assets/img/add_product3.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

export default {
    name: "AddProduct3",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            classification: ['2', '4', '23', '6', '8', '7'],
            group: ['2', '4', '534', '6', '897', '7'],
        };
    },
    mounted() {
        this.axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            this.classification = res.data;
            console.log(this.classification);
        });
        this.axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            this.group = res.data;
            console.log(this.group);
        });
    },
    validations() {
        return {
            product: {
                selectedClassification: {},
                selectedGroup: { required: helpers.withMessage('هذا الحقل مطلوب', required) },
            }
        }
    },
    methods: {
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.$router.replace({ name: 'add-product4' })
            }
            console.log(this.$store.state.product.selectedClassification);
            console.log(this.$store.state.product.selectedGroup)
        },
    },
    components: {
    },
    computed: {
        product() {
            return this.$store.state.product;
        }
    },
};
</script>

<style lang="scss">
@import '@/assets/css/Product/AddProduct.css';
@import '@/assets/css/Product/AddProduct3.css';
</style>
