<template>
    <div class="g-main-wrapper">
        <nav class="m-nav">
            <router-link :to="{ name: 'LiveList'}" class="u-btn">生活</router-link>
            <!--<router-link :to="{ name: 'DemoList'}" class="u-btn">DEMO</router-link>-->
            <router-link :to="{ name: 'ArticleList'}" class="u-btn">文章</router-link>

            <router-link v-if="user" :to="{ name: 'Article'}" class="u-btn">文章编辑</router-link>
            <router-link v-if="!user" :to="'/Login/statue/Login'" class="u-btn">登录</router-link>
            <span v-else class="u-btn">{{user.username}}</span>
        </nav>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                user: null
            }
        },
        created(){
            this.user = this.getCookie().user ? JSON.parse(this.getCookie().user) : null;
        },
        methods: {},
    }
</script>

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
