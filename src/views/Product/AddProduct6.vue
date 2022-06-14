
<template>
    <div class="body-page add-product4" id="body-page">
        <nav-bar />
        <side-bar />
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        إضافة منتج
                        <router-link to="/view-product">
                            <b-button class="button-view">عرض المنتجات</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-body">
                    <div class="line">
                        <div class="timeline">
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event">
                                <div class="detail"></div>
                            </div>
                            <div class="event-active">
                                <div class="detail"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <form class="form-input">
                                <div class="form-row">
                                    <div class="col-lg-1"></div>
                                    <div class="optinal col-lg-10">

                                        خيارات إضافية
                                        <b-button @click="add_option" type="button" class="button-add button-option">+
                                        </b-button>
                                    </div>

                                </div>
                                <div v-for="(option, i) in OptionSelected" :key="i">
                                    <div class="form-row">
                                        <div class="col-lg-1"></div>
                                        <label for="type" class="col-lg-5 label-input">نوع الخيار</label>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-lg-1"></div>
                                        <select class="col-lg-7 input-field" v-model="OptionSelected[i].value">
                                            <option v-for="OptionType in OptionType" :key="OptionType.value"
                                                :value="OptionType.value">{{ OptionType.text }}</option>

                                        </select>

                                    </div>
                                    <div class="form-row">
                                        <div class="col-lg-1"></div>
                                        <label for="value" class="col-lg-5 label-input">قيم الخيار</label>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-lg-1"></div>
                                        <div class="col-lg-7">
                                            <InputOption v-for="(Opt, index) in OptionSelected[i].OptionValue"
                                                :key="index" v-model="OptionSelected[i].OptionValue[index].name">
                                            </InputOption>
                                        </div>
                                        <div class="col-lg-1">
                                            <b-button @click="add(i)" type="button" class="button-add button-plus">+
                                            </b-button>
                                        </div>

                                    </div>
                                    <div class="form-row line-option">
                                    </div>
                                </div>
                                <div class="float-left row-bottom">
                                    <b-button type="button" class="button-add" v-on:click="submitForm">
                                        إنشاء
                                    </b-button>
                                </div>
                                <div class="float-left row-bottom">
                                    <router-link to="/add-product5">
                                        <b-button type="submit" class="button-add">
                                            <font-awesome-icon icon="fas fa-arrow-right" class="icon-button-right" />
                                            السابق
                                        </b-button>
                                    </router-link>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6 d-none d-xl-block d-lg-block">
                            <img src="../../assets/img/add_product4.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/Main/Navbar.vue";
import SideBar from "@/components/Main/Sidebar.vue";
import InputOption from "@/components/InputOption.vue";


export default {
    name: "AddProduct6",
    data() {
        return {
            OptionType: [
                {
                    text: 'مقاس',
                    value: 'size',
                },
                {
                    text: 'لون',
                    value: 'color',
                },
                {
                    text: 'المادة المصنعة',
                    value: 'material',
                },
            ],
            OptionSelected: [{
                value: '',
                OptionValue: [{
                    name: ''
                }]
            }]
        };
    },
    methods: {
        add(i) {
            this.OptionSelected[i].OptionValue.push({
                name: ''
            });
            // console.log(this.OptionSelected[i].OptionValue);
        },
        add_option() {
            this.OptionSelected.push({
                value: '',
                OptionValue: [{}],
            });
            // console.log(this.OptionSelected);
        },
        submitForm() {
            this.axios.post("https://jsonplaceholder.typicode.com/posts", {
                OptionSelected: this.OptionSelected,
            }).then((res) => console.log(res));
        },
    },
    components: {
        NavBar,
        SideBar,
        InputOption,
    },
};

</script>


<style lang="scss">
.line-option {
    height: 1px;
    border-bottom: 1px solid #ced4da;
}

.optinal {
    font-size: 20px;
    color: var(--main-color);
    float: right;
    text-align: right;
}

select {
    border-color: #ced4da !important;
}

.add-product4 .form-row {
    margin-top: 10px !important;
    margin-bottom: 25px;
}

.add-product4 .label-input {
    text-align: right !important;
}

.button-plus {
    background-color: white !important;
    color: var(--gray-medium) !important;
    padding: 0px;
    padding-right: 13px !important;
    padding-left: 13px !important;
    border-color: var(--gray-medium) !important;
}

.button-option {
    background-color: white !important;
    color: var(--main-color) !important;
    padding: 0px;
    padding-right: 13px !important;
    padding-left: 13px !important;
    margin-right: 20px;
}
</style>
