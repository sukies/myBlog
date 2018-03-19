<template>
    <div class="">
        <label>
            <span class="name">用户名：</span>
            <input type="text" v-model="username" name="username">
        </label>
        <label>
            <span class="name">设置密码：</span>
            <input type="text" v-model="password" name="password">
        </label>
        <div>
            <span class="name"></span>
            <button class="u-btn-big" v-on:click="register">注册</button>
        </div>
        <router-link :to="'/Login/statue/Login'" class="z-hint">已有账号，去登录~</router-link>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'LoginR',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                username: null,
                password: null
            }
        },
        methods: {
            register: function () {
                console.log(1);
                if (!this.username) {
                    alert('请输入用户名');
                    return false;
                }
                if (!this.password) {
                    alert('请输入密码');
                    return false;
                }
                this.$http.get(this.ajaxUrl() + `/Admin/Register?username=${this.username}&password=${this.password}`, {}).then(function (res) {
                    if (res.data.code == 200) {
                        alert('注册成功');
                        this.setCookie('user', res.data.data);

                    } else {
                        alert(res.data.msg);
                    }
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less" lang="less">

</style>
