<template>
	<div id="spread">
		<Load></Load>
		<div class="spread-header">
			<div id="text">金额&nbsp;( 元 )</div>
			<div id="money" class="futurabqbook">
				<span>￥</span><span>{{ money | currency }}</span>
			</div>
			<div id="bt-money">
				<p id="present">可提现&nbsp;:&nbsp;&nbsp;<i class="futurabqbook">{{ present | currency }}</i></p>
				<p id="freeze">冻结&nbsp;:&nbsp;&nbsp;<i class="futurabqbook">{{ freeze | currency }}</i></p>
			</div>
		</div>

		<group>
			<cell :title="title1" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:.05rem;" src="../assets/img/list_09.png">
			</cell>
		</group>
		<group>
			<cell :title="title2" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:.05rem;" src="../assets/img/list_10.png">
			</cell>
			<cell :title="title3" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:.05rem;" src="../assets/img/list_11.png">
			</cell>
			<cell :title="title4" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:.05rem;" src="../assets/img/list_06.png">
			</cell>
			<cell :title="title5" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:.05rem;" src="../assets/img/list_08.png">
			</cell>
		</group>
	</div>
</template>

<script>
	import Load from "./common/Loading"
	import { Cell, Group } from 'vux'
	export default {
		name: "spread",
		data() {
			return {
				present: '450.6',
				freeze: '440.05',
				title1: '提现',
				title2: '提现记录',
				title3: '交易记录',
				title4: '提现账户',
				title5: '常见问题',
			}
		},
		computed: {
			money() {
				return parseFloat(this.present) + parseFloat(this.freeze)
			}
		},
		//自定义过滤器：保留最后两位小数
		filters: {
			currency (value) {
				if(!value) return ''
				value = Number(value)
				return value.toFixed(2)
			}
		},
		components: {
			Load,
			Cell,
			Group,
		}

	}
</script>

<style lang="less">
	@fff: #ffffff;
	.spread-header {
		padding: .2rem;
		background: url(../assets/img/bg.png);
		background-size: 100% 100%;
		#text {
			font-size: .16rem;
			color: rgba(255, 255, 255, .8);
			padding-bottom: .1rem;
		}
		#money {
			width: 100%;
			padding-top: 16%;
			position: relative;
			font-size: .6rem;
			color: @fff;
			span:first-child {
				position: absolute;
				top: 0;
				left: -.1rem;
			}
			span:last-child {
				position: absolute;
				top: 0;
				left: .4rem;
			}
		}
		#bt-money {
			display: flex;
			align-items: center;
			padding-top: .1rem;
			p:first-child {
				margin-right: .35rem;
			}
			p {
				font-size: .16rem;
				color: rgba(255, 255, 255, 0.8);
				i {
					font-style: normal;
					color: #fff;
				}
			}
		}
	}
	
	.weui-cells {
		font-size: .17rem !important;
		margin-top: .1rem !important;
		.vux-label {
			font-size: .14rem;
			color: #666666;
		}
		.weui-cell {
			padding: .1rem .15rem !important;
		}
	}
</style>