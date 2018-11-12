<template>
  <div id="myinfoDetail" class="main-position">
    <div class="layout-header">
      <div style="position: relative;text-align: center;">
        <span class="header-bar" @click="backUrl"><i class="fa fa-chevron-left"></i></span>
        <span style="font-size:12px;">我的帖子</span>
      </div>
    </div>
    <div style="padding: 10px">
      <div v-for="(item,index) in 5" :key="index">
        <div style="height:35px;background: #fefefe;font-size:12px;">
          <div>我的帖子。。。我的帖子。。。我的帖子。。。</div>
          <div class="content-time">2018-11-11 11:11:11</div>
        </div>
        <div class="div-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { XButton,Divider,Cell,Group,Flexbox, FlexboxItem } from 'vux'
  export default {
    components: {
      XButton,Divider,Cell,Group,Flexbox, FlexboxItem
    },
    name: 'myinfoContent',
    methods:{
      backUrl(){
        this.$router.push('/myinfo');
      }
    }
  }
</script>

<style scoped>
  div{
    word-wrap:break-word;
    word-break:normal;
    word-break:break-all;
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
    margin-left:10px;
    position: absolute;
    left:10px;
    width: 30px;
    text-align: center;
  }
  .myinfo-info{
    height:150px;
  }
  .myinfo-title{
    position: relative;
    height:110px;
  }
  .myinfo-list{
    height:40px;
    line-height:40px;
  }
  .text-list{
    text-align: center;
    font-size: 13px;
  }
  .myinfo-header{
    position: relative;
    float: left;
    height:100px;
    width: 100px;
    top:5px;
  }
  .myinfo-item{
    float: left;
    font-size: 13px;
    position: relative;
  }
  .myinfo-item-info{
    position: relative;
    left:15px;
    top:20px;
    width: 100%;
  }
  .myinfo-item-title{
    font-size:15px;
  }
  .img-class{
    height:100%;
    width: 100%;
    position: absolute;
    left:5px;
    border:1px solid #dddddd;
  }
  .div-line{
    height:1px;
    margin:10px 0px;
    background: #eeeeee;
  }
  .weui-cells {
    margin-top: 0;
    background-color: #FFFFFF;
    line-height: 1.41176471;
    font-size: 17px;
    overflow: hidden;
    position: relative;
    margin: 0 !important;
  }
  .content-time{
    font-size:10px;
    color:#808695;
  }
</style>
