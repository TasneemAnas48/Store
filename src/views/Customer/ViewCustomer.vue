<template>
    <div class="body-page" id="body-page">
        <nav-bar />
        <side-bar />
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        الزبائن

                    </div>
                </div>
                <div class="card-body">
                    <table id="datatable" class="table dt-responsive">
                        <thead>

                            <tr>
                                <th scope="col" v-for="(h, index) in header" :key="index"> {{ h }}</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(r, index) in row" :key="index">
                                <td>{{ r.name }}</td>
                                <td>{{ r.date }}</td>
                                <td>{{ r.orders }}</td>
                                <td>{{ r.money }}</td>
                                <td>
                                    <div class="row">
                                        <font-awesome-icon icon="fa fa-comments" class="fa-comments" />

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
    name: "ViewCustomer",
    data() {
        return {
            header:[ 'الاسم', 'تاريخ الانضمام', 'عدد الطلبات', 'المبلغ', 'مراسلة' ],
            row:[
                {
                    name:'', 
                    date:'',
                    orders:'',
                    money:'',
                },
            ],

        };
    },
    components: {
        NavBar,
        SideBar,
    },
    mounted() {
        this.axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            this.row[0].name = res.data.userId;
            this.row[0].date = res.data.userId;
            this.row[0].orders = res.data.userId;
            this.row[0].money = res.data.userId;
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
.table .fa-comments {
    color: var(--main-color);
    background-color: white;
    border-radius: 10px;
    padding: 6px;
    font-size: 14px;
    border: 1px solid var(--main-color);
    margin-top: 5px;
    margin-left: 5px;
}

.table .fa-comments:hover {
    color: white;
    background-color: var(--main-color);
}
</style>
