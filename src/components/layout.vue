<template>
  <div id="layout">
    <view-box ref="viewBox" :bodyPaddingBottom="bodyPaddingBottom" :bodyPaddingTop="bodyPaddingTop" style="height: 100%;">
      <router-view></router-view>
    </view-box>
    <tabbar slot="bottom" style="position: fixed;left: 0;height: 50px;">
      <tabbar-item link="/recommend" :selected="activeBarMenu == 'recommend' || activeBarMenu == 'block'">
        <i slot="icon" class="fa fa-home icon-size"></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/goods" :selected="activeBarMenu == 'goods'">
        <i slot="icon" class="fa fa-th icon-size"></i>
        <span slot="label">新品</span>
      </tabbar-item>
      <tabbar-item link="/find" :selected="activeBarMenu == 'find'">
        <i slot="icon" class="fa fa-search icon-size"></i>
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item link="/myinfo" :selected="activeBarMenu == 'myinfo'">
        <i slot="icon" class="fa fa-user icon-size"></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
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
        bodyPaddingBottom:0,
        activeBarMenu:''
      }
    },
    mounted: function () {
      this.bodyPaddingTop = '45px';
      this.bodyPaddingBottom = '46px';
      this.activeBarMenu = this.$route.name;
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
