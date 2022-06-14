<template>
    <div class="create-store">
        <div class="side-left col-lg-3">
            <div class="image">
                <img src="../../assets/img/create_store2.png" class="img-thumbnail img" />
            </div>
        </div>
        <div class="side-right col-lg-9 ">
            <div class="address">
                <p>إنشاء متجر</p>
            </div>
            <div class="line">
                <div class="timeline">
                    <div class="timeline">
                    <div class="event">
                        <div class="detail">معلومات المتجر</div>
                    </div>
                    <div class="event-active">
                        <div class="detail">معلومات شخصية</div>
                    </div>
                    <div class="event">
                        <div class="detail">اعدادات الموقع</div>
                    </div>

                </div>

                </div>
            </div>
            <form class="form-input">

                <div class="form-row ">

                    <label for="name" class="col-lg-2 label-input ">الاسم</label>
                    <b-form-input class="col-lg-5 input-field" v-model="personalInfo.name" name="name" required></b-form-input>
                </div>

                <div class="form-row ">
                    <label for="email" class="col-lg-2 label-input">البريد الالكتروني</label>
                    <b-form-input class="col-lg-5 input-field" v-model="personalInfo.email" name="email" type="email" required></b-form-input>
                </div>

                <div class="form-row ">
                    <label for="password" class="col-lg-2 label-input">كلمة السر</label>
                    <b-form-input class="col-lg-5 input-field" v-model="personalInfo.password" name="password" type="password" required></b-form-input>
                </div>

                <div class= "buttons form-row" style="margin-top:100px">

                    <div class="float-left">
                        <router-link to="/create-store1">
                            <b-button type="submit" class="button-add">
                                <font-awesome-icon icon="fas fa-arrow-right" class="icon-button-right" />السابق
                            </b-button>
                        </router-link>
                    </div>
                    <div class="float-rigth">
                        <router-link to="/create-store3">
                            <b-button type="button" class="button-add"  v-on:click="submitForm">
                                <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />التالي
                            </b-button>
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>


<script>

export default {
    name: "CreateStore2",
    data() {
        return {
            personalInfo:{
                name:'',
                email:'',
                password:"",
            }
        };
    },
    components: {
    },
    methods: {
        submitForm() {
            this.axios
                .post("https://jsonplaceholder.typicode.com/posts", {
                    name: this.personalInfo.name,
                    email: this.personalInfo.email,
                    password: this.personalInfo.password,
                })
                .then((res) => console.log(res));
        },

    },
};
</script>

<style lang="scss">



.label-input {
    font-size: 18px;
    color: var(--gray-medium);
    // margin-left: 20px;
    text-align: left;
}

.form-row {
    margin-top: 40px;
    margin-bottom: 40px;
}
.buttons{
    display: flex;
    justify-content: center;
}
form{
    margin-top:70px
}
</style>

