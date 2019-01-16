<template>
  <div id="like">
    <div class="layout-header">
      <div style="position: relative;">
        <span class="header-bar" @click="backUrl"><i class="fa fa-chevron-left"></i></span>
        <span>商品详细</span>
      </div>
    </div>
    <div class="goods-main">
      <div class="goods-img">

      </div>
      <div class="goods-title-show">
        <div>
          <span class="newPrice">¥1200</span>
          <span class="oldPrice">¥3600</span>
        </div>
        <div>
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </div>
      </div>
      <div>
        <img src="./../../assets/1.jpeg" alt="" class="img-class">
        <img src="./../../assets/1.jpeg" alt="" class="img-class">
        <img src="./../../assets/1.jpeg" alt="" class="img-class">
        <img src="./../../assets/1.jpeg" alt="" class="img-class">
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
    name: 'goods',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        back:''
      }
    },
    created(){

    },
    methods:{
      backUrl(){
        this.$router.push('/goods');
      },
    }
  }
</script>

<style scoped>
  .layout-header{
    position: fixed;
    width:100%;
    left:0;
    top:0;
    z-index:101;
    height:45px;
    line-height:45px;
    font-size:13px;
    background: #ffffff;
    color:#808695;
    text-align: center;
    border-bottom:1px solid #dddddd;
  }
.goods-main{
  background: #ffffff;
  margin-bottom: 5px;
}
.goods-img{
  height: 150px;
  background: #dddddd;
}
.img-class{
  width: 100%;;
}
.header-bar{
  position: absolute;
  left:5px;
  width: 30px;
  text-align: center;
}
.goods-title-show{
  background: #ffffff;
  padding: 5px 10px;
  font-size: 12px;
  word-break:break-all;
  word-wrap:break-word
}
.newPrice{
  font-size:14px;
}
.oldPrice{
  font-size:12px;
  color:#c5c8ce;
  margin-left:5px;
  text-decoration:line-through
}
</style>
