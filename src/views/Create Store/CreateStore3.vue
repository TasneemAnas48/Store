<template>
    <div class="create-store">
        <div class="side-left col-lg-3">
            <div class="image">
                <img src="../../assets/img/create_store3.png" class="img-thumbnail img" />
            </div>
        </div>
        <div class="side-right col-lg-9 ">
            <div class="address">
                <p>إنشاء متجر</p>
            </div>
            <div class="line">
                <div class="timeline">
                    <div class="event">
                        <div class="detail">معلومات المتجر</div>
                    </div>
                    <div class="event">
                        <div class="detail">معلومات شخصية</div>
                    </div>
                    <div class="event-active">
                        <div class="detail">اعدادات الموقع</div>
                    </div>

                </div>
            </div>
            <form class="form-input">

                <div class="form-row ">
                    <label for="lang" class="col-lg-2 label-input ">لغة الموقع</label>
                    <select class="selectpicker col-lg-5 input-field" name="lang">
                        <option>انكليزي</option>
                        <option>عربي</option>
                    </select>
                </div>

                <div class="form-row " style="margin-top: 60px">
                    <label for="color" class="col-lg-2 label-input">الوان الموقع</label>
                    <b-form-radio class="col-lg-3" id="dark" name="color" value="dark" v-model="theme">
                        Dark
                    </b-form-radio>
                    <b-form-radio class="col-lg-3" id="light" name="color" value="light" v-model="theme"
                        style="padding-left: 50px;">
                        Light
                    </b-form-radio>
                </div>


                <div class="buttons form-row" style="margin-top:100px">

                    <div class="float-left">
                        <router-link to="/create-store2">
                            <b-button type="submit" class="button-add">
                                <font-awesome-icon icon="fas fa-arrow-right" class="icon-button-right" />السابق
                            </b-button>
                        </router-link>
                    </div>
                    <div class="float-rigth">
                        <router-link to="/create-store3">
                            <b-button type="submit" class="button-add">إنشاء متجر
                            </b-button>
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>


<script>

export default {
    name: "CreateStore3",
    data() {
        return {
            theme: ''

        }
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
.custom-control-label::before {
    height: 20px !important;
    width: 20px !important;
}

.create-store .custom-control-label::after {
    top: 2px !important;
    left: -29px !important;
    width: 20px !important;
    height: 20px !important;
}

.create-store .custom-radio .custom-control-label::before {
    top: 2px !important;
    margin-left: -5px !important;
}

.create-store .custom-control-label::before {
    background-color: white !important;
    border: var(--main-color) solid 1px !important;
}
</style>

