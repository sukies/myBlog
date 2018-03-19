<template>
    <div class="m-login">
        <div class="m-login-wrapper">
            <label>
                用户名：
                <input type="text" name="username">
            </label>
            <label>
                密码：
                <input type="text" name="password">
            </label>
            <button>登录</button>
            <router-link :to="{ name: 'Register'}" class="u-btn">文章编辑</router-link>
        </div>
    </div>
</template>

<script>
    //    import axios from 'axios'
    export default {
        name: 'Login',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less" lang="less">
    .m-login {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("../assets/bg_login.jpg") no-repeat center;
        background-size: cover;
        color: white;
    }
</style>
