(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{332:function(e,r,t){var content=t(390);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(17).default)("645d74e1",content,!0,{sourceMap:!1})},389:function(e,r,t){"use strict";var o=t(332);t.n(o).a},390:function(e,r,t){(e.exports=t(16)(!1)).push([e.i,".page-register .header{border-bottom:2px solid #2bb8aa;min-width:980px;color:#666}.page-register .header header{margin:0 auto;padding:10px 0;width:980px}.page-register .header header .site-logo{display:inline-block;width:128px;width:54px;height:36px;text-indent:-9999px;background-position:-669px -748px;background-image:url(//s0.meituan.net/bs/file/?f=fe-sso-fs%3Abuild%2Fassets%2Fsp-normal.2ee5c09.png)}.page-register .header header .login{float:right}.page-register .header header .bold{font-style:normal}.page-register>section{margin:0 auto 30px;padding-top:30px;width:980px;min-height:300px;padding-right:550px;box-sizing:border-box}.page-register>section .status{font-size:12px;margin-left:20px;color:#e6a23c}.page-register>section .error{color:red}",""])},406:function(e,r,t){"use strict";t.r(r);t(172),t(173),t(29),t(51);var o=t(337),l=t.n(o),n={layout:"blank",data:function(){var e=this;return{statusMsg:"",error:"",ruleForm:{name:"",email:"",code:"",pwd:"",cpwd:""},rules:{name:[{required:!0,type:"string",message:"请输入昵称",trigger:"blur"}],email:[{required:!0,type:"email",message:"请输入邮箱",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}],pwd:[{required:!0,message:"创建密码",trigger:"blur"}],cpwd:[{required:!0,message:"确认密码",trigger:"blur"},{validator:function(r,t,o){""===t?o(new Error("请再次输入密码")):t!==e.ruleForm.pwd?o(new Error("两次输入密码不一致!")):o()},trigger:"blur"}]}}},methods:{sendMsg:function(){var e,r,t=this;return!t.timerid&&(this.$refs.ruleForm.validateField("name",function(r){e=r}),t.statusMsg="",!e&&(this.$refs.ruleForm.validateField("email",function(e){r=e}),void(e||r||t.$axios.post("/users/verify",{username:encodeURIComponent(t.ruleForm.name),email:t.ruleForm.email}).then(function(e){var r=e.status,data=e.data;if(200===r&&data&&0===data.code){var o=60;t.statusMsg="验证码已发送,剩余".concat(o--,"秒"),t.timerid=setInterval(function(){t.statusMsg="验证码已发送,剩余".concat(o--,"秒"),0===o&&clearInterval(t.timerid)},1e3)}else t.statusMsg=data.msg}))))},register:function(){var e=this;this.$refs.ruleForm.validate(function(r){r&&e.$axios.post("/users/signup",{username:window.encodeURIComponent(e.ruleForm.name),password:l.a.MD5(e.ruleForm.pwd).toString(),email:e.ruleForm.email,code:e.ruleForm.code}).then(function(r){var t=r.status,data=r.data;200===t?data&&0===data.code?location.href="/login":e.error=data.msg:e.error="服务器出错，错误码:".concat(t),setTimeout(function(){e.error=""},1500)})})}}},m=(t(389),t(2)),component=Object(m.a)(n,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"page-register"},[t("article",{staticClass:"header"},[t("header",[t("a",{staticClass:"site-logo",attrs:{href:"/"}}),e._v(" "),t("span",{staticClass:"login"},[t("em",{staticClass:"bold"},[e._v("已有美团账号")]),e._v(" "),t("a",{attrs:{href:"/login"}},[t("el-button",{attrs:{type:"primary",size:"small"}},[e._v("登陆")])],1)])])]),e._v(" "),t("section",[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"昵称",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:e.ruleForm.email,callback:function(r){e.$set(e.ruleForm,"email",r)},expression:"ruleForm.email"}}),e._v(" "),t("el-button",{attrs:{size:"mini",round:""},on:{click:e.sendMsg}},[e._v("发送验证码")]),e._v(" "),t("span",{staticClass:"status"},[e._v(e._s(e.statusMsg))])],1),e._v(" "),t("el-form-item",{attrs:{label:"验证码",prop:"code"}},[t("el-input",{attrs:{maxlength:"4"},model:{value:e.ruleForm.code,callback:function(r){e.$set(e.ruleForm,"code",r)},expression:"ruleForm.code"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[t("el-input",{attrs:{type:"password"},model:{value:e.ruleForm.pwd,callback:function(r){e.$set(e.ruleForm,"pwd",r)},expression:"ruleForm.pwd"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"cpwd"}},[t("el-input",{attrs:{type:"password"},model:{value:e.ruleForm.cpwd,callback:function(r){e.$set(e.ruleForm,"cpwd",r)},expression:"ruleForm.cpwd"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.register}},[e._v("同意以下协议并注册")]),e._v(" "),t("div",{staticClass:"error"},[e._v(e._s(e.error))])],1),e._v(" "),t("el-form-item",[t("a",{staticClass:"f1",attrs:{href:"http://www.meituan.com/about/terms",target:"_blank"}},[e._v("《美团网用户协议》")])])],1)],1)])},[],!1,null,null,null);r.default=component.exports}}]);