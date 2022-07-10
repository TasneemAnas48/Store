<template>
    <nav class="navbar">
        <div class="container-fluid">

            <div class="left">
                <!-- Default checked -->
                <!-- <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch1" checked />
                    <label class="custom-control-label" for="customSwitch1"></label>
                </div> -->
            </div>
            <div class="right">
                <!-- <v-app>
                    <v-menu transition="slide-y-transition" bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-badge :content="messages" :value="messages" color="green" overlap>

                                <font-awesome-icon icon="fa fa-bell" v-bind="attrs" v-on="on" />
                            </v-badge>
                        </template> -->
                        <!-- <v-list>
                            <v-list-item v-for="(item, i) in items" :key="i">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list> -->

                        <!-- <v-toolbar color="var(--main-color)" dark>
                            <v-toolbar-title>الاشعارات</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-list three-line>
                            <template v-for="(item, index) in items"> -->
                                <!-- <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader> -->

                                <!-- <v-divider v-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                                <v-list-item v-else :key="item.title">
                                    <v-list-item-avatar>
                                        <v-img :src="item.avatar"></v-img>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title v-html="item.title"></v-list-item-title>
                                        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-list>
                    </v-menu>
                </v-app> -->

                <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown show">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownLbl" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Animated Dropdown Menu
                    </a>
                    <div class="dropdown-menu dropdown-menu-right w-auto show shadow p-0" id="navbarDropdown" aria-labelledby="navbarDropdownLbl">
                        <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                </li>
            </ul>
        </div> -->

                <a class="navbar-brand">
                    <font-awesome-icon icon="fas fa-user" />
                </a>

            </div>
        </div>

    </nav>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            // items: [
            //     {
            //         avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            //         title: 'طلب جديد',
            //         subtitle: `تم وصول طلب جديد من المستخدم تسنيم`,
            //     },
            //     { divider: true, inset: true },
            //     {
            //         avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            //         title: 'رسالة جديد',
            //         subtitle: `تم وصول رسالة جديدة من المستخدم تسنيم`,
            //     },
            //     { divider: true, inset: true },
            //     {
            //         avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            //         title: 'تقييم جديد',
            //         subtitle: 'لديك تقييم واحد جديد',
            //     },
            //     { divider: true, inset: true },
            //     {
            //         avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            //         title: 'Birthday gift',
            //         subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
            //     },
            //     { divider: true, inset: true },
            //     {
            //         avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            //         title: 'Recipe to try',
            //         subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            //     },

            // ],
            // messages: 1,
        }
    }
};
</script>

<style lang="scss">
// .navbar .v-application {
//     height: 0px;
// }

// .navbar .v-application--wrap {
//     min-height: 10vh;
// }
.show > .dropdown-menu {
  max-height: 800px;
  display: block;
}
  
.dropdown-menu {
  max-height: 0;
  display: none;
  transition: all 0.4s ease-in-out;
//   overflow: hidden;
}

.navbar .fa-bell {
    color: var(--main-color);
    font-size: 1.25rem !important;
    margin: 10px 10px 10px 50px !important;
}

// .navbar .v-menu__content {
//     min-width: 300px !important;
//     top: 35px !important;
//     left: 45px !important;
//     max-height: 600px !important;
// }

// .navbar .v-badge__badge {
//     inset: auto auto calc(100% - 16px) calc(100% - 17px) !important;
// }

// .navbar .v-divider--inset:not(.v-divider--vertical) {
//     max-width: 300px !important;
// }
// .navbar .v-application--is-ltr .v-divider--inset:not(.v-divider--vertical) {
//     margin: 0px; 
// }
// .navbar .v-list-item {
//     padding:0px !important;
//     padding-left: 12px !important;
// }
// .navbar .v-list--three-line .v-list-item .v-list-item__content, .v-list-item--three-line .v-list-item__content {
//     text-align: right !important;
//     margin-right: 20px !important;
// }
// .navbar .v-list-item:hover{
//     cursor: pointer;
//     background: #dbdbdb41;
// }
.navbar {
    margin: 20px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 1px 10px rgb(32 33 36 / 15%);
    // position: fixed !important;
    // width: 60%;
}

nav a {
    color: var(--main-color) !important;
}

.fa-user {
    margin-right: 20px;
}

.custom-control-input:checked~.custom-control-label::before {
    background-color: var(--main-color) !important;
    border-color: var(--main-color) !important;
}

.custom-control-input:not(:disabled):active~.custom-control-label::before {
    background-color: var(--main-color) !important;
    border-color: var(--main-color) !important;
}

.custom-control-input:focus~.custom-control-label::before {
    box-shadow: none !important;
}

.custom-control-label::before {
    height: 1.3rem !important;
}

.custom-switch .custom-control-label::before {
    width: 2.1rem !important;
    border-radius: 1rem !important;
}

.custom-switch .custom-control-label::after {
    top: 8px !important;
    left: -31px !important;
    width: 13px !important;
    height: 13px !important;
}

.custom-control {
    top: -2px;
}

.custom-control-label {
    cursor: pointer;
}
</style>

