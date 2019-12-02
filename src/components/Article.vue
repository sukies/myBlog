<template>
    <div class="g-bg b-article">
        <header class="m-header">
            <Header></Header>
        </header>
        <div class="g-main-wrapper m-edit-wrapper">
            <h1 class="title">{{ obj ? obj.title : "" }}</h1>
            <p class="hint">
                <span class="">作者：{{ obj ? obj.author : "" }}</span
                ><span class="">发布时间：{{ obj ? obj.time : "" }}</span>
            </p>
            <div class="m-edit">
                <Show :article="article"></Show>
            </div>
        </div>
        <!--<fotter>-->
        <!--备案号：浙ICP备17008567-->
        <!--</fotter>-->
    </div>
</template>

<script>
import Show from "./Show.vue";
import Header from "./Header.vue";
export default {
    name: "Article",
    data() {
        return {
            article: "",
            articleTitle: "",
            obj: null
        };
    },
    created: function() {
        this.getArticle(this.$route.params.articleid);
    },
    methods: {
        getArticle(id) {
            let that = this;
            this.$http
                .get(this.ajaxUrl() + `/Admin/GetArticle.php`, {
                    params: {
                        articleid: id
                    },
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                })
                .then(function(res) {
                    if (res.data.code == 200) {
                        that.$data.article = res.data.data.detail;
                        let obj = res.data.data;
                        obj.time = that.timestampToTime(obj.time);
                        that.$data.obj = obj;
                    } else {
                        alert(res.data.msg);
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    components: { Show: Show, Header: Header }
};
</script>

<style scoped rel="stylesheet/less" lang="less">
.edit-top {
    text-align: center;
}

.m-edit-wrapper {
    padding: 15px 20px;
    box-sizing: border-box;
}

.hint span {
    color: #999;
    padding-right: 20px;
}
.m-edit-wrapper .m-edit {
    border: 0;
    pre {
        width: auto;
    }
}
</style>
