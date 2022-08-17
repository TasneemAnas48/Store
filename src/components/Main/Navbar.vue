<template>
    <div>
        <nav class="navbar">
            <div class="container-fluid">
                <div class="right row">
                    <div class="dropdown">
                        <font-awesome-icon icon="fas fa-user" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div>
                                <b-card-text style="margin-top:0px">
                                    <div class="row" style=" justify-content: center; margin-top:30px">
                                        <img v-if="finish" :src="getImage()" />
                                    </div>
                                    <div class="row" style=" justify-content: center;margin-top:30px">
                                        <h5 style="color: var(--main-color)">{{ name }}</h5>
                                    </div>
                                    <div class="row" style=" justify-content: center;margin-top:10px">
                                        <h6>{{ email }}</h6>
                                    </div>
                                </b-card-text>
                                <b-dd-divider></b-dd-divider>
                                <b-card-text class="item" style="margin:0px">
                                    <router-link to="/setting1">
                                        <div class="row" style="color:var(--gray-medium);align-items: center;font-size:17px;">
                                            <font-awesome-icon icon="fa fa-cog" style="margin:20px"/>
                                            <div>الاعدادات</div>
                                        </div>
                                    </router-link>
                                </b-card-text>
                                <b-dd-divider></b-dd-divider>
                                <b-card-text class="item" style="margin:0px" @click="log_out">
                                    <!-- <router-link to="/setting1"> -->
                                        <div class="row" style="color:var(--gray-medium);align-items: center;font-size:17px;">
                                            <font-awesome-icon icon="fa fa-sign-out" style="margin:20px"/>
                                            <div>تسجيل خروج</div>
                                        </div>
                                    <!-- </router-link> -->
                                </b-card-text>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown">
                        <font-awesome-icon icon="fa fa-bell" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <span class="badge" v-if="messages != 0" >{{ messages }}</span>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <b-card-header>
                                الاشعارات
                            </b-card-header>
                            <div class="item" style="background-color: var(--second-color);" v-for="(item, index) in notification_data" :key="index">
                                <b-card-text>
                                    <h5>{{ item.title }}</h5>
                                    <p style="margin-top: 13px;margin-bottom: -5px">{{ item.message }}</p>
                                </b-card-text>
                                <b-dd-divider></b-dd-divider>
                            </div>
                            <div class="item" v-for="(item, index) in notification" :key="index">
                                <b-card-text>
                                    <h5>{{ item.title }}</h5>
                                    <p style="margin-top: 13px;margin-bottom: -5px">{{ item.message }}</p>
                                </b-card-text>
                                <b-dd-divider></b-dd-divider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    props: {
        profileImg: {
            type: String,
            default: require("@/assets/img/user.jpg"),
        },
    },
    data() {
        return {
            email:'',
            name:'',
            image:'',
            finish: false, 
            messages: 0,
            notification: null,
            notification_data: [],
        }
    },
    mounted() {
        this.getPusher()
        this.getNotification()
        this.getData()
    },
    methods:{
        getPusher(){
            // Pusher.logToConsole = true;
            var id = localStorage.getItem("id_person")
            var channel = this.$pusher.subscribe("public-channel." + id)
            var that = this;
            channel.bind('pusher:subscription_succeeded', function() {})
            channel.bind('NotificationEvent', function(data) {
                // console.log(data)
                that.notification_data.push(data)
                that.notification_data = that.notification_data.reverse()
                console.log(that.notification_data)
                that.increase_messsage()
                console.log(that.messages)
            });
            // console.log(this.$pusher)
        },
        increase_messsage(){
            this.messages = this.messages + 1
            console.log(this.messages)
        },
        getNotification(){
            var id = localStorage.getItem("id_person")
            this.axios.get("http://"+this.$store.state.ip+"api/notification/getStore/"+ id)
            .then(res => {
                this.notification = res.data.data
                this.notification = this.notification.reverse()
            })
        },
        log_out(){
            console.log("Log out")
            localStorage.setItem("id_store", '')
            localStorage.setItem("id_manager", '')
            localStorage.setItem("id_person", '')
            localStorage.setItem("token", '')
            localStorage.setItem("auth", 'false')
            this.$router.replace({ name: 'login'})
        },
        getImage(){
            return "http://"+this.$store.state.ip+"uploads/stores/" + this.image
        },
        getData(){
            this.$store.state.id_manager = localStorage.getItem("id_manager")
            this.axios.get("http://"+this.$store.state.ip+"api/settings/storeManager/my_Store_manager/"+ this.$store.state.id_manager)
            .then(res => {
                this.email = res.data.person.email
                this.name = res.data.person.name
                this.image = res.data.image
                this.store_name = res.data.name_store
            }).finally(() => {
                this.finish = true
            });
        },
    },
};
</script>

<style lang="scss">
@import '@/assets/css/Main/Navbar.css';
</style>

