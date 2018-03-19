<template>
    <div class="g-bg b-article">
        <header class="m-header">
            <Header></Header>
        </header>

        <div class="g-main-wrapper m-edit-wrapper">
            <div class="wrapper">
                <div class="g-flex article-list">
                    <span class="title">标题</span>
                    <input type="text" class="g-flex-auto">
                </div>

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

                <div class="g-flex article-list">
                    <span class="g-flex-auto"></span>
                    <div class="submit">发布文章</div>
                </div>
            </div>

        </div>
        <!--<fotter>-->
        <!--备案号：浙ICP备17008567-->
        <!--</fotter>-->
    </div>
</template>

<script>
    import Show  from "./Show.vue";
    import Header  from "./Header.vue";
    export default {
        name: 'Article',
        data () {
            return {
                article: '',
            }
        },
        methods: {
            articles(e){
                this.$data.article = e;

            }
        },
        components: {"Show": Show, "Header": Header}
    }
</script>

<style scoped rel="stylesheet/less" lang="less">
    .edit-top {
        text-align: center;
    }
</style>
