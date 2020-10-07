import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import HeaderAuth from '../components/HeaderAuth.vue'
import SignUp from '../views/SignUp.vue'
import Profile from "../views/Profile.vue";
import Detail from "../views/Detail.vue";


Vue.use(VueRouter)

const routes = [{
 path: '/',
 name: 'Login',
 component: Login
}, 
{
 path: '/home',
 name: 'Home',
 component: Home
},
{
  path: '/headerAuth',
 name: 'HeaderAuth',
 component: HeaderAuth
},
{
  path: '/signUp',
 name: 'SignUp',
 component: SignUp
},
{
  path: "/detail/:id",
  name: "detail",
  component: Detail,
  props: true,
},
{
  path: "/profile",
  name: "profile",
  component: Profile,
},
]

const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes
})

export default router