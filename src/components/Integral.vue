<template>
	<div id="spread">
		<div class="spread-header">
			<div id="intergral" class="futurabqbook">890.65分</div>
			<span id="intergral-text">小积分&nbsp;&nbsp;大作用&nbsp;&nbsp;多赚一些囤起来</span>
		</div>
		<div id="mescroll" class="mescroll">
			<ul id="dataList" class="dataList">
				<li v-for="pd in pdlist">
					<div>{{pd.name}}</div>
					<div>
						<p :class="[{'push':pd.type==1},{'minus':pd.type==0}]">{{pd.integral}}</p>
						<p>{{pd.time}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { Loading } from 'vux'
	import MeScroll from 'mescroll.js'
	import 'mescroll.js/mescroll.min.css'
	import Load from "./common/Loading"
	export default {
		name: "Integral",
		data() {
			return {
				mescroll: null,
				pdlist: []
			}
		},
		components: {
			Loading,
		},
		mounted() {
			let self = this;
			self.mescroll = new MeScroll("mescroll", {
				up: {
					callback: self.upCallback,
					isBounce: false
				}
			})
		},
		methods: {
			upCallback(page) {
				let self = this;
				self.getListDataFromNet(page.num, page.size, function(curPageData) {
						if(page.num == 1) self.pdlist = [];
						self.pdlist = self.pdlist.concat(curPageData);
						//方法一(推荐): 后台接口有返回列表的总页数 totalPage
						self.mescroll.endSuccess(curPageData.length); //必传参数(当前页的数据个数, 总页数)
					},function() {
						//联网失败的回调,隐藏下拉刷新和上拉加载的状态;
						self.mescroll.endErr();
				});

			},
			getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
				let self = this;
				self.$vux.loading.show({
					text: '正在加载'
				});
				self.axios.get("http://localhost:8080/static/pdlist.json").then((response) => {
					let data = response.data;
					let listData = [];
					for(let i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
						if(i == data.length) break;
						listData.push(data[i]);
					}
					successCallback && successCallback(listData);
					self.$vux.loading.hide()
					
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@fff: #ffffff;
	.spread-header {
		padding: .2rem;
		background: url(../assets/img/bg.png);
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		#intergral {
			width: 100%;
			color: #fff;
			text-align: center;
			font-size: .6rem;
			padding-top: .4rem;
		}
		#intergral-text {
			width: 100%;
			text-align: center;
			display: block;
			padding: .1rem 0px;
			font-size: .14rem;
			color: rgba(255, 255, 255, .8);
		}
	}
	
	.mescroll {
		position: fixed;
		top: 1.82rem;
		bottom: 53px;
		height: auto;
		background-color: #fff;
		li {
			font-size: .14rem;
			padding: .05rem .15rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: .01rem solid #eee;
			box-sizing: border-box;
			div:first-child {
				color: #333;
			}
			div {
				font-size: .14rem;
				.push {
					color: #0BB20C;
				}
				.minus {
					color: #333333;
				}
				p:last-child {
					color: #999;
				}
				p {
					text-align: right;
				}
			}
		}
	}
</style>