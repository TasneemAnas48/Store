<template>
    <div class="body-page add-product4" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header"  v-if="this.route == 'add-product4'">
                    <div class="d-flex justify-content-between align-items-center add">
                        إضافة منتج
                        <router-link to="/view-product">
                            <b-button class="button-view">عرض المنتجات</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-header"  v-if="this.route == 'edit-product4'">
                    <div class="d-flex justify-content-between align-items-center add">
                        تعديل منتج
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
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <form class="form-input">
                                <div class="form-row">
                                    <label for="replace" class="col-lg-3 label-input">تبديل</label>

                                    <b-form-radio v-model="replace" class="col-lg-3 label-input" id="replace-2"
                                        name="replace" value="0">
                                        غير ممكن
                                    </b-form-radio>
                                    <b-form-radio v-model="replace" class="col-lg-3 label-input" id="replace-1"
                                        name="replace" value="1">
                                        ممكن
                                    </b-form-radio>

                                </div>

                                <div class="form-row ">
                                    <label for="present" class="col-lg-3 label-input">تغليف كهدية</label>


                                    <b-form-radio v-model="present" class="col-lg-3 label-input" id="present-2"
                                        name="present" value=0>
                                        غير ممكن
                                    </b-form-radio>
                                    <b-form-radio v-model="present" class="col-lg-3 label-input" id="present-1"
                                        name="present" value=1>
                                        ممكن
                                    </b-form-radio>
                                </div>

                                <div class="float-left row-bottom">
                                    <!-- <router-link to="/add-product5"> -->
                                    <b-button type="submit" class="button-add" v-on:click="submitForm">
                                        <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />
                                        التالي
                                    </b-button>
                                    <!-- </router-link> -->
                                </div>

                                <div class="float-left row-bottom">
                                    <router-link to="/add-product3" v-if="this.route == 'add-product4'">
                                        <b-button type="submit" class="button-add">
                                            <font-awesome-icon icon="fas fa-arrow-right" class="icon-button-right" />
                                            السابق
                                        </b-button>
                                    </router-link>
                                    <router-link :to="{ name: 'edit-product3', params: { id: id } }"
                                        v-else-if="this.route == 'edit-product4'">
                                        <b-button type="submit" class="button-add">
                                            <font-awesome-icon icon="fas fa-arrow-right" class="icon-button-right" />
                                            السابق
                                        </b-button>
                                    </router-link>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6 d-none d-xl-block d-lg-block">
                            <img src="../../assets/img/add_product5.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "AddProduct4",
    data() {
        return {
            replace: '0',
            present: 0,
            id: '',
            route: ''
        };
    },
    components: {
    },
    computed: {
        product() {
            return this.$store.state.product;
        }
    },
    methods: {
        submitForm() {
            this.$store.state.product.replace = this.replace
            this.$store.state.product.present = this.present
            if (this.$route.name == "edit-product4")
                this.$router.replace({ name: 'edit-product5' })
            else
                this.$router.replace({ name: 'add-product5' })

        },
    },
    mounted() {
        this.route = this.$route.name
        if (this.$route.name == "edit-product4") {
            this.id = this.$route.params.id
            this.axios.get("http://" + this.$store.state.ip + "api/product/show/" + this.id)
                .then(res => {
                    console.log(res.data)
                    this.replace = res.data.return_or_replace
                    this.present = res.data.gift
                    // console.log(res.data.data[0].gift)
                })
        }
    },
};
</script>



<style lang="scss">
@import '@/assets/css/Product/AddProduct.css';
@import '@/assets/css/Product/AddProduct4.css';
</style>
