<template>
  <div class="page-order">
    <el-row>
      <el-col :span="4" class="navbar">
        <h3>我的美团</h3>
        <dl>
          <dt>我的订单</dt>
          <dd>全部订单 <i class="el-icon-arrow-right"/></dd>
          <dd>待付款 <i class="el-icon-arrow-right"/></dd>
          <dd>待使用 <i class="el-icon-arrow-right"/></dd>
        </dl>
        <dl>
          <dt>我的收藏 </dt>
          <dd>收藏的商家 <i class="el-icon-arrow-right"/></dd>
          <dd>收藏的团购 <i class="el-icon-arrow-right"/></dd>
        </dl>
        <dl>
          <dt>抵用券 </dt>
          <dd>可用券 <i class="el-icon-arrow-right"/></dd>
          <dd>失效券 <i class="el-icon-arrow-right"/></dd>
        </dl>
        <dl>
          <dt>个人信息 </dt>
          <dd>账户设置 <i class="el-icon-arrow-right"/></dd>
        </dl>

      </el-col>

      <el-col :span="19" class="table">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部订单" name="all">
            <list :cur="cur"/>
          </el-tab-pane>
          <el-tab-pane label="待付款" name="unpay">
            <list :cur="cur"/>
          </el-tab-pane>
          <el-tab-pane label="待使用" name="unuse">
            <list :cur="cur"/>
          </el-tab-pane>
          <el-tab-pane label="待评价" name="replay">
            <list :cur="cur"/>
          </el-tab-pane>
        </el-tabs>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import List from '@/components/order/list.vue'
export default {
  components:{
    List
  },
  data(){
    return {
      activeName:'all',
      list:[],
      cur:[]
    }
  },
  watch:{
    activeName(val){
      this.cur = this.list.filter(item=>{
        if (val === "unpay") {
          return item.status === 0
        }else if(val === "all"){
          return true
        }else {
          return false
        }
      })
    },
    list(){
      let val = this.name
      this.cur = this.list.filter(item=>{
        if (val === "unpay") {
          return item.status === 0
        }else if(val === "all"){
          return true
        }else {
          return false
        }
      })
    }
  },
  methods:{
    handleClick(tab){
      this.activeName = tab.name
    }
  },
  async asyncData(ctx) {
    let {status,data:{code,list}} = await ctx.$axios.post('/order/getOrders')
    if (status===300&&code===0&&list.length){
      return {
        list: list.map(item=>{
          return {
            img:item.imgs.length?item.imgs[0].url:'/logo.png',
            name:item.name,
            count:1,
            total:item.total,
            status:item.status,
            statusTxt:item.status===0?'待付款':'已付款'
          }
        }),
        cur:list.map(item=>{
          return {
            img:item.imgs.length?item.imgs[0].url:'/logo.png',
            name:item.name,
            count:1,
            total:item.total,
            status:item.status,
            statusTxt:item.status===0?'待付款':'已付款'
          }
        }),
      }
    }
  },
}
</script>

<style lang="scss" >
@import '@/assets/css/order/index.scss'
</style>
