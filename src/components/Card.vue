<template>
	<div class="book-list">
		<a :href="detailUrl" class="flex-row">
			<div class="book-img" @click.stop="preview"><img :src="book.picurl" :mode='aspectFit'></div>
			<div>{{book.title}}</div>
		</a>
	</div>
</template>
<script>
	export default {
		props: ["book"],
		computed: {
			detailUrl() {
				return '/pages/detail/main?bno='+this.book.bno
			}
		},
		methods: {
			preview() {
				wx.previewImage({
				  current: this.book.picurl, // 当前显示图片的http链接
				  urls: [this.book.picurl] // 需要预览的图片http链接列表
				})
			}
		}
	}
</script>
<style>
	.book-list  {
		box-sizing: border-box; 
		padding: 10px;
		font-size: 14px;
	}
	.book-img {
		width: 100px;
		height: 100px;
		margin-right: 20px;
		background: #f1f1f1;
	}
	.book-img img {
		max-width: 100%;
		max-height: 100%;
	}
</style>