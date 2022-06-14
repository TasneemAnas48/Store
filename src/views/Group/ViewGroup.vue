<template>
    <div class="body-page" id="body-page">
        <nav-bar />
        <side-bar />
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
                    <!-- <div class="table-responsive">
                        <table id="table" class="table" style="width:100%;">
                            <thead>

                                <tr>
                                    <th scope="col" v-for="(h, index) in header" :key="index"> {{h}}</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(r, index) in row" :key="index">
                                    <td>{{r.title}}</td>
                                    <td><img src="../../assets/img/image.jpg" class="table-img" /></td>
                                    <td>{{r.discription}}</td>
                                    <td>{{r.num}}</td>
                                    <td>
                                        <div class="row">
                                            <font-awesome-icon icon="fa fa-trash" class="fa-trash" />
                                            <router-link to="/edit-group">
                                                <font-awesome-icon icon="fas fa-edit" class=" fa-edit" />
                                            </router-link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> -->

                    <table id="datatable" class="table dt-responsive">
                            <thead>
                                <tr>
                                    <th scope="col" v-for="(h, index) in header" :key="index"> {{ h }}</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(r, i) in row" :key="i">
                                    <td>{{ r.id }}</td>
                                    <!-- <td><img :src="r.url" class="table-img" /></td> -->
                                    <td>{{ r.username }}</td>
                                    <td>{{ r.name }}</td>
                                    <td>
                                        <div class="row">
                                            <font-awesome-icon icon="fa fa-trash" class="fa-trash" />
                                            <router-link to="/edit-group">
                                                <font-awesome-icon icon="fas fa-edit" class=" fa-edit" />
                                            </router-link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<script>
import $ from "jquery";
import NavBar from "@/components/Main/Navbar.vue";
import SideBar from '@/components/Main/Sidebar.vue';


export default {
    name: "ViewGroup",
    data() {
        return {
            header:['عنوان', 'شرح', 'عدد المنتجات', 'إدارة' ],
            row:[],
        };
    },
    components: {
        NavBar,
        SideBar,
    },
    mounted() {
        this.axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            this.row = res.data;
            console.log(this.row);
        });

        $("#datatable").DataTable({
            
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.12.1/i18n/ar.json"
            },
            lengthMenu: [
                [5, 10, 25, 50, -1],
                [5, 10, 25, 50, "All"],
            ],
            pageLength: 5,
        });
    },
    };
</script>

<style lang="scss">
.dataTables_wrapper label{
    display: flex !important;
    margin-bottom: 2.5rem !important;
    align-items: center !important; 
    color: #707070 !important;
}

.dataTables_wrapper .form-control {
    width: 40% !important;
    height: 40px !important;
    margin-right: 10px;
}
.dataTables_wrapper .custom-select {
    width: 20% !important;
    margin-left: 10px;
    margin-right: 10px;
    
}
.dataTables_wrapper .dataTables_filter label{
    justify-content: end;
}
.dataTables_wrapper .pagination{
    justify-content: end;
}
.dataTables_wrapper .pagination .previous .page-link{
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
}
.dataTables_wrapper .pagination .next .page-link{
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.dataTables_wrapper .pagination .page-item.active .page-link{
    background-color: var(--main-color) !important;
    border-color: var(--main-color) !important;
    color: white !important
}
.dataTables_wrapper .pagination .page-link{
    color: #707070 !important;
}
.dataTables_wrapper .page-link:focus{
    box-shadow: none !important;
}
.dataTables_wrapper .dataTables_info{
    float:right;
    color: #707070 !important;
    width: 350px;
    text-align: right;
}
.table {
    width: 99.6% !important;
    color: #707070 !important;
}

.table th {
    color: var(--main-color);
}

.table th,
.table td {
    vertical-align: middle !important;
}



.table .row {
    justify-content: center;
}

.table .fa-trash {
    color: #dc3545;
    background-color: white;
    border-radius: 10px;
    padding: 6px;
    font-size: 14px;
    border: 1px solid #dc3545;
    margin-top: 5px;
    margin-left: 10px;
}

.table .fa-trash:hover {
    color: white;
    background-color: #dc3545;
}

.table .fa-edit {
    color: #40C93B;
    background-color: white;
    border-radius: 10px;
    padding: 6px;
    font-size: 14px;
    border: 1px solid #40C93B;
    margin-top: 5px;
    margin-left: 5px;
}

.table .fa-edit:hover {
    color: white;
    background-color: #40C93B;
}

.table .table-img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
}
table.dataTable.dtr-inline.collapsed>tbody>tr>td.dtr-control:before, table.dataTable.dtr-inline.collapsed>tbody>tr>th.dtr-control:before{
    background-color: var(--main-color) !important;
}
</style>
