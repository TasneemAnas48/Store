<template>
    <div class="body-page setting setting2" id="body-page">
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
                            <div class="event">
                                <div class="detail">معلومات المتجر</div>
                            </div>
                            <div class="event-active">
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
                        <div class="row align-items-center">
                            <div class="col-lg-7" style="margin-top:30px">
                                <form class="form-input">

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="name" class="col-lg-4 col-md-6 label-input">الاسم</label>
                                            <b-form-input class="col-lg-6 col-md-11 col-xm-11 input-field" name="name"
                                                v-model.trim="personalInfo.name"></b-form-input>
                                            <v-tooltip color="error" right v-if="v$.personalInfo.name.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.personalInfo.name.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>
                                    <div class="form-row">

                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="email" class="col-lg-4  col-md-6 label-input">البريد الالكتروني</label>
                                            <b-form-input class="col-lg-6 col-md-11 col-xm-11 input-field" v-model.trim="personalInfo.email"
                                                name="email" type="email"></b-form-input>
                                            <v-tooltip color="error" right v-if="v$.personalInfo.email.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.personalInfo.email.$errors[0].$message }}</span>
                                            </v-tooltip>

                                        </div>
                                    </div>


                                    <div class="form-row ">
                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="password" class="col-lg-4 col-md-6  label-input">كلمة السر</label>
                                            <b-form-input class="col-lg-6 col-md-11 col-xm-11 input-field" v-model="personalInfo.password"
                                                name="password" type="password"></b-form-input>
                                            <v-tooltip color="error" right v-if="v$.personalInfo.password.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.personalInfo.password.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>
                                    <div class="form-row">

                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="confrim-password" class="col-lg-4 col-md-6 label-input">تأكيد كلمة
                                                السر</label>
                                            <b-form-input class="col-lg-6 col-md-11 col-xm-11 input-field" v-model="personalInfo.confrim"
                                                name="confrim-password" type="password"></b-form-input>
                                            <v-tooltip color="error" right v-if="v$.personalInfo.confrim.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.personalInfo.confrim.$errors[0].$message }}</span>
                                            </v-tooltip>

                                        </div>

                                    </div>

                                    <div class="buttons form-row row-bottom" style="margin-top:60px; float: left;">

                                        <div class="float-left">
                                            <router-link to="/setting1">
                                                <b-button type="submit" class="button-add">
                                                    <font-awesome-icon icon="fas fa-arrow-right"
                                                        class="icon-button-right" />
                                                    السابق
                                                </b-button>
                                            </router-link>
                                        </div>
                                        <div class="float-rigth">
                                            <!-- <router-link to="/setting3"> -->
                                                <b-button type="button" class="button-add" v-on:click="submitForm">
                                                    <font-awesome-icon icon="fas fa-arrow-left"
                                                        class="icon-button-left" />
                                                    التالي
                                                </b-button>
                                            <!-- </router-link> -->
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-5 d-none d-xl-block d-lg-block d-md-block">
                                <img src="../../assets/img/create_store2.png" class="img-thumbnail img" />
                            </div>
                        </div>
                    </v-app>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators'

export default {
    name: "Setting2",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            personalInfo: {
                name: '',
                email: '',
                password: "",
            },
        };
    },
    validations() {
        return {
            personalInfo: {
                name: { required: helpers.withMessage('هذا الحقل مطلوب', required) },
                email: {
                    required: helpers.withMessage('هذا الحقل مطلوب', required),
                    email: helpers.withMessage('يجب ادخال عنوان بريد الكتروني صحيح', email)
                },
                password: {
                    required: helpers.withMessage('هذا الحقل مطلوب', required),
                    minLength: helpers.withMessage('يجب ان تتكون كلمة السر من 8 رموز على الاقل', minLength(8))
                },
                confrim: {
                    required: helpers.withMessage('هذا الحقل مطلوب', required),
                    sameAs: helpers.withMessage('تأكيد كلمة السر غير صحيح', sameAs(this.personalInfo.password))
                },
            }
        }
    },
    mounted() {
        this.axios.get(this.$store.state.ipv+"storeManager/index/"+this.$store.state.idm)
        .then(res => {
            this.personalInfo = res.data.data;
            // console.log(this.personalInfo);
            // console.log(res.data.data);
        });
    },
    
    methods: {
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error){
                this.sendData();
                this.$router.replace({ name: 'setting3' })
            }

        },
        sendData() {
            this.axios
                .post(this.$store.state.ipv + "storeManager/update", {
                    name: this.personalInfo.name,
                    email: this.personalInfo.email,
                    password: this.personalInfo.password,
                    id: this.$store.state.idm
                })
                .then((res) => console.log(res));
            console.log(this.personalInfo);
        },
    },
    components: {
    },

    

};
</script>



<style lang="scss">
@media (max-width: 1262px) {
    .setting2 .label-input{
        text-align: right !important;
    }
}
</style>
