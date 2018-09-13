<template>
    <div class="login">
        <div class="login_content">
            <!-- <div class="login_header">守望者后台管理系统</div> -->
            <div class="login_header">北京铂雅公务航空后台管理系统</div>
            <div class="login_main">
                <div class="login_form">
                    <el-form :model='ruleForm' :rules='rules' ref='ruleForm'>
                        <el-form-item label='用户名 Username' prop='username'>
                            <el-input type='text' v-model='ruleForm.username' placeholder='请输入用户名'></el-input>
                        </el-form-item>
                        <el-form-item label='密 码 Password' prop='password'>
                            <el-input type='password' v-model='ruleForm.password' placeholder='请输入密码'></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type='primary' @click="submitFrom('ruleForm')">登 录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="login_footer">北京铂雅公务航空投资有限公司版权所有 ©Copyright 2017</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名称', trigger: 'blur' },
                        // { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入用户密码', trigger: 'blur' },
                        // { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitFrom: function (formName) {
                let that = this;
                // console.log(this.$refs[formName])
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        that.$router.push('/home');
                        // alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .login {
        width: 100%;
        height: 100%;
        background: #363441;
        position: relative;
    }
    .login_content {
        position: absolute;
        top: 100px;
        left: 50%;
        width: 50%;
        margin-left: -25%;
        border: 1px solid #eee;
        border-radius: 5px;
    }
    .login_header {
        height: 80px;
        line-height: 80px;
        text-align: center;
        background: rgba(255, 255, 255, .2);
        font-size: 30px;
        color: #fff;
    }
    .login_main {
        padding: 20px;
        background: #fff;
    }
    .login_footer {
        padding-top: 20px;
        border-top: 1px solid #ddd;
    }
</style>