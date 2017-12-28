<template>
	<div>
		<Load></Load>
		<div class="app-view">
			<div class="app-view-hd">
				<img src="http://placeholder.qiniudn.com/60x60/3cc51f/ffffff" alt="" />
			</div>
			<div class="app-view-hd">
				<span class="app-view-box-name">愿望城</span>
				<p class="app-view-box-phone">88888888888</p>
				<p class="app-view-box-tuijian">推荐人：愿望城</p>
			</div>
			<div class="app-view-hd">
				<span id="sign">签到</span>
			</div>
		</div>

		<card>
			<div slot="content" class="card-demo-flex card-demo-content01">
				<div class="vux-1px-r">
					<router-link to="spread" class="tolink">
						<span>1130</span>
						<br/>推广费<i>提现</i>
					</router-link>
				</div>
				<div class="vux-1px-r">
					<span>15</span>
					<br/>我的会员
				</div>
				<div class="vux-1px-r">
					<router-link to="integral" class="tolink">
						<span>0</span>
						<br/>我的积分
					</router-link>
				</div>
			</div>
		</card>

		<group>
			<cell :title="title1" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:.05rem;" src="../assets/img/list_01.png">
			</cell>
			<cell :title="title2" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:.05rem;" src="../assets/img/list_02.png">
			</cell>
			<cell :title="title3" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:.05rem;" src="../assets/img/list_03.png">
			</cell>
			<cell :title="title4" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:.05rem;" src="../assets/img/list_04.png">
			</cell>
			<cell :title="title5" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:.05rem;" src="../assets/img/list_05.png">
			</cell>
			<cell :title="title6" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:.05rem;" src="../assets/img/list_06.png">
			</cell>
			<cell :title="title7" is-link>
				<img slot="icon" width="20" style="display:block;margin-right:.05rem;" src="../assets/img/list_08.png">
			</cell>
		</group>
	</div>
</template>

<script>
	import { Divider, Card, Cell, Group } from 'vux'
	import Load from "./common/Loading"
	export default {
		naem: 'home',
		data () {
			return {
				title1: '我的订单',
				title2: '我的二维码',
				title3: '推广订单',
				title4: '我的优惠券',
				title5: '收货地址',
				title6: '个人资料',
				title7: '关于我们',
			}
		},
		components: {
			Card,
			Divider,
			Cell,
			Group,
			Load
		}
	}
</script>

<style lang="less">
	@import '~vux/src/styles/1px.less';
	/*头部*/
	
	.app-view {
		padding: .1rem;
		position: relative;
		display: flex;
		background-color: #fff;
		align-items: center;
		.app-view-hd:first-child {
			margin-right: .8em;
			width: .6rem;
			height: .6rem;
			line-height: .6rem;
			text-align: center;
			img {
				width: 100%;
				height: 100%;
				border-radius: 50%;
				vertical-align: top;
			}
		}
		.app-view-box-name {
			font-size: .12rem;
		}
		.app-view-hd>p {
			font-size: .1rem;
			color: #8f8f94;
		}
		#sign {
			position: absolute;
			top: .28rem;
			right: .2rem;
			font-size: .12rem;
			padding: 0 .1rem;
			border-radius: .5rem;
			border: .01rem solid #da251d;
			color: #da251d;
		}
	}
	/*展示*/
	
	.weui-panel {
		margin-top: 0px !important;
		.card-demo-flex {
			display: flex;
			div {
				flex: 1;
				text-align: center;
				font-size: .12rem;
				color: #666666;
				.tolink{
					display: block;
					color: #666666;
				}
				span {
					color: #f74c31;
					font-size: .14rem;
				}
				i {
					font-size: .1rem;
					color: #018fe1;
					font-style: normal;
				}
			}
		}
		.card-demo-content01 {
			padding: .1rem 0;
		}
		.card-padding {
			padding: .15rem;
		}
	}
	
	.weui-cells{
		font-size: .17rem !important;
		margin-top: .1rem !important;
		.vux-label{
			font-size: .14rem;
			color: #666666;
		}
		.weui-cell{
			padding: .1rem .15rem !important;
		}
	}
</style>