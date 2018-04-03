<template>
    <div class="g-bg b-article">
        <header class="m-header">
            <Header></Header>
        </header>

        <div class="g-main-wrapper m-edit-wrapper">
            <div class="wrapper">
                <div class="g-flex article-list">
                    <span class="title">标题</span>
                    <input type="text" class="g-flex-auto" v-model="articleTitle">
                </div>

                <div class="edit-top">
                    <i class="i-icon-code"></i>Markdown编辑器
                </div>
                <div class="m-edit ">
                    <textarea class="left g-flex-auto" v-bind:value="article" v-on:input="articles($event.target.value)"
                              placeholder="add multiple lines"></textarea>
                    <div class="right g-flex-auto">
                        <Show :article="article"></Show>
                    </div>
                </div>

                <div class="g-flex article-list">
                    <span class="g-flex-auto"></span>
                    <div class="submit" v-on:click="aaa">发布文章</div>
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
        name: 'ArticleEdit',
        data () {
            return {
                article: '',
                articleTitle: ''
            }
        },
        methods: {
            articles(e){
                this.$data.article = e;
            },
            aaa() {
                let that = this;
                let user = JSON.parse(that.getCookie().user);
                if (!user) {
                    alert('您还没有登录，请登录');
                    return false;
                }
                if(!that.article||!that.articleTitle){
                    alert('您还没有输入标题或内容');
                    return false;
                }
                let article= that.article.replace(/'/g,'\"');

                this.$http({
                    method: 'post',
                    url: this.ajaxUrl() + `/Admin/AddArticle.php`,
                    params: {
                        userid: user.userid,
                        author: user.username,
                        detail: article,
                        title: that.articleTitle
                    }
                }).then(function (res) {
                    if (res.data.code == 200) {
                        alert('保存成功');
                    } else {
                        alert(res.data.msg);
                    }
                }).catch(function (error) {
                    console.log(error);
                });
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
