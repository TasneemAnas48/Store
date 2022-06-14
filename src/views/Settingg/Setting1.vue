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
                            <div class="event-active">
                                <div class="detail">معلومات المتجر</div>
                            </div>
                            <div class="event">
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
                        <form class="form-input col-lg-12">
                            <div class="form-row">
                                <label for="name" class="col-lg-2 label-input">اسم المتجر</label>
                                <b-form-input class="col-lg-3 input-field"  v-model="storeInfo.title" name="name" required></b-form-input>

                                <!-- <div class="col-lg-1"></div> -->

                                <label for="place" class="col-lg-2 label-input">أماكن التوصيل</label>
                                <b-form-input class="col-lg-3 input-field" v-model="storeInfo.body"  name="place" required></b-form-input>
                            </div>

                            <div class="form-row">
                                <label for="discription" class="col-lg-2 label-input">وصف المتجر</label>
                                <b-form-textarea class="col-lg-3 input-field discription" v-model="storeInfo.userId" name="discription" required>
                                </b-form-textarea>

                                <!-- <div class="col-lg-1"></div> -->

                                <label for="facebook" class="col-lg-2 label-input">حساب Facebook</label>
                                <b-form-textarea class="col-lg-3 input-field discription"  v-model="storeInfo.id" name="facebook" >
                                </b-form-textarea>
                            </div>

                            <div class="form-row">
                                <label for="logo" class="col-lg-2 label-input">العلامة التجارية</label>
                                <input type="file" @change="onFileSelected"  class="col-lg-3 input-field" >
                                <!-- <picture-input name="logo" class="col-lg-3" ref="pictureInput" width="300" height="100" 
                                    accept="image/jpeg,image/png" size="10" button-class="btn" :custom-strings="{
                                        upload: '<h1>Bummer!</h1>',
                                        drag: 'إضافة صورة',
                                    }" @change="onChangeLogo">
                                </picture-input> -->

                                <!-- <div class="col-lg-1"></div> -->

                                <label for="cover" class="col-lg-2 label-input">صورة الغلاف</label>
                                <input type="file" @change="onFileSelected2" class="col-lg-3 input-field" >
                                <!-- <picture-input name="cover" class="col-lg-3" ref="pictureInput" width="300" height="100" 
                                    accept="image/jpeg,image/png" size="10" button-class="btn" :custom-strings="{
                                        upload: '<h1>Bummer!</h1>',
                                        drag: 'إضافة صورة',
                                    }" @change="onChangeCover">
                                </picture-input> -->
                            </div>

                            <div class="float-center" style="margin-top: 100px">
                                <router-link to="/setting2">
                                    <b-button type="button" class="button-add"  v-on:click="submitForm">
                                        <font-awesome-icon icon="fas fa-arrow-left" class="icon-button" />التالي
                                    </b-button>
                                </router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/Main/Navbar.vue";
import SideBar from "@/components/Main/Sidebar.vue";
import PictureInput from "vue-picture-input";

export default {
    name: "Setting1",
    data() {
        return {
            storeInfo:{
                name:'',
                place:'',
                discription:'',
                facebook:'',
                logo:'',
                cover:'',
            },
        };
    },
    components: {
        PictureInput,
        NavBar,
        SideBar,
    },
    mounted() {
        this.axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            this.storeInfo = res.data
        });
    },
    methods: {
        onFileSelected(e){
            this.storeInfo.logo = e.target.files[0];
        },
        onFileSelected2(e){
            this.storeInfo.cover = e.target.files[0];
        },
        submitForm() {
            const formData = new FormData();
            formData.append('name', this.storeInfo.name);
            formData.append('place', this.storeInfo.place);
            formData.append('discription', this.storeInfo.discription);
            formData.append('facebook', this.storeInfo.facebook);
            formData.append('logo', this.storeInfo.logo);
            formData.append('cover', this.storeInfo.cover);
            this.axios
                .post("https://jsonplaceholder.typicode.com/posts", formData)
                .then((res) => console.log(res));
        },

        // onChangeLogo(image) {
        //     console.log("New picture selected!");
        //     if (image) {
        //         console.log("Picture loaded.");
        //         this.image = image;
        //         this.storeInfo.logo = image;
        //     } else {
        //         console.log(
        //             "FileReader API not supported: use the <form>, Luke!"
        //         );
        //     }
        // },
        // onChangeCover(image) {
        //     console.log("New picture selected!");
        //     if (image) {
        //         console.log("Picture loaded.");
        //         this.image = image;
        //         this.storeInfo.cover = image;
        //         console.log(this.image);
        //     } else {
        //         console.log(
        //             "FileReader API not supported: use the <form>, Luke!"
        //         );
        //     }
        // },
    },
};
</script>



<style lang="scss">
.setting .form-input{
    margin-top: 20px !important;
}
.setting .detail {
    position: absolute;
    white-space: nowrap;
    font-size: 12px;
    color: var(--gray-medium);
}

.setting .event-active .detail {
    line-height: 12em;
    left: -5%;
}

.setting .event .detail {
    line-height: 128px !important;
    left: -25px !important;
}
.setting .timeline:before{
    width: 59%;
    left: 20%;
}
</style>
