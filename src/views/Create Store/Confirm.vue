<template>
    <div class="create-store login confirm">
        <div class="side-left col-lg-4 d-none d-lg-block">
            <div class="image">
                <img src="../../assets/img/confirm.png" class="img-thumbnail img" />
            </div>
        </div>
        <div class="side-right col-lg-9 ">
            <div class="title col-lg-11"> تم إرسال رمز التأكيد إلى بريدك الالكتروني</div>

            <v-app>
                <form class="form-input">
                    <div class="form-row" style="justify-content: center;margin-top: 60px">
                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                            <label for="code" class="col-lg-4 label-input">رمز التأكيد</label>
                            <v-tooltip bottom color=var(--gray-medium)>
                                <template v-slot:activator="{ on, attrs }">
                                    <b-form-input class="col-lg-6 col-md-11 input-field" v-model.trim="code" name="code"
                                        style="padding-left: 30px;" v-bind="attrs" v-on="on"></b-form-input>

                                </template>
                                <span>لديك {{try_}} من المحاولات</span>
                            </v-tooltip>
                            <v-tooltip color="error" right v-if="v$.code.$error">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>{{ v$.code.$errors[0].$message }}</span>
                            </v-tooltip>
                            <v-tooltip color="error" right v-if="!confirm">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                        mdi-exclamation
                                    </v-icon>
                                </template>
                                <span>رمز التأكيد غير صحيح</span>
                            </v-tooltip>
                            <template v-if="re_create">

                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title class="justify-content-center" style="padding-top: 30px"> 
                                            انتهت محاولاتك لإدخال رمز التأكيد، الرجاء اعادة إنشاء متجر جديد
                                        </v-card-title>
                                        <v-card-actions style="padding-bottom: 30px">
                                            <v-spacer></v-spacer>
                                            <v-btn color="var(--gray-medium)" text @click="closeDelete">موافق 
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </template>
                        </div>
                    </div>


                    <div class="buttons form-row " style="margin-top:50px;justify-content: flex-end;margin-left: 40px;">
                        <b-button type="button" class="button-add" v-on:click="submitForm">
                            <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />تأكيد الحساب
                        </b-button>
                    </div>
                </form>
            </v-app>
        </div>
    </div>
</template>


<script>
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

export default {
    name: "Confirm",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            code: '',
            try_: 5,
            confirm: true,
            re_create: false,
            dialogDelete: false,
        };
    },
    validations() {
        return {
            code: { required: helpers.withMessage('هذا الحقل مطلوب', required), }
        }
    },
    watch: {
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },

    methods: {
        closeDelete () {
            this.dialogDelete = false
            this.$router.replace({ name: 'create-store1' })
        },
        submitForm() {
            this.v$.$validate()
            if (!this.v$.$error) {
                this.confrimCode()
                
            }
        },
        confrimCode() {
            this.$store.state.product.id_store = localStorage.getItem("id_store")
            this.$store.state.product.id_manager = localStorage.getItem("id_manager")
            this.axios.post("http://" + this.$store.state.ip + "api/settings/storeManager/verify_email", { code: this.code, store_id: this.$store.state.product.id_store, manager_id: this.$store.state.product.id_manager })
                .then((res) => {
                    console.log(res.data)
                    if (res.data.message == 'false'){
                        this.try_ = this.try_ - 1
                        localStorage.setItem("try", this.try_)
                        this.confirm = false
                        if(this.try_ == 0)
                            this.reject()
                    }
                })
        },
        reject(){
            this.axios.post("http://" + this.$store.state.ip + "api/admin/WaitingStore/reject_store/" + this.$store.state.product.id_store)
                .then((res) => {
                    this.dialogDelete = true
                    this.re_create = true
                    console.log(res.data)
                    
                })
        },

    },
    mounted(){
        this.try_ = localStorage.getItem("try")
    }
};
</script>

<style lang="scss">
@import '@/assets/css/Create Store/CreateStore.css';
@import '@/assets/css/Create Store/login.css';

.confirm .title {
    color: var(--main-color);
    font-size: 25px;
    margin-top: 100px;
}
.confirm .mdi-exclamation{
    top: -5px
}
</style>

