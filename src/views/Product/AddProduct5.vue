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
                        </div>
                    </div>

                    <div class="row align-items-center" style="margin-top:50px">
                        <div class="col-lg-7">
                            <form class="form-input">
                                <div class="form-row">
                                    <label for="time" class="col-lg-5 label-input">الوقت المتوقع للتحضير</label>
                                    <b-form-input v-model="product.time" class="col-lg-6 input-field" name="time">
                                    </b-form-input>
                                </div>

                                <div class="form-row">
                                    <label for="age" class="col-lg-5 label-input">العمر</label>
                                    <select class="col-lg-6 input-field" v-model="product.age">
                                        <option v-for="age in age" :key="age.value" :value="age.value">{{ age.text }}
                                        </option>
                                    </select>
                                </div>

                                <div class="form-row">
                                    <label for="party" class="col-lg-5 label-input">المناسبة</label>
                                    <b-form-input  list="my-list-id" v-model="product.party" class="col-lg-6 input-field" name="party">
                                    </b-form-input>

                                    <datalist id="my-list-id">
                                        <option v-for="party in party" :key="party.value">{{ party.text }}</option>
                                    </datalist>
                                </div>

                                <div class="float-left row-bottom">
                                    <router-link to="/add-product6">
                                        <b-button type="button" class="button-add" v-on:click="submitForm">
                                            <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />
                                            التالي
                                        </b-button>
                                    </router-link>
                                </div>

                                <div class="float-left row-bottom">
                                    <router-link to="/add-product4">
                                        <b-button type="button" class="button-add">
                                            <font-awesome-icon icon="fas fa-arrow-right" class="icon-button-right" />
                                            السابق
                                        </b-button>
                                    </router-link>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-5 d-none d-xl-block d-lg-block">
                            <img src="../../assets/img/add_product6.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/Main/Navbar.vue";
import SideBar from "@/components/Main/Sidebar.vue";

export default {
    name: "AddProduct5",
    data() {
        return {
            age: [
                { value: 'childe', text: 'اطفال' },
                { value: 'g2', text: 'شباب' },
                { value: 'old', text: 'كبار' },
            ],
            party: [
                { value: 'mother', text: 'عيد الام' },
                { value: 'techer', text: 'عيد المعلم' },
                { value: 'ramadan', text: 'رمضان' },
            ],
        };
    },
    components: {
        NavBar,
        SideBar,
    },
    methods: {
        submitForm() {
            const formData = new FormData();
            formData.append('name', this.$store.state.product.address);
            formData.append('discription', this.$store.state.product.discription);
            formData.append('image', this.$store.state.product.image);
            formData.append('selling_price', this.$store.state.product.sell);
            formData.append('cost_price', this.$store.state.product.cost);
            formData.append('selectedClassification', this.$store.state.product.selectedClassification);
            formData.append('collection_id', this.$store.state.product.selectedGroup);
            formData.append('return_or_replace', this.$store.state.product.replace);
            formData.append('gift', this.$store.state.product.present);
            formData.append('prepration_time', this.$store.state.product.time);
            formData.append('age', this.$store.state.product.age);
            formData.append('party', this.$store.state.product.party);
            console.log(this.$store.state.product);
            this.axios
                .post("https://jsonplaceholder.typicode.com/posts", formData)
                .then((res) => console.log(res));
        },
    },
    computed: {
        product() {
            return this.$store.state.product;
        }
    },
};
</script>



<style lang="scss">
</style>

