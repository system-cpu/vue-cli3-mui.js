<template>
  <div id="Business_details">
    <!-- 商家活动 -->
        <div class="tou">
              <img class="tou_img" v-show="inshow"  @click="$router.go(-1)"  src="../assets/top.png" alt="">
              <p class="tou_">{{head_name}}</p>
              <p class="tou_per" v-show="right_inshow">{{right_name}}1</p>
        </div>
       <div class="tou_div" ></div>
  </div>
</template>

<script>
export default {
  name: 'Business_details',
   props: ["inshow","head_name","right_inshow","right_name"],
    data(){
      return{

      }
  },
    mounted(){
     mui.plusReady(function() {  
      plus.navigator.setStatusBarBackground("#4786FC");
    });
  },
}
</script>
<style  scoped>
    .tou{
     
      width: 100%;
      height: 0.88rem;
      background-color: #4786FC;
      display: flex;
      flex-direction: column;
      justify-content: center;
      justify-items: center;
      align-items: center;
      align-content: center;
      position: fixed;
      left: 0rem;
      top:0rem;
      z-index: 10000;
      color: #fff;
    }
    .tou_div{
        width: 100%;
        height: 0.88rem;
         background-color: #4786FC;
         color: #fff
    }
    .tou p{
      font-size: 0.32rem;
      color: #fff;
    }
    .tou_img{
      position: absolute;
      left: 0.2rem;
      width: 0.2rem;
      height: 0.3rem;
    }
</style>

