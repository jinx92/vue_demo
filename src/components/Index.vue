<template>
	<div>
		<Load></Load>
		<!--Swiper-->
		<swiper :aspect-ratio="293/600" dots-position="center" loop auto>
			<swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
				<img :src="item" alt="" />
			</swiper-item>
		</swiper>
		<!--Grid-->
		<grid>
			<grid-item>
				<img slot="icon" src="../assets/img/all.png">
				<span slot="label">全部</span>
			</grid-item>
			<grid-item>
				<img slot="icon" src="../assets/img/hot.png">
				<span slot="label">热卖</span>
			</grid-item>
			<grid-item>
				<img slot="icon" src="../assets/img/hot_hot.png">
				<span slot="label">新品</span>
			</grid-item>
			<grid-item>
				<img slot="icon" src="../assets/img/icon-holiday.png">
				<span slot="label">宝盒</span>
			</grid-item>
		</grid>

		<!--列表-->
		<div style="margin-bottom: 53px;">
			<div class="list-item" v-for="src in list">
				<p class="inline-loading" style="text-align:center;">
					<inline-loading></inline-loading>
				</p>
				<x-img :src="src" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="0"></x-img>
			</div>
		</div>
	</div>
</template>

<script>
	import Load from "./common/Loading"
	import { Swiper, SwiperItem, Grid, GridItem, XImg, InlineLoading } from 'vux'
	const imgList = [
		'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t12823/185/1992425700/118513/a1575b49/5a323a65N5acbcd6a.jpg!q70.jpg',
		'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t15550/126/725659386/148685/5be473da/5a3b21e5N334a1813.jpg!q70.jpg',
		'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t13750/165/2273699122/176944/2434b4ec/5a38651eN8f98ccc5.jpg!q70.jpg',
		'https://img1.360buyimg.com/da/jfs/t15304/113/799337097/95257/6d770ae9/5a3a0260N82953aac.jpg',
		'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t13750/165/2273699122/176944/2434b4ec/5a38651eN8f98ccc5.jpg!q70.jpg',
	]
	
	const list = [
		'http://twxs.htc0086.com/tempImage/goodsRecommend/5d2ff32de6669205403d061207a1cf58.jpg',
		'http://twxs.htc0086.com/tempImage/goodsRecommend/96a32a20d0ee1cc5ba79b57d6fc20b67.jpg',
		'http://twxs.htc0086.com/tempImage/goodsRecommend/d0305107ef08865098592b68ebfe90f3.jpg',
		'http://twxs.htc0086.com/tempImage/goodsRecommend/41e6e07dafe4d211a6bbcf263d421c3a.jpg',
		'http://twxs.htc0086.com/tempImage/goodsRecommend/145eee6c44b839dee2aaae77b97c57ff.png',
		'http://twxs.htc0086.com/tempImage/goodsRecommend/2ad6778adb5447f47f0b376f2ea8ecc7.png',
	]
	export default {
		name: 'index',
		components: {
			XImg,
			Swiper,
			SwiperItem,
			Grid,
			GridItem,
			InlineLoading,
			Load,
		},
		methods: {
			success(src, ele) {
				console.log('success load', src)
				const p = ele.parentNode.querySelector('p')
				ele.parentNode.removeChild(p)
			},
			error(src, ele, msg) {
				console.log('error load', msg, src)
				const p = ele.parentNode.querySelector('p')
				p.innerText = 'load error'
			}
		},
		data() {
			return {
				demo04_list: imgList,
				list: list
			}
		}

	}
</script>

<style lang="less">
	.vux-slider>.vux-indicator>a>.vux-icon-dot,
	.vux-slider .vux-indicator-right>a>.vux-icon-dot {
		background: transparent !important;
		box-sizing: border-box;
		border: 1px solid #fff;
	}
	
	.vux-slider>.vux-indicator>a>.vux-icon-dot.active,
	.vux-slider .vux-indicator-right>a>.vux-icon-dot.active {
		background: #fff !important;
	}
	
	.copyright {
		font-size: 12px;
		color: #ccc;
		text-align: center;
	}
	
	.text-scroll {
		border: 1px solid #ddd;
		border-left: none;
		border-right: none;
	}
	
	.text-scroll p {
		font-size: 12px;
		text-align: center;
		line-height: 30px;
	}
	
	.black {
		background-color: #000;
	}
	
	.title {
		line-height: 100px;
		text-align: center;
		color: #fff;
	}
	
	.animated {
		animation-duration: 1s;
		animation-fill-mode: both;
	}
	
	.vux-indicator.custom-bottom {
		bottom: 30px;
	}
	
	@-webkit-keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translate3d(0, 100%, 0);
		}
		100% {
			opacity: 1;
			transform: none;
		}
	}
	
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translate3d(0, 100%, 0);
		}
		100% {
			opacity: 1;
			transform: none;
		}
	}
	
	.fadeInUp {
		animation-name: fadeInUp;
	}
	
	.inline-loading {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	
	.swiper-demo-img img {
		width: 100%;
		height: 100%;
	}
	
	.grid-center {
		display: block;
		text-align: center;
		color: #666;
	}
	
	.weui-grid {
		background-color: #fff;
		margin-bottom: 5px;
		padding: 5px !important;
		.weui-grid__icon {
			width: 40px;
			height: 40px;
		}
		.weui-grid__label {
			color: #333 !important;
		}
	}
	
	.weui-grids:before {
		border-top: 1px solid #fff !important;
	}
	
	.weui-grids:after {
		border-left: 1px solid #fff !important;
	}
	
	.weui-grid:after {
		border-bottom: 1px solid #fff !important;
	}
	
	.weui-grid:before {
		border-right: 1px solid #fff !important;
	}
	
	.ximg-demo {
		width: 100%;
		height: auto;
	}
	
	.ximg-error {
		background-color: yellow;
	}
	
	.ximg-error:after {
		content: '加载失败';
		color: red;
	}
</style>