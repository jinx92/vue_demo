import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import QrCode from '@/components/QrCode'
import Home from '@/components/MyHome'

import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '*',
		name: 'Index',
		component: Index,
	},{
		path: '/qrcode',
		name: 'QrCode',
		component: QrCode,
	},{
		path: '/home',
		name: 'Home',
		component: Home,
	}]
})