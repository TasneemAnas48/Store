<template>
    <div class="body-page" id="body-page">
        <nav-bar />
        <side-bar />
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                    المنتجات
                        <router-link to="/add-product1">
                            <b-button class="button-view">إنشاء منتج</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-body">
                    <table id="datatable" class="table dt-responsive">
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
                                    <td>{{r.sell}}</td>
                                    <td>{{r.cost}}</td>
                                    <td >
                                        <b-li v-for="(c, i) in r.classification" :key="i">
                                            {{ c.text }}  
                                        </b-li>
                                    </td>
                                    <td>{{r.group}}</td>
                                    <td>
                                        <div class="row">
                                            <font-awesome-icon icon="fa fa-trash" class="fa-trash" />
                                            <!-- <router-link to="/edit-group"> -->
                                                <font-awesome-icon icon="fas fa-edit" class=" fa-edit" />
                                            <!-- </router-link> -->
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
    name: "ViewProduct",
    data() {
        return {
            header:['عنوان', 'صورة', 'شرح', 'سعر المبيع', 'سعر التكلفة', 'التصنيف', 'المجموعة', 'ادارة' ],
            row:[
                {
                    title:'', 
                    image:'',
                    discription:'',
                    sell:'',
                    cost:'',
                    classification: [
                        { value: '', text: '' },
                    ],
                    group:'',
                },
            
            ]
        };
    },
    components: {
        NavBar,
        SideBar,
    },
    mounted() {
        this.axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            this.row[0].title = res.data.userId;
            this.row[0].image = res.data.userId;
            this.row[0].discription = res.data.userId;
            this.row[0].sell = res.data.userId;
            this.row[0].cost = res.data.userId;
            this.row[0].classification[0].text = res.data.userId;
            this.row[0].group = res.data.userId;
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

</style>
