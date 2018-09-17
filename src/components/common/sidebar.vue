<template>
        <!-- :style="{'width': sidebarWidth +'px'}" -->
    <div class="sidebar" :class="{sidebared: collapse}">
        <el-menu unique-opened router :collapse='collapse' :default-active="onRoutes" class="el-menu-vertical-demo el-menu--dark" text-color="#BFCBD9" active-text-color="#20a0ff">
            <template v-for='item in items'>
                <template v-if='item.subs'>
                    <el-submenu :index="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for='subItem in item.subs'>
                            <el-menu-item :index="subItem.index">{{ subItem.title }}</el-menu-item>
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
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'articles',
                        title: '帖子'
                    }
                ]
            }
        },
        props: {
            collapse: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            onRoutes: function(){
                // console.log(this.$route.path);
                return this.$route.path.replace('/','');
            }
        },
        created() {
            
        },
    }
</script>

<style>
    .sidebar {
        display: block;
        width: 250px;
        position: absolute;
        top: 70px;
        left: 0;
        bottom: 0;
        background: #324157;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .sidebared{
        width: 64px;
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
    }
    /* 定义滚动条宽高及背景 */
    .sidebar::-webkit-scrollbar {
        width: 5px;  /* 对垂直流动条有效*/
    }
    /*定义滑块颜色、内阴影及圆角*/
    .sidebar::-webkit-scrollbar-thumb{
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: orange;
    }
    /*定义两端按钮的样式*/
    .sidebar::-webkit-scrollbar-button {
        display: none;
    }
    /* 内层轨道，需要注意的就是它会覆盖第三个属性的样式。 */
    .sidebar::-webkit-scrollbar-track-piece {
        background-color:cornflowerblue;
    }

    .el-menu--dark, .el-menu--dark .el-menu-item {
        width: 100%;
        background-color: #324157;
    }
    .el-menu--dark .el-submenu .el-menu, .el-menu--dark .el-submenu .el-menu-item {
        background-color: #1f2d3d;
    }
    .el-menu-item:hover, .el-submenu__title:hover {
        background-color: #48576a !important;
    }
    .el-submenu__title i, .el-menu-item i {
        color: #BFCBD9;
    }
    .el-menu--popup-right-start{
        background-color: #1f2d3d;
    }
</style>