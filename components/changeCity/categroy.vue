<template>
  <div class="">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in list" :key="item">
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>

    <dl v-for="item in blocks" :key="item.title" class="m-categroy-section">
      <dt :id="'#city-'+item">{{item.title}}</dt>
      <dd>
        <span v-for="c in item.city" :key="c">
          {{c}}
        </span>
      </dd>

    </dl>
  </div>
</template>

<script>
import pyins from 'js-pinyin'
export default {
  data(){
    return {
      list:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      blocks:[]
    }
  },
  async mounted(){
    let blocks=[]
    let {status,data:{city}} = await this.$axios.get('/geo/city')
    if (status===200){
      let p
      let c
      let d={}
      city.forEach(item=>{
        p = pyins.getFullChars(item.name).toLocaleLowerCase().slice(0,1)
        c = p.charCodeAt(0)
        if(c>96&&c<123){
          if(!d[p]){
            d[p]=[]
          }
          d[p].push(item.name)
        }
      })
      for (let [k,v] of Object.entries(d)){
        blocks.push({
          title:k.toUpperCase(),
          city:v
        })
      }
      blocks.sort((a,b)=>a.title.charCodeAt(0)-b.title.charCodeAt(0))
      this.blocks = blocks
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/changeCity/categroy.scss"
</style>
