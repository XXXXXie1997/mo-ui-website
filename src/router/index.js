import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/template'
import Start from '../pages/start/template'
import Button from '../pages/button/template'
import Error from '../pages/404/404'
import Collapese from '../pages/collapse/template'
import Grid from '../pages/grid/template'
import Input from '../pages/input/template'
import Install from '../pages/install/template'
import Layout from '../pages/layout/template'
import Popover from '../pages/popover/template'
import Tabs from '../pages/tabs/template'
import Toast from '../pages/toast/template'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/start',
      component: Start
    },
    {
      path: '/button',
      component: Button
    },
    {
      path: '/collapse',
      component: Collapese
    },
    {
      path: '/grid',
      component: Grid
    },
    {
      path: '/input',
      component: Input
    },
    {
      path: '/install',
      component: Install
    },
    {
      path: '/layout',
      component: Layout
    },
    {
      path: '/popover',
      component: Popover
    },
    {
      path: '/tabs',
      component: Tabs
    },
    {
      path: '/toast',
      component: Toast
    },
    {
      path: '/*',
      component: Error
    },
  ]
})
