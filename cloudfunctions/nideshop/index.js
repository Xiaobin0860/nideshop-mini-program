// 云函数入口文件
const login = require('login')
//const cloud = require('wx-server-sdk')

//cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
  console.log(event)
  console.log(context)

  data = null

  switch (event.url) {
    case 'AuthLoginByWeixin':
      data = login.login_by_weixin(event.userInfo.openId, event.data)
      break
    default:
      break
  }


  return data
}