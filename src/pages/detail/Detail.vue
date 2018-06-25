<template>
	<div>
		<div class="thumb">
			<img :src="imgurl" :mode="aspectFill" class="img-bg" />
			<div class="top-info">
				<img :src="imgurl" :mode="aspectFit" class="img-info" />
			</div>
		</div>
		<div class="detail-content">
			<div class="datail-title">{{title}}</div>
			<div>
				<span :key='tag' v-for='tag in tags' class="tag">{{tag}}</span>
			</div>
			<div v-html="test"></div>
			<div v-if="addShow">
				<textarea v-model='comment' class="textarea-info"></textarea>
			</div>
			<div class="location">
				地理位置：
				<switch color="#ea5a49" :checked='location' @change='getGeo'></switch>
				<span class="">{{location}}</span>
			</div>
			<div class="phone">
				手机型号：
				<switch color="#ea5a49" :checked='phone' @change='getPhone'></switch>
				<span class="">{{phone}}</span>
			</div>
			<div>
				<button @click="addComment">评论</button>
			</div>
			<button open-type="share">转发给好友</button>
		</div>
	</div>
</template>

<script>
	import { get, post } from '@/util'
	export default {
		data() {
			return {
				userinfo: {
					openId: 'test00001'
				},
				plList: [],
				comment: '',
				bookid: '',
				title: '',
				info: '',
				imgurl: '',
				tags: ['文艺','体育','经济'],
				test: '<section class="editor">test</section>',
				location: '',
				phone: ''
			}
		},
		computed: {
			// 评论框是否显示
			addShow() {
				// 没登录
				if (!this.userinfo.openId) {
					return false
				}
				// 查到评论列表里有自己的openid
				if(this.plList.filter(v=>v.openId==this.userinfo.openId).length){
					return false
				}
				return true
			}
		},
		methods: {
			async addComment(){
				const data = {
					openId: this.userinfo.openId,
					bookid: this.bookid,
					location: this.location,
					phone: this.phone,
					comment: this.comment
				}
				if(!this.comment) {
					return
				}
				else {
					try {
						await post('http://snd.ideatob.com/mp/api/', data)
						this.comment = ''
					}
					catch(e) {
						showModel("失败",e.message)
					}
				}
			},
			async getDital() {
				const content = await get('http://snd.ideatob.com/mp/api/?apikey=snd_apis&at=6&bno='+this.bookid)
				this.title = content.list.title
				this.info = content.list.message
				this.imgurl = content.list.imgurl
				wx.setNavigationBarTitle({
				    title: content.list.title
				})
			},
			getPhone(e) {
				if(e.target.value) {
					const phoneInfo = wx.getSystemInfoSync()
					this.phone = phoneInfo.model
				}
				else {
					this.phone =''
				}
			},
			getGeo(e) {
				let url = 'http://api.map.baidu.com/geocoder/v2/'
				let ak = 'nqIRiBU2rVptl72uu5jC3AeIw6uYaERu'
				if(e.target.value) {
					wx.getLocation({
						success: geo=>{
							wx.request({
								url,
								data: {
									location: `${geo.latitude},${geo.longitude}`,
									output: 'json',
									ak
								},
								success: res=> {
									if(res.data.status == 0){
										this.location = res.data.result.addressComponent.city
									}
									else {
										this.location = '未知地点'
									}
								}
							})
						}
					})
				}
				else {
					this.location = ''
				}
			}
		},
		mounted() {
			this.bookid = this.$root.$mp.query.bno
			this.getDital()
			console.log(wx.getStorageSync('userinfo'))
		}
	}
</script>
<style>
	.thumb {
		position: relative;
		overflow: hidden;
	}
	.img-bg {
		width: 750rpx;
		height: 500rpx;
		filter: blur(15px);
	}
	.top-info {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		text-align: center;
		color: #fff;
		padding-top: 10px;
	}
	.img-info {
		width: 300rpx;
	}
	.detail-content {
		padding: 15px;
		font-size: 14px;
	}
	.datail-title {
		font-size: 16px;
	}
	.tag {
		display: inline-block;
		border-radius: 10px;
		padding: 0 10px;
		margin: 5px;
		border: solid 1px #ff0000;
	}
	.textarea-info {
		background: #eee;
		padding: 10px;
	}
</style>