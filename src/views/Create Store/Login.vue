<template>
    <div class="create-store login">
        <div class="side-left col-lg-4 d-none d-lg-block">
            <div class="image">
                <img src="../../assets/img/login.png" class="img-thumbnail img" />
            </div>
        </div>
        <div class="side-right col-lg-9 ">
            <div class="top-button">
                <router-link to="/login">
                    <b-button type="button" class="button-add button-login" style="margin-left:-15px">تسجيل الدخول</b-button>
                </router-link>
                <router-link to="/create-store1">
                    <b-button type="button" class="button-add create button-login">إنشاء متجر</b-button>
                </router-link>
            </div>
            
            <v-app>
                <form class="form-input">

                    <div class="form-row" style="justify-content: center;margin-top: 100px">
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


                    <div class="form-row" style="justify-content: center;">
                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                            <label for="password" class="col-lg-4 label-input">كلمة السر</label>
                            
                            <b-form-input class="col-lg-6  col-md-11 input-field" v-model="password"
                                name="password" type="password"></b-form-input>
                            
                            
                            <v-tooltip color="error" right v-if="v$.password.$error">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>{{v$.password.$errors[0].$message}}</span>
                            </v-tooltip>
                            <v-tooltip color="error" right v-if="!validate_">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>كلمة السر غير صحيحة </span>
                            </v-tooltip>
                            <!-- <router-link to="/forget-password"> -->
                                <span class="forget col-lg-12" v-on:click="forget">هل نسيت كلمة السر ؟ </span>
                            <!-- </router-link> -->
                        </div>

                    </div> 

                    <div class="buttons form-row " style="margin-top:50px;justify-content: flex-end;margin-left: 40px;">
                        <b-button type="button" class="button-add" v-on:click="validateEmail">
                            <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />تسجيل دخول
                        </b-button>
                    </div>
                    <template>
                        <v-dialog v-model="dialog" max-width="500px">
                            <v-card>
                                <v-spacer></v-spacer>
                                <v-card-title class="justify-content-center" style="padding-top: 30px;font-size:15px">طلب انشاء متجرك قيد المراجعة، ستصلك النتيجة على بريدك الالكتروني
                                </v-card-title>
                                <v-card-actions style="padding-bottom: 30px">
                                    <v-spacer></v-spacer>
                                    <v-btn color="var(--main-color)" text @click="cancel" style="letter-spacing: 0px;">
                                        شكرا لصبرك
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
    name: "LoginComponent",
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            valid_email: true,
            email:'',
            password:'',
            validate_: true,
            dialog: false

        };
    },
    validations () {
        return {
                
                email: {  required: helpers.withMessage('هذا الحقل مطلوب', required),},
                password: {  required: helpers.withMessage('هذا الحقل مطلوب', required), },
                
            }
    },

    methods: {
        cancel(){
            this.dialog = false
        },
        forget(){
            this.$router.replace({ name: 'forget-password' })
        },
        validateEmail() {
            this.v$.$validate()
            if (this.email != ''){
                this.axios.post("http://"+this.$store.state.ip+"api/settings/person/unique", {email : this.email})
                .then((res) =>{
                    if (res.data.data != "error")
                        this.valid_email = false
                    else 
                        {
                            this.valid_email = true
                            this.validateLogin()
                        }
                })
            }
        },
        validateLogin(){
            this.axios.post("http://"+this.$store.state.ip+"api/settings/storeManager/login", {email : this.email, password : this.password})
                .then((res) =>{
                    
                    if (res.data.message == "erorr")
                        this.validate_ = false
                    else if (res.data.message == 'wait')
                        this.dialog = true
                    else 
                        {
                            this.validate_ = true
                            this.addlocalStorage(res.data.store_id, res.data.manager_id)
                            this.submitForm()
                        }
                    this.storePer(res)
                })
        },
        submitForm(){
            if (!this.v$.$error){
                this.$router.replace({ name: 'dashboard' })
            }
        },
        storePer(res){
            localStorage.setItem("len", res.data.privilladge.length)
            for (let i = 0; i < res.data.privilladge.length; i++)
                localStorage.setItem("per: "+i, res.data.privilladge[i])
        },
        addlocalStorage(store, manager){
            console.log(store)
            console.log(manager)
            localStorage.setItem("id_store", store);
            localStorage.setItem("id_manager", manager);
            localStorage.setItem("auth", 'true');
            this.$store.state.id_store = store
            this.$store.state.id_manager = manager
        }
    },
};
</script>

<style lang="scss">
@import '@/assets/css/Create Store/CreateStore.css';
@import '@/assets/css/Create Store/login.css';
.login .forget{
    font-size: 14px;
    color: var(--main-color);
    padding-top:0px
}
.login .forget:hover{
    text-decoration: underline;
    cursor: pointer;
}
.login .v-dialog{
    border-radius: 30px;
}
</style>

