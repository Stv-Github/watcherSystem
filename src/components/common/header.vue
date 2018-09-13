<template>
    <div class="header">
        <div class="v_headerLeft">XXXX后台管理系统</div>
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

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .header {
        height 70px;
        background #242f42;
        display: flex;
        justify-content: space-between;
        color #FFF;
    }
    .v_headerLeft {
        width 250px;
        height 100%;
        overflow hidden;
        line-height 70px;
        text-align center;
        font-size 22px;
    }
    .v_headerRight {
        margin-right 50px;
        display flex;
        align-items center;
        cursor pointer;
    }
    span {
        padding-left 10px;
    }
    img {
        width 40px;
        height 40px;
        border-radius 100%;
    }   
</style>