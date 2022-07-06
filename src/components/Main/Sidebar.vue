<template>
    <div class="sidebar" :class="isOpened ? 'open' : ''" >
        <div class="logo-details" style="margin: 6px 14px 0 14px">
            <img v-if="menuLogo" :src="menuLogo" alt="menu-logo" class="menu-logo icon" />
            <div class="logo_name">
                <!-- {{ StoreName }} -->
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
                    <img :src="profileImg" />
                </div>
                <div id="user-info" class="user-info">
                    <p class="user-name">{{ profileName }}</p>
                    <p class="user-email">{{ profileEmail }}</p>
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
                    <span v-for="(menuItem, index) in menuItems" :key="index">
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
                    tooltip: "لوحة التحكم",
                    icon: "fa fa-home",
                    style: "home",
                },
                {
                    link: "/view-group",
                    name: "مجموعات",
                    tooltip: "مجموعات",
                    icon: "fas fa-folder",
                    style: "folder",
                },
                {
                    link: "/view-product",
                    name: "منتجات",
                    tooltip: "منتجات",
                    icon: "fa fa-tag",
                    style: "tag",
                },
                {
                    link: "/view-discount",
                    name: "خصومات",
                    tooltip: "خصومات",
                    icon: "fa fa-percent",
                    style: "percent",
                },
                {
                    link: "/receive-order",
                    name: "طلبات",
                    tooltip: "طلبات",
                    icon: "fas fa-box",
                    style: "box",
                },
                {
                    link: "/view-customer",
                    name: "زبائن",
                    tooltip: "زبائن",
                    icon: "fas fa-users",
                    style: "users",
                },
                {
                    link: "#",
                    name: "تقارير",
                    tooltip: "تقارير",
                    icon: "fa fa-file-text",
                    style: "file",
                },
                {
                    link: "#",
                    name: "مراسلات",
                    tooltip: "مراسلات",
                    icon: "fa fa-comments",
                    style: "comments",
                },
                {
                    link: "/setting1",
                    name: "إعدادات",
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
        };
    },
    mounted() {
        this.isOpened = this.isMenuOpen;
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
};
</script>

<style lang="scss">
/* .li{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: right;
} */
.icon {
    color: var(--main-color);
    font-size: 18px;

}

.home {
    margin-right: 6px;
}

.folder {
    margin-right: 8px;
}

.tag {
    margin-right: 8px;
}

.percent {
    margin-right: 9px;
}

.box {
    margin-right: 9px;
}

.users {
    margin-right: 6px;
}

.file {
    margin-right: 9px;
}

.comments {
    margin-right: 6px;
}

.cog {
    margin-right: 8px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Almarai', sans-serif !important;
}

body {
    transition: all 0.5s ease;
    padding-right: 100px;
}

.menu-logo {
    width: 30px;
    margin: 0 10px 0 10px;
}

.sidebar {
    position: relative;
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    left: auto !important;
    top: 0;
    height: 585px !important;
    min-height: min-content;
    /* overflow-y: auto; */
    width: 78px;
    /* padding: 6px 14px 0 14px; */
    z-index: 99;
    transition: all 0.5s ease;
    margin-top: 20px;
    margin-right: 20px;
    box-shadow: 0 1px 10px rgb(32 33 36 / 15%);
    border-radius: 20px;
    background-color:white!important;
}


.sidebar.open {
    width: 250px;
}

.sidebar .logo-details {
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
}

.sidebar .logo-details .icon {
    opacity: 0;
    // transition: all 0.5s ease;
}

.sidebar .logo-details .logo_name {
    color: var(--main-color);
    font-size: 20px;
    font-weight: 600;
    opacity: 0;
    // transition: all 0.5s ease;
}

.sidebar.open .logo-details .icon,
.sidebar.open .logo-details .logo_name {
    opacity: 1;
}

.sidebar .logo-details #btn {
    color: var(--main-color);
    position: absolute;
    top: 43%;
    right: 15px;
    transform: translateY(-50%);
    font-size: 20px;
    // transition: all 0.4s ease;
    font-size: 23px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease;
}

.sidebar.open .logo-details #btn {
    text-align: right;
}

.sidebar .user-name {
    color: var(--main-color);
}

.sidebar .user-email {
    color: var(--gray-medium);
    font-size: 13px;
}

.sidebar .user-name,
.sidebar .user-email {
    margin-bottom: 0px;
    text-align: right;
    margin-right: 12px
}

