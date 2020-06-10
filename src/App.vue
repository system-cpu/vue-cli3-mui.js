<template>
  <div id="app">
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script type="text/javascript">
// var first = null;
// mui.back = function() {
//   mui.plusReady(function() {
//     //首页返回键处理
//     //处理逻辑：1秒内，连续两次按返回键，则退出应用；
//     if (!first) {
//       first = new Date().getTime();
//       mui.toast("再按一次退出应用");
//       setTimeout(function() {
//         first = null;
//       }, 1000);
//     } else {
//       if (new Date().getTime() - first < 1000) {
//         plus.runtime.quit();
//       }
//     }
//   });
// };
</script>

<style lang="stylus">
</style>
