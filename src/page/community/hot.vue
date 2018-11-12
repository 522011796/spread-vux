<template>
  <div id="hot" class="hot-main main-position">
    <div class="hot-item" v-for="(n,index) in 5" :key="index" @click="detail">
      <div style="float:left;width: 70%">
        <div class="hot-item-title">
          网月智能门锁第二代发布啦，功能简介。。。。。
        </div>
        <div class="hot-item-content">
          网月智能门锁第二代发布啦，功能简介，网月智能门锁第二代发布啦，功能简介，网月智能门锁第二代发布啦功能简介。。。。。
        </div>
        <div class="hot-item-info">
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
</template>

<script>
  import { XButton,Divider } from 'vux'
  export default {
    components: {
      XButton,Divider
    },
    name: 'hot',
    methods:{
      detail(){
        this.$router.push({path: '/detail', query: {back: '/hot'}});
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
.hot-main{
  padding:5px 5px;
}
.hot-item{
  height:140px;
  margin-bottom:20px;
}
.hot-item-title{
  font-size:15px;
  color:#17233d;
  height:40px;
  line-height: 20px;
  font-weight: bold;
}
.hot-item-content{
  font-size:12px;
  color:#515a6e;
  height:80px;
}
.hot-item-info{
  font-size:10px;
  color:#808695;
  height:20px;
  line-height:20px;
}
.hot-item-info span{
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
.title-img{
  height: 100px;
  width:95%;
  border:1px solid #dddddd;
  position: relative;
  top:15px;
}
</style>
