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
    @import './sidebar.styl';
</style>