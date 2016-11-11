import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import Wechat from './Wechat'

import Fullpage from './components/fullpage/DemoBasic'
import Popover from './components/popover/DemoIndex'

// plugins
import Device from './plugins/device'
import ToastPlugin from './plugins/toast'
import AlertPlugin from './plugins/alert'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(Router)
Vue.config.devtools = true

// $device
Vue.use(Device)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

const router = new Router({
  transitionOnLoad: false,
  hashbang:false,
  history:true
})

/**
* sync router params
*/
import { sync } from 'vuex-router-sync'
import store from './vuex/store'

let history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

/**
* sync router loading status
*/
const commit = store.commit || store.dispatch
router.beforeEach(({ to, from, next }) => {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (toIndex > fromIndex) {
      commit('UPDATE_DIRECTION', 'forward')
    } else {
      commit('UPDATE_DIRECTION', 'reverse')
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    commit('UPDATE_DIRECTION', 'forward')
  }
  commit('UPDATE_LOADING', true)
  setTimeout(next, 50)
})
router.afterEach(() => {
  commit('UPDATE_LOADING', false)
})

sync(store, router)

import start from './demos/start'
import main from './demos/main'
import carousel from './demos/carousel'
import index from './demos/index'
import info from './demos/info'
import hospitallist from './demos/hospitallist'
import doctorlist from './demos/doctorlist'
import doctorinfo from './demos/doctorinfo'
import onlineConsultant from './demos/onlineConsultant'
import area from './demos/area'
import Dailymedicine from './demos/Dailymedicine'
import selfDiagnosing from './demos/selfDiagnosing'
import symptom from './demos/symptom'
router.map({
  '/start':{
    component:start
  },
  '/main':{
    component:main
  },
  '/carousel':{
    component:carousel
  },
  '/index':{
    component:index
  },
  '/info':{
    component:info
  },
  '/hospitallist':{
    component:hospitallist
  },
  '/doctorlist':{
    component:doctorlist
  },
  '/doctorinfo':{
    component:doctorinfo
  },
  '/onlineConsultant':{
    component:onlineConsultant
  },
  '/area':{
    component:area
  },
  '/Dailymedicine':{
    component:Dailymedicine
  },
  '/selfDiagnosing':{
    component:selfDiagnosing
  },
  '/symptom':{
    component:symptom
  }
})



// save position for demo page
let demoScrollTop = 0
function saveDemoScrollTop () {
  demoScrollTop = window.scrollY
}

router.beforeEach(function (transition) {
  if (transition.to.fullPath !== '/demo') {
    window.removeEventListener('scroll', saveDemoScrollTop, false)
  }
  if (/\/http/.test(transition.to.path)) {
    let url = transition.to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    if (/\/demo\/component\/\w+/.test(transition.to.path)) {
      router.go({
        replace: true,
        path: transition.to.path.replace('/demo', ''),
        append: false
      })
    } else {
      transition.next()
    }
  }
})

router.afterEach(function (transition) {
  if (transition.to.path !== '/demo') {
    window.scrollTo(0, 0)
  } else {
    window.removeEventListener('scroll', saveDemoScrollTop, false)
    // if from component page
    if (demoScrollTop && /component/.test(transition.from.path)) {
      setTimeout(function () {
        window.scrollTo(0, demoScrollTop)
      }, 100)
    }
    setTimeout(function () {
      window.addEventListener('scroll', saveDemoScrollTop, false)
    }, 1000)
  }
})

router.start(App, '#app')
