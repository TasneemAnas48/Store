<template>
    <div class="create-store login forget">
        <div class="side-left col-lg-5 d-none d-lg-block">
            <div class="image">
                <img src="../../assets/img/create_store2.png" class="img-thumbnail img" />
            </div>
        </div>
        <div class="side-right col-lg-8">
            <div class="title col-lg-6 ">اكمال بيانات تسجيل الحساب</div>
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
        reset() {
            this.$store.state.id_manager = localStorage.getItem("id_manager")
            console.log(this.$store.state.id_manager)
            console.log(this.password)
            this.axios.post("http://" + this.$store.state.ip + "api/settings/helper/register", )
                .then((res) => {
                    console.log(res)

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

</style>

