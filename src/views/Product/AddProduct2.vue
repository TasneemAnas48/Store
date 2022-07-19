<template>
    <div class="body-page add-product add-product2" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header"  v-if="this.route == 'add-product2'">
                    <div class="d-flex justify-content-between align-items-center add">
                        إضافة منتج
                        <router-link to="/view-product">
                            <b-button class="button-view">عرض المنتجات</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-header"  v-if="this.route == 'edit-product2'">
                    <div class="d-flex justify-content-between align-items-center add">
                        تعديل منتج
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
                                            <b-form-input v-model="sell" type="number"
                                                class="col-lg-7 col-md-11 col-sm-11 col-10 input-field" name="sell">
                                            </b-form-input>
                                            <v-tooltip color="error" right v-if="v$.sell.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.sell.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="cost" class="col-lg-4 col-md-5 label-input">سعر التكلفة</label>
                                            <v-tooltip bottom color=var(--gray-medium)>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <b-form-input v-model="cost" type="number"
                                                        v-bind="attrs" v-on="on"
                                                        class="col-lg-7 col-md-11 col-sm-11 col-10 input-field"
                                                        name="cost">
                                                    </b-form-input>
                                                </template>
                                                <span>لن يرى الزبائن هذا</span>
                                            </v-tooltip>
                                            <!-- <p class="parag-customer"></p> -->
                                            <v-tooltip color="error" right v-if="v$.cost.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.cost.$errors[0].$message }}</span>
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
                                        <router-link to="/add-product1" v-if="this.route == 'add-product2'">
                                            <b-button type="submit" class="button-add">
                                                <font-awesome-icon icon="fas fa-arrow-right"
                                                    class="icon-button-right" />
                                                السابق
                                            </b-button>
                                        </router-link>
                                        <router-link :to="{ name: 'edit-product1', params: {id: id} }" v-else-if="this.route == 'edit-product2'">
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
            sell:'',
            cost:'',
            id: '',
            route:''
        }
    },
    validations() {
        return {
                sell: { required: helpers.withMessage('هذا الحقل مطلوب', required), 
                        minValue: helpers.withMessage('يجب ادخال رقم موجب', minValue(0))},
                cost: { required: helpers.withMessage('هذا الحقل مطلوب', required), 
                        maxValue: helpers.withMessage('يجب أن يكون سعر التكلفة اصغر من سعر المبيع', maxValue( this.sell)), 
                        minValue: helpers.withMessage('يجب ادخال رقم موجب', minValue(0))},
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
                this.$store.state.product.sell = this.sell
                this.$store.state.product.cost = this.cost
                if (this.$route.name == "edit-product2")
                    this.$router.replace({ name: 'edit-product3' })
                else
                    this.$router.replace({ name: 'add-product3' })
            }
        },
    },
    mounted(){
        this.route = this.$route.name
        if (this.$route.name == "edit-product2"){
            this.id = this.$route.params.id
            this.axios.get("http://"+this.$store.state.ip+"api/product/show/" + this.id)
            .then(res => {
                console.log(res.data)
                this.cost = res.data.cost_price
                this.sell = res.data.selling_price
            })
        }
    },

};
</script>


<style lang="scss">

@import '@/assets/css/Product/AddProduct.css';
@import '@/assets/css/Product/AddProduct2.css';

</style>
