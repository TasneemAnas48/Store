<template>
    <nav class="navbar">
        <div class="container-fluid">
            
            <div class="left">
                <!-- Default checked -->
                <div class="custom-control custom-switch">
                    <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customSwitch1"
                        checked />
                    <label class="custom-control-label" 
                    for="customSwitch1"></label>
                </div>
            </div>
            <div class="right">
                <a class="navbar-brand">
                    <font-awesome-icon icon="fa fa-bell"/></a>
                <a class="navbar-brand">
                    <font-awesome-icon icon="fas fa-user"/></a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "nav-bar",
};
</script>

<style lang="scss">
    .navbar {
        margin: 20px;
        background-color: white;
        border-radius: 20px;
        box-shadow: 0 1px 10px rgb(32 33 36 / 15%);
        // position: fixed !important;
        // width: 60%;
    }
    // .fixed-top {
    //     right: 100px !important;
    // }
    nav a {
        color: var(--main-color) !important;
    }
    .fa-user {
        margin-right: 20px;
    }
    .custom-control-input:checked ~ .custom-control-label::before{
        background-color: var(--main-color) !important;
        border-color: var(--main-color) !important;
    }
    .custom-control-input:not(:disabled):active ~ .custom-control-label::before{
        background-color: var(--main-color) !important;
        border-color: var(--main-color) !important;
    }
    .custom-control-input:focus ~ .custom-control-label::before{
        box-shadow: none !important;
    }
    .custom-control-label::before{
        height: 1.3rem !important;
    }
    .custom-switch .custom-control-label::before{
        width: 2.1rem !important;
        border-radius: 1rem !important;
    }
    .custom-switch .custom-control-label::after{
        top: 8px !important;
        left: -31px !important;
        width: 13px !important;
        height: 13px !important;
    }
    .custom-control{
        top: -2px;
    }
    .custom-control-label{
        cursor: pointer;
    }
</style>

