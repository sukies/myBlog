/**
 * Created by Administrator on 2017/10/30.
 */

export default {
    install(Vue, options)
    {
        Vue.prototype.ajaxUrl = function () {
            return 'http://localhost';
        };
        Vue.prototype.getTitle = {
            title: '',
            isBack: true,
            isAdd: false,
        };
        Vue.prototype.showFootTab = {
            isShow: false,
            active: 0,
        };

        Vue.prototype.getCookie = function () {
            var cookie = {};
            var all = document.cookie;
            if (all === '')
                return cookie;
            var list = all.split(';');
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                item = item.replace(" ", "");
                var p = item.indexOf('=');
                var name = item.substring(0, p);
                name = decodeURIComponent(name);
                var value = item.substring(p + 1);
                value = decodeURIComponent(value);
                cookie[name] = value;
            }
            return cookie;
        };
        Vue.prototype.setCookie = function (name, value, iDay) {
            var oDate = new Date();
            oDate.setDate(oDate.getDate() + iDay);
            document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate;
        };
        Vue.prototype.removeCookie = function (name) {
            setCookie(name, '1', -1);
        };
        Vue.prototype.formVerify = {
            // 会员名
            username: function (val) {
                var reg = /^([a-z0-9|\-|_]+)$/;
                return this.returns(val.match(reg));
            },
            //手机号
            telephone: function (val) {
                var reg = /^1[3|4|5|7|8][0-9]{9}$/;
                return this.returns(val.match(reg));
            },
            // 密码
            password: function (val) {
                var reg = /\S{6,}/;
                return this.returns(val.match(reg));
            },
            // 真实姓名
            name: function (val) {
                var reg = /[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/;
                return this.returns(val.match(reg));
            },
            // 电子邮箱
            email: function (val) {
                var reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
                return this.returns(val.match(reg));
            },
            // 公司名称
            company: function (val) {
                var reg = /^[\(\)\（\）\u4E00-\u9FA5]+$/;
                return this.returns(val.match(reg));
            },
            // 公司电话
            tel: function (val) {
                var reg = /(^(13[0-9]|15[0|1|3|6|7|8|9]|18[8|9])\d{8}$)|((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
                return this.returns(val.match(reg));
            },
            // 网站地址
            urls: function (val) {
                var reg = /^[a-zA-Z]+:\/\//;
                return this.returns(val.match(reg));
            },
            returns: function (r) {
                if (r == null) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    }
}

