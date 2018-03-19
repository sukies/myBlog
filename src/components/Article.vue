<template>
    <div class="g-bg">
        <header class="m-header">
            <div class="g-main-wrapper">
                <nav class="m-nav">
                    <router-link :to="{ name: 'Index'}" class="u-btn">首页</router-link>
                    <router-link :to="{ name: 'LiveList'}" class="u-btn">生活</router-link>
                    <router-link :to="{ name: 'DemoList'}" class="u-btn">DEMO</router-link>
                    <router-link :to="{ name: 'ArticleList'}" class="u-btn">文章</router-link>
                </nav>
            </div>
        </header>
        <div class="g-main-wrapper m-edit-wrapper">
            <div class="edit-top">
                <i class="i-icon-code"></i>
                Markdown编辑器
            </div>
            <div class="m-edit ">
                <textarea class="left g-flex-auto" v-bind:value="article"
                          v-on:input="articles($event.target.value)" placeholder="add multiple lines"></textarea>
                <div class="right g-flex-auto">
                    <Show :article="article"></Show>
                </div>
            </div>
        </div>
        <fotter>
            备案号：浙ICP备17008567
        </fotter>
    </div>
</template>

<script>
    import Show  from "./Show.vue";
    export default {
        name: 'Article',
        data () {
            return {
                article: '',
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            articles(e){
                this.$data.article = e;
//                $this.data.article=e.data;

            }
        },
        components: {"Show": Show}
    }
    //    document.onkeydown = function (e) {
    //        var isie = (document.all) ? true : false;
    //        var key;
    //        var ev;
    //        if (isie) {//IE浏览器
    //            key = window.event.keyCode;
    //            ev = window.event;
    //        } else {//火狐浏览器
    //            key = e.which;
    //            ev = e;
    //        }
    ////        alert(key);
    //        if (key == 9) {//IE浏览器
    ////            if (isie) {
    ////                ev.keyCode = 0;
    //////                ev.returnValue = false;
    ////            } else {//火狐浏览器
    ////                ev.which = 0;
    //////                ev.preventDefault();
    ////            }
    //        }
    //    };
</script>

<style scoped rel="stylesheet/less" lang="less">

</style>
