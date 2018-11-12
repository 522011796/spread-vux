<template>
  <div id="home" class="home-main">
    <div class="layout-header">
      <div style="position: relative;">
        <span>官方动态</span>
        <span class="header-bar"><i class="fa fa-list"></i></span>
      </div>
    </div>
    <div class="main-position">
      <div @click="detail" class="home-item" v-for="(n,index) in 5" :key="index">
        <div style="float:left;width: 70%">
          <div class="home-item-title">
            网月智能门锁第二代发布啦，功能简介。。。。。
          </div>
          <div class="home-item-content">
            网月智能门锁第二代发布啦，功能简介，网月智能门锁第二代发布啦，功能简介，网月智能门锁第二代发布啦，功能简介，网月智能门锁第二代发布啦，功能简介。。。。。
          </div>
          <div class="home-item-info">
        <span>
          <i class="fa fa-eye"></i>
          12
        </span>
            <span>
          <i class="fa fa-comment"></i>
          12
        </span>
            <span>
          <i class="fa fa-heart"></i>
          12
        </span>
          </div>
        </div>
        <div style="margin-left:70%;">
          <div class="title-img">
            <img src="" alt="" class="img-class">
          </div>
        </div>
        <div style="clear: both"></div>
        <div class="div-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { XButton,Divider } from 'vux'
  export default {
    components: {
      XButton,Divider
    },
    name: 'home',
    methods:{
      detail(){
        this.$router.push({path: '/detail', query: {back: '/'}});
      }
    }
  }
</script>

<style lang="less" scoped>
div{
  word-wrap:break-word;
  word-break:normal;
  word-break:break-all;
}
.home-main{
  padding:5px 5px;
}
.home-item{
  height:140px;
  margin-bottom:20px;
}
.home-item-title{
  font-size:15px;
  color:#17233d;
  height:40px;
  line-height: 20px;
  font-weight: bold;
}
.home-item-content{
  font-size:12px;
  color:#515a6e;
  height:80px;
}
.home-item-info{
  font-size:10px;
  color:#808695;
  height:20px;
  line-height:20px;
}
.home-item-info span{
  margin-right:10px;
}
.img-class{
  height:100%;
  width: 100%;
}
.div-line{
  height:1px;
  background: #e8eaec;
  margin:5px 0px 5px 0px;
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
  text-align: center;
}
.header-bar{
  position: absolute;
  top:0px;
  right:20px;
}
.title-img{
  height: 100px;
  width:95%;
  border:1px solid #dddddd;
  position: relative;
  top:15px;
}
</style>
