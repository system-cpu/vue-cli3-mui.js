<template>
  <div id="app">
      <navigation  v-bind:inshow="seal.inshow" :head_name="seal.head_name"  :right_inshow="seal.right_inshow" :right_name="seal.right_name"></navigation>
         <div @click="route('/me',{'id':1,'name':'liyunlong'})">
            路由
         </div>
      <HelloWorld v-bind:idx="seal.idx"></HelloWorld>
  </div>
</template>
<script>
import HelloWorld from '../views/HelloWorld'
import navigation from '../views/navigation'
export default {
  name: 'App',
  data(){
    return{
      seal:{
          idx:2,
          inshow:true,
          head_name:"哈哈哈",
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
  }
}
</script>
<style scoped>
#app{
  position: relativep;
  background-color: #f2f2f2;
}

</style>
