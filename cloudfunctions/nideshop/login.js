login_by_weixin = (openid, data) => {
  const user = data.userInfo.userInfo
  console.log('\nlogin_by_weixin: user=', user)
  return {
    errno: 0,
    data: {
      token: openid,
      userInfo: {
        openid: openid,
        nickname: user.nickName,
        avatar: user.avatarUrl
      }
    }
  }
}


module.exports = {
  login_by_weixin,
}
