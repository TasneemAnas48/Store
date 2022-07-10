<template>
    <div class="create-store create-store2">
        <div class="side-left col-lg-3 d-none d-lg-block">
            <div class="image">
                <img src="../../assets/img/create_store2.png" class="img-thumbnail img" />
            </div>
        </div>
        <div class="side-right col-lg-9 ">
            <div class="address">
                <p style="margin-bottom: 0px">إنشاء متجر</p>
            </div>
            <div class="line">
                <div class="timeline">
                    <div class="timeline">
                        <div class="event">
                            <div class="detail">معلومات المتجر</div>
                        </div>
                        <div class="event-active">
                            <div class="detail">معلومات شخصية</div>
                        </div>
                        <div class="event">
                            <div class="detail">اعدادات الموقع</div>
                        </div>

                    </div>

                </div>
            </div>
            <v-app>
                <form class="form-input">

                    <div class="form-row ">
                        <div class="my-input col-lg-6 row">
                            <label for="name" class="col-lg-4 label-input">الاسم</label>
                            <b-form-input class="col-lg-6 input-field" name="name"
                                v-model.trim="createStore.username"></b-form-input>
                            <v-tooltip color="error" right v-if="v$.createStore.username.$error">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>{{v$.createStore.username.$errors[0].$message}}</span>
                            </v-tooltip>
                        </div>

                        <div class="my-input col-lg-6 row" style="margin-top: -12px">
                            <label for="email" class="col-lg-4 label-input">البريد الالكتروني</label>
                            <b-form-input class="col-lg-6 input-field" v-model.trim="createStore.email"
                                name="email" type="email" style="padding-left: 30px;"></b-form-input>
                            <v-tooltip color="error" right v-if="v$.createStore.email.$error">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>{{v$.createStore.email.$errors[0].$message}}</span>
                            </v-tooltip>
                            <v-tooltip color="error" right v-if="!email">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>هذا الايميل موجود مسبقا</span>
                            </v-tooltip>
                            
                        </div>
                    </div> 


                    <div class="form-row ">
                        <div class="my-input col-lg-6 row" style="margin-top: -12px">
                            <label for="password" class="col-lg-4 label-input">كلمة السر</label>
                            <b-form-input class="col-lg-6 input-field" v-model="createStore.password"
                                name="password" type="password"></b-form-input>
                            <v-tooltip color="error" right v-if="v$.createStore.password.$error">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>{{v$.createStore.password.$errors[0].$message}}</span>
                            </v-tooltip>
                        </div>

                        <div class="my-input col-lg-6 row" style="margin-top: -12px">
                            <label for="confrim-password" class="col-lg-4 label-input">تأكيد كلمة السر</label>
                            <b-form-input class="col-lg-6 input-field" v-model="createStore.confrim"
                                name="confrim-password" type="password"></b-form-input>
                            <v-tooltip color="error" right v-if="v$.createStore.confrim.$error">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>{{v$.createStore.confrim.$errors[0].$message}}</span>
                            </v-tooltip>
                    
                        </div>

                    </div> 

                    <div class="buttons form-row" style="margin-top:50px">

                        <div class="float-left">
                            <router-link to="/create-store1">
                                <b-button type="submit" class="button-add">
                                    <font-awesome-icon icon="fas fa-arrow-right" class="icon-button-right" />السابق
                                </b-button>
                            </router-link>
                        </div>
                        <div class="float-rigth">
                            <!-- <router-link to="/create-store3"> -->
                            <b-button type="button" class="button-add" v-on:click="validateEmail">
                                <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />التالي
                            </b-button>
                            <!-- </router-link> -->
                        </div>
                    </div>
                </form>
            </v-app>
        </div>
    </div>
</template>


<script>
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators'

export default {
    name: "CreateStore2",
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            email: true,
        };
    },
    validations () {
        return {
            createStore: {
                username: {  required: helpers.withMessage('هذا الحقل مطلوب', required) },
                email: {  required: helpers.withMessage('هذا الحقل مطلوب', required),
                            email: helpers.withMessage('يجب ادخال عنوان بريد الكتروني صحيح', email) },
                password: {  required: helpers.withMessage('هذا الحقل مطلوب', required),
                                minLength: helpers.withMessage('يجب ان تتكون كلمة السر من 8 رموز على الاقل', minLength(8)) },
                confrim: {  required: helpers.withMessage('هذا الحقل مطلوب', required),
                            sameAs: helpers.withMessage('تأكيد كلمة السر غير صحيح', sameAs(this.$store.state.createStore.password)) },
            }
        }
    },
    computed: {
        createStore() {
            return this.$store.state.createStore;
        }
    },

    methods: {
        validateEmail() {
            this.v$.$validate();
            this.axios.post("http://"+this.$store.state.ip+"api/person/unique", {email : this.$store.state.createStore.email})
            .then((res) =>{
                if (res.data.data == "error")
                    this.email = false
                else 
                    {
                        this.email = true
                        this.submitForm()
                    }
            })
        },
        submitForm(){
            if (!this.v$.$error){
                this.$router.replace({ name: 'create-store3' })
            }
        }
    },
};
</script>

<style lang="scss">
@import '@/assets/css/Create Store/CreateStore.css';
@import '@/assets/css/Create Store/CreateStore2.css';
</style>

