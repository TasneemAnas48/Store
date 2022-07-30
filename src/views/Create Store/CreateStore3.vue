<template>
    <div class="create-store create-store3">
        <div class="side-left col-lg-5 d-none d-lg-block">
            <div class="image" style="    margin-left: 130px; top: 60%">
                <img src="../../assets/img/create_store3.png" class="img-thumbnail img" />
            </div>
        </div>
        <div class="side-right col-lg-7">
            <div class="top-button">
                <router-link to="/create-store1">
                    <b-button type="button" class="button-add  button-login" style="margin-left: -15px;">إنشاء متجر</b-button>
                </router-link>
                <router-link to="/login">
                    <b-button type="button" class="button-add create button-login">تسجيل الدخول</b-button>
                </router-link>
            </div>
            <div class="line" v-if="!mobile">
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
                <form class="form-input col-lg-12">
                    <div class="form-row">
                        <label for="lang" class="col-lg-3 label-input ">لغة الموقع</label>
                        <v-select class="col-lg-5 select-lang input-field" :items="items" color=var(--main-color) :label='selected'
                            dense solo></v-select>
                    </div>

                    <div class="form-row " style="margin-top: 40px">
                        <label for="color" class="col-lg-3 label-input">الوان الموقع</label>
                        <b-form-radio class="col-lg-3" id="dark" name="color" value="dark" v-model="theme">
                            Dark
                        </b-form-radio>
                        <b-form-radio class="col-lg-2" id="light" name="color" value="light" v-model="theme">
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
            mobile: false,
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
            for (var pair of formData.entries()) {
                console.log(pair)
            }
            this.axios
                .post("http://"+this.$store.state.ip+"api/settings/store/create", formData)
                .then((res) => {
                    console.log(res.data)
                    this.$store.state.id_store = res.data.data.shop_id
                    this.$store.state.id_manager = res.data.data.manager_id
                    this.addlocalStorage(this.$store.state.id_store, this.$store.state.id_manager)
                    console.log(this.$store.state.id_store)
                    console.log(this.$store.state.id_manager)
                    if (res.statusText == "OK")
                        this.$router.replace({ name: 'confirm' })
                        // this.createGroup()
                })
        },

        addlocalStorage(store, manager){
            console.log(store)
            console.log(manager)
            localStorage.setItem("id_store", store)
            localStorage.setItem("id_manager", manager)
            localStorage.setItem("try", 5)
        },

        createGroup(){
            const formData = new FormData()
            formData.append('title', "مجموعة اساسية")
            formData.append('discription', "مجموعة اساسية يتم انشاؤها تلقائيا")
            formData.append('image', '')
            formData.append('store_id', this.$store.state.id_store)
            this.axios.post("http://"+this.$store.state.ip+"api/collection/create", formData)
                .then((res) => {
                console.log(res)
                // if (res.data.status == "success")
                //     this.$router.replace({ name: 'view-group' })
                })
        },
        checkDevice(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                this.mobile = true
            }else{
                this.mobile = false
            }
        },
        
    },
    mounted(){
        this.checkDevice()
    }
};
</script>


<style lang="scss">
@import '@/assets/css/Create Store/CreateStore.css';
@import '@/assets/css/Create Store/CreateStore3.css';
</style>

