
<template>
    <div class="body-page add-product6" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header" v-if="this.route == 'add-product6'">
                    <div class="d-flex justify-content-between align-items-center add">
                        إضافة منتج
                        <router-link to="/view-product">
                            <b-button class="button-view">عرض المنتجات</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-header" v-if="this.route == 'edit-product6'">
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
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event-active">
                                <div class="detail"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <v-app>
                                <form class="form-input">
                                    <div class="form-row">
                                        <div class="col-lg-1"></div>
                                        <div class="optinal col-lg-10">

                                            خيارات إضافية
                                            <b-button @click="add_option" type="button"
                                                class="button-add button-option">+
                                            </b-button>
                                        </div>

                                    </div>
                                    <div v-for="(option, i) in OptionSelected" :key="i">
                                        <div class="form-row label-row">
                                            <div class="col-lg-1"></div>
                                            <label for="type" class="col-lg-5 label-input">نوع الخيار</label>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-lg-1"></div>
                                            <v-select class="col-lg-7 input-field" :items="OptionType"
                                                v-model="OptionSelected[i].value" dense solo></v-select>
                                        </div>
                                        <div class="form-row label-row">
                                            <div class="col-lg-1"></div>
                                            <label for="value" class="col-lg-5 label-input">قيم الخيار</label>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-lg-1"></div>
                                            <div class="col-lg-7 value-input">
                                                <InputOption v-for="(Opt, index) in OptionSelected[i].OptionValue"
                                                    :key="index" v-model="OptionSelected[i].OptionValue[index].name">
                                                </InputOption>
                                            </div>
                                            <div class="col-lg-1 plus-value">
                                                <b-button @click="add(i)" type="button" class="button-add button-plus">+
                                                </b-button>
                                            </div>
                                        </div>
                                        <div class="form-row line-option">
                                        </div>
                                    </div>
                                    <div class="float-left row-bottom" v-if="this.route == 'add-product6'">
                                        <b-button type="button" class="button-add" v-on:click="submitForm">
                                            إنشاء
                                        </b-button>
                                    </div>
                                    <div class="float-left row-bottom" v-else-if="this.route == 'edit-product6'">
                                        <b-button type="button" class="button-add" v-on:click="submitForm">
                                            تعديل
                                        </b-button>
                                    </div>
                                    <div class="float-left row-bottom">
                                        <router-link to="/add-product5" v-if="this.route == 'add-product6'">
                                            <b-button type="submit" class="button-add">
                                                <font-awesome-icon icon="fas fa-arrow-right"
                                                    class="icon-button-right" />
                                                السابق
                                            </b-button>
                                        </router-link>
                                        <router-link :to="{ name: 'edit-product5', params: { id: id } }"
                                            v-else-if="this.route == 'edit-product6'">
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
                            <img src="../../assets/img/add_product4.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputOption from "@/components/InputOption.vue";


export default {
    name: "AddProduct6",
    data() {
        return {
            OptionType: [
                {
                    text: 'مقاس',
                    value: 'size',
                },
                {
                    text: 'لون',
                    value: 'color',
                },
                {
                    text: 'المادة المصنعة',
                    value: 'material',
                },
            ],
            OptionSelected: [{
                value: '',
                OptionValue: [{
                    name: ''
                }]
            }],
            id: '',
            route: '',
            product_id:'',
        };
    },
    methods: {
        add(i) {
            this.OptionSelected[i].OptionValue.push({
                name: ''
            });
        },
        add_option() {
            this.OptionSelected.push({
                value: '',
                OptionValue: [{}],
            });
        },
        submitForm() {
            this.sendData()
        },
        addData(formData){
            this.axios
                .post("http://" + this.$store.state.ip + "api/product/create", formData)
                .then((res) => {
                    console.log(res)
                    if (res.statusText == "OK")
                            this.$router.replace({ name: 'view-product' })
                })
        },
        editData(formData){
            this.axios
                .post("http://" + this.$store.state.ip + "api/product/update", formData)
                .then((res) => {
                    console.log(res)
                    if (res.statusText == "OK")
                            this.$router.replace({ name: 'view-product' })
                })
        },
        sendData() {
            this.$store.state.product.id_store = localStorage.getItem("id_store")
            console.log(this.$store.state.product)
            const formData = new FormData()
            
            formData.append('name', this.$store.state.product.address)
            formData.append('discription', this.$store.state.product.discription)
            formData.append('image', this.$store.state.product.image)
            formData.append('selling_price', this.$store.state.product.sell)
            formData.append('cost_price', this.$store.state.product.cost)
            formData.append('return_or_replace', this.$store.state.product.replace)
            formData.append('classification', JSON.stringify(this.$store.state.product.selectedClassification))
            formData.append('collection_id', this.$store.state.product.selectedGroup)
            formData.append('gift', this.$store.state.product.present)
            formData.append('prepration_time', this.$store.state.product.time)
            formData.append('age', this.$store.state.product.age)
            formData.append('party', this.$store.state.product.party)

            
            if (this.route == "edit-product6"){
                console.log(this.product_id)
                formData.append('id',this.product_id)
                this.editData(formData)
            }
            else if (this.route == "add-product6"){
                formData.append('store_id', this.$store.state.product.id_store)
                this.addData(formData)
            }
            
            for (var pair of formData.entries()) {
                console.log(pair)
            }

            console.log(this.OptionSelected)
        },
    },
    components: {
        InputOption,
    },
    mounted() {
        this.route = this.$route.name
        if (this.$route.name == "edit-product6") {
            this.id = this.$route.params.id
            this.axios.get("http://" + this.$store.state.ip + "api/product/show/" + this.id)
                .then(res => {
                    // console.log(res.data.product_id)
                    this.product_id = res.data.product_id
                    console.log(this.product_id)
                })
        }
    },
};

</script>


<style lang="scss">
@import '@/assets/css/Product/AddProduct.css';
@import '@/assets/css/Product/AddProduct6.css';
</style>