.sidebar .user-info {
    display: none;
    position: fixed!important;
    margin-right: 72px!important;
    // transition: all 10s ease !important;
}

.sidebar i {
    color: var(--main-color) !important;
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
}

.sidebar .nav-list {
    margin-top: 20px;
    /* margin-bottom: 60px; */
    /* height: 100%; */
    /* min-height: min-content; */
}

.sidebar li {
    position: relative;
    margin: 8px 0;
    list-style: none;
}

.sidebar li .tooltip {
    position: absolute;
    top: -20px;
    right: calc(100% + 15px);
    left: auto !important;
    z-index: 3;
    background: var(--second-color) !important;
    box-shadow: 0 5px 10px rgb(0 0 0 / 30%);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;
    color: var(--gray-medium);
}

.sidebar li:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
    top: 50%;
    transform: translateY(-50%);
}

.sidebar.open li .tooltip {
    display: none;
}

.sidebar input {
    font-size: 15px;
    color: var(--main-color);
    font-weight: 400;
    outline: none;
    height: 50px;
    width: 100%;
    width: 50px;
    border: none;
    border-radius: 12px;
    // transition: all 0.5s ease;
    background: var(--secondary-color);
}

.sidebar.open input {
    padding: 0 20px 0 50px;
    width: 100%;
}

.sidebar li a {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    // transition: all 0.4s ease;
    background: white;
}

.sidebar li a:hover {
    background: var(--main-color) !important;
    color: white !important;

    .icon {
        color: white;
    }
}

.sidebar li a .links_name {
    color: var(--main-color) !important;
    font-size: 18px !important;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
    padding-right: 25px;
}
.sidebar li a:hover .links_name {
    color: white !important;
}


.sidebar.open li a .links_name {
    opacity: 1;
    pointer-events: auto;
}

.sidebar li a:hover .links_name,
.sidebar li a:hover i {
    transition: all 0.3s ease;
    color: var(--main-color);
}

.sidebar li i {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-radius: 12px;
}

.sidebar div.profile {
    position: relative;
    height: 60px;
    width: 78px;
    /* left: 0;
    bottom: 0; */
    padding: 10px 14px;
    background: var(--secondary-color);
    // transition: all 0.5s ease;
    overflow: hidden;
}

.sidebar.open div.profile {
    width: 250px;
}

.sidebar div .profile-details {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
}

.sidebar div img {
    height: 45px;
    width: 45px;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 20px !important;
    margin-right: 31px !important;
}

.sidebar div.profile .name,
.sidebar div.profile .job {
    font-size: 15px;
    font-weight: 400;
    color: var(--main-color);
    white-space: nowrap;
}

.sidebar div.profile .job {
    font-size: 12px;
}

.sidebar .profile #log_out {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: var(--secondary-color);
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-radius: 0px;
    // transition: all 0.5s ease;
}

.sidebar.open .profile #log_out {
    width: 50px;
    background: var(--secondary-color);
    opacity: 0;
}

.sidebar.open .profile:hover #log_out {
    opacity: 1;
}

.sidebar.open .profile #log_out:hover {
    opacity: 1;
    color: red;
}

.sidebar .profile #log_out:hover {
    color: red;
}

.home-section {
    position: relative;
    background: var(--main-color);
    min-height: 100vh;
    top: 0;
    left: 78px;
    width: calc(100% - 78px);
    // transition: all 0.5s ease;
    z-index: 2;
}

.sidebar.open~.home-section {
    left: 250px;
    width: calc(100% - 250px);
}

.home-section .text {
    display: inline-block;
    color: var(--main-color);
    font-size: 25px;
    font-weight: 500;
    margin: 18px;
}

.my-scroll-active {
    overflow-y: inherit !important;
}

#my-scroll {
    overflow-y: inherit !important;
    height: calc(100% - 60px);
    margin-top: 20px;
}

#my-scroll::-webkit-scrollbar {
    display: none;
    /* background-color: rgba(255, 255, 255, 0.2); 
    width: 10px;
    border-radius:5px  */
}

/* #my-scroll::-webkit-scrollbar-thumb{
    background-color: red;
    border-radius:5px 
  }
  #my-scroll::-webkit-scrollbar-button:vertical:start:decrement{
    display:none;
  }
  #my-scroll::-webkit-scrollbar-button:vertical:end:increment{
    display:none;
  } */
@media (max-width: 420px) {
    .sidebar li .tooltip {
        display: none;
    }
}
</style>
