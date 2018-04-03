<template>
    <div class="">
        <label>
            <span class="name">用户名：</span>
            <input type="text" v-model="username" name="username">
        </label>
        <label>
            <span class="name">密码：</span>
            <input type="password" v-model="password" name="password">
        </label>
        <div>
            <span class="name"></span>
            <button class="u-btn-big" v-on:click="Login">登录</button>
        </div>
        <router-link :to="'/Login/statue/Register'" class="z-hint">还没有账号，马上去注册~</router-link>
    </div>
</template>

<script>
    export default {
        name: 'LoginL',
        data () {
            return {
                username: null,
                password: null
            }
        }, methods: {
            Login: function () {
                var that=this;
                if (!this.username) {
                    alert('请输入用户名');
                    return false;
                }
                if (!this.password) {
                    alert('请输入密码');
                    return false;
                }
                this.$http.get(this.ajaxUrl() + `/Admin/Login.php?username=${this.username}&password=${this.password}`, {}).then(function (res) {
                    if (res.data.code == 200) {
                        alert('登录成功');
                        that.setCookie('user', JSON.stringify(res.data.data));
                        that.$router.push({ name: 'Index'});
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
