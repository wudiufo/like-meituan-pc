<template>
  <el-row :gutter="0">
    <el-col :span="5">
      <geo/>
    </el-col>
    <el-col :span="5">
      <user/>
    </el-col>
    <el-col :span="14">
      <nav-bar/>
    </el-col>
</el-row>
</template>

<script>
import Geo from './geo.vue'
import User from './user.vue'
import NavBar from './nav.vue'
export default {
  components:{
    Geo,
    User,
    NavBar
  }
}
</script>

<style lang="scss" >
  @import "@/assets/css/public/layout.scss"


</style>
