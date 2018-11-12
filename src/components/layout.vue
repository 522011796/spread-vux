<template>
  <div id="layout" style="height:100%;">
    <!--<router-view :style="styleHeight" style="border:1px solid;"></router-view>-->
    <div :style="styleHeight">
      <router-view></router-view>
    </div>
    <div ref="bar" style="">
      <tabbar slot="bottom" style="position: fixed;">
        <tabbar-item link="/">
          <img slot="icon" src="./../assets/home.png" style="height:20px;width: 20px">
          <span slot="label">官方</span>
        </tabbar-item>
        <tabbar-item link="/hot">
          <img slot="icon" src="./../assets/users.png" style="height:20px;width: 20px">
          <span slot="label">社区</span>
        </tabbar-item>
        <tabbar-item link="/myinfo">
          <img slot="icon" src="./../assets/user.png" style="height:20px;width: 20px">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </div>
    </view-box>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, XButton, XHeader,ViewBox } from 'vux'
  export default {
    components: {
      XButton, Tabbar, TabbarItem,XHeader,ViewBox
    },
    name: 'layout',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        bodyPaddingTop:'',
        bodyPaddingBottom:'',
        styleHeight: {
        height: '',
          top:'0px',
          height:'',
          'overflow-y': 'auto',
          '-webkit-overflow-scrolling':'touch'
        }
      }
    },
    created(){
      this.hh();
    },
    methods:{
      hh() {
        this.styleHeight.height = window.innerHeight-53 + 'px';
      }
    },
    mounted: function () {
      var _self = this;
      this.bodyPaddingTop = 40  + 'px';
      this.bodyPaddingBottom = 40 + 'px';
      setTimeout(function () {
        console.log(_self.$refs.bar.offsetHeight)
      }, 0)
      // 注：window.onresize只能在项目内触发1次
      var _self = this;
      window.onresize = function () {
        _self.hh();
      }
    },
  }
</script>

<style>
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
</style>
