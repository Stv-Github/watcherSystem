<template>
    <div class="sidebar">
        <el-menu unique-opened router :default-active="onRoutes" class="el-menu-vertical-demo el-menu--dark" @open="handleOpen" @close="handleClose" text-color="#BFCBD9" >
            <template v-for='item in items'>
                <template v-if='item.subs'>
                    <el-submenu :index="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for='subItem in item.subs'>
                            <el-menu-item v-bind:index="subItem.index">{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'home',
                        title: '系统首页'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '客户CRM',
                        subs: [
                            {
                                index: 'userTable',
                                title: '客户管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '活动管理',
                        subs: [
                            {
                                index: 'baseform',
                                title: '积分兑换'
                            },
                            {
                                index: 'vueeditor',
                                title: '限时抢购'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'articles',
                        title: '帖子'
                    },
                    {
                        icon: 'el-icon-upload2',
                        index: 'drag',
                        title: '拖拽'
                    }
                ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed: {
            onRoutes: function(){
                // console.log(this.$route.path);
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style lang="stylus">
    .sidebar {
        width 250px;
        position absolute;
        top 70px;
        left 0;
        bottom 0;
        background #324157;
        color #FFF;
        overflow-x hidden;
        overflow-y auto;
    }
    /* 定义滚动条宽高及背景 */
    .sidebar::-webkit-scrollbar {
        width 5px;  /* 对垂直流动条有效*/
    }
    /*定义滑块颜色、内阴影及圆角*/
    .sidebar::-webkit-scrollbar-thumb{
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: orange;
    }
    /*定义两端按钮的样式*/
    .sidebar::-webkit-scrollbar-button {
        display none;
    }
    /* 内层轨道，需要注意的就是它会覆盖第三个属性的样式。 */
    .sidebar::-webkit-scrollbar-track-piece {
        background-color:cornflowerblue;
    }
    .el-menu--dark, .el-menu--dark .el-menu-item {
        width 250px;
        background-color #324157;
    }
    .el-menu--dark .el-submenu .el-menu, .el-menu--dark .el-submenu .el-menu-item {
        background-color #1f2d3d;
    }
    .el-menu-item:hover, .el-submenu__title:hover {
        background-color #48576a !important;
    }
    .el-submenu__title i, .el-menu-item i {
        color #BFCBD9;
    }
</style>