<template>
    <div class="create-store create3">
        <div class="side-left col-lg-3 d-none d-lg-block">
            <div class="image">
                <img src="../../assets/img/create_store3.png" class="img-thumbnail img" />
            </div>
        </div>
        <div class="side-right col-lg-9 ">
            <div class="address">
                <p style="margin-bottom: 0px">إنشاء متجر</p>
            </div>
            <div class="line">
                <div class="timeline">
                    <div class="event">
                        <div class="detail">معلومات المتجر</div>
                    </div>
                    <div class="event">
                        <div class="detail">معلومات شخصية</div>
                    </div>
                    <div class="event-active">
                        <div class="detail">اعدادات الموقع</div>
                    </div>

                </div>
            </div>
            <v-app>
                <form class="form-input">

                    <div class="form-row ">

                        <label for="lang" class="col-lg-2 label-input ">لغة الموقع</label>

                        <v-select class="col-md-5 input-field" :items="items" color=var(--main-color) :label='selected'
                            dense solo></v-select>

                    </div>


                    <div class="form-row " style="margin-top: 40px">
                        <label for="color" class="col-lg-2 label-input">الوان الموقع</label>
                        <b-form-radio class="col-lg-3" id="dark" name="color" value="dark" v-model="theme">
                            Dark
                        </b-form-radio>
                        <b-form-radio class="col-lg-3" id="light" name="color" value="light" v-model="theme">
                            Light
                        </b-form-radio>
                    </div>


                    <div class="buttons form-row" style="margin-top:70px">

                        <div class="float-left">
                            <router-link to="/create-store2">
                                <b-button type="submit" class="button-add">
                                    <font-awesome-icon icon="fas fa-arrow-right" class="icon-button-right" />السابق
                                </b-button>
                            </router-link>
                        </div>
                        <div class="float-rigth">
                            <router-link to="/create-store3">
                                <b-button type="submit" class="button-add" v-on:click="submitForm">إنشاء متجر
                                </b-button>
                            </router-link>
                        </div>
                    </div>
                </form>
            </v-app>
        </div>
    </div>
</template>


<script>
export default {
    name: "CreateStore3",
    data() {
        return {
            selected: 'عربي',
            theme: 'light',
            items: ['عربي', 'انكليزي'],
        }
    },
    watch: {
        theme: function (val) {
            let htmlElement = document.documentElement;
            if (val == 'dark') {
                localStorage.setItem("theme", 'dark');
                htmlElement.setAttribute('theme', 'dark');
            } else if (val == 'light') {
                localStorage.setItem("theme", 'light');
                htmlElement.setAttribute('theme', 'light');
            }
        },
    },
    computed: {
        createStore() {
            return this.$store.state.createStore;
        }
        
    },
    methods:{
        submitForm() {
            console.log(this.$store.state.createStore)
            const formData = new FormData();
            formData.append('name', this.$store.state.createStore.name);
            formData.append('delivery_area', this.$store.state.createStore.place);
            formData.append('discription', this.$store.state.createStore.discription);
            formData.append('facebook', this.$store.state.createStore.facebook);
            formData.append('Brand', this.$store.state.createStore.logo);
            formData.append('image', this.$store.state.createStore.cover);
            formData.append('username', this.$store.state.createStore.username);
            formData.append('email', this.$store.state.createStore.email);
            formData.append('password', this.$store.state.createStore.password);
            this.axios
                .post("http://"+this.$store.state.ip+"api/store/create", formData)
                .then((res) => {
                    console.log(res.data)
                    this.$store.state.id_store = res.data.data.shop_id
                    this.$store.state.id_manager = res.data.data.manager_id
                    this.addlocalStorage(this.$store.state.id_store, this.$store.state.id_manager)
                    console.log(this.$store.state.id_store)
                    console.log(this.$store.state.id_manager)
                })
        },
        addlocalStorage(store, manager){
            localStorage.setItem("id_store", store);
            localStorage.setItem("id_manager", manager);
        }
    }
};
</script>


<style lang="scss">

</style>

