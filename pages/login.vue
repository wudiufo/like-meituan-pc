<template>
  <div class="page-login">
    <div class="login-header">
      <a
        href="/"
        class="logo"/>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网">
      </div>
      <div class="form">
        <h4
          v-if="error"
          class="tips"><i/>{{ error }}</h4>
        <p><span>账号登录</span></p>
        <el-input
          autocomplete="true"
          placeholder="手机号/用户名/邮箱"
          v-model="username"
          prefix-icon="profile"/>
        <el-input
          autocomplete="true"
          placeholder="密码"
          v-model="password"
          prefix-icon="password"
          type="password"/>
        <div class="foot">
          <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
          <b>忘记密码？</b>
        </div>
        <el-button
          class="btn-login"
          type="success"
          size="mini"
          @click="login">登录</el-button>
      </div>
    </div>

    <footer class="footer">
        <div class="site-info-nav cf">
            <ul>
                <li class="first"><a rel="nofollow" href="https://about.meituan.com/about.html">关于美团</a></li>
                <li><a rel="nofollow" href="https://zhaopin.meituan.com/">加入我们</a></li>
                <li><a rel="nofollow" href="http://emis.meishi.meituan.com/merchantsSettled">商家入驻</a></li>
                <li><a rel="nofollow" href="https://www.meituan.com/help/faq">帮助中心</a></li>
                <li class="last"><a href="http://meituan.com/mobile">美团手机版</a></li>
            </ul>
        </div>
        <div class="copyright">
            <p>
                ©<span>2019</span>
                <a href="https://www.meituan.com">美团网团购</a>
                meituan.com
                <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP证070791号</a>
                京公网安备11010502025545号
            </p>
        </div>
    </footer>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  data: () => {
    return {
      checked: '',
      username: '',
      password: '',
      error: ''
    }
  },
  layout: 'blank',
  methods: {
    login: function () {
      let self=this;
      self.$axios.post('/users/signin',{
        username:window.encodeURIComponent(self.username),
        password:CryptoJS.MD5(self.password).toString()
      }).then(({status,data})=>{
        if(status===200){
          if(data&&data.code===0){
            location.href='/'
          }else{
            self.error = `服务器出错，错误码:${status}`
          }
        }else{
          self.error=`服务器出错`
        }
        setTimeout(function () {
          self.error = ''
        }, 1500)
      })
    }
  }
}
</script>

<style lang="scss">
    @import "@/assets/css/login/index.scss";
    .footer {
      margin: 0 auto 30px;
      clear: both;
      width: 980px;
      font-size: 12px;
      color: #999;
      .site-info-nav {
        margin-bottom: 20px;
        padding: 12px 0;
        border-top: 1px solid #EEE;
        border-bottom: 1px solid #EEE;
        height: 24px;
        ul {
          float: left;
          width: 594px;
          color: #EEE;
        }
        .first {
          padding-left: 0;
      }
        li {
          float: left;
          margin: 5px 0;
          padding: 0 16px;
          line-height: 14px;
          border-right: 1px solid #EEE;
          a{
            color:#999;
          }
          a:hover{
            text-decoration: underline;
          }
      }
    }

    .copyright {
      text-align: left;
      clear: both;
      font-size: 12px;
      font-family: initial;
      a{
        color:#999;
      }
      a:hover{
        text-decoration: underline;
      }
  }
}
</style>
