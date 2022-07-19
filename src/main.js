import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './scss/global/_reset.scss';
import './scss/main.scss';
//  import bootsrtap vue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue.min.js";
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)

// import fontawesome 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fa0 } from "@fortawesome/free-solid-svg-icons"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, fa0, faCaretDown )
Vue.component('font-awesome-icon', FontAwesomeIcon)

// import sidebar
// import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
// Vue.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon);

//import axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


// import vuetify
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// import { mdiEmoticonExcitedOutline } from '@mdi/js';

//import composition-api
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
import { ref, reactive } from '@vue/composition-api'




Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App)
}).$mount("#app");

