<template>
	<div class="container">
		<div class="userinfo">
			<!-- <open-data type="userAvatarUrl"></open-data>
			<open-data type="userNickName"></open-data> -->
			<img :src="userinfo.avatarUrl" />
			<p>{{nickName}}</p>
		</div>
		<!-- <div>
			{{remain}}11
		</div> -->
		<YearProgress></YearProgress>
		<button class="btn button" @click="scanbook">添加图书</button>
	</div>
</template>
<script>
	import {get} from '@/util'
	import YearProgress from '@/components/YearProgress'
	export default {
		components:{
			YearProgress
		},
		data() {
			return {
				userinfo: {},
				avatarUrl: '',
				nickName: '111'
			}
		},
		computed:{
			remain(){
				return this.bookinfo
			}
		},
		methods:{
			// async addbook(isbn) {
			// 	console.log(22222)
			// 	const books = await get('https://api.douban.com/v2/book/isbn'+isbn)
			// 	console.log(books)
			// },
			booklist(isbn) {
				wx.request({
				  url: 'https://api.douban.com/v2/book/'+isbn,
				  header: {
				      'content-type': 'application/json' // 默认值
				  },
				  success: function(res) {
				    // console.log('data222',res.data)
				  }
				})
			},
			scanbook(){
				var self = this
				// wx.request({
				//   			dataType: 'json',
				// 		  url: 'http://snd.ideatob.com/mp/api/?apikey=snd_apis&at=2&lb=0&page=1&pagesize=10',
				// 		  success: function(json) {
				// 		    console.log('data222',json)
				// 		  }
				// 		})
				wx.scanCode({
				  success: (res) => {
				  	if(res.result){
				  		wx.request({
				  			dataType: 'json',
							url: 'https://api.douban.com/v2/book/isbn/'+res.result,
							success: function(json) {
						    // console.log('data222',json.data)
						  }
						})
				  	}
				    // console.log(res)
				  }
				})
			}
		},
		created() {

			var self = this
			// console.log("this",this)
			// console.log("self",self)
			wx.getUserInfo({
	        	success: function(res) {
	        		self.userinfo = res.userInfo
	        		self.avatarUrl = res.userInfo.avatarUrl
	        		self.nickName = res.userInfo.nickName
		            // console.log(555,self.nickName)
		        }
		    })
			// this.userinfo = wx.getStorageSync('userInfo')
		}

	}
</script>
<style>
	.container {
		padding: 20rpx;
	}
	.userinfo {
		text-align: center;
	}
	.userinfo img {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
	}
</style>