<template>
    <div class="body-page setting setting4" id="body-page">
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
                            <div class="event">
                                <div class="detail">تغيير كلمة السر</div>
                            </div>
                            <div class="event">
                                <div class="detail">ادوار الصفحة</div>
                            </div>
                            <div class="event-active">
                                <div class="detail">اعدادات الموقع</div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <v-app class="col-lg-6">
                            <form class="form-input ">

                                <div class="form-row ">
                                    <label for="lang" class="col-lg-4 label-input ">لغة الموقع</label>
                                    <v-select class="col-md-7 input-field" :items="items" color=var(--main-color)
                                        :label='selected' dense solo></v-select>
                                </div>

                                <div class="form-row " style="margin-top: 40px">
                                    <label for="color" class="col-lg-4 label-input">الوان الموقع</label>
                                    <b-form-radio class="col-lg-4" id="dark" name="color" value="dark" v-model="theme">
                                        Dark
                                    </b-form-radio>
                                    <b-form-radio class="col-lg-3" id="light" name="color" value="light"
                                        v-model="theme">
                                        Light
                                    </b-form-radio>
                                </div>

                                <v-app>
                                    <div class="float-left row-bottom">
                                        <router-link to="/setting3">
                                            <b-button type="submit" class="button-add">
                                                <font-awesome-icon icon="fas fa-arrow-right"
                                                    class="icon-button-right" />
                                                السابق
                                            </b-button>
                                        </router-link>
                                    </div>
                                    <div class="float-left row-bottom">
                                        <v-dialog v-model="dialog" scrollable max-width="500px">
                                            <template v-slot:activator="{ on, attrs }">
                                                    <!-- <div style="margin-top: 20px; "> -->
                                                        <b-button type="button" class="button-add" v-bind="attrs"
                                                            v-on="on" style="margin-left:0px">
                                                            حفظ التعديلات
                                                        </b-button>
                                                    <!-- </div> -->
                                            </template>

                                            <v-card>
                                                <v-card-title>
                                                    <span class="header">حفظ التعديلات</span>
                                                </v-card-title>
                                                <v-divider></v-divider>
                                                <v-card-text>
                                                    <v-container>
                                                        <label for="password" style="text-align:right;margin-top: 10px"
                                                            class="label-input row">الرجاء ادخال كلمة المرور
                                                            الحالية</label>
                                                        <b-form-input class="input-field row" v-model="password" type="password"
                                                            name="password" style="margin-top: 30px">
                                                        </b-form-input>
                                                        <v-tooltip color="error" right v-if="v$.password.$error">
                                                            <template v-slot:activator="{ on, attrs }">
                                                                <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                                    mdi-exclamation
                                                                </v-icon>
                                                            </template>
                                                            <span>{{ v$.password.$errors[0].$message }}</span>
                                                        </v-tooltip>
                                                        <v-tooltip color="error" right v-if="!valid_password">
                                                            <template v-slot:activator="{ on, attrs }">
                                                                <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                                    mdi-exclamation
                                                                </v-icon>
                                                            </template>
                                                            <span>كلمة السر غير صحيحة</span>
                                                        </v-tooltip>
                                                    </v-container>
                                                </v-card-text>
                                                <v-divider></v-divider>
                                                <v-card-actions style="justify-content: left;margin-bottom: 10px;">
                                                    <b-button type="submit" class="button-add"
                                                        v-on:click="validPassword">حفظ</b-button>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </div>
                                    
                                </v-app>
                            </form>
                        </v-app>

                        <div class="col-lg-5 d-none d-xl-block d-lg-block">
                            <img src="../../assets/img/setting4.png" class="img-thumbnail img" />
                        </div>

                        <v-dialog v-model="dialogEdit" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title class="justify-content-center" style="padding-top: 30px"> 
                                            تم تعديل متجرك بنجاح
                                        </v-card-title>
                                        <v-card-actions style="padding-bottom: 30px">
                                            <v-spacer></v-spacer>
                                            <v-btn color="green" text @click="close">موافق 
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import useVuelidate from '@vuelidate/core'
import { required, helpers} from '@vuelidate/validators'

export default {
    name: "Setting4",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            dialog: false,
            selected: 'عربي',
            theme: '',
            items: ['عربي', 'انكليزي'],
            password: '',
            valid_password: true,
            dialogEdit: false,
        }
    },
    validations() {
        return {
            password: { required: helpers.withMessage('هذا الحقل مطلوب', required)},
        }
    },
    mounted() {
        this.theme = localStorage.getItem("theme")
    },
    computed: {
        setting() {
            return this.$store.state.setting;
        }
    },
    methods: {
        close () {
            this.dialogEdit = false
            this.$router.replace({ name: 'dashboard' })
        },
        validPassword(){
            console.log(this.$store.state.setting.id_persone)
            console.log(this.password)
            this.v$.$validate();
            if (!this.v$.$error)
                this.axios.post("http://"+this.$store.state.ip+"api/settings/storeManager/true_password", {old_password : this.password, persone_id: this.$store.state.setting.id_persone})
                .then((res) =>{
                    console.log(res.data)
                    if (res.data.data == "erorr")
                            this.valid_password = false
                    else {
                            this.valid_password = true
                            this.closeDialog()
                            this.submitForm()
                        }
                })
        },
        closeDialog(){
            this.dialog = false
        },
        submitForm() {
            this.$store.state.setting.password = this.password
            const formData = new FormData();
            formData.append('store_manager_id', this.$store.state.setting.id_manager)
            formData.append('store_id', this.$store.state.setting.id_store)
            formData.append('persone_id', this.$store.state.setting.id_persone)
            formData.append('name', this.$store.state.setting.name)
            formData.append('delivery_area', this.$store.state.setting.place)
            formData.append('discription', this.$store.state.setting.discription)
            formData.append('facebook', this.$store.state.setting.facebook)
            formData.append('Brand', this.$store.state.setting.logo)
            formData.append('image', this.$store.state.setting.cover)
            formData.append('username', this.$store.state.setting.username)
            formData.append('email', this.$store.state.setting.email)
            formData.append('old_password', this.$store.state.setting.password)
            formData.append('password', this.$store.state.setting.new_password)

            if (this.$store.state.setting.helper_name == undefined)
                formData.append('helper_name', "")
            else
                formData.append('helper_name', this.$store.state.setting.helper_name)

            if (this.$store.state.setting.helper_email == undefined)
                formData.append('helper_email', "")
            else
                formData.append('helper_email', this.$store.state.setting.helper_email)

            formData.append('privilladge', JSON.stringify(this.$store.state.setting.perm))

            for (var pair of formData.entries()) {
                console.log(pair)
            }

            this.axios
                .post("http://" + this.$store.state.ip + "api/settings/store/update", formData)
                .then((res) => {
                    console.log(res.data)
                    if (res.data.status == "success")
                        this.dialogEdit = true
                        
                })
        },
    },
    watch: {
        theme: function (val) {
            let htmlElement = document.documentElement;
            if (val == 'dark') {
                localStorage.setItem("theme", 'dark');
                htmlElement.setAttribute('theme', 'dark');
            } else if (val == 'light') {
                localStorage.setItem("theme", 'light');
                htmlElement.setAttribute('theme', 'light');
            }
        },
    }
};
</script>

<style lang="scss">
@import '@/assets/css/Settingg/Setting.css';
@import '@/assets/css/Settingg/Setting4.css';
</style>


