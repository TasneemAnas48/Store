<template>
    <div class="body-page" id="body-page">
        <nav-bar />
        <side-bar />
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        إضافة منتج
                        <router-link to="/view-product">
                            <b-button class="button-view">عرض المنتجات</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-body">
                    <div class="line">
                        <div class="timeline">
                            <div class="event-active">
                                <div class="detail"></div>
                            </div>
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                        </div>
                    </div>

                    <div class="row align-items-center">

                        <div class="col-lg-6">
                            <form class="form-input">
                                <div class="form-row">
                                    <label for="address" class="col-lg-2 label-input">عنوان</label>
                                    <b-form-input v-model="product.address" class="col-lg-9 input-field" name="address" required></b-form-input>
                                </div>

                                <div class="form-row">
                                    <label for="discription" class="col-lg-2 label-input">شرح</label>

                                    <b-form-textarea v-model="product.discription" class="col-lg-9 input-field discription" name="discription"
                                        required></b-form-textarea>
                                </div>
                                <div class="form-row">
                                    <label for="img" class="col-lg-2 label-input">صورة</label>
                                    <input type="file" @change="onFileSelected"  class="col-lg-9 input-field" >
                                    <!-- <picture-input v-model="product.image" name="img" class="col-lg-9" ref="pictureInput" width="300"
                                        height="100" accept="image/jpeg,image/png" size="10" button-class="btn"
                                        :custom-strings="{
                                            upload: '<h1>Bummer!</h1>',
                                            drag: 'إضافة صورة',
                                        }" @change="onChange">
                                    </picture-input> -->
                                </div>
                                <div class="float-left row-bottom">
                                    <router-link to="/add-product2">
                                        <b-button type="submit" class="button-add" >
                                            <font-awesome-icon icon="fas fa-arrow-left" class="icon-button" />التالي
                                        </b-button>
                                    </router-link>
                                </div>


                            </form>
                        </div>
                        <div class="col-lg-6 d-none d-xl-block d-lg-block">
                            <img src="../../assets/img/add_product1.png" class="img-thumbnail img" />
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
    name: "AddProduct",
    data() {
        return {
            
        };
    },
    components: {
        PictureInput,
        NavBar,
        SideBar,
    },
    computed:{
        product(){
            return this.$store.state.product;
        }
    },
    methods: {
        onFileSelected(e){
            this.$store.state.product.image = e.target.files[0];
        },
    },
};
</script>


<style lang="scss">
.body-page .line {
    height: 100px;
    margin-bottom: 30px;
}

.body-page .timeline {
    height: 250px;
    margin: 0em;
    line-height: 118px;
    position: relative;
    text-align: center;
}

.body-page .timeline:before {
    content: "";
    position: absolute;
    width: 80%;
    top: 54%;
    left: 10%;
    height: 3px;
    margin-top: -77px;
    background: var(--second-color);
}

.body-page .event-active {
    width: 55px;
    height: 55px;
    position: relative;
    margin: 0 50px;
    display: inline-block;
    background: var(--second-color);
    vertical-align: middle;
    border-radius: 50%;
}

.body-page .event {
    width: 10px;
    height: 40px;
    position: relative;
    margin: 0 50px;
    display: inline-block;
    background: transparent;
    vertical-align: middle;
    border-radius: 50%;
}


.body-page .detail {
    position: absolute;
    line-height: 1em;
    white-space: nowrap;
    left: 100%;
}

.body-page .event-active:before,
.body-page .event:before {
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


.body .card {
    height: auto;
    padding-bottom: 40px;
    box-shadow: 0 1px 10px rgb(32 33 36 / 15%);
    border-radius: 30px !important;
    margin: 20px;
}

.body .card-header {
    font-size: 17px;
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
    font-size: 15px !important;
    border-color: var(--main-color) !important;
}

.button-add {
    border-radius: 20px !important;
    background-color: var(--main-color) !important;
    font-size: 15px !important;
    border-color: var(--main-color) !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
    margin-left: 10px !important;
}

.form-input {
    margin-right: 40px;
}

.input-field {
    border-radius: 30px !important;
    height: 45px !important;
}

.form-control:focus {
    border-color: var(--main-color) !important;
    box-shadow: none !important;
}

.discription {
    height: 100px !important;
}

.label-input {
    font-size: 16px;
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
    font-size: 16px !important;
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

.icon-button {
    color: var(--second-color);
    font-size: 15px;
    float: left;
    margin-top: 6px;
    margin-right: 6px;
}
.row-bottom{
    margin-top:50px
}
</style>
