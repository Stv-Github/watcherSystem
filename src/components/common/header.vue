<template>
    <div class="header">
        <div class="v_headerLeft">
            <!-- 折叠按钮 -->
            <i class="el-icon-menu" @click='collapseChage'></i>
            <span>XX后台管理系统</span>
        </div>
        <div class="v_headerRight">
            <img src="http://images.globalwings.com/content/Siteweb/3bce31d3-9ab7-4d11-9913-7a8655905058.jpg" alt="">
            <span>隔壁老王</span>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                collapse: true
            }
        },
        methods: {
            // 侧边栏折叠
            collapseChage: function(){
                this.collapse = !this.collapse;
                this.$emit('collapseChaged', this.collapse);
            }
        }
    }
</script>

<style scoped>
    .header {
        height: 70px;
        background: #242f42;
        display: flex;
        justify-content: space-between;
        color: #FFF;
    }
    .v_headerLeft {
        min-width: 250px;
        height: 100%;
        overflow: hidden;
        font-size: 22px;
    }
    .v_headerLeft i{
        display: inline-block;
        width: 64px;
        height: 100;
        line-height: 70px;
        text-align: center;
        cursor: pointer;
    }
    .v_headerLeft i:hover{
        background-color: #283446;
    }
    .v_headerLeft span{
        padding: 0;
    }
    .v_headerRight {
        margin-right: 50px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    span {
        padding-left: 10px;
    }
    img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }   
</style>