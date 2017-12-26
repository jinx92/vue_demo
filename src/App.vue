<template>
	<div id="app">
		<keep-alive>
			<router-view/>
		</keep-alive>
		<tabbar>
			<tabbar-item selected link="/">
				<span slot="icon" class="iconfont icon-zhuye"></span>
				<span slot="label">首页</span>
			</tabbar-item>
			<tabbar-item link="/qrcode">
				<span slot="icon" class="iconfont icon-qrcode"></span>
				<span slot="label">二维码</span>
			</tabbar-item>
			<tabbar-item badge="" link="/shopcart">
				<span slot="icon" class="iconfont icon-cart"></span>
				<span slot="label">购物车</span>
			</tabbar-item>
			<tabbar-item link="/home">
				<span slot="icon" class="iconfont icon-account"></span>
				<span slot="label">我的</span>
			</tabbar-item>
		</tabbar>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'
	export default {
		name: 'app',
		components: {
			Tabbar,
			TabbarItem
		}
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	.weui-tabbar{
		position: fixed !important;
		left: 0;
		
		.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,
		.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,
		.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
			color: #da251d !important;
		}
	}
</style>