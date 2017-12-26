<template>
	<div class="enter">
		<div id="enter1">
			<a href="javascript:;">
				<span class="icon"><img src="../../../assets/img/1.png" alt="" /></span>
				<span class="icon_text">全部</span>
			</a>
		</div>
		<div id="enter2">
			<a href="javascript:;">
				<span class="icon"><img src="../../../assets/img/2.png" alt="" /></span>
				<span class="icon_text">原味</span>
			</a>
		</div>
		<div id="enter3">
			<a href="javascript:;">
				<span class="icon"><img src="../../../assets/img/3.png" alt="" /></span>
				<span class="icon_text">香辣味</span>
			</a>
		</div>
		<div id="enter4">
			<a href="javascript:;">
				<span class="icon"><img src="../../../assets/img/4.png" alt="" /></span>
				<span class="icon_text">麻辣味</span>
			</a>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.enter{
		width: 100%;
		background-color: #fff;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		align-items: center;
		margin-bottom: .05rem;
	}
	.enter>div{
		width: 25%;
		padding-top: 20%;
		position: relative;
	}
	.enter>div>a{
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;
		
		position: absolute;
		top: 0;
	}
	.enter>div>a>.icon_text{
		display: block;
		text-align: center;
		width: 100%;
	}
	.enter>div>a>.icon{
		display: block;
		margin: auto;
		width: 50%;
		padding-top: 50%;
		position: relative;
	}
	.enter>div>a>.icon>img{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
	}
</style>