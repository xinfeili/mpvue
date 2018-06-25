
<script>
  import {get} from './util'
  import qcloud from 'wafer2-client-sdk'
  import config from './config'
  export default {
    async created(){
      // qcloud.setLoginUrl('https://199447.qcloud.la/login');
      // qcloud.login({
      //     success: function (userInfo) {
      //         console.log('登录成功', userInfo);
      //     },
      //     fail: function (err) {
      //         console.log('登录失败', err);
      //     }
      // });
      // const res = await get('/mp/api/?apikey=snd_apis&at=1&page=1&pagesize=10')
      // console.log(123,res.data)
      console.log("小程序启动了")
    }
    // created(){
    //   wx.request({
    //     url: config.host+"/mp/api/?apikey=snd_apis&at=1&page=1&pagesize=10",
    //     data: {},
    //     header: {
    //         'content-type': 'application/json' // 默认值
    //     },
    //     success: function(res) {
    //       console.log(1234,res.data)
    //     }
    //   })
    // }
  }
</script>

<style>
/*==flex==*/
*{ box-sizing: border-box; }
.flex-row { 
  width: 100%; /*for huawei*/
  display: -webkit-box;
  display: flex; 
  display: -ms-flexbox; 
  display: -webkit-flex; 
  display: -moz-flex; 
  -ms-flex-direction: row; 
  -webkit-flex-direction: row; 
  -moz-flex-direction: row; 
  flex-direction: row;
}
.flex-column {
  display: flex; 
  display: -ms-flexbox; 
  display: -webkit-flex; 
  display: -moz-flex;
  -ms-flex-direction: column; 
  -webkit-flex-direction: column; 
  -moz-flex-direction: column; 
  flex-direction: column;
}
.flex-center { 
  align-items: center;
}
.justify-content {
  justify-content:center;
}
.space-between {
  justify-content:space-between;
}
.stretch { 
  align-items: stretch;
}
.flex-shrink {
  flex-shrink:0;
}
.flex-end { 
  justify-content:flex-end;
}
.flex-wrap { 
  -webkit-flex-wrap:wrap; 
  -moz-flex-wrap:wrap; 
  -ms-flex-wrap:wrap; 
  flex-wrap:wrap;
}
.col-a1 { 
  -ms-flex: 1; 
  -webkit-flex: 1; 
  -moz-flex: 1; 
  flex: 1;
}
.col-a2 { 
  -ms-flex: 2; 
  -webkit-flex: 2; 
  -moz-flex: 2; 
  flex: 2;
}
/*==/flex==*/

.no-data {
  text-align: center;
  color: #999;
  font-size: 12px;
  padding: 30px 0;
}
  .btn {
    width: 100%;
    height: 40px;
    background: #ea5a49;
    color: #fff;
    line-height: 40px;
    text-align: center;
    border-radius: 3px;
    margin-bottom: 10px;
  }
  .btn:active {
    background: #fa5a49;
  }
</style>