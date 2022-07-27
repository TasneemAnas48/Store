import Vue from "vue";
import VueRouter from "vue-router";
import AddGroup from "../views/Group/AddGroup.vue";
import ViewGroup from "../views/Group/ViewGroup.vue";
import EditGroup from "../views/Group/AddGroup.vue";

import AddProduct from "../views/Product/AddProduct.vue";
import AddProduct2 from "../views/Product/AddProduct2.vue";
import AddProduct3 from "../views/Product/AddProduct3.vue";
import AddProduct4 from "../views/Product/AddProduct4.vue";
import AddProduct5 from "../views/Product/AddProduct5.vue";
import AddProduct6 from "../views/Product/AddProduct6.vue";

import ViewProduct from "../views/Product/ViewProduct.vue";

import EditProduct1 from "../views/Product/AddProduct.vue";
import EditProduct2 from "../views/Product/AddProduct2.vue";
import EditProduct3 from "../views/Product/AddProduct3.vue";
import EditProduct4 from "../views/Product/AddProduct4.vue";
import EditProduct5 from "../views/Product/AddProduct5.vue";
import EditProduct6 from "../views/Product/AddProduct6.vue";

import CreateStore1 from "../views/Create Store/CreateStore1.vue";
import CreateStore2 from "../views/Create Store/CreateStore2.vue";
import CreateStore3 from "../views/Create Store/CreateStore3.vue";

import LoginComponent from "../views/Create Store/Login.vue";

import Setting1 from "../views/Settingg/Setting1.vue";
import Setting2 from "../views/Settingg/Setting2.vue";
import Setting3 from "../views/Settingg/Setting3.vue";
import Setting4 from "../views/Settingg/Setting4.vue";
import Setting5 from "../views/Settingg/Setting5.vue";

import ViewCustomer from "../views/Customer/ViewCustomer.vue";

import ViewDiscount from "../views/Discount/ViewDiscount.vue";
import AddCodeDiscount from "../views/Discount/Code/AddCodeDiscount.vue";
import AddCodeDiscount2 from "../views/Discount/Code/AddCodeDiscount2.vue";
import AddCodeDiscount3 from "../views/Discount/Code/AddCodeDiscount3.vue";
import AddDinamicDiscount from "../views/Discount/Dinamic/AddDinamicDiscount.vue";
import AddDinamicDiscount2 from "../views/Discount/Dinamic/AddDinamicDiscount2.vue";

import EditCodeDiscount from "../views/Discount/Code/AddCodeDiscount.vue";
import EditDinamicDiscount from "../views/Discount/Dinamic/AddDinamicDiscount.vue";


import AcceptOrder from "../views/Order/AcceptOrder.vue";
import FinishOrder from "../views/Order/FinishOrder.vue";
import ReceiveOrder from "../views/Order/ReceiveOrder.vue";
import Invoice from "../views/Order/Invoice.vue";
import PrintInvoice from "../views/Order/PrintInvoice.vue";

import Dashboard from "../views/Dashboard.vue";


import Report from "../views/Report/Report.vue";
import ReportSales from "../views/Report/ReportSales.vue";
import ReportOrder from "../views/Report/ReportOrder.vue";
import ReportRateStore from "../views/Report/ReportRateStore.vue";
import ReportRateProduct from "../views/Report/ReportRateProduct.vue";
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
        path: "/login",
        name: "login",
        component: LoginComponent,
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
        path: "/edit-product1/:id",
        name: "edit-product1",
        component: EditProduct1,
    },
    {
        path: "/edit-product2/:id",
        name: "edit-product2",
        component: EditProduct2,
    },
    {
        path: "/edit-product3/:id",
        name: "edit-product3",
        component: EditProduct3,
    },
    {
        path: "/edit-product4/:id",
        name: "edit-product4",
        component: EditProduct4,
    },
    {
        path: "/edit-product5/:id",
        name: "edit-product5",
        component: EditProduct5,
    },
    {
        path: "/edit-product6/:id",
        name: "edit-product6",
        component: EditProduct6,
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
        path: "/setting5",
        name: "setting5",
        component: Setting5,
    },
    {
        path: "/view-group",
        name: "view-group",
        component: ViewGroup,
    },
    {
        path: "/edit-group/:id",
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
    {
        path: "/view-discount",
        name: "view-discount",
        component: ViewDiscount,
    },
    {
        path: "/add-code",
        name: "add-code",
        component: AddCodeDiscount,
    },
    {
        path: "/add-code2",
        name: "add-code2",
        component: AddCodeDiscount2,
    },
    {
        path: "/add-code3",
        name: "add-code3",
        component: AddCodeDiscount3,
    },
    {
        path: "/edit-code/:id",
        name: "edit-code",
        component: EditCodeDiscount,
    },
    {
        path: "/add-dinamic",
        name: "add-dinamic",
        component: AddDinamicDiscount,
    },
    {
        path: "/add-dinamic2",
        name: "add-dinamic2",
        component: AddDinamicDiscount2,
    },
    {
        path: "/edit-dinamic/:id",
        name: "edit-dinamic",
        component: EditDinamicDiscount,
    },
    {
        path: "/accept-order",
        name: "accept-order",
        component: AcceptOrder,
    },
    {
        path: "/finish-order",
        name: "finish-order",
        component: FinishOrder,
    },
    {
        path: "/receive-order",
        name: "receive-order",
        component: ReceiveOrder,
    },
    {
        path: "/invoice/:id",
        name: "invoice",
        component: Invoice,
    },
    {
        path: "/print-invoice/:id",
        name: "print-invoice",
        component: PrintInvoice,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/report",
        name: "report",
        component: Report,
    },
    {
        path: "/report-sales",
        name: "report-sales",
        component: ReportSales,
    },
    {
        path: "/report-order",
        name: "report-order",
        component: ReportOrder,
    },
    {
        path: "/report-rate-store",
        name: "report-rate-store",
        component: ReportRateStore,
    },
    {
        path: "/report-rate-product",
        name: "report-rate-product",
        component: ReportRateProduct,
    },
    
];


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;

router.beforeEach((to, from, next) => {
    const auth = localStorage.getItem("auth")

    if ( to.path !== '/login' && auth == 'false'  && to.path !== '/create-store1' && to.path !== '/create-store2' && to.path !== '/create-store3') 
        next({ name: 'login' })
    else 
        next()
})