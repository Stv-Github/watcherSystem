<template>
    <div class="home">
        <v-header></v-header>
        <v-sidebar></v-sidebar>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import vHeader from '../common/header';
    import vSidebar from '../common/sidebar'

    export default{
        data() {
            return {

            }
        },
        components:{
            vHeader, vSidebar
        }
    }
</script>

<style lang='stylus' scoped>
    .home {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    .content {
        position: absolute;
        top: 70px;
        left: 250px;
        right: 0;
        bottom: 0;
        padding: 15px;
        overflow: auto;
        background-color: #f0f0f0;
    }
    /* 定义滚动条宽高及背景 */
    .content::-webkit-scrollbar {
        width: 10px;/* 对垂直流动条有效 */
        height: 10px;/* 对水平流动条有效 */
    }
    /*定义滑块颜色、内阴影及圆角*/
    .content::-webkit-scrollbar-thumb {
        /* background-color: #E6E6E6; 简约样式 */
        background-color: orange;
        background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
    }
    /*定义两端按钮的样式*/
    .content::-webkit-scrollbar-button {
        display: none;
    }
    /* 内层轨道样式，需要注意的就是它会覆盖第三个属性的样式。 */
    .content::-webkit-scrollbar-track-piece {
        /* background-color: #747474; 简约样式 */
        background-color:cornflowerblue;
    }
    /* 边角，即两个滚动条的交汇处 */
    .content::-webkit-scrollbar-corner {
        background-color: coral;
    }
</style>