<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <a href="/"><img src="https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团"></a>

      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input @focus="focus" @blur="blur" @input="input" v-model="search" placeholder="搜索商家或地点"/>
          <button class="el-button el-button--primary">
            <i class="el-icon-search"></i>
          </button>
          <dl v-if="isHotPlace" class="hotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in $store.state.home.hotPlace.slice(0,5)" :key="index">
              <a :href="'/products?keyword'+encodeURIComponent(item.name)">{{item.name}}</a>
            </dd>

          </dl>
          <dl v-if="isSearchList" class="searchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <a :href="'/products?keyword'+encodeURIComponent(item.name)">{{item.name}}</a>
            </dd>

          </dl>
        </div>
        <p class="suggest">
          <a :href="'/products?keyword'+encodeURIComponent(item.name)" v-for="(item,index) in $store.state.home.hotPlace.slice(0,5)" :key="index">{{item.name}}</a>

        </p>
        <ul class="nav">
          <li>
            <nuxt-link class="takeo" to="/">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link class="movie" to="/">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link class="hotel" to="/">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link class="apartment" to="/">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link class="business" to="/">商家入驻</nuxt-link>
          </li>
          <li>
            <nuxt-link class="business" to="/">美团公益</nuxt-link>
          </li>

        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund">
              <p class="txt">随时退</p>
            </i>
          </li>
          <li>
            <i class="single">
              <p class="txt">不满意免单</p>
            </i>
          </li>
          <li>
            <i class="overdue">
              <p class="txt">过期退</p>
            </i>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data(){
    return {
      search:'',
      isFocus:false,
      hotPlace:[],
      searchList:[]
    }
  },
  computed:{
    isHotPlace:function(){//获取输入框焦点没值时
      return this.isFocus&&!this.search
    },
    isSearchList:function(){//获取输入框焦点有值时
      return this.isFocus&&this.search
    }
  },
  methods:{
    focus(){
      this.isFocus = true
    },
    blur(){
      // console.log(this)
     setTimeout(() => {//失去焦点时还能点击热门搜索里的内容，防止热门搜索失去焦点立即消失
      //  console.log(this)
        this.isFocus = false
     },200)
    },
    input:_.debounce(async function(){
      let self=this;
      let city=self.$store.state.geo.position.city.replace('市','')
      self.searchList=[]
      let {status,data:{top}}=await self.$axios.get('/search/top',{
        params:{
          input:self.search,
          city
        }
      })
      self.searchList=top.slice(0,10)
    },300)
  }
}
</script>
