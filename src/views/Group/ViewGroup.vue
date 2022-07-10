<template>
    <div class="body-page view" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        المجموعات
                        <router-link to="/add-group">
                            <b-button class="button-view">إنشاء مجموعة</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-body">
                    <v-app>
                        <v-card-title class="search">
                            <b-form-input v-model="search" class="col-lg-3 input-field" label="Search"
                                placeholder="ابحث" append-icon="mdi-magnify" single-line hide-details>
                            </b-form-input>
                        </v-card-title>
                        <v-data-table class="col-lg-12 my-table" :headers="headers" :items="rows" :search="search"
                            :page.sync="page" @page-count="pageCount = $event" :hide-default-footer="true">
                            <template v-slot:items="props">
                                <td>{{ props.item.id }}</td>
                                <td>{{ props.item.title }}</td>
                                <td>{{ props.item.discription }}</td>
                                <!-- <td><img src={{ props.item.image }}/></td> -->
                                <td>{{ props.item.number }}</td>
                            </template>

                            <template v-slot:top>

                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title class="justify-content-center" style="padding-top: 30px">هل انت
                                            متأكد من انك تريد حذف المجموعة؟
                                        </v-card-title>
                                        <v-card-actions style="padding-bottom: 30px">
                                            <v-spacer></v-spacer>
                                            <v-btn color="var(--gray-medium)" text @click="closeDelete">لا تراجع
                                            </v-btn>
                                            <v-btn color="red" text @click="deleteItemConfirm">نعم تأكيد
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </template>
                            <template v-slot:[`item.mangement`]="{ item }">
                                <font-awesome-icon icon="fa fa-trash" class="fa-trash" @click="deleteItem(item)" />
                                <font-awesome-icon icon="fas fa-edit" class=" fa-edit" @click="editItem(item)" />
                            </template>
                        </v-data-table>
                        <div class="text-center">
                            <v-pagination color=var(--main-color) v-model="page" :length="pageCount" circle>
                            </v-pagination>
                        </div>
                    </v-app>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: "ViewGroup",
    data() {
        return {
            page: 1,
            pageCount: 0,
            search: '',
            dialogDelete: false,
            headers: [
                {
                    text: 'رقم',
                    align: 'center',
                    value: 'id',
                },
                { text: 'عنوان', value: 'title', align: 'center', },
                { text: 'شرح', value: 'discription', align: 'center', },
                // { text: 'صورة', value: 'image' },
                { text: 'عدد المنتجات', value: 'number', align: 'center', },
                { text: 'إدارة', value: 'mangement' , sortable: false,},
            ],
            rows: [],
            editedIndex: -1,
            delete: ''
        };
    },
    
    watch: {
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },

    methods: {
        editItem(item){
            this.$router.replace({ name: 'edit-group', params: {id: item.id} })
        },
        deleteItem (item) {
            this.editedIndex = this.rows.indexOf(item)
            this.delete = item
            this.dialogDelete = true
        },
        deleteItemConfirm () {
            this.rows.splice(this.editedIndex, 1)
            this.sendIdDeleted()
            this.closeDelete()
        },
        closeDelete () {
            this.dialogDelete = false
        },
        sendIdDeleted() {
            this.axios
                .post("http://"+this.$store.state.ip+"api/collection/delete",{id: this.delete.id})
                .then((res) => {
                    // console.log(res.data)
                    console.log(this.delete.id)
                })
        },
        getData(){
            this.axios.get("http://"+this.$store.state.ip+"api/collection/collectionNane/"+ this.$store.state.id_store)
            .then(res => {
                this.rows = res.data
                console.log(res.data)
            });
        }
    },
    mounted() {
        this.getData()
    },
    components: {
    },
};
</script>

<style lang="scss">
.view .v-data-table-header th{
    color: var(--main-color) !important;
    font-size: 15px !important;
}
.view .v-btn {
    letter-spacing: 0px !important;
}

.view .v-select__slot {
    border: 1px solid #707070;
    border-radius: 22px;
    width: 60px !important;
    margin-right: 6px;
}

.view .theme--light.v-text-field>.v-input__control>.v-input__slot:before,
.view .v-text-field.v-input--is-focused>.v-input__control>.v-input__slot:after {
    display: none;
}

.view .v-data-footer__select .v-select__selections .v-select__selection--comma {
    font-size: 13px;
    margin-right: 11px;
}

.view .v-data-footer {
    font-size: 13px;
}

.view .v-pagination__navigation {
    box-shadow: 0 4px 9px -2px rgb(0 0 0 / 24%), 0 -1px 3px 0 rgb(0 0 0 / 14%), 0 -2px 14px 0 rgb(0 0 0 / 12%) !important;
}

.view .v-menu__content {
    border-radius: 20px !important;
}

.view .v-application--wrap {
    height: 50% !important;
}

.view .search {
    justify-content: flex-start;
}

.view .v-data-table__wrapper {
    border: 1px solid #e0e0e0;
    border-radius: 30px !important;
}

.view .theme--light.v-data-table .v-data-footer {
    border-top: none !important;
}

.view .my-table .fa-trash {
    color: #dc3545;
    background: #ff00003b;
    border-radius: 7px;
    padding: 7px;
    font-size: 14px;
    margin-top: 5px;
    margin-left: 10px;
}

.view .my-table .fa-trash:hover {
    color: white;
    background-color: #dc3545;
    cursor: pointer;
}

.view .my-table .fa-edit {
    color: #1eb018;
    background: rgb(64 201 59 / 21%);
    border-radius: 7px;
    padding: 7px;
    font-size: 14px;
    margin-top: 5px;
    margin-left: 5px;
}

.view .my-table .fa-edit:hover {
    color: white;
    background-color: #1eb018;
    cursor: pointer;
}

.view .my-table .table-img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
}

.view .my-table .v-input--switch{
    margin-right: -15px !important;
}
</style>
