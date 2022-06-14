<template>
    <div id="app">
        
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            theme: ''
        }
    },
    components: {
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
    },
    
};

</script>

<style lang="scss">
*:focus, *:focus-visible { outline: none !important; }

@font-face {
    font-family: "Almarai";
    src: local("Almarai"),
    url(./fonts/Almarai-Regular.ttf) format("truetype");
}



body{
    background: var(--second-color) !important;
    height: auto;
    font-size: 15px;
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
