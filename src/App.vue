<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { XButton, Tabbar, TabbarItem,ViewBox } from 'vux'
export default {
  components: {
    XButton,
    Tabbar,
    TabbarItem,
    ViewBox
  },
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
