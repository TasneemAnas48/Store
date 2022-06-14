<template>
    <div class="body-page setting" id="body-page">
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
                            <div class="event-active">
                                <div class="detail">معلومات شخصية</div>
                            </div>
                            <div class="event">
                                <div class="detail">ادوار الصفحة</div>
                            </div>
                            <div class="event">
                                <div class="detail">اعدادات الموقع</div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-7" style="margin-top:30px">
                            <form class="form-input " >

                                <div class="form-row ">

                                    <label for="name" class="col-lg-3 label-input ">الاسم</label>
                                    <b-form-input class="col-lg-8 input-field"  v-model="personalInfo.body" name="name" required></b-form-input>
                                </div>

                                <div class="form-row ">
                                    <label for="email" class="col-lg-3 label-input">البريد الالكتروني</label>
                                    <b-form-input class="col-lg-8 input-field"  v-model="personalInfo.title" name="email" type="email" required>
                                    </b-form-input>
                                </div>

                                <div class="form-row ">
                                    <label for="password" class="col-lg-3 label-input">كلمة السر</label>
                                    <b-form-input class="col-lg-8 input-field" v-model="personalInfo.id" name="password" type="password" required>
                                    </b-form-input>
                                </div>

                                <div class="buttons form-row" style="margin-top:60px; float: left;">

                                    <div class="float-left">
                                        <router-link to="/setting1">
                                            <b-button type="submit" class="button-add">
                                                <font-awesome-icon icon="fas fa-arrow-right"
                                                    class="icon-button-right" />
                                                السابق
                                            </b-button>
                                        </router-link>
                                    </div>
                                    <div class="float-rigth">
                                        <router-link to="/setting3">
                                            <b-button type="button" class="button-add" v-on:click="submitForm">
                                                <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />
                                                التالي
                                            </b-button>
                                        </router-link>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-5 d-none d-xl-block d-lg-block">
                            <img src="../../assets/img/create_store2.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/Main/Navbar.vue";
import SideBar from "@/components/Main/Sidebar.vue";

export default {
    name: "Setting2",
    data() {
        return {
            personalInfo:{
                name:'',
                email:'',
                password:"",
            },
        };
    },
    mounted() {
        this.axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            this.personalInfo = res.data;
            // console.log(this.getInfo.title);
            // console.log(res.data);
        });
    },
    methods: {
        submitForm() {
            this.axios
                .post("https://jsonplaceholder.typicode.com/posts", {
                    name: this.personalInfo.name,
                    email: this.personalInfo.email,
                    password: this.personalInfo.password,
                })
                .then((res) => console.log(res));
                console.log(this.personalInfo);
        },
    },
    components: {
        NavBar,
        SideBar,
    },

};
</script>



<style lang="scss">

</style>
