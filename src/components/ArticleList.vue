<template>
    <div class="g-wrapper">
        <!--<script src="https://unpkg.com/marked@0.3.6"></script>-->
        <!--<script src="https://unpkg.com/lodash@4.16.0"></script>-->
        <div id="editor">
            <textarea :value="input" @input="update"></textarea>
            <div v-html="compiledMarkdown"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ArticleList',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                input: '# hello'
            }
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
