<template>
    <div class="body-page setting setting1" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        الاعدادات
                    </div>
                </div>
                <div class="card-body">
                    <div class="line">
                        <div class="timeline">
                            <div class="event-active">
                                <div class="detail">معلومات المتجر</div>
                            </div>
                            <div class="event">
                                <div class="detail">معلومات شخصية</div>
                            </div>
                            <div class="event">
                                <div class="detail">ادوار الصفحة</div>
                            </div>
                            <div class="event">
                                <div class="detail">اعدادات الموقع</div>
                            </div>
                        </div>
                    </div>
                    <v-app>
                        <form class="form-input">
                            <div class="form-row ">
                                <div class="my-input col-lg-6 row">
                                    <label for="name" class="col-lg-4 col-md-3 label-input">اسم المتجر</label>
                                    <b-form-input class="col-lg-6 col-md-6 col-sm-11 col-11 input-field" v-model="storeInfo.name" name="name">
                                    </b-form-input>
                                    <v-tooltip color="error" right v-if="v$.storeInfo.name.$error">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                mdi-exclamation
                                            </v-icon>
                                        </template>
                                        <span>{{ v$.storeInfo.name.$errors[0].$message }}</span>
                                    </v-tooltip>
                                </div>
                                <div class=" col-lg-6  row" style="margin-top: -12px">
                                    <label for="place" class="col-lg-4 col-md-3  label-input">أماكن التوصيل</label>
                                    <b-form-input class="col-lg-6 col-md-6 col-sm-11 col-11 input-field" v-model="storeInfo.place" name="place">
                                    </b-form-input>
                                    <v-tooltip color="error" right v-if="v$.storeInfo.place.$error">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                mdi-exclamation
                                            </v-icon>
                                        </template>
                                        <span>{{ v$.storeInfo.place.$errors[0].$message }}</span>
                                    </v-tooltip>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="my-input col-lg-6 row" style="margin-top: -12px">
                                    <label for="discription" class="col-lg-4 col-md-3  label-input">وصف المتجر</label>
                                    <b-form-textarea class="col-lg-6 col-md-6 col-sm-11 col-11 input-field discription"
                                        v-model="storeInfo.discription" name="discription">
                                    </b-form-textarea>
                                    <v-tooltip color="error" right v-if="v$.storeInfo.discription.$error">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                mdi-exclamation
                                            </v-icon>
                                        </template>
                                        <span>{{ v$.storeInfo.discription.$errors[0].$message }}</span>
                                    </v-tooltip>
                                </div>


                                <div class="col-lg-6 row" style="margin-top: -12px">
                                    <label for="facebook" class="col-lg-4  col-md-3 label-input">حساب Facebook</label>
                                    <b-form-textarea class="col-lg-6 col-md-6 col-sm-11 col-11 input-field discription"
                                        v-model="storeInfo.facebook" name="facebook">
                                    </b-form-textarea>
                                    <v-tooltip color="error" right v-if="v$.storeInfo.facebook.$error">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                mdi-exclamation
                                            </v-icon>
                                        </template>
                                        <span>{{ v$.storeInfo.facebook.$errors[0].$message }}</span>
                                    </v-tooltip>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="my-input col-lg-6 row" style="margin-top: -12px">
                                    <label for="logo" class="col-lg-4 col-md-3  label-input" style="margin-left: -12px">العلامة
                                        التجارية</label>
                                    <v-file-input type="file" prepend-icon="mdi-camera" placeholder="اختيار صورة"
                                        @change="onFileSelected" class="col-lg-7 col-md-7 col-sm-11 col-11 input-field " filled
                                        color=var(--main-color)></v-file-input>
                                </div>

                                <div class=" col-lg-6 row" style="margin-top: -12px">
                                    <label for="cover" class="col-lg-4 col-md-3  label-input" style="margin-left: -12px">صورة
                                        الغلاف</label>
                                    <v-file-input type="file" placeholder="اختيار صورة" @change="onFileSelected2"
                                        class="col-lg-7 col-md-7 col-sm-11 col-11  input-field " filled prepend-icon="mdi-camera"
                                        color=var(--main-color)></v-file-input>
                                </div>
                            </div>

                            <div class="float-center row-bottom">
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
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength, helpers } from '@vuelidate/validators'

export default {
    name: "Setting",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            storeInfo: {
                name: "",
                place: "",
                discription: "",
                facebook: "",
                logo: "",
                cover: "",
            },
        };
    },
    validations() {
        return {
            storeInfo: {
                name: { required: helpers.withMessage('هذا الحقل مطلوب', required) },
                place: { required: helpers.withMessage('هذا الحقل مطلوب', required) },
                discription: {
                    required: helpers.withMessage('هذا الحقل مطلوب', required),
                    minLength: helpers.withMessage('يجب أن يتكون هذا الحقل من 10 أحرف على الأقل', minLength(10)),
                    maxLength: helpers.withMessage('أقصى طول مسموح به هو 50', maxLength(50))
                },
                facebook: "",
                logo: "",
                cover: "",
            },
        }
    },
    components: {
    },
    mounted() { //this.$store.state.ipv+'store/show/22'
        this.axios.get("https://jsonplaceholder.typicode.com/photos/1")
            .then(res => {
                this.storeInfo.name = res.data.title;
                this.storeInfo.place = res.data.title;
                this.storeInfo.discription = res.data.title;
            });
    },

    methods: {
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error){
                this.sendData();
                this.$router.replace({ name: 'setting2' })
            }
        },

        onFileSelected(files) {
            this.storeInfo.logo = files;
        },
        onFileSelected2(files) {
            this.storeInfo.cover = files;
        },
        sendData() {
            const formData = new FormData();
            formData.append('name', this.storeInfo.name);
            formData.append('delivery_area', this.storeInfo.delivery_area);
            formData.append('discription', this.storeInfo.discription);
            formData.append('facebook', this.storeInfo.facebook);
            formData.append('Brand', this.storeInfo.logo);
            formData.append('image', this.storeInfo.cover);
            formData.append('store', this.$store.state.id);
            this.axios
                .post(this.$store.state.ipv + "store/update", formData)
                .then((res) => console.log(res));
        },
    },
};
</script>

<style lang="scss">
.setting .v-application--wrap {
    min-height: 50% !important;
}
.setting .form-input {
    margin-top: 20px !important;
}

.setting .detail {
    position: absolute;
    white-space: nowrap;
    font-size: 12px;
    color: var(--gray-medium);
}

.setting .event-active .detail {
    line-height: 12em;
    left: -5%;
}

.setting .event .detail {
    line-height: 128px !important;
    left: -25px !important;
}

.setting .timeline:before {
    width: 59%;
    left: 20%;
}

.setting1 .v-input__slot {
    border: 1px solid #ced4da;
    background: white !important;
    border-radius: 30px !important;
    height: 45px !important;
    box-shadow: none !important;
    min-height: 45px !important;
}
.setting .mdi-exclamation {
    position: static !important;
    left: -29px;
    margin-right: -33px;
    z-index: 100;
    margin-top: -10px;
}
@media (max-width: 1263px) {
    .setting .mdi-exclamation {
        margin-top: -1px !important;
    }
}

@media (max-width: 992px) {
    .setting .my-input{
        margin-bottom:20px;
    }
}
</style>