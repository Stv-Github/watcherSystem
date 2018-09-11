<template>
    <div>
        <el-breadcrumb separator="/" class='breadcrumbMian'>
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>客户CRM</el-breadcrumb-item>
            <el-breadcrumb-item>客户管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="tableContent">
            <template>
                <el-table :data="tableData" border style="width: 100%" @selection-change='handleSelectionChange'>
                    <el-table-column type='selection' width='50'></el-table-column>
                    <el-table-column prop='serialNum' label='序号' width="60"></el-table-column>
                    <el-table-column prop='userID' label='用户ID' width="150"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                    <el-table-column prop="userSex" label="性别" width="60"></el-table-column>
                    <el-table-column prop="date" label="注册日期" width="150"></el-table-column>
                    <el-table-column prop="userPhone" label="手机号" width="150"></el-table-column>
                    <el-table-column prop="province" label="省份" width="120"></el-table-column>
                    <el-table-column prop="city" label="市区" width="120"></el-table-column>
                    <el-table-column prop="address" label="地址" width="300"></el-table-column>
                    <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="150">
                        <template slot-scope="scope">
                            <el-button @click="handleSee(scope.row)" type="success" plain size="small">查看</el-button>
                            <el-button @click='handleEdit(scope.row)' type="warning" plain size="small"><i class='el-icon-edit'></i>编辑</el-button>
                            <!-- <el-button @click='handleDelete(scope.row)' type="danger" plain size="small"><i class="el-icon-delete"></i>删除</el-button> -->
                        </template>
                    </el-table-column>
                </el-table>
            </template>
            <template>
                <div class="currentPage">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
                    </el-pagination>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return{
                tableData: [
                    {
                        serialNum: 1,
                        userID: '16050328',
                        userSex: '男',
                        userPhone: 15055122184,
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        serialNum: 2,
                        userID: '16050328',
                        userSex: '男',
                        userPhone: 15055122184,
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        serialNum: 3,
                        userID: '16050328',
                        userSex: '男',
                        userPhone: 15055122184,
                        date: '2016-05-04',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        serialNum: 4,
                        userID: '16050328',
                        userSex: '男',
                        userPhone: 15055122184,
                        date: '2016-05-01',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }
                ],
                currentPage: 2
            }
        },
        methods: {
            // 单选、多选
            handleSelectionChange: function(){

            },

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }   
    }
</script>
<style>
    .tableContent{
        padding: 20px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    .breadcrumbMian{
        margin-bottom: 20px;
    }
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .currentPage{
        margin-top: 30px;
        text-align: right;    
    }
</style>