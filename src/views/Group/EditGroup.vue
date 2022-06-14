<template>
    <div class="body-page" id="body-page">
        <nav-bar />
        <side-bar />
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        تعديل مجموعة
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
                                    <b-form-input value="address" v-model="address" class="col-lg-9 input-field" name="address" required></b-form-input>
                                </div>

                                <div class="form-row">
                                    <label for="discription" class="col-lg-2 label-input">شرح</label>

                                    <b-form-textarea value="discription" v-model="discription" class="col-lg-9 input-field discription" name="discription"
                                        required></b-form-textarea>
                                </div>

                                <div class="form-row">
                                    <label for="img" class="col-lg-2 label-input">صورة</label>
                                    <input type="file" @change="onFileSelected"  class="col-lg-9 input-field">
                                    <!-- <picture-input value="image" v-model="image" name="img" class="col-lg-9" ref="pictureInput" width="300"
                                        height="100" accept="image/jpeg,image/png" size="10" button-class="btn"
                                        :custom-strings="{
                                            upload: '<h1>Bummer!</h1>',
                                            drag: 'إضافة صورة',
                                        }" @change="onChange">
                                    </picture-input> -->
                                    <!-- <input type="file" :v-model="image" id="image" placeholder="Image" name="image"/> -->
                                </div>
                                <div class="form-row float-left">
                                    <b-button type="button" class=" button-add"  v-on:click="submitForm">إنشاء</b-button>
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
    name: "EditGroup",
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
    mounted() {
        this.axios.get('https://jsonplaceholder.typicode.com/photos/1')
        .then(res => {
            this.address = res.data.title;
            this.discription = res.data.title;
            this.image = res.data.title;
        });
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

</style>
