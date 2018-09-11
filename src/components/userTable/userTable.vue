<template>
    <div>
        <el-breadcrumb separator="/" class='breadcrumbMian'>
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>客户CRM</el-breadcrumb-item>
            <el-breadcrumb-item>客户管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="tableContent">
            <div class="handleBox">
                <el-row :gutter='20'>
                    <el-col :span='2.5'>
                        <div class="grid-content bg-purple">
                            <el-button type='primary' size='small'>批量删除</el-button>
                        </div>
                    </el-col>
                    <el-col :span='10'>
                        <div class="grid-content bg-purple">
                            <div>
                                <el-input placeholder="筛选关键词" v-model="handleInput" class="input-with-select">
                                    <el-select v-model="handleSelect" slot="prepend" placeholder="筛选省份">
                                        <el-option label="全部" value="1"></el-option>
                                        <el-option label="上海" value="2"></el-option>
                                        <el-option label="北京" value="3"></el-option>
                                        <el-option label="广东" value="4"></el-option>
                                    </el-select>
                                    <el-button slot="append" icon="el-icon-search"></el-button>
                                </el-input>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                
            </div>
            <template>
                <el-table :data="tableData" border style="width: 100%" @selection-change='handleSelectionChange'>
                    <el-table-column type='selection' width='50' align='center'></el-table-column>
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                                <el-form-item label="省份">
                                    <span>{{ props.row.province }}</span>
                                </el-form-item>
                                <el-form-item label="市区">
                                    <span>{{ props.row.city }}</span>
                                </el-form-item>
                                <el-form-item label="地址">
                                    <span>{{ props.row.address }}</span>
                                </el-form-item>
                                <el-form-item label="邮编">
                                    <span>{{ props.row.zip }}</span>
                                </el-form-item>
                                <!--<el-form-item label="商品分类">
                                    <span>{{ props.row.category }}</span>
                                </el-form-item>
                                <el-form-item label="店铺地址">
                                    <span>{{ props.row.address }}</span>
                                </el-form-item>
                                <el-form-item label="商品描述">
                                    <span>{{ props.row.desc }}</span>
                                </el-form-item>-->
                            </el-form>
                        </template>
                    </el-table-column>
                    <!--<el-table-column prop='serialNum' label='序号' width="60" align='center'></el-table-column>-->
                    <el-table-column prop='serialNum' label='序号' align='center' width='50'></el-table-column>
                    <!--<el-table-column prop='userID' label='用户ID' width="150"></el-table-column>-->
                    <el-table-column prop='userID' label='用户ID'></el-table-column>
                    <el-table-column prop="name" label="姓名">
                        <template slot-scope='scope'>
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </template>
                    </el-table-column>
                    <!--<el-table-column prop="userSex" label="性别" width="50" align='center'></el-table-column>-->
                    <el-table-column prop="userSex" label="性别" align='center' width='50'></el-table-column>
                    <!--<el-table-column prop="userPhone" label="手机号" width="150"></el-table-column>-->
                    <el-table-column prop="userPhone" label="手机号"></el-table-column>
                    <!--<el-table-column prop="date" label="注册日期" width="150"></el-table-column>-->
                    <el-table-column prop="date" label="注册日期"></el-table-column>
                    <!--<el-table-column prop="province" label="省份" width="100"></el-table-column>-->
                    <!--<el-table-column prop="city" label="市区" width="120"></el-table-column>-->
                    <!--<el-table-column prop="address" label="地址" width="300"></el-table-column>-->
                    <!--<el-table-column prop="zip" label="邮编" width="120"></el-table-column>-->
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <!--<el-button @click="handleSee(scope.row)" type="success" plain size="small">
                                <i class='el-icon-view'></i> 查看
                            </el-button>-->
                            <el-button @click='handleEdit(scope.row)' type="text" size="small">
                                <i class='el-icon-edit'></i> 编辑
                            </el-button>
                            <el-button @click='handleDelete(scope.row)' class="red" type="text" size="small">
                                <i class="el-icon-delete"></i> 删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
            <template>
                <div class="currentPage">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 50]"
                        :page-size="20" layout="total, sizes, prev, pager, next, jumper" :total="100" background>
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
                handleInput: '',
                handleSelect: '',
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
                    },
                    {
                        serialNum: 5,
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
                        serialNum: 6,
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
                        serialNum: 7,
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
                        serialNum: 8,
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
            handleSelectionChange: function (){

            },
            // 编辑用户信息
            handleEdit: function(e){
                console.log(e)
                this.$router.push('/editUserInfo');
            },
            handleSizeChange: function(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange: function(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>
<style lang='stylus'>
    @import './userTable.styl';
</style>