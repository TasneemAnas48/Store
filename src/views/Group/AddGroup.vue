<template>
    <div class="body-page" id="body-page">
        <nav-bar />
        <side-bar />
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        إنشاء مجموعة
                        <router-link to="/view-group">
                            <b-button class="button-view">عرض المجموعات</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <form class="form-input">
                                <div class="form-row">
                                    <label for="address" class="col-lg-2 label-input">عنوان</label>
                                    <b-form-input v-model="address" class="col-lg-9 input-field" name="address"
                                        required></b-form-input>
                                </div>

                                <div class="form-row">
                                    <label for="discription" class="col-lg-2 label-input">شرح</label>

                                    <b-form-textarea v-model="discription" class="col-lg-9 input-field discription"
                                        name="discription" required></b-form-textarea>
                                </div>

                                <div class="form-row">
                                    <label for="img" class="col-lg-2 label-input">صورة</label>
                                    <input type="file" @change="onFileSelected"  class="col-lg-9 input-field" >
                                    <!-- <picture-input v-model="image" name="img" class="col-lg-9" ref="pictureInput" width="300"
                                        height="100" accept="image/jpeg,image/png" size="10" button-class="btn"
                                        :custom-strings="{
                                            upload: '<h1>Bummer!</h1>',
                                            drag: 'إضافة صورة',
                                        }" @change="onChange">
                                    </picture-input> -->
                                    <!-- <b-form-file v-model="image" class="col-lg-9  input-field" drop-placeholder="Drop file here..."></b-form-file> -->
                                </div>
                                <div class="form-row float-left">
                                    <b-button type="button" class=" button-add" v-on:click="submitForm">إنشاء</b-button>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6 d-none d-xl-block d-lg-block">
                            <img src="../../assets/img/add_group.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PictureInput from "vue-picture-input";
import NavBar from "@/components/Main/Navbar.vue";
import SideBar from '@/components/Main/Sidebar.vue';
export default {
    name: "AddGroup",
    data() {
        return {
            address: '',
            discription: '',
            image: ''
        };
    },
    components: {
        PictureInput,
        NavBar,
        SideBar,
    },
    methods: {
        onFileSelected(e){
            this.image = e.target.files[0];
        },
        submitForm() {
            const formData = new FormData();
            formData.append('name', this.address);
            formData.append('discription', this.discription);
            formData.append('image', this.image);
            this.axios
                .post("https://jsonplaceholder.typicode.com/posts", formData)
                .then((res) => console.log(res));
        },
        // onChange(image) {
        //     console.log("New picture selected!");
        //     if (image) {
        //         console.log("Picture loaded.");
        //         this.image = image;
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
.body .card {
    height: auto;
    padding-bottom: 40px;
    box-shadow: 0 1px 10px rgb(32 33 36 / 15%);
    border-radius: 30px !important;
    margin: 20px;
}

.body .card-header {
    font-size: 20px;
    padding: 15px;
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
    background-color: white;
    margin-bottom: 10px;
    height: 70px;
}

.add {
    padding-right: 10px;
    color: var(--main-color);
}

.button-view {
    border-radius: 20px !important;
    background-color: var(--main-color) !important;
    font-size: 17px !important;
    border-color: var(--main-color) !important;
}

.button-add {
    border-radius: 20px !important;
    background-color: var(--main-color) !important;
    font-size: 17px !important;
    border-color: var(--main-color) !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
    margin-left: 7px !important;
}

.form-input {
    margin-right: 40px;
}

.input-field {
    border-radius: 30px !important;
    height: 45px !important;
}

.form-control:focus {
    border-color: var(--second-color) !important;
    box-shadow: 0 0 0 2px rgba(255, 0, 242, 0.116) !important;
}

.discription {
    height: 100px !important;
}

.label-input {
    font-size: 18px;
    color: var(--gray-medium);
    margin-left: 20px;
}

.form-row {
    margin-top: 40px;
    margin-bottom: 40px;
}

.img {
    border: none !important;
    max-width: 70% !important;
}

.picture-preview {
    border-radius: 20px !important;
    background-color: var(--second-color) !important;
    border: 1px solid #ced4da !important;
}

.picture-inner {
    border-radius: 20px !important;
    background-color: white !important;
    border: 1px dashed var(--main-color) !important;
}

.picture-inner-text {
    background-color: var(--second-color) !important;
    height: 30px !important;
    width: 140px !important;
    border-radius: 10px !important;
    color: var(--main-color) !important;
    font-size: 18px !important;
    margin-top: 4px !important;
}

.picture-inner .picture-inner-text[data-v-431cb064] {
    display: block !important;
}

.btn-secondary:focus,
.btn-secondary.focus {
    box-shadow: 0 0 0 2px rgba(255, 0, 242, 0.116) !important;
}

.picture-inner[data-v-431cb064] {
    width: calc(100% - 3.5em) !important;
    height: calc(100% - 3.2em) !important;
    display: flex !important;
    justify-content: center;
    align-items: center;
}

.preview-container {
    max-width: none !important;
}

.picture-input[data-v-431cb064] {
    margin: 0px !important;
    padding-left: 0px !important;
}
</style>
