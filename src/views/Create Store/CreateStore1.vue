<template>
    <div class="create-store create-store1 ">
        <div class="side-left col-lg-3 d-none d-lg-block">
            <div class="image">
                <img src="../../assets/img/create_store1.png" class="img-thumbnail img" />
            </div>
        </div>
        <div class="side-right col-lg-9">
            <div class="address">
                <p style="margin-bottom: 0px">إنشاء متجر</p>
            </div>
            <div class="line">
                <div class="timeline">
                    <div class="event-active">
                        <div class="detail">معلومات المتجر</div>
                    </div>
                    <div class="event">
                        <div class="detail">معلومات شخصية</div>
                    </div>
                    <div class="event">
                        <div class="detail">اعدادات الموقع</div>
                    </div>
                </div>
            </div>
            <v-app>
                <form class="form-input">
                    <div class="form-row">
                        <div class="my-input col-lg-6 row">
                            <label for="name" class="col-lg-4 label-input">اسم المتجر</label>
                            <b-form-input class="col-lg-6 input-field" v-model="createStore.name" name="name">
                            </b-form-input>
                            <v-tooltip color="error" right v-if="v$.createStore.name.$error">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>{{ v$.createStore.name.$errors[0].$message }}</span>
                            </v-tooltip>
                        </div>
                        <div class="my-input col-lg-6 row" style="margin-top: -12px">
                            <label for="place" class="col-lg-4 label-input">أماكن التوصيل</label>
                            <b-form-input class="col-lg-6 input-field" v-model="createStore.place" name="place">
                            </b-form-input>
                            <v-tooltip color="error" right v-if="v$.createStore.place.$error">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>{{ v$.createStore.place.$errors[0].$message }}</span>
                            </v-tooltip>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="my-input col-lg-6 row" style="margin-top: -12px">
                            <label for="discription" class="col-lg-4 label-input">وصف المتجر</label>
                            <b-form-textarea class="col-lg-6 input-field discription" v-model="createStore.discription"
                                name="discription">
                            </b-form-textarea>
                            <v-tooltip color="error" right v-if="v$.createStore.discription.$error">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>{{ v$.createStore.discription.$errors[0].$message }}</span>
                            </v-tooltip>
                        </div>


                        <div class="my-input col-lg-6 row" style="margin-top: -12px">
                            <label for="facebook" class="col-lg-4 label-input">حساب Facebook</label>
                            <b-form-textarea class="col-lg-6 input-field discription" v-model="createStore.facebook"
                                name="facebook">
                            </b-form-textarea>
                            <v-tooltip color="error" right v-if="v$.createStore.facebook.$error">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>{{ v$.createStore.facebook.$errors[0].$message }}</span>
                            </v-tooltip>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="my-input col-lg-6 row" style="margin-top: -12px">
                            <label for="logo" class="col-lg-4 label-input" style="margin-left: -12px">العلامة التجارية</label>
                            <v-file-input type="file" prepend-icon="mdi-camera" placeholder="اختيار صورة"
                                @change="onFileSelected" class="col-lg-7 col-md-7 input-field " filled color=var(--main-color)></v-file-input>
                        </div>

                        <div class="my-input col-lg-6 row" style="margin-top: -12px">
                            <label for="cover" class="col-lg-4 label-input" style="margin-left: -12px">صورة الغلاف</label>
                            <v-file-input type="file" placeholder="اختيار صورة" @change="onFileSelected2"
                                class="col-lg-7 col-md-7 input-field " filled prepend-icon="mdi-camera" color=var(--main-color)></v-file-input>
                        </div>
                    </div>

                    <div class="float-center" style="margin-top: 20px">
                        <!-- <router-link to="/create-store2"> -->
                        <b-button type="button" class="button-add" v-on:click="submitForm">
                            <font-awesome-icon icon="fas fa-arrow-left" class="icon-button" />التالي
                        </b-button>
                        <!-- </router-link> -->
                    </div>
                </form>
            </v-app>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength, helpers, url } from '@vuelidate/validators'

