<template>
    <div class="body-page setting setting3" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        الاعدادات
                    </div>
                </div>
                <div class="card-body">
                    <div class="line">
                        <div class="timeline">
                            <div class="event">
                                <div class="detail">معلومات المتجر</div>
                            </div>
                            <div class="event">
                                <div class="detail">معلومات شخصية</div>
                            </div>
                            <div class="event-active">
                                <div class="detail">ادوار الصفحة</div>
                            </div>
                            <div class="event">
                                <div class="detail">اعدادات الموقع</div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-9 row" style="margin-top:30px">
                            <div class="col-lg-2"></div>
                            <div class="add-staff col-lg-8">
                                <div class="staff " style="float:right;">
                                    طاقم العمل ({{ adminNumbar }} من 1)
                                    <br>
                                    <span class="note">يمكنك إضافة ما يصل إلى 1 من
                                        المستخدمين</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="col-lg-9 row" style="margin-top:40px">
                        <div class="col-lg-2"></div>
                        <div class="col-lg-10 align-items-center"> -->
                    <!-- <table class="table table-employee">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">اسم الموظف</th>
                                        <th scope="col">البريد الالكتروني</th>
                                        <th scope="col">الصلاحيات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="e in getEmplotee" :key="e.id">
                                        <th scope="row">{{ e.id }}</th>
                                        <td>{{ e.name }}</td>
                                        <td>{{ e.title }}</td>
                                        <td>
                                            <b-li v-for="(p, i) in e.perm" :key="i">
                                                {{ p.name }} , 
                                            </b-li>
                                        </td>
                                    </tr>
                                </tbody>
                            </table> -->
                    <!-- </div>
                    </div> -->
                    <v-app>
                        <div v-if="adminNumbar < 1">
                            <form class="form-input">
                                <v-dialog v-model="dialog" scrollable max-width="600px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <div class="col-lg-9 row">
                                            <div class="col-lg-1"></div>
                                            <div class="col-lg-8" style="margin-top: 20px;">
                                                <b-button class="button-add" v-bind="attrs" v-on="on"
                                                    style="float: right;">إضافة موظف</b-button>
                                            </div>
                                        </div>
                                    </template>

                                    <v-card>
                                        <v-card-title>
                                            <span class="header">إضافة موظف</span>
                                        </v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            <v-container>
                                                <div class="form-row ">
                                                    <label for="name" class="col-lg-3 label-input ">الاسم</label>
                                                    <b-form-input class="col-lg-5 input-field" v-model="name"
                                                        name="name" required>
                                                    </b-form-input>
                                                </div>

                                                <div class="form-row ">
                                                    <label for="email" class="col-lg-3 label-input">البريد
                                                        الالكتروني</label>
                                                    <b-form-input class="col-lg-5 input-field" v-model="email"
                                                        name="email" type="email" required></b-form-input>
                                                </div>
                                                <div class="form-row permission">
                                                    <label for="name" class="col-lg-3 label-input ">الصلاحيات</label>
                                                </div>
                                                <div class="check">
                                                    <v-checkbox v-for="option in options" :key="option.value"
                                                        :value="option.value" v-model="checked" color=var(--main-color)
                                                        :label="option.text"></v-checkbox>
                                                </div>
                                            </v-container>
                                        </v-card-text>
                                        <v-divider></v-divider>
                                        <v-card-actions>
                                            <b-button type="button" @click="dialog = false" class="button-add">إلغاء
                                            </b-button>
                                            <b-button type="submit" @click="dialog = false" class="button-add"
                                                v-on:click="submitForm">إضافة</b-button>

                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>

                            </form>
                        </div>
                        <div class="view row">
                            <div class="col-lg-1"></div>
                            <v-data-table class="col-lg-9 my-table " :headers="headers" :items="rows"
                                :hide-default-footer="true">
                                <template v-slot:items="props">
                                    <td>{{ props.item.id }}</td>
                                    <td>{{ props.item.name }}</td>
                                    <td>{{ props.item.email }}</td>
                                    <td>{{ props.item.perm }}</td>
                                </template>
                            </v-data-table>
                        </div>
                    </v-app>
                    <div class="buttons form-row row-bottom" style="margin-top:100px; float:center">
                        <div class="float-left">
                            <router-link to="/setting2">
                                <b-button type="button" class="button-add">
                                    <font-awesome-icon icon="fas fa-arrow-right" class="icon-button-right" />
                                    السابق
                                </b-button>
                            </router-link>
                        </div>
                        <div class="float-rigth">
                            <router-link to="/setting4">
                                <b-button type="submit" class="button-add">
                                    <font-awesome-icon icon="fas fa-arrow-left" class="icon-button-left" />
                                    التالي
                                </b-button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script> -->
<script>


export default {
    name: "Setting3",
    data() {
        return {
            headers: [
                {
                    text: 'رقم',
                    align: 'start',
                    value: 'id',
                },
                { text: 'اسم', value: 'name' },
                { text: 'ايميل', value: 'email' },
                { text: 'صلاحيات', value: 'perm' , sortable: false,},
            ],
            rows: [],
            dialog: false,
            adminNumbar: 0,
            name: '',
            email: '',
            options: [
                { text: 'المنتجات', value: 'products' },
                { text: 'المجموعات', value: 'groups' },
                { text: 'الزبائن', value: 'customers' },
                { text: 'الطلبات', value: 'orders' }
            ],
            checked: [],
            // getEmplotee: [],
        };
    },
    components: {
    },
    mounted() {
        this.getData();
    },
    methods: {
        submitForm() {
            this.axios
                .post("https://jsonplaceholder.typicode.com/posts", {
                    name: this.name,
                    email: this.email,
                    checked: this.checked,
                })
                .then((res) => console.log(res));
        },
        getData(){
            this.axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.rows = res.data;
                console.log(res.data);
            });
        }
    }

};
</script>



<style lang="scss">
.setting3 .header {
    color: var(--main-color);
}

.setting3 .label-input {
    text-align: left;
}

.setting3 .v-card__actions {
    justify-content: center;
    padding: 25px !important;
}

.setting3 .v-dialog {
    border-radius: 30px !important;
}

.setting3 .form-row {
    margin-top: 30px !important
}

.setting3 .v-divider {
    margin-top: 10px !important;
    margin-bottom: 0px !important;
}

.setting3 .permission {
    margin-bottom: 0px !important;
}

.setting3 .v-input--checkbox {
    margin-top: 0px !important;
}

.setting3 .check {
    margin-right: 40px;
}

.setting3 .v-label {
    left: -12px !important;
    top: 25px !important;
    margin-top: -43px !important;
}

.setting3 .form-input {
    margin-top: 0px !important
}

.setting3 .label-input-custom {
    float: right
}

.setting3 .buttons {
    display: flex;
    justify-content: center;
}

.add-staff {
    float: right;
}

.staff {
    font-size: 20px;
    color: #464646;
    text-align: justify;
}

.add-employee {
    font-size: 20px;
    color: #464646;
    float: right;
    text-align: right;
}

.note {
    font-size: 15px;
    color: var(--gray-medium);
    margin-top: 20px;
}

.setting3 .my-table {
    margin-right: 20px;
    margin-top: 30px;
}

</style>
