<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="leave">
      <dt>全部分类</dt>
      <dd @mouseenter="enter"  v-for="(item,index) in $store.state.home.menu" :key="index">
        <i :class="item.type"/>{{item.name}}
        <span class="arrow"/>
      </dd>
    </dl>

    <div v-if="kind" @mouseenter="sover" @mouseleave="sout" class="detail">
      <template v-for="(item,index) in curdetail.child" >
        <h4 :key="index">
          {{item.title}}
        </h4>

        <span v-for="v in item.child" :key="v">
          {{v}}
        </span>

      </template>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      kind:'',//保存鼠标移入的item.type的值，控制detail显示和隐藏
      menu:[{
        type:'food',
        name:'美食',
        child:[{
          title:'美食',
          child:['猪肉','蔬菜','水果']
        }]
      },{
        type:'takeout',
        name:'外卖',
        child:[{
          title:'外卖',
          child:['a猪肉','a蔬菜','a水果']
        }]
      },{
        type:'hotel',
        name:'酒店',
        child:[{
          title:'酒店',
          child:['c猪肉','c蔬菜','c水果']
        }]
      }]
    }
  },
  computed:{
    curdetail(){//把鼠标经过的type存储到kind中
      return this.$store.state.home.menu.filter(item=>item.type===this.kind)[0]
    }
  },
  methods:{
    leave(){//鼠标移出nav，延时清除kind数据，detail消失
      this.timer = setTimeout(()=>{
        this.kind=''
      },150)
    },
    enter(e){//鼠标移入dd，将item.type赋值给kind，kind有值就会显示detail
      this.kind=e.target.querySelector('i').className
    },
    sover(){//鼠标移入detail，清除定时器，kind保存的值就不会消失，detail就会显示
      clearTimeout(this.timer)
    },
    sout(){//鼠标移出detail，kind值为空，detail就会消失
      this.kind=''
    }
  }
}
</script>
