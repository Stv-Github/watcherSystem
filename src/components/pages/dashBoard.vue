<template>
    <div>
        <!--<div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>-->
        <el-row class="">
            <el-col :span='8'>
                <div class="el_col_body el_card is_hover_shadow">
                    <div class="el_col_user">
                        <img src="../../../static/images/img.jpg" alt="">
                        <div>
                            <div>admin</div>
                            <p>超级管理员</p>
                        </div>
                    </div>
                    <div class="el_col_loginMsg">
                        <p>上次登录时间：<span>2018-01-01</span></p>
                        <p>上次登录地点：<span>北京</span></p>
                    </div>
                </div>
                <div>
                    栏目2 
                </div>
            </el-col>
            <el-col :span='16'>
                <div class="grid_cont_main">
                    <!-- 消息 -->
                    <el-row class="grid_cont_row">
                        <el-col :span='8'>
                            <div class="el-card is_hover_shadow el_items">
                                <i class="el-icon-edit grid_cont_icon1"></i>
                                <div class="grid_cont_right">
                                    <p class="grid_num grid_num1">1234</p>
                                    <p>用户访问量</p>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span='8'>
                            <div class="el-card is_hover_shadow el_items">
                                <i class="el-icon-edit grid_cont_icon2"></i>
                                <div class="grid_cont_right">
                                    <p class="grid_num grid_num2">564</p>
                                    <p>系统消息</p>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span='8'>
                            <div class="el-card is_hover_shadow el_items">
                                <i class="el-icon-edit grid_cont_icon3"></i>
                                <div class="grid_cont_right">
                                    <p class="grid_num grid_num3">5000</p>
                                    <p>数量</p>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <!-- 代办事项 -->
                    <div class="grid_cont_agency">
                        <div>
                            <div class="grid_agency_title">
                                <p>代办事项</p>
                                <el-button type="primary" size='small' plain>添加</el-button>
                            </div>
                            <div class="grid_cont_table">
                                <el-table
                                    ref="multipleTable"
                                    :data="tableData3"
                                    tooltip-effect="dark"
                                    style="width: 100%"
                                    :show-header='showHeader'
                                    @selection-change="handleSelectionChange">
                                    <el-table-column type="selection" width="55"></el-table-column>
                                    <el-table-column prop='date' width='120'></el-table-column>
                                    <el-table-column prop="address" show-overflow-tooltip></el-table-column>
                                    <el-table-column width='90'>
                                        <template slot-scope='scope'>
                                            <div class="grid_edit">
                                                <i class="el-icon-edit"></i>
                                                <i class="el-icon-delete"></i>
                                            </div>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row class="charter">
            <el-col :span='12'>55</el-col>
            <el-col :span='12'>55</el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData3: [
                    {
                        date: '2016-05-03',
                        address: '今天要去上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-02',
                        address: '今天要去上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-04',
                        address: '今天要去上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-01',
                        address: '今天要去上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-08',
                        address: '今天要去上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-06',
                        address: '今天要去上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-07',
                        address: '今天要去上海市普陀区金沙江路 1518 弄'
                    }
                ],
                multipleSelection: [],
                showHeader: false
            }
        },
        methods: {
            toggleSelection(rows) {
                if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
                } else {
                this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>
<style scoped>
    /* 公用样式 */
    .el_card {
        border: 1px solid #ebeef5;
        border-radius: 4px;
        color: #303133;
        background-color: #FFF;
        overflow: hidden;
    }
    .is_hover_shadow:hover {
        box-shadow: 0 3px 5px 2px rgba(0, 0, 0, .1);
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
    }
    .el-col {
         /*padding: 0 10px; */
    }
    
    /* end 公用样式 */

    .el_col_body {
        padding: 20px;
    }
    .crumbs {
        margin-bottom: 20px;
    }
    .el_col_user {
        display: flex;
        align-items: center;
        border-bottom: 3px solid #ddd;
        padding-bottom: 20px;
    }
    .el_col_user img {
        width: 120px;
        height: 120px;
        border-radius: 100%;
        overflow: hidden;
    }
    .el_col_user > div {
        margin-left: 50px;
    }
    .el_col_user > div div{
        font-size: 25px;
    }
    .el_col_user > div p {
        color: #999;
    }
    .el_col_loginMsg {
        padding-top: 20px;
    }
    .el_col_loginMsg p {
        line-height: 25px;
        color: #999;
    }
    .el_col_loginMsg p span {
        margin-left: 70px;
    }



    .grid_cont_main {
        padding: 0 10px;
    }
    .grid_cont_row .el-col {
        padding-left: 15px;
    }
    .el_items {
        display: flex;
        height: 100px;
        align-items: center;
    }
    .el_items i {
        display: block;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
        font-size: 30px;
    }
    .grid_cont_icon1 {
        background-color: #2D8CF0;
    }
    .grid_cont_icon2 {
        background-color: #64d572;
    }
    .grid_cont_icon3 {
        background-color: #f25e43;
    }
    .grid_cont_right {
        flex: 1;
        text-align: center;
    }
    .grid_cont_right p:last-child {
        color: #999;
    }
    .grid_cont_right .grid_num {
        font-size: 30px;
        font-weight: bold;
    }
    .grid_num1 {
        color: #2d8cf0;
    }
    .grid_num2 {
        color: #64d572;
    }
    .grid_num3 {
        color: #f25e43;
    }

    /* 代办事项 */
    .grid_cont_agency {
        margin-left: 15px;
        margin-top: 20px;
        background-color: #FFF;
        border-radius: 4px;
    }
    .grid_agency_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #EBEEF5;
        padding: 10px 25px;
        font-size: 16px;
    }
    .grid_cont_table {
        padding: 15px;
    }
    .grid_cont_table .grid_edit {
        text-align: right;
    }
    .grid_cont_table .grid_edit i {
        cursor: pointer;
        font-size: 16px;
        margin-left: 5px;
    }
    .grid_cont_table .grid_edit i:nth-child(1):hover {
        color: #409EFF;
    }
    .grid_cont_table .grid_edit i:nth-child(2):hover {
        color: #F56C6C;
    }
    

    .charter .el-col{
        padding: 15px;
    }
</style>