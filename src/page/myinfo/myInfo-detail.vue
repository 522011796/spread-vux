<template>
  <div id="myinfoDetail" class="main-position">
    <div class="layout-header">
      <div style="position: relative;text-align: center;">
        <span class="header-bar" @click="backUrl"><i class="fa fa-chevron-left"></i></span>
        <span style="font-size:12px;">个人资料</span>
      </div>
    </div>
    <div>
      <group style="margin-top:0;">
        <cell title="用户名" value="ricky" class="block-cell"></cell>
        <cell title="性别" value="男" class="block-cell"></cell>
        <cell title="手机号" value="13881813486" class="block-cell"></cell>
        <cell title="注册时间" value="2018-11-11" class="block-cell"></cell>
        <cell title="最后登录时间" value="2018-11-11" class="block-cell""></cell>
      </group>
    </div>
  </div>
</template>

<script>
  import { XButton,Divider,Cell,Group,Flexbox, FlexboxItem } from 'vux'
  export default {
    components: {
      XButton,Divider,Cell,Group,Flexbox, FlexboxItem
    },
    name: 'myinfoDetail',
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
    height:10px;
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
  .block-cell{
    font-size:14px;
    height:30px;
    line-height: 3px;
    margin-top:0;
  }
</style>
