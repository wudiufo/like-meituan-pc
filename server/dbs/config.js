export default {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      // return '2712258402@qq.com'
      return '394503396@qq.com'

    },
    get pass() {
      // return 'jcegopbwksredfhb'
      return 'gzojhmsfbyzpbiba'

    },
    get code() {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    get expire() { //设置过期时间1小时
      return () => {
        return new Date().getTime() + 60 * 60 * 1000
      }
    }
  }
}
