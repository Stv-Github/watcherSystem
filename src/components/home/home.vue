<template>
    <div class="home">
        <v-header></v-header>
        <v-sidebar></v-sidebar>
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

<style lang='stylus'>
    @import './home.styl';
</style>