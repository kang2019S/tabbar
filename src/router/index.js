import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
    import ('../views/home/Home.vue')
const Category = () =>
    import ('../views/category/Category.vue')
const Shopcart = () =>
    import ('../views/shopcart/Shopcart.vue')
const Profile = () =>
    import ('../views/profile/Profile.vue')

Vue.use(Router)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/shopcart',
        component: Shopcart
    }
]
export default new Router({
    routes,
    mode: 'history'
})