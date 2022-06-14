import Vue from "vue";
import VueRouter from "vue-router";
import AddGroup from "../views/Group/AddGroup.vue";
import AddProduct from "../views/Product/AddProduct.vue";
import AddProduct2 from "../views/Product/AddProduct2.vue";
import AddProduct3 from "../views/Product/AddProduct3.vue";
import AddProduct4 from "../views/Product/AddProduct4.vue";
import AddProduct5 from "../views/Product/AddProduct5.vue";
import AddProduct6 from "../views/Product/AddProduct6.vue";
import CreateStore1 from "../views/Create Store/CreateStore1.vue";
import CreateStore2 from "../views/Create Store/CreateStore2.vue";
import CreateStore3 from "../views/Create Store/CreateStore3.vue";
import Setting1 from "../views/Settingg/Setting1.vue";
import Setting2 from "../views/Settingg/Setting2.vue";
import Setting3 from "../views/Settingg/Setting3.vue";
import Setting4 from "../views/Settingg/Setting4.vue";
import ViewGroup from "../views/Group/ViewGroup.vue";
import EditGroup from "../views/Group/EditGroup.vue";
import ViewProduct from "../views/Product/ViewProduct.vue";
import ViewCustomer from "../views/Customer/ViewCustomer.vue";

Vue.use(VueRouter);

const routes = [
    
    {
        path: "/create-store1",
        name: "create-store1",
        component: CreateStore1,
    },
    {
        path: "/create-store2",
        name: "create-store2",
        component: CreateStore2,
    },
    {
        path: "/create-store3",
        name: "create-store3",
        component: CreateStore3,
    },
    {
        path: "/add-group",
        name: "add-group",
        component: AddGroup,
    },
    {
        path: "/add-product1",
        name: "add-product1",
        component: AddProduct,
    },
    {
        path: "/add-product2",
        name: "add-product2",
        component: AddProduct2,
    },
    {
        path: "/add-product3",
        name: "add-product3",
        component: AddProduct3,
    },
    {
        path: "/add-product4",
        name: "add-product4",
        component: AddProduct4,
    },
    {
        path: "/add-product5",
        name: "add-product5",
        component: AddProduct5,
    },
    {
        path: "/add-product6",
        name: "add-product6",
        component: AddProduct6,
    },
    {
        path: "/setting1",
        name: "setting1",
        component: Setting1,
    },
    {
        path: "/setting2",
        name: "setting2",
        component: Setting2,
    },
    {
        path: "/setting3",
        name: "setting3",
        component: Setting3,
    },
    {
        path: "/setting4",
        name: "setting4",
        component: Setting4,
    },
    {
        path: "/view-group",
        name: "view-group",
        component: ViewGroup,
    },
    {
        path: "/edit-group",
        name: "edit-group",
        component: EditGroup,
    },
    {
        path: "/view-product",
        name: "view-product",
        component: ViewProduct,
    },
    {
        path: "/view-customer",
        name: "view-customer",
        component: ViewCustomer,
    },
    
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;