export default {
    name: "CreateStore1",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            
        };
    },
    validations() {
        return {
            createStore: {
                name: { required: helpers.withMessage('هذا الحقل مطلوب', required)}, 
                place: { required: helpers.withMessage('هذا الحقل مطلوب', required)}, 
                discription: { required: helpers.withMessage('هذا الحقل مطلوب', required),
                                minLength: helpers.withMessage('يجب أن يتكون هذا الحقل من 10 أحرف على الأقل', minLength(10)),
                                maxLength: helpers.withMessage('أقصى طول مسموح به هو 50', maxLength(50)) },
                facebook: { url: helpers.withMessage('يجب ادخال رابط صالح', url)},
                logo: "",
                cover: "",
            },
        }
    },
    computed: {
        createStore() {
            return this.$store.state.createStore;
        }
    },

    methods: {
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error){
                this.$router.replace({ name: 'create-store2' })
            }
        },
        onFileSelected(files) {
            this.$store.state.createStore.logo = files;
        },
        onFileSelected2(files) {
            this.$store.state.createStore.cover = files;
        },
    },
};
</script>

<style lang="scss">
.create-store body{
    padding-right: 0px !important;
}
@media (max-width: 1160px) {
    .create-store1 .mdi-exclamation {
        top: -19px !important;
    }
}

@media (max-width: 992px) {
    .create-store1 .mdi-exclamation {
        position: absolute !important;
        top: 80px !important;
        left: 14px !important;
    }
}

.create-store1 .mdi-exclamation {
    top: -5px;
    left: 36px;
    color: red;
}


@media (max-width: 992px) {
    .label-input {
        text-align: right !important;
    }
}

@media (max-width: 820px) {
    .create-store .timeline:before {
        width: 60% !important;
        top: 54% !important;
        left: 19.5% !important;
    }
}

.theme--light.v-text-field>.v-input__control>.v-input__slot:before,
.v-text-field>.v-input__control>.v-input__slot:after {
    display: none !important;
}

.v-input__slot:active,
.v-input__slot:focus-within {
    border-color: var(--main-color) !important;
}

.mdi-camera::before {
    margin-bottom: 10px;
    margin-left: 10px;
}

.v-input__prepend-outer {
    display: none;
}

.image {
    position: absolute;
    top: 25%;
}

.create-store .v-input__slot {
    border: 1px solid #ced4da;
    background: white !important;
    border-radius: 30px !important;

}

.create-store .side-left {
    position: relative;
    box-shadow: 0 1px 10px rgb(32 33 36 / 15%);
    border-radius: 30px;
    background-color: white;
    float: left;
    height: 585px;
    margin: 20px;
}

.create-store .side-left .img {
    max-width: 100% !important;
}

.create-store .address {
    display: flex;
    justify-content: center;
    padding-top: 30px;
}

.create-store p {
    color: var(--main-color);
    font-size: 40px;
}

.create-store .form-input {
    margin-right: 40px;
    margin-left: 40px;
}

.create-store .label-input {
    text-align: left;
}

.create-store1 .form-row {
    margin-top: 30px;
    margin-bottom: 0px;
}

.create-store .line {
    height: 100px;
    margin-bottom: 30px;
}

.create-store .timeline {
    height: 250px;
    margin: 0em;
    line-height: 118px;
    position: relative;
    text-align: center;
}

.create-store .timeline:before {
    content: "";
    position: absolute;
    width: 38%;
    top: 54%;
    left: 31.5%;
    height: 3px;
    margin-top: -77px;
    background: white;
}

.create-store .event-active {
    width: 55px;
    height: 55px;
    position: relative;
    margin: 0 50px;
    display: inline-block;
    background: white;
    vertical-align: middle;
    border-radius: 50%;
}

.create-store .event {
    width: 10px;
    height: 40px;
    position: relative;
    margin: 0 50px;
    display: inline-block;
    background: transparent;
    vertical-align: middle;
    border-radius: 50%;
}

.create-store .detail {
    position: absolute;
    white-space: nowrap;
    font-size: 12px;
    color: var(--gray-medium);
}

.create-store .event-active .detail {
    line-height: 12em;
    left: -5%;
}

.create-store .event .detail {
    line-height: 128px !important;
    left: -25px !important;
}

.create-store .event-active:before,
.create-store .event:before {
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
</style>
