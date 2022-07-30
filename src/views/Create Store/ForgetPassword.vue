<template>
    <div class="create-store login forget">
        <div class="side-left col-lg-5 d-none d-lg-block">
            <div class="image">
                <img src="../../assets/img/forget.png" class="img-thumbnail img" />
            </div>
        </div>
        <div class="side-right col-lg-8">
            <div class="title col-lg-4 col-md-6">البحث عن حسابك</div>
            <v-app>
                <form class="form-input">

                    <div class="form-row" style="justify-content: center;margin-top: 50px">
                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                            <label for="email" class="col-lg-4 label-input">البريد الالكتروني</label>
                            <b-form-input class="col-lg-6 col-md-11 input-field" v-model.trim="email"
                                name="email" type="email" style="padding-left: 30px;"></b-form-input>
                            <v-tooltip color="error" right v-if="v$.email.$error">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>{{v$.email.$errors[0].$message}}</span>
                            </v-tooltip>
                            <v-tooltip color="error" right v-if="!valid_email">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span> الايميل غير موجود </span>
                            </v-tooltip>
                            
                        </div>
                    </div> 


                    <div class="buttons form-row " style="margin-top:50px;justify-content: flex-end;margin-left:30px">
                        <b-button type="button" class="button-cancel" v-on:click="cancel"> الغاء
                        </b-button>
                        <b-button type="button" class="button-add" v-on:click="validateEmail"> بحث
                        </b-button>
                        
                    </div>
                    <template>
                        <v-dialog v-model="dialog" max-width="500px">
                            <v-card>
                                <v-spacer></v-spacer>
                                <v-card-title class="justify-content-center" style="padding-top: 30px;font-size:16px">تم ارسال ايميل لتعيين كلمة سر جديدة، الرجاء تفقد بريدك الالكتروني
                                </v-card-title>
                                <v-card-actions style="padding-bottom: 30px">
                                    <v-spacer></v-spacer>
                                    <v-btn color="var(--main-color)" text @click="cancel" style="letter-spacing: 0px;">
                                        موافق
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
import { required, helpers } from '@vuelidate/validators'

export default {
    name: "ForgetPassword",
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            valid_email: true,
            email:'',
            validate_: true,
            dialog: false,

        };
    },
    validations () {
        return {
                
                email: {  required: helpers.withMessage('هذا الحقل مطلوب', required),},
            }
    },

    methods: {
        
        cancel(){
            this.$router.replace({ name: 'login' })
        },
        validateEmail() {
            console.log("cccccccccccccc")
            this.v$.$validate()
            if (this.email != ''){
                this.axios.post("http://"+this.$store.state.ip+"api/settings/person/unique", {email : this.email})
                .then((res) =>{
                    if (res.data.data != "error")
                        this.valid_email = false
                    else 
                        {
                            this.valid_email = true
                            console.log("3eeeeeeeeeeeee")
                            this.submitForm()
                        }
                })
            }
        },

        submitForm(){
            console.log("rrrrrrrrrrr")
            if (!this.v$.$error){
                this.axios.post("http://"+this.$store.state.ip+"api/settings/storeManager/forget_password", {email : this.email})
                .then((res) =>{
                    console.log(res)
                    console.log(res.statusText == "OK")
                        this.dialog = true
                })
                // this.$router.replace({ name: 'reset-password' })
            }
        },
    },
};
</script>

<style lang="scss">
@import '@/assets/css/Create Store/CreateStore.css';
@import '@/assets/css/Create Store/login.css';
@media (max-width: 767px) {
    .forget .title {
        text-align: right !important;
    }
}

.login .forget{
    font-size: 14px;
    color: var(--main-color);
    padding-top:0px
}
.login .forget:hover{
    text-decoration: underline;
    cursor: pointer;
}
.forget .title {
    color: var(--main-color);
    font-size: 25px;
    margin-top: 100px;
    text-align: left;
    margin-right:50px
}
.forget .image{
    top: 35%;
    margin-left: 20px;
}
.forget .button-cancel{
    border-radius: 20px !important;
    background-color: #cacaca !important;
    font-size: 15px !important;
    border-color: #cacaca !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
    margin-left: 25px;
    color: rgb(68, 68, 68) !important
}
.forget .button-add{
    font-size: 15px !important;
}
.forget .v-dialog{
    border-radius: 30px;
}
</style>

