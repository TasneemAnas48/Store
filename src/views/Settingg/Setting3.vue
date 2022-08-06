<template>
    <div class="body-page setting setting3" id="body-page">
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
                            <div class="event-active">
                                <div class="detail">ادوار الصفحة</div>
                            </div>
                            <div class="event">
                                <div class="detail">اعدادات الموقع</div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-9 row" style="margin-top:30px">
                            <div class="col-lg-2"></div>
                            <div class="add-staff col-lg-8">
                                <div class="staff " style="float:right;">
                                    طاقم العمل ({{ adminNumbar }} من 2)
                                    <br>
                                    <span class="note">يمكنك إضافة ما يصل إلى 2 من
                                        المستخدمين</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="col-lg-9 row" style="margin-top:40px">
                        <div class="col-lg-2"></div>
                        <div class="col-lg-10 align-items-center"> -->
                    <!-- <table class="table table-employee">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">اسم الموظف</th>
                                        <th scope="col">البريد الالكتروني</th>
                                        <th scope="col">الصلاحيات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="e in getEmplotee" :key="e.id">
                                        <th scope="row">{{ e.id }}</th>
                                        <td>{{ e.name }}</td>
                                        <td>{{ e.title }}</td>
                                        <td>
                                            <b-li v-for="(p, i) in e.perm" :key="i">
                                                {{ p.name }} , 
                                            </b-li>
                                        </td>
                                    </tr>
                                </tbody>
                            </table> -->
                    <!-- </div>
                    </div> -->
                    <v-app>
                        <div v-if="adminNumbar < 2">
                            <form class="form-input">
                                <v-dialog v-model="dialog" max-width="600px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <div class="col-lg-9 row">
                                            <div class="col-lg-1"></div>
                                            <div class="col-lg-8" style="margin-top: 20px; ">
                                                <b-button class="button-add" v-bind="attrs" v-on="on"
                                                    style="float: right; margin-right: 20px">إضافة موظف</b-button>
                                            </div>
                                        </div>
                                    </template>

                                    <v-card>
                                        <v-card-title>
                                            <span class="header">إضافة موظف</span>
                                        </v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <v-container>
                                                <div class="form-row ">
                                                    <label for="name" class="col-lg-3 label-input ">الاسم</label>
                                                    <b-form-input class="col-lg-5 input-field" v-model="name"
                                                        name="name" required>
                                                    </b-form-input>
                                                    <v-tooltip color="error" right v-if="v$.name.$error">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                                mdi-exclamation
                                                            </v-icon>
                                                        </template>
                                                        <span>{{ v$.name.$errors[0].$message }}</span>
                                                    </v-tooltip>
                                                </div>

                                                <div class="form-row ">
                                                    <label for="email" class="col-lg-3 label-input">البريد
                                                        الالكتروني</label>
                                                    <b-form-input class="col-lg-5 input-field" v-model="email"
                                                        name="email" type="email" required></b-form-input>
                                                    <v-tooltip color="error" right v-if="v$.email.$error">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                                mdi-exclamation
                                                            </v-icon>
                                                        </template>
                                                        <span>{{ v$.email.$errors[0].$message }}</span>
                                                    </v-tooltip>
                                                </div>
                                                <div class="form-row permission">
                                                    <label for="name" class="col-lg-3 label-input ">الصلاحيات</label>
                                                </div>
                                                <div class="check">
                                                    <v-checkbox v-for="option in options" :key="option.value"
                                                        :value="option.value" v-model="checked" color=var(--main-color)
                                                        :label="option.text"></v-checkbox>
                                                </div>
                                            </v-container>
                                        </v-card-text>
                                        <v-divider></v-divider>
                                        <v-card-actions>
                                            <b-button type="button" @click="dialog = false" class="button-add">إلغاء
                                            </b-button>
                                            <b-button type="submit" class="button-add"
                                                v-on:click="submitForm">إضافة</b-button>

                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </form>
                        </div>
                        <div class="view row">
                            <div class="col-lg-1"></div>
                            <v-data-table class="col-lg-9 my-table " :headers="headers" :items="rows"
                                :hide-default-footer="true" style="margin-right: 35px">
                                <template v-slot:items="props">
                                    <td>{{ props.item.name }}</td>
                                    <td>{{ props.item.email }}</td>
                                </template>
                                <template v-slot:[`item.privillage`]="{ item }">
                                <div class="row" style="justify-content: center;">
                                    <div class="per" v-for="(i, index) in item.privillage" :key="index">
                                        <td>{{ i }}  </td>
                                    </div>
                                </div>
                            </template>
                            </v-data-table>
                        </div>
                    </v-app>
                    <div class="buttons form-row row-bottom" style="margin-top:100px; float:center">
                        <div class="float-left">
                            <router-link to="/setting5">
                                <b-button type="button" class="button-add">
                                    <font-awesome-icon icon="fas fa-arrow-right" class="icon-button-right" />
                                    السابق
                                </b-button>
                            </router-link>
                        </div>
                        <div class="float-rigth">
                            <router-link to="/setting4">
                                <b-button type="submit" class="button-add">
                                    <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />
                                    التالي
                                </b-button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script> -->
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

export default {
    name: "Setting3",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            headers: [
                { text: 'اسم', value: 'name', align: 'center' },
                { text: 'ايميل', value: 'email', align: 'center' },
                { text: 'صلاحيات', value: 'privillage' , sortable: false, align: 'center'},
            ],
            rows: [],
            dialog: false,
            adminNumbar: 0,
            name: '',
            email: '',
            options: [
                { text: 'لوحة تحكم', value: 7 },
                { text: 'مجموعات', value: 2 },
                { text: 'منتجات', value: 1 },
                { text: 'خصومات', value: 6 },
                { text: 'طلبات', value: 4 },
                { text: 'زبائن', value: 3 },
                { text: 'تقارير', value: 5 },
                { text: 'محادثة', value: 9 },
                { text: 'إعدادات', value: 8 },
            ],
            checked: [],
            // getEmplotee: [],
        };
    },
    validations() {
        return {
            name: { required: helpers.withMessage('هذا الحقل مطلوب', required) },
            email: {
                    required: helpers.withMessage('هذا الحقل مطلوب', required),
                    email: helpers.withMessage('يجب ادخال عنوان بريد الكتروني صحيح', email)
            },
        }
    },
    computed: {
        setting() {
            return this.$store.state.setting;
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        initData(){
            this.$store.state.setting.helper_name =  this.name
            this.$store.state.setting.helper_email = this.email
            this.$store.state.setting.perm = this.checked
            console.log(this.$store.state.setting.helper_name)
            console.log(this.$store.state.setting.helper_email)
            console.log(this.$store.state.setting.perm)
        },
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error){
                this.initData()
                this.closeDialog()
            }
        },
        closeDialog(){
            this.dialog = false
        },
        getData(){
            this.axios.get("http://"+this.$store.state.ip+"api/settings/PrivilladgeHelperController/my_helper/" + this.$store.state.id_manager)
            .then(res => {
                this.rows = res.data.data
                this.adminNumbar = res.data.data.length
                console.log(res.data.data)
            });
            
        }
    }

};
</script>



<style lang="scss">

@import '@/assets/css/Settingg/Setting.css';
@import '@/assets/css/Settingg/Setting3.css';
.setting3 .per{
    padding: 5px 8px 5px 8px;
    background-color: var(--second-color);
    border-radius: 20px;
    margin: 2px;
}
</style>
