<template>
    <div class="body-page " id="body-page">
        <div class="body invoice">
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
    name: "ProntInvoice",
    data() {
        return {
            
        };
    },
    methods: {
        print(){
            window.print();
            console.log("Print")
        },
        
        getData(){
            this.axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.rows = res.data;
                // console.log(res.data);
            });
        },
    },
    mounted() {
        this.print()
        this.getData()
    },
    
};
</script>

<style lang="scss">
</style>
