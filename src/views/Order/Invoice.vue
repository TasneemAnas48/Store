<template>
    <div class="body-page " id="body-page">
        <div class="body invoice">
            <div class="card-header card-invoice d-flex justify-content-between bd-highlight mb-3" style="margin-bottom:0px !important">
                    <div class="p-2 bd-highlight" style="font-size: 20px; color: var(--main-color)">
                        الفاتورة رقم 3
                    </div>
                    <div class="p-2 bd-highlight">
                        <router-link to="/print-invoice">
                            <b-button class="button-view">طباعة</b-button>
                        </router-link>
                    </div>
            </div>
            <div class="line2"></div>
            <div class="card">
                <div class="card-body">
                    <div class="header">
                        <div class="row">
                            <h1><span class="color">اسم المشروع</span></h1>
                        </div>
                        <div class="row">
                            <table class="table table-header">
                                <tbody>
                                    <tr>
                                        <td class="head">رقم الفاتورة</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td class="head">تاريخ الفاتورة</td>
                                        <td>3-5-2021</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="middle">
                            <div class="table-responsive">
                                <table class=" table middle-table">
                                    <tbody class="from-body">
                                        <tr>
                                            <td colspan="2" class="text-right color">
                                                <div class="from">
                                                    <h2>البائع</h2>
                                                </div>
                                            </td>
                                            
                                            <td style="max-width: 175px;"></td>
                                            <td colspan="2" class="text-right color">
                                                <div>
                                                    <h2>المشتري</h2>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-right ">اسم المتجر</td>
                                            <td class="text-right">خيط وسنارة</td>
                                            <td style="min-width: 175px;"></td>
                                            <td class="text-right">اسم الزبون</td>
                                            <td class="text-right">تسنيم</td>
                                        </tr>
                                        <tr>
                                            <td class="text-right">ايميل المتجر</td>
                                            <td class="text-right">branch@gmail.com</td>
                                            <td style="min-width: 175px;"></td>
                                            
                                            <td class="text-right">ايميل الزبون</td>
                                            <td class="text-right">tasneem@gmail.com</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        
                    </div>

                    <div class="invoice-details">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>اسم المنتج</th>
                                    <th>السعر</th>
                                    <th>الخصم %</th>
                                    <th>الاجمالي</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>حقيبة</td>
                                    <td>2000</td>
                                    <td>50%</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>حقيبة</td>
                                    <td>2000</td>
                                    <td>50%</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>حقيبة</td>
                                    <td>2000</td>
                                    <td>50%</td>
                                    <td>1000</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr class="change-height">
                                    <td colspan="2" rowspan="1"></td>
                                    <td><b>المجموع</b></td>
                                    <td>3000</td>
                                </tr>
                                
                                <tr class="change-height">
                                    <td colspan="2" rowspan="1"></td>
                                    <td><b>خصم الفاتورة %</b></td>
                                    <td>0%</td>
                                </tr>
                                <tr class="change-height">
                                    <td colspan="2" rowspan="1"></td>
                                    <td><b>الصافي</b></td>
                                    <td>1000</td>
                                </tr>
                                <tr class="change-height">
                                    <td colspan="2" rowspan="1"></td>
                                    <td><b>المدفوع</b></td>
                                    <td>3000</td>
                                </tr>

                            </tfoot>
                        </table>
                    </div>
                    <div class="line"></div>
                        <div class="footer" >
                            <p class="comment">ملاحظات</p>
                            <p class="thank">شكرا لك</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<script>
export default {
    name: "Invoice",
    data() {
        return {
            
        };
    },
    components: {
    },
    methods: {
        getData(){
            this.axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.rows = res.data;
                // console.log(res.data);
            });
        },
        
    },
    mounted() {
        this.getData()
    },
    
};
</script>

<style lang="scss">

.invoice .card{
    height: auto;
    margin-bottom: 20px;
    padding-bottom: 40px;
    font-size: 15px;
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
}
.invoice .card-header{
    font-size: 20px;
    padding:15px;
    background-color:white;
    margin-bottom: 15px;
}

.invoice .btn-list:hover{
    box-shadow: 0 2px 6px 0  rgb(142 155 156 / 50%);
}

.invoice .btn-list{
    background-color: var(--color-main);
    color: white;
    border-radius: 2px;
    font-size: 15px;
    
}

.invoice h1{
    font-weight: normal;
    font-size: 30px;
    color: var(--color-main);
}

.invoice .icone{
    color: var(--color-main);
    font-size: 32px;
    margin-right: 10px;
}
.invoice .header{
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

}
.invoice .row{
    justify-content: center;
}
.invoice .color{
    font-weight: bold;
    color: var(--main-color)
}
.invoice .table-header{
    width: max-content;
    margin-top: 10px;
}
.invoice .table-header td{
    padding-left: 0px;
}

.invoice .table-header td,.invoice .table-header th{
    border-top: none !important;
}
.invoice h2{
    color: var(--color-main);
    font-size: 20px;
}
.invoice .from-body , .invoice .to-body{
    font-size: 13px;
}
.invoice .from-table td, .invoice .to-table td{
    padding: 5px 10px 5px 0px;
    
}
.invoice .to-table td{
    padding: 5px 10px 5px 0px;
    
}
.invoice .middle{
    margin-top: 30px;
}
.invoice .invoice-details{
    margin: 50px 20px 50px 20px;
}
.invoice .invoice-details th{
    border-bottom: 1px solid #ddd; 
}
.invoice .footer{
    margin-right: 20px;
    text-align: right;
}
.invoice .comment{
    font-weight: bold;
    margin-bottom: 5px;
}
.invoice .thank{
    font-size: 13px;
    color: #9a9a9a;
}
.invoice .line{
    height: 1px;
    background: #c9c9c9;
    margin-bottom: 50px;
    margin-left: 20px;
    margin-right: 20px;
}
.invoice .middle-table{
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
}

.invoice .middle-table td,.invoice .middle-table th{
    border-top: none !important;
}
.invoice .middle .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th{
    padding: 4px;
}
.invoice .card-header{
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
    padding: 0px;
}

.invoice .line2{
    height: 1px;
    background: #c9c9c9;
    margin-top: 0px;
    margin-bottom: 30px;
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;

}
.invoice .card-invoice{
    background-color: transparent;
    border: none;
}
.invoice b, .invoice th{
    color: var(--main-color);
}
.invoice .change-height td{
    height: 47.5px !important;
    vertical-align: middle !important;
}
</style>
