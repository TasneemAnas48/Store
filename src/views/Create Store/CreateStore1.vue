<template>
    <div class="create-store">
        <div class="side-left col-lg-3">
            <div class="image">
                <img src="../../assets/img/create_store1.png" class="img-thumbnail img" />
            </div>
        </div>
        <div class="side-right col-lg-9">
            <div class="address">
                <p>إنشاء متجر</p>
            </div>
            <div class="line">
                <div class="timeline">
                    <div class="event-active">
                        <div class="detail">معلومات المتجر</div>
                    </div>
                    <div class="event">
                        <div class="detail">معلومات شخصية</div>
                    </div>
                    <div class="event">
                        <div class="detail">اعدادات الموقع</div>
                    </div>
                </div>
            </div>
            <form class="form-input">
                <div class="form-row">
                    <label for="name" class="col-lg-2 label-input">اسم المتجر</label>
                    <b-form-input class="col-lg-3 input-field" v-model="storeInfo.name" name="name" required>
                    </b-form-input>

                    <div class="col-lg-1"></div>

                    <label for="place" class="col-lg-2 label-input">أماكن التوصيل</label>
                    <b-form-input class="col-lg-3 input-field" v-model="storeInfo.place" name="place" required>
                    </b-form-input>
                </div>

                <div class="form-row">
                    <label for="discription" class="col-lg-2 label-input">وصف المتجر</label>
                    <b-form-textarea class="col-lg-3 input-field discription" v-model="storeInfo.discription"
                        name="discription" required>
                    </b-form-textarea>

                    <div class="col-lg-1"></div>

                    <label for="facebook" class="col-lg-2 label-input">حساب Facebook</label>
                    <b-form-textarea class="col-lg-3 input-field discription" v-model="storeInfo.facebook"
                        name="facebook" required>
                    </b-form-textarea>
                </div>

                <div class="form-row">
                    <label for="logo" class="col-lg-2 label-input">العلامة التجارية</label>
                    <!-- <picture-input name="logo" class="col-lg-3" ref="pictureInput" width="300" height="100"
                        accept="image/jpeg,image/png" size="10" button-class="btn" v-model="storeInfo.logo"
                        :custom-strings="{
                            upload: '<h1>Bummer!</h1>',
                            drag: 'إضافة صورة',
                        }" @change="onChangeLogo">
                    </picture-input> -->
                    <input type="file" @change="onFileSelected"  class="col-lg-3 input-field" >
                    <div class="col-lg-1"></div>

                    <label for="cover" class="col-lg-2 label-input">صورة الغلاف</label>
                    <!-- <input id="file-upload" type="file"/> -->
                    <input type="file" @change="onFileSelected2"  class="col-lg-3 input-field" >
                    <!-- <picture-input name="cover" class="col-lg-3" ref="pictureInput" width="300" height="100"
                        accept="image/jpeg,image/png" size="10" button-class="btn" v-model="storeInfo.cover"
                        :custom-strings="{
                            upload: '<h1>Bummer!</h1>',
                            drag: 'إضافة صورة',
                        }" @change="onChangeCover">
                    </picture-input> -->
                    <!-- <b-form-file  v-model="storeInfo.cover" class="col-lg-3  input-field" ></b-form-file> -->
                </div>

                <div class="float-center" style="margin-top: 100px">
                    <router-link to="/create-store2">
                        <b-button type="button" class="button-add" v-on:click="submitForm">
                            <font-awesome-icon icon="fas fa-arrow-left" class="icon-button" />التالي
                        </b-button>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import PictureInput from "vue-picture-input";

export default {
    name: "CreateStore1",
    data() {
        return {
            storeInfo: {
                name: "",
                place: "",
                discription: "",
                facebook: "",
                logo: "",
                cover: "",
            },
        };
    },
    components: {
        PictureInput,
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
        // submitForm() {
        //     const formData = new FormData();
        //     formData.append('name', this.storeInfo.name);
        //     formData.append('place', this.storeInfo.place);
        //     formData.append('discription', this.storeInfo.discription);
        //     formData.append('facebook', this.storeInfo.facebook);
        //     formData.append('logo', this.storeInfo.logo);
        //     formData.append('cover', this.storeInfo.cover);
        //     this.axios
        //         .post("https://jsonplaceholder.typicode.com/posts", formData)
        //         .then((res) => console.log(res));
        // },
        // onChangeLogo(image) {
        //     if (image) {
        //         this.storeInfo.image = image;
        //         this.storeInfo.logo = image;
        //     } else {
        //         console.log("FileReader API not supported");
        //     }
        // },
        // onChangeCover(image) {
        //     if (image) {
        //         this.storeInfo.image = image;
        //         this.storeInfo.cover = image;
        //     } else {
        //         console.log("FileReader API not supported");
        //     }
        // },
    },
};
</script>

<style lang="scss">
.side-left {
    display: flex;
    align-items: center;
    box-shadow: 0 1px 10px rgb(32 33 36 / 15%);
    border-radius: 30px;
    background-color: white;
    float: left;
    height: 585px;
    margin: 20px;
}

.side-left .img {
    max-width: 100% !important;
}

.address {
    display: flex;
    justify-content: center;
    padding-top: 30px;
}

.create-store p {
    color: var(--main-color);
    font-size: 40px;
}

.form-input {
    margin-right: 40px;
    margin-left: 40px;
}

.label-input {
    text-align: left;
}

.form-row {
    margin-top: 60px;
    margin-bottom: 40px;
}

.create-store .line {
    height: 100px;
    margin-bottom: 30px;
}

.create-store .timeline {
    height: 250px;
    margin: 0em;
    line-height: 118px;
    position: relative;
    text-align: center;
}

.create-store .timeline:before {
    content: "";
    position: absolute;
    width: 33%;
    top: 54%;
    left: 33.5%;
    height: 3px;
    margin-top: -77px;
    background: white;
}

.create-store .event-active {
    width: 55px;
    height: 55px;
    position: relative;
    margin: 0 50px;
    display: inline-block;
    background: white;
    vertical-align: middle;
    border-radius: 50%;
}

.create-store .event {
    width: 10px;
    height: 40px;
    position: relative;
    margin: 0 50px;
    display: inline-block;
    background: transparent;
    vertical-align: middle;
    border-radius: 50%;
}

.create-store .detail {
    position: absolute;
    white-space: nowrap;
    font-size: 12px;
    color: var(--gray-medium);
}

.create-store .event-active .detail {
    line-height: 12em;
    left: -5%;
}

.create-store .event .detail {
    line-height: 128px !important;
    left: -25px !important;
}

.create-store .event-active:before,
.create-store .event:before {
    top: 43%;
    content: "";
    position: absolute;
    left: 49%;
    margin-left: -3px;
    width: 7px;
    background: var(--main-color);
    height: 7px;
    border-radius: 50%;
}
</style>
