<template>
    <div class="body-page add-group" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header" v-if="this.route == 'add-group'">
                    <div class="d-flex justify-content-between align-items-center add">
                        إنشاء مجموعة
                        <router-link to="/view-group">
                            <b-button class="button-view">عرض المجموعات</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-header" v-else-if="this.route == 'edit-group'">
                    <div class="d-flex justify-content-between align-items-center add">
                        تعديل مجموعة
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
                                            <b-form-input class="col-lg-7 col-md-11 col-sm-11 col-10 input-field" v-model="address" name="address">
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
                                                v-model="discription" name="discription">
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
                                                @change="onFileSelected" 
                                                class="col-lg-8 col-md-11 col-sm-11 col-10  input-field " filled color=var(--main-color)>
                                            </v-file-input>
                                            <v-tooltip color="error" right v-if="v$.image.$error">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="red" dark v-bind="attrs" v-on="on">
                                                        mdi-exclamation
                                                    </v-icon>
                                                </template>
                                                <span>{{ v$.image.$errors[0].$message }}</span>
                                            </v-tooltip>
                                        </div>

                                    </div>
                                    <div class="form-row float-left" v-if="this.route == 'add-group'">
                                        <b-button type="button" class=" button-add" v-on:click="submitForm">إنشاء
                                        </b-button>
                                    </div>
                                    <div class="form-row float-left" v-else-if="this.route == 'edit-group'">
                                        <b-button type="button" class=" button-add" v-on:click="submitForm">حفظ
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
    name: "AddGroup",
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            address: '',
            discription: '',
            image: '',
            edit: false,
            id: '',
            route:'',
            
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
            image: { required: helpers.withMessage('هذا الحقل مطلوب', required) },
        }
    },
    mounted(){
        this.route = this.$route.name
        if (this.$route.name == "edit-group"){
            this.id = this.$route.params.id
            this.edit = true
            this.axios.get("http://"+this.$store.state.ip+"api/collection/show/" + this.id)
            .then(res => {
                this.address = res.data.title
                this.discription = res.data.discription
                // this.image = res.data.image
            })
        }
    },
    methods: {
        createGroup(){
            const parts = [
                new Blob(['..'], {
                    type: 'image/jpeg',
                }),
                ' Same way as you do with blob',
                new Uint16Array([33])
            ];

            const file = new File(parts, 'default-thumbnail.jpg', {
                lastModified: new Date(),
                type: "image/jpeg",
            });
            console.log(file)
            const formData = new FormData()
            formData.append('title', "مجموعة اساسية")
            formData.append('discription', "مجموعة اساسية يتم انشاؤها تلقائيا")
            formData.append('image', file)
            formData.append('store_id', this.$store.state.id_store)
            this.axios.post("http://"+this.$store.state.ip+"api/collection/create", formData)
                .then((res) => {
                console.log(res)
                // if (res.data.status == "success")
                //     this.$router.replace({ name: 'view-group' })
                })
        },
        onFileSelected(files) {
            this.image = files
            console.log( this.image)
        },
        submitForm() {
            this.v$.$validate()
            if (!this.v$.$error)
                this.sendData()
        },
        sendData() {
            const formData = new FormData()
            formData.append('title', this.address)
            formData.append('discription', this.discription)
            formData.append('image', this.image)
            formData.append('store_id', this.$store.state.id_store)
            if (this.edit == true){
                this.editData(formData)
            }
            else{
                this.addData(formData)
            }
            for (var pair of formData.entries()) {
                console.log(pair)
            }
        },
        editData(formData){
            formData.append('id', this.id)
            this.axios.post("http://"+this.$store.state.ip+"api/collection/update", formData)
            .then((res) => {
                console.log(res)
                if (res.data.status == "success")
                    this.$router.replace({ name: 'view-group' })
                })
        },
        addData(formData){
            
            this.axios.post("http://"+this.$store.state.ip+"api/collection/create", formData)
                .then((res) => {
                console.log(res)
                if (res.data.status == "success")
                    this.$router.replace({ name: 'view-group' })
                })
        }
    },
};
</script>

<style lang="scss">
@import '@/assets/css/Group/AddGroup.css';
</style>
