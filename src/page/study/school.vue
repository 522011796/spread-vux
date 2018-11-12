<template>
  <div id="school" class="main-position" style="position: relative">
    <div class="layout-header">
      <div style="position: relative;text-align: center;">
        <span class="header-bar" @click="backUrl"><i class="fa fa-chevron-left"></i></span>
        <span style="font-size:12px;">网月学院</span>
      </div>
    </div>
    <div style="margin-top:10px;">
      <div style="padding:0px 10px;" v-for="(item,index) in 5" :key="index">
        <div class="school-left">
          <img class="img-class" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
        </div>
        <div class="school-right">
          <div>如何确定门锁的锁体是否可以直接安装</div>
          <div class="school-right-type">
            <span class="school-type">门锁IL-02</span>
          </div>
        </div>
        <div style="clear: both"></div>
        <div class="div-line"></div>
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
    name: 'school',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created(){

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
    z-index:101;
    height:40px;
    line-height:40px;
    background: #eeeeee;
    text-align: left;
  }
  .school-left{
    float: left;
    width: 100px;
    height:100px;
    border: 1px solid #dddddd;
  }
  .school-right{
    font-size:13px;
    margin-left:110px;
    color:#515a6e;
  }
  .img-class{
    height:100%;
    width: 100%;
  }
  .school-type{
    padding:1px;
    border:1px solid #19be6b;
    color:#ed4014;
    border-radius: 2px;
    font-size:10px;
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
  .school-right-type{
    margin-top:40px;
  }
</style>
