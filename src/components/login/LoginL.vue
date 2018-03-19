<template>
    <div class="">
        <label>
            <span class="name">用户名：</span>
            <input type="text" name="username">
        </label>
        <label>
            <span class="name">密码：</span>
            <input type="text" name="password">
        </label>
        <div >
            <span class="name"></span>
            <button class="u-btn-big">登录</button>
        </div>
        <router-link :to="'/Login/statue/Register'" class="z-hint">还没有账号，马上去注册~</router-link>
    </div>
</template>

<script>
    //    import axios from 'axios'
    export default {
        name: 'LoginL',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less" lang="less">

</style>
