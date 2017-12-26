<template>
	<mt-tabbar v-model="selected" fixed>
		<mt-tab-item id="index">
			<span slot="icon" class="iconfont icon-zhuye"></span>
			首页
		</mt-tab-item>
		<mt-tab-item id="qrcode">
			<span slot="icon" class="iconfont icon-qrcode"></span>
			二维码
		</mt-tab-item>
		<mt-tab-item id="shopcart">
			<span slot="icon" class="iconfont icon-cart"></span>
			购物车
		</mt-tab-item>
		<mt-tab-item id="my">
			<span slot="icon" class="iconfont icon-account"></span>
			我的
		</mt-tab-item>
	</mt-tabbar>
</template>

<script>
	export default {
		data() {
			return {
				selected: 'index'
			}
		}
	}
</script>

<style scoped>
	.mint-tabbar{
		border-top: .01rem solid #eee;
	}
	.mint-tabbar > .mint-tab-item.is-selected {
	    background-color: #fafafa;
	    color: #da251d;
	}
</style>