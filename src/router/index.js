import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Index from '@/components/Index.vue'
import ArticleList from '@/components/ArticleList.vue'
import Article from '@/components/Article.vue'
import LiveList from '@/components/LiveList.vue'
import Login from '@/components/Login/Login.vue'
import LoginL from '@/components/Login/LoginL.vue'
import LoginR from '@/components/Login/LoginR.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/ArticleList',
            name: 'ArticleList',
            component: ArticleList
        },
        {
            path: '/LiveList',
            name: 'LiveList',
            component: LiveList
        },
        {
            path: '/Article',
            name: 'Article',
            component: Article
        },
        {
            path: '/Login/:statue' ,
            name: 'Login',
            component: Login,
            children: [
                {
                    path: 'Login',
                    component: LoginL
                },
                {
                    path: 'Register',
                    component: LoginR
                }
            ]
        }
    ]
})

