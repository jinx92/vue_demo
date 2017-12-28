<template>

</template>

<script>
	import { Loading } from 'vux'

	export default {
		components: {
			Loading,
		},
		methods: {
			showLoading() {
				this.$vux.loading.show({
					text: '正在加载'
				})
				setTimeout(() => {
					this.$vux.loading.hide()
				}, 500)
			}
		},
		mounted () {
			this.showLoading()
		}
	}

</script>