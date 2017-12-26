<template>
	<div>
		<app-swiper></app-swiper>
		<app-enter></app-enter>
		<app-con></app-con>
		<app-tabbar></app-tabbar>
	</div>
</template>

<script>
	import appTabbar from '../../components/tabbar';
	import appEnter from './children/enter';
	import appCon from './children/content';
	import appSwiper from '../../components/swiper';
	export default {
		components : {
			appSwiper,
			appEnter,
			appCon,
			appTabbar
		}
	}
</script>

<style>
</style>