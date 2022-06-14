<template>
    <div class="body-page setting setting3" id="body-page">
        <nav-bar />
        <side-bar />
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
                                    طاقم العمل ({{ adminNumbar }} من 1) <span class="note">يمكنك إضافة ما يصل إلى 1 من
                                        المستخدمين</span>
                                </div>
                                <!-- <div class="note " style="float:right;">
                                    
                                </div> -->
                            </div>
                        </div>
                        <!-- <div class="col-lg-5 d-none d-xl-block d-lg-block" style="margin-top:50px">
                            <img src="../../assets/img/setting3.png" class="img-thumbnail img" />
                        </div> -->
                    </div>
                    <div class="col-lg-9 row" style="margin-top:40px">
                        <div class="col-lg-2"></div>
                        <div class="col-lg-10 align-items-center">
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
                        </div>
                    </div>
                    <div v-if="adminNumbar < 1">
                        <div class="col-lg-9 row" style="margin-top:40px">
                            <div class="col-lg-2"></div>
                            <div class="add-employee col">
                                إضافة موظف
                            </div>
                        </div>
                        <form class="form-input">
                            <div class="form-row ">
                                <label for="name" class="col-lg-2 label-input ">الاسم</label>
                                <b-form-input class="col-lg-3 input-field" v-model="name" name="name" required>
                                </b-form-input>
                            </div>

                            <div class="form-row ">
                                <label for="email" class="col-lg-2 label-input">البريد الالكتروني</label>
                                <b-form-input class="col-lg-3 input-field" v-model="email" name="email" type="email"
                                    required></b-form-input>
                            </div>
                            <div class="form-row ">
                                <b-form-group label="الصلاحيات" for="options"
                                    class="label-input  col-lg-2 label-input-custom">
                                    <b-form-checkbox v-for="option in options" :key="option.value" :value="option.value"
                                        name="options" v-model="checked">
                                        {{ option.text }}
                                    </b-form-checkbox>
                                </b-form-group>
                            </div>
                            <div class="form-row col-lg-4" style="justify-content: end;">
                                <div>
                                    <b-button class="button-add-staf" v-on:click="submitForm">إضافة موظف</b-button>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div class="buttons form-row" style="margin-top:100px; float:center">
                        <div class="float-left">
                            <router-link to="/setting2">
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


<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>
<script>

import NavBar from "@/components/Main/Navbar.vue";
import SideBar from "@/components/Main/Sidebar.vue";

export default {
    name: "Setting3",
    data() {
        return {
            // employee:[{
            //     id:'1',
            //     name:'tasneem',
            //     email:'tasneem@gmail.com',
            //     perm:[
            //         {
            //             name:'group',
            //         },
            //         {
            //             name:'product',
            //         },
            //     ],
            // }],
            adminNumbar: 0,
            name: '',
            email: '',
            options: [
                { text: 'المنتجات', value: 'products' },
                { text: 'المجموعات', value: 'groups' },
                { text: 'الزبائن', value: 'customers' },
                { text: 'الطلبات', value: 'orders' }
            ],
            checked: [],
            // getEmplotee: [],
        };
    },
    components: {
        NavBar,
        SideBar,
    },
    mounted() {
        this.axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            this.options = res.data;
        });
    },
    methods: {
        submitForm() {
            this.axios
                .post("https://jsonplaceholder.typicode.com/posts", {
                    name: this.name,
                    email: this.email,
                    checked: this.checked,
                })
                .then((res) => console.log(res));
        },
    }

};
</script>



<style lang="scss">
.button-add-staf {
    border-radius: 20px !important;
    background-color: white !important;
    font-size: 17px !important;
    border-color: var(--main-color) !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
    margin-left: 10px !important;
    color: var(--main-color) !important;
}

.button-add-staf:hover {
    background-color: var(--main-color) !important;
    color: white !important;
}

.setting3 .form-input {
    margin-top: 0px !important
}

.setting3 .label-input-custom {
    float: right
}

.add-staff {
    float: right;
}

.staff {
    font-size: 20px;
    color: #464646;
}

.add-employee {
    font-size: 20px;
    color: #464646;
    float: right;
    text-align: right;
}

.note {
    font-size: 15px;
    color: var(--gray-medium);
    margin-top: 20px;
}

.table-employee {
    border-bottom: 2px solid #dee2e6;
}
</style>
