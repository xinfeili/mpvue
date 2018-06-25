<template>
	<div>
		<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500" :circular="true">
		  <div :key="index" v-for="(item,index) in imgUrls">
		    <swiper-item>
		      <image @click="bookDetail(img)" :key="imgindex" v-for="(img, imgindex) in item" :mode="aspectFit" :src="img.picurl" class="slide-image" />
		    </swiper-item>
		  </div>
		</swiper>
	</div>
</template>
<script>
	export default {
		props: ['topswiper'],
		computed: {
			imgUrls() {
				let res = this.topswiper
				return [res.slice(0,3),res.slice(3,6),res.slice(6)]
			}

		},
		methods:{
			bookDetail(item) {
				wx.navigateTo({
				  url: '/pages/detail/main?bno='+item.bno
				})
			}
		}
	}
</script>
<style>
	.slide-image {
		width: 230rpx;
		height: 250rpx;
		margin: 0 10rpx;
	}
</style>