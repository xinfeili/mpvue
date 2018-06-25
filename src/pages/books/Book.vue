<template>
	<div>
		<TopSwiper :topswiper="topswiper"></TopSwiper>
		<Card :key="item.id" v-for="item in books" :book="item"></Card>
		<p class="no-data" v-if="!more">没有更多数据</p>
	</div>
</template>
<script>
	import {get} from '@/util'
	import Card from '@/components/Card'
	import TopSwiper from '@/components/TopSwiper'
	export default {
		components: {
			Card,
			TopSwiper
		},
		data() {
			return {
				books: [],
				page: 1,
				more: true,
				topswiper: []
			}
		},
		methods:{
			async getList(init) {
				if(init) {
					this.page = 1
					this.more = true
				}
				wx.showNavigationBarLoading()
				const books = await get('http://snd.ideatob.com/mp/api/?apikey=snd_apis&at=1&pagesize=10',{page:this.page})
				if(books.list.length < 10 && this.page > 1) {
					this.more = false
				}
				if(init) {
					this.books = books.list
					wx.stopPullDownRefresh()
				}
				else {
					this.books = this.books.concat(books.list)
				}
				wx.hideNavigationBarLoading()
				this.topswiper = books.list
				console.log(111,this.topswiper)
			}
		},
		onPullDownRefresh() {
			this.getList(true)
		},
		onReachBottom() {
			if(!this.more) {
				return false
			}
			this.page = this.page+1
			this.getList()
		},
		mounted(){
			this.getList(true)
		}
	}
</script>