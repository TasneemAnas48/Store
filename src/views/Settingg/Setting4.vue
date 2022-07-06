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
                                        label="اختر لغة" dense solo></v-select>
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


                                <div class="float-left row-bottom">
                                    <router-link to="">
                                        <b-button type="submit" class="button-add">
                                            حفظ
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
                        </v-app>

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

export default {
    name: "Setting4",
    data() {
        return {
            selected: null,
            theme: '',
            items: ['عربي', 'انكليزي'],
        }
    },
    components: {
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
.setting .custom-control-label::before {
    height: 20px !important;
    width: 20px !important;
}
.setting .card-body .custom-control-label::after {
    top: 4px !important;
    left: -24px !important;
    width: 20px !important;
    height: 20px !important;
}
.setting4 .v-select__slot .v-label{
    left: auto !important;
}
.setting4 .v-input__slot {
    border: 1px solid #ced4da;
    background: white !important;
    border-radius: 30px !important;
    height: 45px !important;
    box-shadow: none !important;
    min-height: 45px !important;
}
</style>


