import Http from './http'

const API = {
  OPENAPI: '/api/v1/openapi.json',
  SESSION: '/api/v1/session/',
  USER: '/api/v1/user/'
}

export default {
  // 这个用于测试，检查能否使用接口
  openapi () {
    Http.get(API.OPENAPI).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
      console.log('无法获得openapi.json')
    })
  },
  // 查询登录状态
  loginStatus () {
    return new Promise((resolve, reject) => {
      Http.get(API.SESSION).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject()
      })
    })

  },
  // 登录
  login (username, password, remember_me) {
    return new Promise((resolve, reject) => {
      Http({
        method: 'post',
        url: API.SESSION,
        data: {
          username,
          password,
          remember_me
        }
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })

  },
  // 登出
  logout () {
    return new Promise((reject) => {
      Http.delete(API.SESSION).then(() => {
        reject()
      })
    })
    
  },
  // 用户注册
  userRegister (username, email, password) {
    return new Promise((resolve, reject) => {
      Http({
        method: 'post',
        url: API.USER,
        data: {
          username,
          email,
          password
        }
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  userDelete () {
    Http.delete(API.USER)
  }
}
