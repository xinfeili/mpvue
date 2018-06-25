// 工具函数库

import config from './config'
export function get(url, data){
	return request(url, 'GET', data)
}
export function post(url, data){
	return request(url, 'POST', data)
}

function request(url, method, data) {
	return new Promise((resolve, reject)=>{
		wx.request({
			data,
			method,
			url,
			header: {
				'content-type': 'application/json'
			},
			success: function(res){
				if(res.statusCode === 200){
					resolve(res.data)
					// console.log(res)
				}
				else{
					reject(res.data)
				}
			}
		})
	})
}

export function showModal(title,content) {
	wx.showModal({
	  title,
	  content,
	  showCancel: false
	  // success: function(res) {
	  //   if (res.confirm) {
	  //     console.log('用户点击确定')
	  //   } else if (res.cancel) {
	  //     console.log('用户点击取消')
	  //   }
	  // }
	})
}