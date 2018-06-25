import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
const app = new Vue(App)
app.$mount()

export default{
  config: {
    pages: ['^pages/books/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ff0000',
      navigationBarTitleText: '小程序',
      navigationBarTextStyle: 'light'
    },
    tabBar: {
      selectedColor: '#ea5149',
      list: [
        {
          pagePath: 'pages/books/main',
          text: '图书'
        },
        {
          pagePath: 'pages/comments/main',
          text: '评论'
        },
        {
          pagePath: 'pages/me/main',
          text: '我的'
        }
      ]
    }
  }
}
