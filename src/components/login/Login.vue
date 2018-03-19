<template>
    <div class="m-login">
        <div class="m-main-wrapper">
            <div class="m-login-wrapper">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    //    import axios from 'axios'
    export default {
        name: 'Login',
        data () {
            return {
                isLogin:this.getcookie().username
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
        background: url("../../assets/bg_login.jpg") no-repeat center;
        background-size: cover;
        z-index: 0;
    }

    .m-login-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -150px;
        margin-left: 100px;
        width: 300px;
        height: 200px;
        background: rgba(255, 255, 255, .5);
        padding: 10px;
    }
</style>
