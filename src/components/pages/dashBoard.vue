<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-row class="">
            <el-col :span='8'>
                <div class="el_col_body el_card is_hover_shadow">
                    <div class="el_col_user">
                        <img src="../../../static/images/img.jpg" alt="">
                        <div>
                            <h2>admin</h2>
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
                <div class="el_col_news">
                    <div>34534534</div>
                    <div>34534534</div>
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
    }
    .is_hover_shadow:hover {
        box-shadow: 0 3px 5px 2px rgba(0, 0, 0, .1);
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
    }
    .el-col {
        /* padding: 0 10px; */
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

    .el_col_news {
        padding: 0 10px;
    }
    

    .charter .el-col{
        padding: 15px;
    }
</style>