<template>
    <div class="body-page edit-group" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        إنشاء مجموعة
                        <router-link to="/view-group">
                            <b-button class="button-view">عرض المجموعات</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <v-app>
                                <form class="form-input">
                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row">
                                            <label for="address" class="col-lg-4 label-input">عنوان</label>
                                            <b-form-input class="col-lg-7 col-md-11 col-sm-11 col-10 input-field" v-model="address" name="address" value="address">
                                            </b-form-input>
                                            <v-tooltip color="error" right v-if="v$.address.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.address.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="discription" class="col-lg-4 col-md-6 label-input">وصف المجموعة</label>
                                            <b-form-textarea class="col-lg-7 col-md-11 col-sm-11 col-10 input-field discription"
                                                v-model="discription" name="discription" value="discription">
                                            </b-form-textarea>
                                            <v-tooltip color="error" right v-if="v$.discription.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.discription.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>

                                    </div>

                                    <div class="form-row">
                                        <div class="my-input col-lg-12 row" style="margin-top: -12px">
                                            <label for="img" class="col-lg-4 label-input"
                                                style="margin-left: -15px">صورة</label>
                                            <v-file-input type="file" prepend-icon="mdi-camera"
                                                placeholder="اختيار صورة" @change="onFileSelected"
                                                class="col-lg-8 col-md-11 col-sm-11 col-10  input-field " filled color=var(--main-color)>
                                            </v-file-input>
                                        </div>

                                    </div>
                                    <div class="form-row float-left">
                                        <b-button type="button" class=" button-add" v-on:click="submitForm">إنشاء
                                        </b-button>
                                    </div>
                                </form>
                            </v-app>
                        </div>
                        <div class="col-lg-6 d-none d-xl-block d-lg-block">
                            <img src="../../assets/img/add_group.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength, helpers } from '@vuelidate/validators'

export default {
    name: "EditGroup",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            address: '',
            discription: '',
            image: ''
        };
    },
    validations() {
        return {
            address: { required: helpers.withMessage('هذا الحقل مطلوب', required) },
            discription: {
                required: helpers.withMessage('هذا الحقل مطلوب', required),
                minLength: helpers.withMessage('يجب أن يتكون هذا الحقل من 10 أحرف على الأقل', minLength(10)),
                maxLength: helpers.withMessage('أقصى طول مسموح به هو 50', maxLength(50))
            },
            image: "",
        }
    },
    components: {
    },
    // this.$store.state.ipv+""
    mounted() {
        this.axios.get("https://jsonplaceholder.typicode.com/photos/1")
        .then(res => {
            this.address = res.data.title;
            this.discription = res.data.title;
            this.image = res.data.title;
        });
    },

    methods: {
        onFileSelected(files) {
            this.image = files;
        },
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error)
                this.sendData();
        },
        
        sendData() {
            const formData = new FormData();
            formData.append('name', this.address);
            formData.append('discription', this.discription);
            formData.append('image', this.image);
            this.axios
                .post("https://jsonplaceholder.typicode.com/posts", formData)
                .then((res) => console.log(res));
        },
    },
};
</script>

<style lang="scss">
.edit-group .v-application--wrap {
    min-height: 50% !important;
}
.edit-group .v-input__slot {
    border: 1px solid #ced4da;
    background: white !important;
    border-radius: 30px !important;
    height: 45px !important;
    box-shadow: none !important;
    min-height: 45px !important;
}

@media (max-width: 1263px) {
    .edit-group .mdi-exclamation {
        margin-top: -1px !important;
    }
}

.edit-group .mdi-exclamation {
    position: static !important;
    left: -29px;
    margin-right: -33px;
    z-index: 100;
    margin-top: -10px;
}
</style>