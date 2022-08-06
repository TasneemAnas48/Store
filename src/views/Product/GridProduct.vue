<template>
    <div class="body-page  grid" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        المنتجات
                        <div class="d-flex justify-content-end ">
                            <router-link to="/view-product" style="margin-left:15px">
                                <b-button class="button-view"> عرض قائمة</b-button>
                            </router-link>
                            <router-link to="/add-product1">
                                <b-button class="button-view">إضافة منتج</b-button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <v-app>
                        <div class="row">
                            <div class="col-lg-3" v-for="(row, i) in rows" :key="i">
                                <v-card class="mx-auto" max-width="344">
                                    <v-img :src="getImage(row)" height="200px">
                                    </v-img>
                                    <div class="row" style="justify-content: space-between">
                                        <v-card-title style="margin-right: 20px">
                                            {{ row.product_name }}
                                        </v-card-title>
                                        <div v-if="row.review == 0" class="review">
                                            <v-icon color="red">mdi-emoticon-sad-outline</v-icon>
                                        </div>
                                        <div v-else-if="row.review == 1" class="review">
                                            <v-icon color="yellow">mdi-emoticon-neutral-outline</v-icon>
                                        </div>
                                        <div v-else-if="row.review == 2" class="review">
                                            <v-icon color="green">mdi-emoticon-excited-outline</v-icon>
                                        </div>
                                        <div v-else-if="row.review == 3" class="review">لايوجد</div>

                                    </div>
                                    <div class="row" style="justify-content: space-between">
                                        <v-card-subtitle  style="margin-right: 20px">
                                            {{ row.selling_price }} ل.س
                                        </v-card-subtitle>
                                        <v-card-actions  style="margin-left: 20px">
                                            <v-btn icon @click="showFun(i)">
                                                <v-icon>{{ show[i] ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                                <!-- <v-icon>{{'mdi-chevron-up' }}</v-icon> -->
                                            </v-btn>
                                        </v-card-actions>
                                    </div>
                                    <v-expand-transition>
                                        <div v-show="show[i]">
                                            <v-divider></v-divider>
                                            <v-card-text>
                                                <div class="row" style="margin-top:0px">
                                                    <p class="col-lg-6 left"> الشرح</p>
                                                    <p class="col-lg-6 right"> {{ row.discription }}</p>
                                                </div>
                                                <div class="row" style="margin-top:0px">
                                                    <p class="col-lg-6 left"> المجموعة</p>
                                                    <p class="col-lg-6 right"> {{ row.collection }}</p>
                                                </div>
                                                <div class="row" style="margin-top:0px">
                                                    <p class="col-lg-6 left"> سعر التكلفة</p>
                                                    <p class="col-lg-6 right"> {{ row.cost_price }}</p>
                                                </div>
                                                <div class="row" style="margin-top:0px">
                                                    <p class="col-lg-6 left">  تبديل</p>
                                                    <p class="col-lg-6 right" v-if="row.return_or_replace == 1"> ممكن
                                                    </p>
                                                    <p class="col-lg-6 right" v-if="row.return_or_replace == 0"> غير
                                                        ممكن</p>
                                                </div>
                                                <div class="row" style="margin-top:0px">
                                                    <p class="col-lg-6 left">تغليف كهدية</p>
                                                    <p class="col-lg-6 right" v-if="row.gift == 1"> ممكن</p>
                                                    <p class="col-lg-6 right" v-if="row.gift == 0"> غير ممكن</p>
                                                </div>
                                                <div class="row" style="margin-top:0px">
                                                    <p class="col-lg-6 left"> المناسبة</p>
                                                    <p class="col-lg-6 right"> {{ row.party }}</p>
                                                </div>
                                                <div class="row" style="margin-top:0px">
                                                    <p class="col-lg-6 left"> العمر</p>
                                                    <p class="col-lg-6 right"> {{ row.age }}</p>
                                                </div>
                                                <div class="row" style="margin-top:0px">
                                                    <p class="col-lg-6 left"> وقت التحضير</p>
                                                    <p class="col-lg-6 right"> {{ row.prepration_time }}</p>
                                                </div>
                                                <div class="row" style="margin-top:0px">
                                                    <p class="col-lg-6 left"> مرات البيع</p>
                                                    <p class="col-lg-6 right"> {{ row.num_cell }}</p>
                                                </div>
                                            </v-card-text>
                                        </div>
                                    </v-expand-transition>
                                </v-card>
                            </div>
                        </div>
                    </v-app>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ViewProduct",
    data() {
        return {
            show: [false, false, false, false, false,
                    false, false, false, false, false,
                    false, false, false, false, false,
                    false, false, false, false, false,
                    false, false, false, false, false,
                    false, false, false, false, false,
                    false, false, false, false, false,
                    false, false, false, false, false],
            rows: [],
            len: null,
        };
    },
    components: {
    },

    methods: {
        getImage(row) {
            return "http://" + this.$store.state.ip + "uploads/product/" + row.image
        },
        showFun(i){
            this.$set(this.show, i, !this.show[i])
            console.log(this.show)
        },

        getData() {
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios.get("http://" + this.$store.state.ip + "api/product/index/" + this.$store.state.id_store)
                .then(res => {
                    this.rows = res.data
                    this.len = this.rows.length
                    console.log(this.rows)
                    console.log(this.rows.length)
                });
        }
    },
    mounted() {
        this.getData()
    },

};
</script>

<style lang="scss">
.grid .v-card__subtitle {
    text-align: right;
    margin-top: -5px;
    margin-bottom: -15px;
}
.grid .review{
    margin-top: 20px;
    margin-left: 20px;
}
.grid .left{
    text-align: right;
    padding-right: 10px;
}
.grid .right{
    text-align: left;
    padding-left: 10px;
}
.grid .v-card{
    border-radius: 20px;
}    
</style>
