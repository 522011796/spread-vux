<template>
  <div id="senecs" class="main-position" style="position: relative">
    <div class="layout-header">
      <div style="position: relative;text-align: center;">
        <span class="header-bar" @click="backUrl"><i class="fa fa-chevron-left"></i></span>
        <span style="font-size:12px;">{{name}}</span>
      </div>
    </div>
    <div style="text-align: left;color:#515a6e;font-size:12px;">
      <div>1、这里方类似3d的场景图</div>
      <div>2、因为小程序官方表示暂时不开放支持，所以，才用了h5方式(公众号)</div>
      <div>3、具体3d制作，还需要深入研究。略复杂</div>
      <div>4、具体效果见类似的下图 <span style="color:#ed4014;">(会有交互效果)</span></div>
      <div style="width: 100%">
        <img class="img-class" src="./../../assets/timg.jpeg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, XButton, XHeader,ViewBox } from 'vux'
  export default {
    components: {
      XButton, Tabbar, TabbarItem,XHeader,ViewBox
    },
    name: 'senecs',
    data () {
      return {
        name: ''
      }
    },
    created(){
      this.name = this.$route.query.type;
    },
    methods:{
      backUrl(){
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  .layout-header{
    position: fixed;
    width:100%;
    left:0;
    top:0;
    z-index:100;
    height:40px;
    line-height:40px;
    background: #eeeeee;
    text-align: center;
  }
  .div-line{
    height:1px;
    background: #e8eaec;
    margin:5px 0px 5px 0px;
  }
  .header-bar{
    margin-left:10px;
    position: absolute;
    left:10px;
    width: 30px;
    text-align: center;
  }
  .img-class{
    height:100%;
    width: 100%;
  }
</style>
