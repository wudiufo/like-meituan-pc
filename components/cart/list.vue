<template>
  <el-table :data="cartData" style="width:980px">
    <el-table-colum prop="name" lable="项目" width="532">

    </el-table-colum>
    <el-table-colum prop="price"
      label="单价"
      width="132">

    </el-table-colum >
    <el-table-colum label="数量"
      width="212">
      <template slot-scope="scope">
        <el-input-number v-model="scope.row.count" :min="0"/>
      </template>
    </el-table-colum>
    <el-table-colum label="总价">
      <template slot-scope="scope">
        <div class="">
          {{scope.row.price*scope.row.count}}
        </div>
      </template>
    </el-table-colum>
  </el-table>
</template>

<script>
export default {
  props:{
    cartData:{
      type:Array,
      default:()=>{
        return []
      }
    }
  }
}
</script>
