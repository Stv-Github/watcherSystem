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
    import vHeader from '../header/header';
    import vSidebar from '../sidebar/sidebar'

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
    @import './home.styl';
</style>