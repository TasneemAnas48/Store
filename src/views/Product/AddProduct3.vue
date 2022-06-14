<template>
    <div class="body-page" id="add-product3">
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
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event">
                                <div class="detail"></div>
                            </div>
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
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <form class="form-input">
                                <div class="form-row">
                                    <label for="classification" class="col-lg-3 label-input">التصنيف</label>
                                    <!-- <select v-model="product.classification" class="selectpicker col-lg-9 input-field" data-live-search="true" name="classification">
                                        <option v-for="classification in classification" :key="classification.value" :value="classification.value">{{ classification.text }}</option>

                                    </select> -->

                                    <select multiple class="col-lg-8 input-field" v-model="product.selectedClassification">
                                        <option v-for="classification in classification" :key="classification.id"
                                            :value="classification.id">{{ classification.title }}</option>

                                    </select>

                                    <!-- {{selectedClassification}} -->
                                    <!-- <b-form-select class="col-lg-9 input-field" v-model="selectedClassification" :options="options"></b-form-select> -->
                                </div>

                                <div class="form-row">
                                    <label for="group" class="col-lg-3 label-input">المجموعة</label>
                                    <!-- <select v-model="product.group" class="selectpicker col-lg-9 input-field" data-live-search="true" name="group">
                                        <option v-for="group in group" :key="group.value" :value="group.value" >{{ group.text }}</option>
                                    </select> -->

                                    <select class="col-lg-8 input-field" v-model="product.selectedGroup">
                                        <option v-for="group in group" :key="group.id"
                                            :value="group.id">{{ group.title }}</option>

                                    </select>
                                    <!-- {{selectedGroup}} -->

                                    <!-- <b-form-select class="col-lg-9 input-field" v-model="selectedGroup"
                                        :options="options"></b-form-select> -->
                                </div>

                                <div class="float-left row-bottom">
                                    <router-link to="/add-product4">
                                        <b-button type="submit" class="button-add">
                                            <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />
                                            التالي
                                        </b-button>
                                    </router-link>
                                </div>

                                <div class="float-left row-bottom">
                                    <router-link to="/add-product2">
                                        <b-button type="submit" class="button-add">
                                            <font-awesome-icon icon="fas fa-arrow-right" class="icon-button-right" />
                                            السابق
                                        </b-button>
                                    </router-link>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6 d-none d-xl-block d-lg-block">
                            <img src="../../assets/img/add_product3.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import select picker
import "bootstrap-select/dist/css/bootstrap-select.min.css";
import "bootstrap-select/dist/js/bootstrap-select.min.js";

import NavBar from "@/components/Main/Navbar.vue";
import SideBar from '@/components/Main/Sidebar.vue';

// $('.selectpicker').selectpicker('render');

export default {
    name: "AddProduct3",
    data() {
        return {
            classification: [],
            group: [],

        };
    },
    mounted() {
        this.axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            this.classification = res.data;
        });
        this.axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            this.group = res.data;
            // console.log(res.data);
        });
    },

    components: {
        NavBar,
        SideBar,
    },
    computed: {
        product() {
            return this.$store.state.product;
        }
    },
};
</script>

<style lang="scss">
.icon-button-left {
    color: var(--second-color);
    font-size: 15px;
    float: left;
    margin-top: 6px;
    margin-right: 6px;
}

.icon-button-right {
    color: var(--second-color);
    font-size: 15px;
    float: right;
    margin-top: 6px;
    margin-left: 6px;
}

.bootstrap-select .dropdown-toggle:focus {
    outline: none !important
}

// *:focus,
// *:focus-visible {
//     outline: none !important;
// }

// .btn .dropdown-toggle:focus,
// .btn .dropdown-toggle:focus-visible {
//     outline: none !important;
// }

.bootstrap-select .dropdown-toggle {
    outline: none !important;
    background-color: white !important;
    border-radius: 30px !important;
    border: 1px solid #ced4da !important;
    height: 45px !important;
    width: 100% !important;
}

// .bootstrap-select .dropdown-toggle:focus,
// .bootstrap-select>select.mobile-device:focus+.dropdown-toggle {
//     outline: none !important;
// }

.form-control {
    border-radius: 30px !important;
}

.filter-option-inner-inner {
    margin-top: 4px;
    margin-left: 10px;
    color: #495057;
}

.btn-light {
    color: #495057 !important;
}

.dropdown-item.active,
.dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: var(--main-color) !important;
}

.dropdown-menu {
    margin-top: 10px !important;
}

.dropdown-item {
    height: 40px !important;
}

.dropdown-item .text {
    margin-top: 5px !important;
}

.bootstrap-select .bs-ok-default:after {
    margin-top: 5px !important;
}
</style>
