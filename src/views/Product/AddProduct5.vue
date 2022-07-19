<template>
    <div class="body-page add-product add-product5" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header" v-if="this.route == 'add-product5'">
                    <div class="d-flex justify-content-between align-items-center add">
                        إضافة منتج
                        <router-link to="/view-product">
                            <b-button class="button-view">عرض المنتجات</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-header" v-if="this.route == 'edit-product5'">
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
                            <div class="event">
                                <div class="detail"></div>
                            </div>
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
                        </div>
                    </div>

                    <div class="row align-items-center" style="margin-top:50px">
                        <div class="col-lg-7">
                            <v-app>
                                <form class="form-input">
                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="time" class="col-lg-4 col-md-5 label-input">الوقت المتوقع
                                                للتحضير</label>
                                            <v-tooltip bottom color=var(--gray-medium)>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <b-form-input v-model="time" type="number" v-bind="attrs" v-on="on"
                                                        class="col-lg-7 col-md-11 col-sm-11 col-10 input-field"
                                                        name="time">
                                                    </b-form-input>
                                                </template>
                                                <span>الرجاء ادخال عدد الايام</span>
                                            </v-tooltip>
                                            <v-tooltip color="error" right v-if="v$.time.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.time.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="age" class="col-lg-4 col-md-5 label-input">العمر</label>
                                            <v-select class="col-lg-7 col-md-11 col-sm-11 col-10 input-field"
                                                :items="ageArray" v-model="age" dense solo></v-select>
                                            <v-tooltip color="error" right v-if="v$.age.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.age.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="party" class="col-lg-4 col-md-5 label-input">المناسبة</label>
                                            <b-form-input list="my-list-id" v-model="party"
                                                class="col-lg-7 col-md-11 col-sm-11 col-10 input-field" name="party">
                                            </b-form-input>

                                            <datalist id="my-list-id">
                                                <option v-for="party in partyArray" :key="party">{{ party }}
                                                </option>
                                            </datalist>
                                            <v-tooltip color="error" right v-if="v$.party.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.party.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>

                                    <div class="float-left row-bottom">
                                        <!-- <router-link to="/add-product6"> -->
                                        <b-button type="button" class="button-add" v-on:click="submitForm">
                                            <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />
                                            التالي
                                        </b-button>
                                        <!-- </router-link> -->
                                    </div>

                                    <div class="float-left row-bottom">
                                        <router-link to="/add-product4" v-if="this.route == 'add-product5'">
                                            <b-button type="submit" class="button-add">
                                                <font-awesome-icon icon="fas fa-arrow-right"
                                                    class="icon-button-right" />
                                                السابق
                                            </b-button>
                                        </router-link>
                                        <router-link :to="{ name: 'edit-product4', params: { id: id } }"
                                            v-else-if="this.route == 'edit-product5'">
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
                        <div class="col-lg-5 d-none d-xl-block d-lg-block">
                            <img src="../../assets/img/add_product6.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, maxLength, helpers, minValue } from '@vuelidate/validators'

export default {
    name: "AddProduct5",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            ageArray: ["اطفال", "شباب", "كبار"],
            partyArray: ['عيد الام', 'عيد المعلم', 'رمضان'],
            age: '',
            party: '',
            time: '',
            id: '',
            route: ''
        };
    },
    validations() {
        return {
            time: {
                minValue: helpers.withMessage('يجب ادخال رقم موجب', minValue(0)),
                required: helpers.withMessage('هذا الحقل مطلوب', required),
            },
            age: { required: helpers.withMessage('هذا الحقل مطلوب', required)},
            party: { maxLength: helpers.withMessage('اقصى طول مسموح به هو 30 حرف', maxLength(30)) },
        }
    },
    components: {
    },
    methods: {
        submitForm() {
            this.v$.$validate()
            if (!this.v$.$error) {
                this.$store.state.product.age = this.age
                this.$store.state.product.time = this.time
                this.$store.state.product.party = this.party
                if (this.$route.name == "edit-product5")
                    this.$router.replace({ name: 'edit-product6' })
                else
                    this.$router.replace({ name: 'add-product6' })
            }
        },

    },
    mounted() {
        this.route = this.$route.name
        if (this.$route.name == "edit-product5") {
            this.id = this.$route.params.id
            this.axios.get("http://" + this.$store.state.ip + "api/product/show/" + this.id)
                .then(res => {
                    console.log(res.data)
                    this.age = res.data.age
                    this.time = res.data.prepration_time
                    this.party = res.data.party
                })
        }
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
@import '@/assets/css/Product/AddProduct5.css';

.add-product5 .v-label {
    left: auto !important;
}
</style>

