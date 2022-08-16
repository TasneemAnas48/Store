<template>
    <div class="sidebar" :class="isOpened ? 'open' : ''" >
        <div class="logo-details" style="margin: 6px 14px 0 14px">
            <img v-if="menuLogo" :src="menuLogo" alt="menu-logo" class="menu-logo icon" />
            <div class="logo_name">
                
            </div>
            <div v-if="isOpened">
                <font-awesome-icon icon="fa fa-angle-double-right" id="btn" @click="isOpened = !isOpened" />
            </div>
            <div v-else>
                <font-awesome-icon icon="fa fa-angle-double-left" id="btn" @click="isOpened = !isOpened" />
            </div>
        </div>

        <div class="user">
            <div class="row">
                <div class="user-img">
                    <img v-if="finish" :src="getImage()">
                </div>
                <div id="user-info" class="user-info">
                    <p class="logo_name">{{ store_name }}</p>
                </div>
            </div>
        </div>

        <div style="
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex-grow: 1;
                max-height: calc(100% - 60px);
            ">
            <div id="my-scroll" style="margin: 0px 14px 0 14px">
                <ul class="nav-list" style="overflow: visible">
                <div v-for="(menuItem, index) in menuItems" :key="index">
                <div v-for="(per, i) in per" :key="i">
                    <span v-if="menuItem.id == per">
                        <li class="d-flex justify-content-center">
                            <router-link :to="menuItem.link" class="p-2">
                                <font-awesome-icon :icon="menuItem.icon" :class="menuItem.style" class="icon" />
                                <!-- <i class="bx" :class=" menuItem.icon || 'bx-square-rounded'"/> -->
                                <span class="links_name">{{
                                        menuItem.name
                                }}</span>
                            </router-link>
                            <span class="p-2 tooltip">{{
                                    menuItem.tooltip || menuItem.name
                            }}</span>
                        </li>
                    </span>
                    </div>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    name: "side-bar",
    props: {
        //! Menu settings
        isMenuOpen: {
            type: Boolean,
            default: false,
        },
        menuLogo: {
            type: String,
            default: "",
        },
        menuIcon: {
            type: String,
            default: "bxl-c-plus-plus",
        },
        isPaddingRight: {
            type: Boolean,
            default: true,
        },
        isDisplayBlock: {
            type: Boolean,
            default: true,
        },

        //body
        menuOpenedPaddingRightBody: {
            type: String,
            default: "272px",
        },
        menuClosedPaddingRightBody: {
            type: String,
            default: "100px",
        },

        //navbar
        menuOpenedMarginRightNavbar: {
            type: String,
            default: "290",
        },

        menuClosedMarginRightNavbar: {
            type: String,
            default: "125px",
        },

        //user info

        menuClosedUserDisplayNone: {
            type: String,
            default: "none",
        },
        menuOpenUserDisplayBlock: {
            type: String,
            default: "block",
        },

        //! Menu items
        menuItems: {
            type: Array,
            default: () => [
                {
                    link: "/dashboard",
                    name: "لوحة التحكم",
                    id: 7,
                    tooltip: "لوحة التحكم",
                    icon: "fa fa-home",
                    style: "home",
                },
                {
                    link: "/view-group",
                    name: "مجموعات",
                    id: 2,
                    tooltip: "مجموعات",
                    icon: "fas fa-folder",
                    style: "folder",
                },
                {
                    link: "/view-product",
                    name: "منتجات",
                    id: 1,
                    tooltip: "منتجات",
                    icon: "fa fa-tag",
                    style: "tag",
                },
                {
                    link: "/view-discount",
                    name: "خصومات",
                    id: 6,
                    tooltip: "خصومات",
                    icon: "fa fa-percent",
                    style: "percent",
                },
                {
                    link: "/receive-order",
                    name: "طلبات",
                    id: 4,
                    tooltip: "طلبات",
                    icon: "fas fa-box",
                    style: "box",
                },
                {
                    link: "/view-customer",
                    name: "زبائن",
                    id: 3,
                    tooltip: "زبائن",
                    icon: "fas fa-users",
                    style: "users",
                },
                {
                    link: "/report",
                    name: "تقارير",
                    id: 5,
                    tooltip: "تقارير",
                    icon: "fa fa-file-text",
                    style: "file",
                },
                {
                    link: "#",
                    name: "محادثة",
                    id: 9,
                    tooltip: "محادثة",
                    icon: "fa fa-comments",
                    style: "comments",
                },
                {
                    link: "/setting1",
                    name: "إعدادات",
                    id: 8,
                    tooltip: "إعدادات",
                    icon: "fa fa-cog",
                    style: "cog",
                },
            ],
        },

        //! Profile detailes
        StoreName: {
            type: String,
            default: "خيط وسنارة",
        },
        profileImg: {
            type: String,
            default: require("@/assets/img/user.jpg"),
        },
        profileName: {
            type: String,
            default: "مدير المتجر",
        },
        profileEmail: {
            type: String,
            default: "admin@gmail.com",
        },
        isExitButton: {
            type: Boolean,
            default: true,
        },

    },
    data() {
        return {
            isOpened: false,
            email:'',
            name:'',
            store_name:'',
            image:'',
            per:[],
            finish:false,
        };
    },
    mounted() {
        this.isOpened = this.isMenuOpen;
        this.$store.state.id_manager = localStorage.getItem("id_manager")
        this.axios.get("http://"+this.$store.state.ip+"api/settings/storeManager/my_Store_manager/"+ this.$store.state.id_manager)
        .then(res => {
            // console.log(res.data)
            this.email = res.data.person.email
            this.name = res.data.person.name
            this.image = res.data.image
            this.store_name = res.data.name_store
            // console.log(this.image)
        }).finally(() => {
            this.finish = true
        })
        this.getPer()
        
    },
    watch: {
        isOpened() {
            window.document.body.style.paddingRight =
                this.isOpened && this.isPaddingRight
                    ? this.menuOpenedPaddingRightBody
                    : this.menuClosedPaddingRightBody;
            document.querySelector("#user-info").style.display =
                this.isOpened && this.isDisplayBlock
                    ? this.menuOpenUserDisplayBlock
                    : this.menuClosedUserDisplayNone;
        },
    },
    methods:{
        getImage(){
            return "http://"+this.$store.state.ip+"uploads/stores/"+this.image
        },
        getPer(){
            const len = localStorage.getItem("len")
            for (let i = 0; i < len; i++)
                this.per[i] = localStorage.getItem("per: " + i)
            // console.log(this.per)
        },
    }
};
</script>

<style lang="scss">
@import '@/assets/css/Main/Sidebar.scss';
</style>
