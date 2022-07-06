<template>
    <div class="body-page add-product add-product5" id="body-page">
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
                                            <b-form-input v-model="product.time"
                                                class="col-lg-7 col-md-11 col-sm-11 col-10 input-field" name="time">
                                            </b-form-input>
                                            <v-tooltip color="error" right v-if="v$.product.time.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.product.time.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="age" class="col-lg-4 col-md-5 label-input">العمر</label>
                                            <v-select class="col-lg-7 col-md-11 col-sm-11 col-10 input-field"
                                                :items="age" v-model="product.age" dense solo></v-select>
                                            <v-tooltip color="error" right v-if="v$.product.age.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.product.age.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="party" class="col-lg-4 col-md-5 label-input">المناسبة</label>
                                            <b-form-input list="my-list-id" v-model="product.party"
                                                class="col-lg-7 col-md-11 col-sm-11 col-10 input-field" name="party">
                                            </b-form-input>

                                            <datalist id="my-list-id">
                                                <option v-for="party in party" :key="party.value">{{ party.text }}
                                                </option>
                                            </datalist>
                                            <v-tooltip color="error" right v-if="v$.product.party.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.product.party.$errors[0].$message }}</span>
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
                                        <router-link to="/add-product4">
                                            <b-button type="button" class="button-add">
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
            age: [
                { value: 'childe', text: 'اطفال' },
                { value: 'g2', text: 'شباب' },
                { value: 'old', text: 'كبار' },
            ],
            party: [
                { value: 'mother', text: 'عيد الام' },
                { value: 'techer', text: 'عيد المعلم' },
                { value: 'ramadan', text: 'رمضان' },
            ],
        };
    },
    validations() {
        return {
            product: {
                time: { maxLength: helpers.withMessage('اقصى طول مسموح به هو 20 حرف', maxLength(20)) },
                age: {},
                party: {maxLength: helpers.withMessage('اقصى طول مسموح به هو 30 حرف', maxLength(30))},
            }
        }
    },
    components: {
    },
    methods: {
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.sendData()
                this.$router.replace({ name: 'add-product6' })
            }
        },
        sendData() {
            const formData = new FormData();
            formData.append('name', this.$store.state.product.address);
            formData.append('discription', this.$store.state.product.discription);
            formData.append('image', this.$store.state.product.image);
            formData.append('selling_price', this.$store.state.product.sell);
            formData.append('cost_price', this.$store.state.product.cost);
            formData.append('selectedClassification', this.$store.state.product.selectedClassification);
            formData.append('collection_id', this.$store.state.product.selectedGroup);
            formData.append('return_or_replace', this.$store.state.product.replace);
            formData.append('gift', this.$store.state.product.present);
            formData.append('prepration_time', this.$store.state.product.time);
            formData.append('age', this.$store.state.product.age);
            formData.append('party', this.$store.state.product.party);
            console.log(this.$store.state.product);
            this.axios
                .post("https://jsonplaceholder.typicode.com/posts", formData)
                .then((res) => console.log(res));
        },
    },
    computed: {
        product() {
            return this.$store.state.product;
        }
    },
};
</script>



<style lang="scss">

.add-product5 .v-input__slot {
    border: 1px solid #ced4da;
    background: white !important;
    border-radius: 30px !important;
    height: 45px !important;
    box-shadow: none !important;
    min-height: 45px !important;
}

@media (max-width: 1263px) {
    .add-product5 .mdi-exclamation {
        margin-top: -1px !important;
    }
}

.add-product5 .mdi-exclamation {
    position: static !important;
    left: -29px;
    margin-right: -33px;
    z-index: 100;
    margin-top: -10px;
}
</style>

