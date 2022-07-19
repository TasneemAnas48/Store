<template>
    <div class="body-page add-product add-product3" id="add-product3">
        <div class="body">
            <div class="card">
                <div class="card-header"  v-if="this.route == 'add-product3'">
                    <div class="d-flex justify-content-between align-items-center add">
                        إضافة منتج
                        <router-link to="/view-product">
                            <b-button class="button-view">عرض المنتجات</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-header"  v-if="this.route == 'edit-product3'">
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
                            <v-app>
                                <form class="form-input">
                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="classification"
                                                class="col-lg-4 col-md-5 label-input">التصنيف</label>
                                            <v-select class="col-lg-7 col-md-11 col-sm-11 col-10 input-field" multiple chips dense solo
                                                :items="classification" item-text="title" item-value="id" v-model="selectedClassification" >
                                                <template v-slot:selection="{ item, index }">
                                                    <v-chip v-if="index === 0">
                                                    <span>{{ item.title }}</span>
                                                    </v-chip>
                                                    <span
                                                    v-if="index === 1"
                                                    class="grey--text text-caption"
                                                    >
                                                    (+{{ selectedClassification.length - 1 }} others)
                                                    </span>
                                                </template>
                                                
                                                </v-select>
                                            <v-tooltip color="error" right v-if="v$.selectedClassification.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.selectedClassification.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="group" class="col-lg-4 col-md-5 label-input">المجموعة</label>
                                            <v-select class="col-lg-7 col-md-11 col-sm-11 col-10 input-field" :label="selectedGroup" 
                                                :items="group" item-text="title" item-value="id" v-model="selectedGroup" dense solo></v-select>
                                            <v-tooltip color="error" right v-if="v$.selectedGroup.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.selectedGroup.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>

                                    <div class="float-left row-bottom">
                                        <!-- <router-link to="/add-product4"> -->
                                        <b-button type="button" class="button-add" v-on:click="submitForm">
                                            <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />
                                            التالي
                                        </b-button>
                                        <!-- </router-link> -->
                                    </div>

                                    <div class="float-left row-bottom">
                                        <router-link to="/add-product2" v-if="this.route == 'add-product3'">
                                            <b-button type="submit" class="button-add">
                                                <font-awesome-icon icon="fas fa-arrow-right"
                                                    class="icon-button-right" />
                                                السابق
                                            </b-button>
                                        </router-link>
                                        <router-link :to="{ name: 'edit-product2', params: {id: id} }" v-else-if="this.route == 'edit-product3'">
                                            <b-button type="submit" class="button-add">
                                                <font-awesome-icon icon="fas fa-arrow-right"
                                                    class="icon-button-right" />
                                                السابق
                                            </b-button>
                                        </router-link>
                                    </div>
                                </form>
                            </v-app>
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

import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

export default {
    name: "AddProduct3",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            selectedClassification:[],
            selectedGroup:'',
            classification: [],
            group: [],
            id: '',
            route:'',
        };
    },
    validations() {
        return {
                selectedClassification: {},
                selectedGroup: { required: helpers.withMessage('هذا الحقل مطلوب', required) },
        }
    },
    methods: {
        getGroup(){
            this.$store.state.id_store = localStorage.getItem("id_store")
            this.axios.get("http://"+this.$store.state.ip+"api/collection/collectionNane/"+ this.$store.state.id_store)
            .then(res => {
                this.group = res.data
                // console.log(res.data)
            });
        },
        getClassification(){
            this.axios.get("http://"+this.$store.state.ip+"api/SecondrayClassification/list_seconderay")
            .then(res => {
                this.classification = res.data
                // console.log(res.data)
            });
        },
        submitForm() {
            console.log(this.selectedGroup)
            this.v$.$validate()
            if (!this.v$.$error) {
                this.$store.state.product.selectedClassification = this.selectedClassification
                this.$store.state.product.selectedGroup = this.selectedGroup
                if (this.$route.name == "edit-product3")
                    this.$router.replace({ name: 'edit-product4' })
                else
                    this.$router.replace({ name: 'add-product4' })
            }
        },
    },
    components: {
    },
    mounted(){
        this.getGroup()
        this.getClassification()
        this.route = this.$route.name
        if (this.$route.name == "edit-product3"){
            this.id = this.$route.params.id
            this.axios.get("http://"+this.$store.state.ip+"api/product/show/" + this.id)
            .then(res => {
                // console.log(res.data)
                this.selectedClassification = res.data.classification
                this.selectedGroup = res.data.collection
                console.log(this.selectedGroup)
                // console.log(this.selectedGroup)
            })
        }
    },

    computed: {
        product() {
            return this.$store.state.product;
        }
    },
};
</script>

<style lang="scss">
@import '@/assets/css/Product/AddProduct.css';
@import '@/assets/css/Product/AddProduct3.css';

</style>
