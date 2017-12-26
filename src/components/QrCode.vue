<template>
	<div id="qrcode">
		<Load></Load>
		<div class="scroll">
			<!--公众号二维码-->
			<div class="nodata"></div>
			<div class="tap-text">您还未购物过<br><i>请先购物后再来</i></div>
		</div>
	</div>
</template>

<script>
	import Load from "./common/Loading"
	export default {
		name: 'qrcode',
		components: {
			Load
		}
	}
</script>

<style lang="less">
	html,
	body {
		width: 100%;
		height: 100%;
		.nodata {
			width: 1.2rem;
			height: 1.85rem;
			position: fixed;
			top: -15%;
			left: -0.2rem;
			right: 0;
			bottom: 0;
			margin: auto;
			background: url(../assets/img/icon@3x.png) no-repeat;
			background-size: 100% 100%;
			display: flex;
		}
		.tap-text {
			width: 100%;
			position: fixed;
			top: 60%;
			margin: auto;
			font-size: .16rem;
			text-align: center;
			color: #222222;
			z-index: 99;
			i {
				color: #666666;
				font-size: .12rem;
				font-style: normal;
			}
		}
	}
</style>