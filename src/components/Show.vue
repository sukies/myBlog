<template>
    <div id="article">
        <div v-html="compiledMarkdown"></div>
    </div>
</template>

<script>
    let marked = require('marked');
    let hljs = require('highlight.js');
    import 'highlight.js/styles/tomorrow.css';//文件样式
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                return hljs.highlight(lang, code, true).value;
            } else {
                return hljs.highlightAuto(code).value;
            }
        }
    });
    export default{
        name: 'Show',
        props: ['article'],
        data(){
            return {
                contentText: ''
            }
        },
        computed: {
            compiledMarkdown() {
                let detail = this.article;
                return marked(detail || '', {
                    sanitize: true
                });
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
