<template>
    <div class="g-bg b-article b-article-list">
        <header class="m-header">
            <Header></Header>
        </header>

        <div class="g-main-wrapper m-article-w">
            <ul>
                <li v-for="(item, index) in articleList" class="list">
                    <router-link :to="'/Article/'+item.articleid" class="z-hint">
                        <h2 class="title">{{item.title}}</h2>
                        <p class="other">{{item.author}} &nbsp;&nbsp;&nbsp;{{item.time}}</p>
                    </router-link>
                </li>
            </ul>
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
        name: 'ArticleList',
        data () {
            return {
                articleList: '',
                articleTitle: ''
            }
        },
        created () {
            let that = this;
            this.$http.get(this.ajaxUrl() + `/Admin/GetArticleList.php`).then(function (res) {
                if (res.data.code == 200) {
                    that.$data.articleList = res.data.data.map((item, index, arr) => {
                        item.time = that.timestampToTime(item.time);
                        return item
                    });
                } else {
                    alert(res.data.msg);
                }
            })
                .catch(function (error) {
                    console.log(error);
                });
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
                this.$http.get(this.ajaxUrl() + `/Admin/AddArticle`, {
                    params: {
                        userid: user.userid,
                        author: user.username,
                        detail: that.article,
                        title: that.articleTitle
                    }
                }).then(function (res) {
                    if (res.data.code == 200) {
                        alert('保存成功');
                    } else {
                        alert(res.data.msg);
                    }
                })
                    .catch(function (error) {
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
