<template>
    <div class="body-page setting setting4" id="body-page">
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
                            <div class="event">
                                <div class="detail">ادوار الصفحة</div>
                            </div>
                            <div class="event-active">
                                <div class="detail">اعدادات الموقع</div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <form class="form-input col-lg-6">
                            <div class="form-row ">
                                <label for="lang" class="col-lg-3 label-input ">لغة الموقع</label>
                                <select class="selectpicker col-lg-7 input-field" name="lang">
                                    <option>انكليزي</option>
                                    <option>عربي</option>
                                </select>
                            </div>
                            <div class="form-row " style="margin-top: 60px">
                                <label for="color" class="col-lg-3 label-input">الوان الموقع</label>
                                <b-form-radio class="col-lg-4" id="dark" name="color" value="dark" v-model="theme">
                                    Dark
                                </b-form-radio>
                                <b-form-radio class="col-lg-4" id="light" name="color" value="light" v-model="theme"
                                    style="padding-left: 50px;">
                                    Light
                                </b-form-radio>
                            </div>
                                <div class="float-left row-bottom">
                                    <router-link to="">
                                        <b-button type="submit" class="button-add">
                                            إنشاء متجر
                                        </b-button>
                                    </router-link>
                                </div>
                                <div class="float-left row-bottom">
                                    <router-link to="/setting3">
                                        <b-button type="submit" class="button-add">
                                            <font-awesome-icon icon="fas fa-arrow-right" class="icon-button-right" />
                                            السابق
                                        </b-button>
                                    </router-link>
                                </div>
                        </form>
                        <div class="col-lg-5 d-none d-xl-block d-lg-block">
                            <img src="../../assets/img/setting4.png" class="img-thumbnail img" />
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
    name: "Setting4",
    components: {
        NavBar,
        SideBar,
    },
    data(){
        return{
            theme:''
            
        }
    },
    watch: {
        theme: function(val) {
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
.setting .custom-control-label::after {
    top: 4px !important;
    left: -24px !important;
    width: 20px !important;
    height: 20px !important;
}

</style>

