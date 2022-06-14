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
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <form class="form-input">
                                <div class="form-row">
                                    <label for="sell" class="col-lg-3 label-input">سعر المبيع</label>
                                    <b-form-input v-model="product.sell" type="number" class="col-lg-8 input-field" name="sell" required>
                                    </b-form-input>
                                </div>

                                <div class="form-row">
                                    <label for="cost" class="col-lg-3 label-input">سعر التكلفة</label>
                                    <div class="col-lg-8 ">
                                        <b-form-input v-model="product.cost" type="number" class="input-field" name="cost" required>
                                        </b-form-input>
                                        <p class="parag-customer">لن يرى الزبائن هذا</p>
                                    </div>



                                </div>

                                <div class="float-left row-bottom">
                                    <router-link to="/add-product3">
                                        <b-button type="submit" class=" button-add">
                                            <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />
                                            التالي
                                        </b-button>
                                    </router-link>
                                </div>

                                <div class="float-left row-bottom">
                                    <router-link to="/add-product1">
                                        <b-button type="submit" class="button-add">
                                            <font-awesome-icon icon="fas fa-arrow-right" class="icon-button-right" />
                                            السابق
                                        </b-button>
                                    </router-link>
                                </div>




                            </form>
                        </div>
                        <div class="col-lg-6 d-none d-xl-block d-lg-block">
                            <img src="../../assets/img/add_product2.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/Main/Navbar.vue";
import SideBar from '@/components/Main/Sidebar.vue';

export default {
    name: "AddProduct2",
    data() {
        return {
        };
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
.parag-customer {
    color: var(--gray-medium);
    font-size: 15px;
    float: right;
    margin-top: 6px;
}
</style>
