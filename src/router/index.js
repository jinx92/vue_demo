import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import QrCode from '@/components/QrCode'
import Home from '@/components/MyHome'
import Spread from '@/components/Spread'
import Integral from '@/components/Integral'

import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		//首页
		path: '*',
		name: 'Index',
		component: Index,
	},{
		//二维码
		path: '/qrcode',
		name: 'QrCode',
		component: QrCode,
	},{
		//个人中心
		path: '/home',
		name: 'Home',
		component: Home,
	},{
		//推广费
		path: '/spread',
		name: 'Spread',
		component: Spread,
	},{
		//积分
		path: '/integral',
		name: 'Integral',
		component: Integral,
	}]
})