<template>
  <div id="layoutFull">
    <view-box ref="viewBox" :bodyPaddingBottom="bodyPaddingBottom" :bodyPaddingTop="bodyPaddingTop" style="height: 100%;">
      <router-view></router-view>
    </view-box>
  </div>
</template>

<script>
  import { XButton, Tabbar, TabbarItem,ViewBox,Tab, TabItem } from 'vux'
  export default {
    components: {
      XButton,
      Tabbar,
      TabbarItem,
      ViewBox,
      Tab,
      TabItem
    },
    name: 'Layout',
    data () {
      return {
        bodyPaddingTop:0,
        bodyPaddingBottom:0
      }
    },
    mounted: function () {
      this.bodyPaddingTop = '45px';
      this.bodyPaddingBottom = '46px';
    },
  }
</script>

<style scoped>
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .icon-size{
    font-size: 20px;
  }
</style>
