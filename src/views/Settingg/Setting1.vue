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
                                <div class="detail">تغيير كلمة السر</div>
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
                                    <b-form-input class="col-lg-6 col-md-6 col-sm-11 col-11 input-field" v-model="name" name="name">
                                    </b-form-input>
                                    <v-tooltip color="error" right v-if="v$.name.$error">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                mdi-exclamation
                                            </v-icon>
                                        </template>
                                        <span>{{ v$.name.$errors[0].$message }}</span>
                                    </v-tooltip>
                                </div>
                                <div class=" col-lg-6  row" style="margin-top: -12px">
                                    <label for="place" class="col-lg-4 col-md-3  label-input">أماكن التوصيل</label>
                                    <b-form-input class="col-lg-6 col-md-6 col-sm-11 col-11 input-field" v-model="place" name="place">
                                    </b-form-input>
                                    <v-tooltip color="error" right v-if="v$.place.$error">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                mdi-exclamation
                                            </v-icon>
                                        </template>
                                        <span>{{ v$.place.$errors[0].$message }}</span>
                                    </v-tooltip>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="my-input col-lg-6 row" style="margin-top: -12px">
                                    <label for="discription" class="col-lg-4 col-md-3  label-input">وصف المتجر</label>
                                    <b-form-textarea class="col-lg-6 col-md-6 col-sm-11 col-11 input-field discription"
                                        v-model="discription" name="discription">
                                    </b-form-textarea>
                                    <v-tooltip color="error" right v-if="v$.discription.$error">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                mdi-exclamation
                                            </v-icon>
                                        </template>
                                        <span>{{ v$.discription.$errors[0].$message }}</span>
                                    </v-tooltip>
                                </div>


                                <div class="col-lg-6 row" style="margin-top: -12px">
                                    <label for="facebook" class="col-lg-4  col-md-3 label-input">حساب Facebook</label>
                                    <b-form-textarea class="col-lg-6 col-md-6 col-sm-11 col-11 input-field discription"
                                        v-model="facebook" name="facebook">
                                    </b-form-textarea>
                                    <v-tooltip color="error" right v-if="v$.facebook.$error">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                mdi-exclamation
                                            </v-icon>
                                        </template>
                                        <span>{{ v$.facebook.$errors[0].$message }}</span>
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
import { required, minLength, maxLength, helpers, url } from '@vuelidate/validators'

export default {
    name: "Setting",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            name: '',
            place: '',
            discription: '',
            facebook: '',
            logo: '',
            cover: '',
        };
    },
    validations() {
        return {
            name: { required: helpers.withMessage('هذا الحقل مطلوب', required)}, 
            place: { required: helpers.withMessage('هذا الحقل مطلوب', required)}, 
            discription: { required: helpers.withMessage('هذا الحقل مطلوب', required),
                                minLength: helpers.withMessage('يجب أن يتكون هذا الحقل من 10 أحرف على الأقل', minLength(10)),
                                maxLength: helpers.withMessage('أقصى طول مسموح به هو 50', maxLength(50)) },
            facebook: { url: helpers.withMessage('يجب ادخال رابط صالح', url)},
            logo: "",
            cover: "",
        }
    },
    computed: {
        setting() {
            return this.$store.state.setting;
        }
    },

    methods: {
        initData(){
            this.$store.state.setting.id_store =  this.$store.state.id_store
            this.$store.state.setting.id_manager = this.$store.state.id_manager
            this.$store.state.setting.name = this.name
            this.$store.state.setting.place = this.place
            this.$store.state.setting.discription = this.discription
            this.$store.state.setting.facebook = this.facebook
            this.$store.state.setting.logo = this.logo
            this.$store.state.setting.cover = this.cover
        },
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error){
                this.$router.replace({ name: 'setting2' })
                this.initData()
            }
        },
        onFileSelected(files) {
            this.logo = files;
        },
        onFileSelected2(files) {
            this.cover = files;
        },
    },
    mounted() {
        console.log(this.$store.state.id_store)
        this.axios.get("http://"+this.$store.state.ip+"api/store/show/"+this.$store.state.id_store)
            .then(res => {
                // console.log(res.data)
                this.name = res.data.data[0].name
                this.place = res.data.data[0].delivery_area;
                this.discription = res.data.data[0].discription;
                if (res.data.data[0].facebook == "undefined" || res.data.data[0].facebook == "null")
                    this.facebook = ''
                else
                    this.facebook = res.data.data[0].facebook;
                this.logo = res.data.data[0].Brand;
                this.cover = res.data.data[0].image;
            });
    },

};
</script>

<style lang="scss">
@import '@/assets/css/Settingg/Setting.css';
@import '@/assets/css/Settingg/Setting1.css';
</style>