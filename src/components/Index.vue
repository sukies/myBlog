<template>
    <div class="g-wrapper">
        <div class="m-bg"></div>
        <Header></Header>
        <router-link :to="{ name: 'ArticleList'}" class="u-btn-big">ARTICLE GO</router-link>
        <div class="lantern-1"></div>
    </div>
</template>

<script>
    import Header  from "./Header.vue";
    export default {
        name: 'Index',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
            }
        },
        components: {"Header": Header}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
    .m-bg {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: url("../assets/bg_index.jpg");
        background-size: cover;
        z-index: -1;
        img {
            width: 100%;
        }
    }

    .m-nav {
        text-align: right;
        margin-top: 20px;
    }

    .u-btn-big {
        position: fixed;
        left: 0;
        right: 0;
        width: 200px;
        margin: 0 auto;
        bottom: 100px;
    }
</style>
