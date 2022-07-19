<template>
    <div class="body-page setting setting5" id="body-page">
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
                            <div class="event">
                                <div class="detail">معلومات شخصية</div>
                            </div>
                            <div class="event-active">
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

                                    <div class="form-row ">
                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="old_password" class="col-lg-4 col-md-6  label-input">كلمة السر
                                                الحالية</label>
                                            <b-form-input class="col-lg-6 col-md-11 col-xm-11 input-field"
                                                v-model="old_password" name="old_password" type="password">
                                            </b-form-input>
                                            <v-tooltip color="error" right v-if="v$.old_password.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.old_password.$errors[0].$message }}</span>
                                            </v-tooltip>
                                            <v-tooltip color="error" right v-if="!valid_password">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>كلمة السر غير صحيحة</span>
                                            </v-tooltip>
                                        </div>
                                    </div>


                                    <div class="form-row ">
                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="new_password" class="col-lg-4 col-md-6  label-input">كلمة السر
                                                الجديدة</label>
                                            <b-form-input class="col-lg-6 col-md-11 col-xm-11 input-field"
                                                v-model="new_password" name="new_password" type="password">
                                            </b-form-input>
                                            <v-tooltip color="error" right v-if="v$.new_password.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.new_password.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>
                                    <div class="form-row">

                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="confrim-password" class="col-lg-4 col-md-6 label-input">تأكيد
                                                كلمة
                                                السر</label>
                                            <b-form-input class="col-lg-6 col-md-11 col-xm-11 input-field"
                                                v-model="confrim" name="confrim-password" type="password">
                                            </b-form-input>
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

                                    <div class="buttons form-row row-bottom" style="margin-top:60px; float: left;">
                                        <div class="float-left">
                                            <router-link to="/setting2">
                                                <b-button type="submit" class="button-add">
                                                    <font-awesome-icon icon="fas fa-arrow-right"
                                                        class="icon-button-right" />
                                                    السابق
                                                </b-button>
                                            </router-link>
                                        </div>
                                        <div class="float-rigth">
                                            <!-- <router-link to="/setting3"> -->
                                            <b-button type="button" class="button-add" v-on:click="validatePassword">
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
import { sameAs, minLength, helpers, requiredIf } from '@vuelidate/validators'

export default {
    name: "Setting5",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            old_password: '',
            new_password: '',
            confrim: '',
            valid_password: true,
        };
    },
    validations() {
        return {
            old_password: {
                requiredIf: helpers.withMessage('هذا الحقل مطلوب', requiredIf(this.new_password != '')),
                minLength: helpers.withMessage('يجب ان تتكون كلمة السر من 8 رموز على الاقل', minLength(8))
            },
            new_password: {
                minLength: helpers.withMessage('يجب ان تتكون كلمة السر من 8 رموز على الاقل', minLength(8))
            },
            confrim: {
                requiredIf: helpers.withMessage('هذا الحقل مطلوب', requiredIf(this.new_password != '')),
                sameAs: helpers.withMessage('تأكيد كلمة السر غير صحيح', sameAs(this.new_password))
            },
        }
    },
    
    methods: {

        validatePassword() {
            this.$store.state.id_persone = localStorage.getItem("id_persone")
            // console.log(this.old_password)
            // console.log(this.$store.state.id_persone)
            this.v$.$validate()
            if (!this.v$.$error) {
                if (this.old_password != '') {
                    console.log(this.old_password)
                    this.axios.post("http://" + this.$store.state.ip + "api/settings/storeManager/true_password", { old_password: this.old_password, persone_id: this.$store.state.id_persone })
                    .then((res) => {
                        console.log(res.data)
                        if (res.data.data == "erorr")
                            this.valid_password = false
                        else
                            {
                                this.valid_password = true
                                this.submitForm()
                            }
                    })
                }
                else{
                    this.submitForm()
                }
            }
        },


        submitForm() {
            if (!this.v$.$error) {
                this.$router.replace({ name: 'setting3' })
                this.initData()
            }
        },

        initData() {
            this.$store.state.setting.password = this.old_password
            this.$store.state.setting.new_password = this.new_password
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
@media (max-width: 1262px) {
    .setting5 .label-input {
        text-align: right !important;
    }
}
</style>
