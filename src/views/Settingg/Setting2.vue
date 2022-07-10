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
                        <div class="row align-items-center">
                            <div class="col-lg-7" style="margin-top:30px">
                                <form class="form-input">

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="name" class="col-lg-4 col-md-6 label-input">الاسم</label>
                                            <b-form-input class="col-lg-6 col-md-11 col-xm-11 input-field"
                                                name="username" v-model.trim="username"></b-form-input>
                                            <v-tooltip color="error" right v-if="v$.username.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.username.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>
                                    <div class="form-row">

                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="email" class="col-lg-4  col-md-6 label-input">البريد
                                                الالكتروني</label>
                                            <b-form-input class="col-lg-6 col-md-11 col-xm-11 input-field"
                                                v-model.trim="email" name="email" type="email"></b-form-input>
                                            <v-tooltip color="error" right v-if="v$.email.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.email.$errors[0].$message }}</span>
                                            </v-tooltip>
                                            <v-tooltip color="error" right v-if="!valid_email">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>هذا الايميل موجود مسبقا</span>
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
                                            <b-button type="button" class="button-add" v-on:click="validateEmail">
                                                <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />
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
import { required, email, sameAs, minLength, helpers, requiredIf } from '@vuelidate/validators'

export default {
    name: "Setting2",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            username: '',
            email: '',
            valid_email: true,
            current_email: '',
        };
    },
    validations() {
        return {
            username: { required: helpers.withMessage('هذا الحقل مطلوب', required) },
            email: {
                required: helpers.withMessage('هذا الحقل مطلوب', required),
                email: helpers.withMessage('يجب ادخال عنوان بريد الكتروني صحيح', email)
            },
        }
    },
    mounted() {
        this.axios.get("http://" + this.$store.state.ip + "api/storeManager/index/" + this.$store.state.id_manager)
            .then(res => {
                // console.log(res.data)
                this.username = res.data.data.name
                this.email = res.data.data.email
                this.current_email = res.data.data.email
                this.$store.state.setting.id_persone = res.data.data.id
                localStorage.setItem("id_persone", this.$store.state.setting.id_persone);
            });
    },
    methods: {

        validateEmail() {
            this.v$.$validate()
            if (!this.v$.$error)
                if (this.current_email != this.email){
                    this.axios.post("http://" + this.$store.state.ip + "api/person/unique", { email: this.email })
                        .then((res) => {
                            console.log(res.data)
                            if (res.data.data == "error")
                                this.valid_email = false
                            else
                                {
                                    this.valid_email = true
                                    this.submitForm()
                                }
                        })
                }
                else{
                    this.submitForm()
                }
        },

        submitForm() {
            if (!this.v$.$error) {
                this.$router.replace({ name: 'setting5' })
                this.initData()
            }
        },

        initData() {
            this.$store.state.setting.username = this.username
            this.$store.state.setting.email = this.email
        },
    },

    computed: {
        setting() {
            return this.$store.state.setting;
        }
    },

};
</script>



<style lang="scss">
@import '@/assets/css/Settingg/Setting.css';
@import '@/assets/css/Settingg/Setting2.css';
</style>
