<template>
  <div id="app">
      <navigation  v-bind:inshow="seal.inshow" :head_name="seal.head_name"  :right_inshow="seal.right_inshow" :right_name="seal.right_name"></navigation>
         <div @click="route('/shop')"> 
            这里是首页
         </div>
      <HelloWorld v-bind:idx="seal.idx"></HelloWorld>
  </div>
</template>
<script>
import HelloWorld from '../views/HelloWorld'
import navigation from '../views/navigation'
import storage from 'good-storage'
export default {
  name: 'App',
  data(){
    return{
      seal:{
          idx:0,
          inshow:false,
          head_name:"首页",
          right_inshow:false,
          right_name:""
      } 
    }
  },
 components:{
    HelloWorld,
    navigation,
  },
 
  methods:{
    route(name,object){
       this.$router.push({ path: name, query: object });
    }
  },
 
}
</script>
<style scoped>
.homeback img{
  width: 7.50rem;
}
.hombottom{
   width: 7.50rem;
   position: fixed;
   bottom: 0rem;
}
.hombottom img{
   width: 7.50rem;
}
</style>
