<template>
    <div class="body-page add-product" id="body-page">
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
                                            <label for="address" class="col-lg-4 label-input">عنوان</label>
                                            <b-form-input class="col-lg-7 col-md-11 col-sm-11 col-10 input-field"
                                                v-model="product.address" name="address">
                                            </b-form-input>
                                            <v-tooltip color="error" right v-if="v$.product.address.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.product.address.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="discription" class="col-lg-4 col-md-6 label-input">الوصف
                                                </label>
                                            <b-form-textarea
                                                class="col-lg-7 col-md-11 col-sm-11 col-10 input-field discription"
                                                v-model="product.discription" name="discription">
                                            </b-form-textarea>
                                            <v-tooltip color="error" right v-if="v$.product.discription.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.product.discription.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>

                                    </div>

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="img" class="col-lg-4 label-input"
                                                style="margin-left: -15px">صورة</label>
                                            <v-file-input type="file" prepend-icon="mdi-camera"
                                                placeholder="اختيار صورة" @change="onFileSelected"
                                                class="col-lg-8 col-md-11 col-sm-11 col-10  input-field " filled
                                                color=var(--main-color)>
                                            </v-file-input>
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
                            <img src="../../assets/img/add_product1.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength, helpers } from '@vuelidate/validators'

export default {
    name: "AddProduct",
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
                address: { required: helpers.withMessage('هذا الحقل مطلوب', required) },
                discription: {
                    required: helpers.withMessage('هذا الحقل مطلوب', required),
                    minLength: helpers.withMessage('يجب أن يتكون هذا الحقل من 10 أحرف على الأقل', minLength(10)),
                    maxLength: helpers.withMessage('أقصى طول مسموح به هو 50', maxLength(50))
                },
                image: "",
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
        onFileSelected(files) {
            this.$store.state.product.image = files;
        },

        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.$router.replace({ name: 'add-product2' })
            }
        },
    },
};
</script>


<style lang="scss">
.add-product .v-application--wrap {
    min-height: 50% !important;
}
.body-page .line {
    height: 100px;
    margin-bottom: 30px;
}

.body-page .timeline {
    height: 250px;
    margin: 0em;
    line-height: 118px;
    position: relative;
    text-align: center;
}

.body-page .timeline:before {
    content: "";
    position: absolute;
    width: 80%;
    top: 54%;
    left: 10%;
    height: 3px;
    margin-top: -77px;
    background: var(--second-color);
}

.body-page .event-active {
    width: 55px;
    height: 55px;
    position: relative;
    margin: 0 50px;
    display: inline-block;
    background: var(--second-color);
    vertical-align: middle;
    border-radius: 50%;
}

.body-page .event {
    width: 10px;
    height: 40px;
    position: relative;
    margin: 0 50px;
    display: inline-block;
    background: transparent;
    vertical-align: middle;
    border-radius: 50%;
}


.body-page .detail {
    position: absolute;
    line-height: 1em;
    white-space: nowrap;
    left: 100%;
}

.body-page .event-active:before,
.body-page .event:before {
    top: 43%;
    content: "";
    position: absolute;
    left: 49%;
    margin-left: -3px;
    width: 7px;
    background: var(--main-color);
    height: 7px;
    border-radius: 50%;
}


.button-view {
    border-radius: 20px !important;
    background-color: var(--main-color) !important;
    font-size: 15px !important;
    border-color: var(--main-color) !important;
}

.icon-button {
    color: var(--second-color);
    font-size: 15px;
    float: left;
    margin-top: 6px;
    margin-right: 6px;
}

.row-bottom {
    margin-top: 10px;
    margin-bottom: 50px;
}

@media (max-width: 1263px) {
    .add-product .mdi-exclamation {
        margin-top: -1px !important;
    }
}

.add-product .mdi-exclamation {
    position: static !important;
    left: -29px;
    margin-right: -33px;
    z-index: 100;
    margin-top: -10px;
}

.add-product .v-input__slot {
    border: 1px solid #ced4da;
    background: white !important;
    border-radius: 30px !important;
    height: 45px !important;
    box-shadow: none !important;
    min-height: 45px !important;
}

</style>
