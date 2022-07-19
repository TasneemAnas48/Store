<template>
    <div id="app">
        <nav-bar  v-if="!['create-store1', 'create-store2', 'create-store3', 'print-invoice', 'login', 'report-sales', 'report-order', 'report-rate-store', 'report-rate-product'].includes($route.name)" />
        <side-bar v-if="!['create-store1', 'create-store2', 'create-store3','print-invoice', 'login', 'report-sales', 'report-order', 'report-rate-store', 'report-rate-product'].includes($route.name)" />
        <router-view />
    </div>
</template>

<script>
import NavBar from "@/components/Main/Navbar.vue";
import SideBar from '@/components/Main/Sidebar.vue';
export default {
    name: "App",
    data() {
        return {
            theme: '',
        }
    },
    components: {
        NavBar, SideBar
        },
    mounted() {
        let htmlElement = document.documentElement;
        let CurrentTheme = localStorage.getItem("theme");
        if (CurrentTheme === 'dark') {
            htmlElement.setAttribute('theme', 'dark')
            this.theme = 'dark'
        } else {
            htmlElement.setAttribute('theme', 'light');
            this.theme = 'light'
        }
        this.$store.state.id_store = localStorage.getItem("id_store")
        this.$store.state.id_manager = localStorage.getItem("id_manager")
    },

    computed: {
        createStore() {
            return this.$store.state.createStore;
        }
    },
};

</script>

<style lang="scss">
@import '@/assets/css/Main/App.css';

*:focus, *:focus-visible { outline: none !important; }

@font-face {
    font-family: "Almarai";
    src: local("Almarai"),
    url(./fonts/Almarai-Regular.ttf) format("truetype");
}

body{
    background: var(--second-color) !important;
    // height: auto;
    font-size: 15px;
}
.btn{
    color: white !important;
}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#app {
    font-family: 'Almarai', sans-serif !important;
    // font-family: Avenir, Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    text-align: center;

}

</style>
