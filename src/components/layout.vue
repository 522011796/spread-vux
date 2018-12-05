<template>
  <div id="layout" style="height:100%;">
    <!--<router-view :style="styleHeight" style="border:1px solid;"></router-view>-->
    <div :style="styleHeight">
      <router-view></router-view>
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
        this.styleHeight.height = window.innerHeight + 'px';
      }
    },
    mounted: function () {
      var _self = this;
      this.bodyPaddingTop = 40  + 'px';
      this.bodyPaddingBottom = 40 + 'px';
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
