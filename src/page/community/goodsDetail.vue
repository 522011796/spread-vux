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
        <swiper :list="goodsTopList" style="height: 100%;" dots-position="bottom"></swiper>
      </div>
      <div class="goods-title-show">
        <div>
          <span class="newPrice">¥{{goodsList.productPrice}}</span>
          <span class="oldPrice">¥{{goodsList.productOriginalprice}}</span>
        </div>
        <div>
          {{goodsDescription}}
        </div>
      </div>
      <div>
        <img v-for="(item,index) in goodsContent" :key="index" :src="item" alt="" class="img-class">
      </div>
    </div>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, XButton, XHeader,ViewBox,Swiper } from 'vux'
  export default {
    components: {
      XButton, Tabbar, TabbarItem,XHeader,ViewBox,Swiper
    },
    name: 'goods',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        back:'',
        goodsList:[],
        goodsTopList:[],
        pageNum:10000,
        current:1,
        pageNow:1,
        totalCount:0,
        productId:'',
        goodsDescription:'',
        goodsContent:[]
      }
    },
    created(){
      this.productId = this.$route.query.productId;
      this.init();
    },
    methods:{
      backUrl(){
        this.$router.push('/goods');
      },
      init(){
        var _self = this;
        let params = {
          productId: this.productId
        };
        let imgList = [];
        this.$reqApi.get('/proxy/frontend/get-product-info',this.$utils.clearData(params),res => {
          //console.log(res.data.data);
          let jsonContent = JSON.parse(res.data.data.productInfo.productContent);
          this.goodsList = res.data.data.productInfo;
          this.goodsDescription = jsonContent.goodsDescription;
          this.goodsContent = jsonContent.productContent;

          for(var i=0;i<jsonContent.goodsTopScrollImg.length;i++){
            imgList.push({
              id: i,
              url: 'javascript:',
              img: jsonContent.goodsTopScrollImg[i],
              title: ''
            });
          }
          this.goodsTopList = imgList;
          //console.log(jsonContent.productContent);
        });
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
