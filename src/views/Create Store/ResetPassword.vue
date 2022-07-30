<template>
    <div class="create-store login reset">
        <div class="side-left col-lg-5 d-none d-lg-block">
            <div class="image">
                <img src="../../assets/img/create_store2.png" class="img-thumbnail img" />
            </div>
        </div>
        <div class="side-right col-lg-8">
            <div class="title col-lg-5 ">اعادة تعيين كلمة السر </div>
            <v-app>
                <form class="form-input">
                    <div class="form-row" style="justify-content: center;margin-top: 50px">
                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                            <label for="password" class="col-lg-4 label-input">كلمة السر</label>
                            <b-form-input class="col-lg-6 col-md-11 input-field" v-model.trim="password" name="password"
                                type="password" style="padding-left: 30px;"></b-form-input>
                            <v-tooltip color="error" right v-if="v$.password.$error">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>{{ v$.password.$errors[0].$message }}</span>
                            </v-tooltip>
                        </div>
                    </div>
                    <div class="form-row" style="justify-content: center;margin-top: 50px">
                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                            <label for="confrim" class="col-lg-4 label-input"> تأكيد كلمة السر</label>
                            <b-form-input class="col-lg-6 col-md-11 input-field" v-model.trim="confrim" name="confrim"
                                type="password" style="padding-left: 30px;"></b-form-input>
                            <v-tooltip color="error" right v-if="v$.confrim.$error">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>{{ v$.confrim.$errors[0].$message }}</span>
                            </v-tooltip>
                        </div>
                    </div>
                    <div class="buttons form-row " style="margin-top:50px;justify-content: flex-end;margin-left:30px">
                        <b-button type="button" class="button-add" v-on:click="submitForm">حفظ
                        </b-button>
                    </div>
                    <template>
                        <v-dialog v-model="dialog" max-width="500px">
                            <v-card>
                                <v-spacer></v-spacer>
                                <v-card-title class="justify-content-center" style="padding-top: 30px;font-size:17px">تم
                                    إعادة تعيين كلمة السر بنجاح، يمكنك الان تسجيل الدخول
                                </v-card-title>
                                <v-card-actions style="padding-bottom: 30px">
                                    <v-spacer></v-spacer>
                                    <v-btn color="var(--main-color)" text @click="close" style="letter-spacing: 0px;">
                                        تسجيل الدخول
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </template>
                </form>
            </v-app>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, helpers, minLength, sameAs } from '@vuelidate/validators'

export default {
    name: "ResetPassword",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            password: '',
            confrim: '',
            dialog: false,

        };
    },
    validations() {
        return {
            password: {
                required: helpers.withMessage('هذا الحقل مطلوب', required),
                minLength: helpers.withMessage('يجب ان تتكون كلمة السر من 8 رموز على الاقل', minLength(8))
            },
            confrim: {
                required: helpers.withMessage('هذا الحقل مطلوب', required),
                sameAs: helpers.withMessage('تأكيد كلمة السر غير صحيح', sameAs(this.password))
            },
        }
    },

    methods: {
        close() {
            this.dialog = false
            this.$router.replace({ name: 'login' })
        },
        reset() {
            this.$store.state.id_manager = localStorage.getItem("id_manager")
            console.log(this.$store.state.id_manager)
            console.log(this.password)
            this.axios.post("http://" + this.$store.state.ip + "api/settings/storeManager/reset_password/" + this.$store.state.id_manager + "/" + this.password)
                .then((res) => {
                    if (res.statusText == "OK")
                        this.dialog = true

                })
        },
        submitForm() {
            this.v$.$validate()
            if (!this.v$.$error) {
                this.reset()

            }
        },
    },
};
</script>

<style lang="scss">
@import '@/assets/css/Create Store/CreateStore.css';
@import '@/assets/css/Create Store/login.css';
@media (max-width: 992px) {
    .reset .title {
        font-size: 20px !important;
        text-align: right !important;
        margin-right: 20px !important
    }
}
.login .reset {
    font-size: 14px;
    color: var(--main-color);
    padding-top: 0px
}

.login .reset:hover {
    text-decoration: underline;
    cursor: pointer;
}

.reset .title {
    color: var(--main-color);
    font-size: 25px;
    margin-top: 80px;
    text-align: left;
    margin-right: 50px
}

.reset .image {
    top: 35%;
    margin-left: 20px;
}
</style>

