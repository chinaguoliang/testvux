import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import VueRouter from 'vue-router'
import Account from './components/Account'
import UserInfo from './components/UserInfo'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: Home
  },
  '/account/:accountId/:password': {
    name:'account',
    component: Account
  },
  '/userInfo/:userName/:userPassword': {
    name:'userInfo',
    component: UserInfo
  }
})

router.start(App, '#app')

