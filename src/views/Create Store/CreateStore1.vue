<template>
    <div class="create-store create-store1 ">
        <div class="side-right col-lg-12">
            <div class="top-button">
                <router-link to="/create-store1">
                    <b-button type="button" class="button-add  button-login" style="margin-left: -15px;">إنشاء متجر</b-button>
                </router-link>
                <router-link to="/login">
                    <b-button type="button" class="button-add create button-login">تسجيل الدخول</b-button>
                </router-link>
                
            </div>
            <div class="line" v-if="!mobile">
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
                <form class="form-input col-lg-12">
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
                                @change="onFileSelected" class="col-lg-7  input-field " filled color=var(--main-color)></v-file-input>
                        </div>

                        <div class="my-input col-lg-6 row" style="margin-top: -12px">
                            <label for="cover" class="col-lg-4 label-input" style="margin-left: -12px">صورة الغلاف</label>
                            <v-file-input type="file" placeholder="اختيار صورة" @change="onFileSelected2"
                                class="col-lg-7  input-field " filled prepend-icon="mdi-camera" color=var(--main-color)></v-file-input>
                        </div>
                    </div>

                    <div class="float-center" style="margin-top: 20px">
                        <!-- <router-link to="/create-store2"> -->
                        <b-button type="button" class="button-add" v-on:click="submitForm" style="margin-top: 30px;margin-right: 30px;">
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
            mobile: false,
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
        checkDevice(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                this.mobile = true
            }else{
                this.mobile = false
            }
        }
    },
    mounted(){
        this.checkDevice()
    }
};
</script>

<style>
@import '@/assets/css/Create Store/CreateStore.css';
@import '@/assets/css/Create Store/CreateStore1.css';
</style>
