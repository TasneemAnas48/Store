<template>
    <div class="body-page add-product4" id="body-page">
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
                                    
                                    <b-form-radio v-model="replace" class="col-lg-3 label-input" id="replace-2" name="replace"
                                        value="no">
                                        غير ممكن
                                    </b-form-radio>
                                    <b-form-radio v-model="replace" class="col-lg-3 label-input" id="replace-1" name="replace"
                                        value="yes">
                                        ممكن
                                    </b-form-radio>

                                </div>

                                <div class="form-row ">
                                    <label for="present" class="col-lg-3 label-input">تغليف كهدية</label>

                                    
                                    <b-form-radio v-model="present" class="col-lg-3 label-input" id="present-2" name="present"
                                        value="no">
                                        غير ممكن
                                    </b-form-radio>
                                    <b-form-radio v-model="present" class="col-lg-3 label-input" id="present-1" name="present"
                                        value="yes">
                                        ممكن
                                    </b-form-radio>
                                </div>

                                <div class="float-left row-bottom">
                                    <router-link to="/add-product5">
                                        <b-button type="submit" class="button-add">
                                            <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />
                                            التالي
                                        </b-button>
                                    </router-link>
                                </div>

                                <div class="float-left row-bottom">
                                    <router-link to="/add-product3">
                                        <b-button type="submit" class="button-add">
                                            <font-awesome-icon icon="fas fa-arrow-right" class="icon-button-right" />
                                            السابق
                                        </b-button>
                                    </router-link>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6 d-none d-xl-block d-lg-block">
                            <img src="../../assets/img/add_product5.png" class="img-thumbnail img"/>
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
            replace:'no',
            present:'no'
        };
    },
    components: {
    },
    computed:{
        product(){
            return this.$store.state.product;
        }
    },
    methods:{
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.$store.state.product.replace = this.replace
                this.$store.state.product.present = this.present
                this.$router.replace({ name: 'add-product5' })
            }
        },
    }
};
</script>



<style lang="scss">
@import '@/assets/css/Product/AddProduct.css';
@import '@/assets/css/Product/AddProduct4.css';

</style>
