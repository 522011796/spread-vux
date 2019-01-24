<template>
  <div id="goods">
    <div class="goods-header">
      <span>新品</span>
    </div>
    <div>
      <div class="goods-scroll-img">
        <swiper :list="blogTopList" style="height: 100%;" dots-position="bottom"></swiper>
      </div>

      <div class="goods-content" v-for="(item,index) in productList" v-if="productList[index].productList.length>0" :key="index">
        <div class="goods-content-block">
          <div class="goods-item-title">
            <div>{{item.blockName}}</div>
            <div>
              查看更多
              <span><i class=" fa fa-arrow-circle-right"></i></span>
            </div>
          </div>
          <img :src="item.blockImg" alt="" class="img-class">
        </div>
        <div class="goods-content-block">
          <div class="goods-content-block-item-block">
            <div class="goods-content-block-item" v-for="(proItem,ProIndex) in item.productList" :key="ProIndex" @click="jumpDetail($event,proItem)" :style="ProIndex==1 ? 'margin-left: 20px;margin-right: 20px' : ''">
              <div style="height: 75px;width:75px;border: 1px solid #dddddd">
                <img :src="proItem.productLogo" alt="" style="height: 100%;width: 100%">
              </div>
              <div style="font-size:12px;text-align: left">
                {{proItem.productName}}
              </div>
            </div>
            <div style="clear: both;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, XButton, XHeader,ViewBox,Swiper } from 'vux'
  const only2ClickList = null;

  export default {
    components: {
      XButton, Tabbar, TabbarItem,XHeader,ViewBox,Swiper
    },
    name: 'block',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        pageNum:10000,
        current:1,
        pageNow:1,
        totalCount:0,
        moduleId:'',
        productList:[],
        blogTopList:[{
          id:0,
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
          title: '送你一朵fua'
        }, {
          id:1,
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
          title: '送你一辆车'
        }, {
          id:2,
          url: 'javascript:',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg', // 404
          title: '送你一次旅行'
        }],
      }
    },
    created(){
      this.init();
    },
    methods:{
      backUrl(){
        this.$router.push('/goods');
      },
      init(page){
        var _self = this;
        this.pageNow  = page ? page : this.pageNow;
        let params = {
          moduleId:2,
          page:_self.pageNow,
          pageSize:this.pageNum,
          //blogSlide:0
        };
        let produceListArr = [];
        this.$reqApi.get('/proxy/frontend/get-module-list',this.$utils.clearData(params),res => {
          //console.log(res.data.data.moduleList);
          let moduleList = res.data.data.moduleList;
          for(var i = 0;i < moduleList.length;i++){
            let index = i;
            produceListArr.push({
              blockName:moduleList[i].moduleMaintitle,
              blockid:moduleList[i].moduleId,
              blockImg:moduleList[i].moduleLogo,
              productList:[]
            });
            let paramsProu = {
              moduleId: moduleList[i].moduleId,
              page:_self.pageNow,
              pageSize:this.pageNum,
              //blogSlide:0
            };
            _self.$reqApi.get('/proxy/frontend/get-product-list',this.$utils.clearData(paramsProu),res => {
              let productList = res.data.data.productList;
              produceListArr[index].productList = productList;
            });
          }
          console.log(produceListArr);
          this.productList = produceListArr;
        });
      },
      jumpDetail(event,item){
        this.$router.push(
          {
            path: '/goodsDetail',
            query: {
              back: '/goods', productId: item.productId
            }
          }
        )
      }
    }
  }
</script>

<style scoped>
  .goods-header{
    position: fixed;
    z-index: 9999;
    height: 45px;
    line-height: 45px;
    width: 100%;
    top: 0px;
    text-align: center;
    background: #ffffff;
    border-bottom: 1px solid #e8eaec;
    font-size:12px;
  }
  .goods-scroll-img{
    height: 120px;
    background: #fefefe;
  }
  .goods-content{
    background: #ffffff;
    position: relative;
  }
  .goods-content-block{
    height:80px;
    border: 1px solid #dddddd;
  }
  .img-class{
    height:100%;
    width: 100%;
  }
  .goods-content-block-item{
    display: inline-block;
  }
  .goods-content-block-item-block{
    position: absolute;
    left:0px;
    right: 0px;
    bottom: 10px;
    margin:auto;
    text-align: center;
    vertical-align:middle;
  }
  .goods-item-title{
    text-align: center;
    position: absolute;
    left:0px;
    right: 0px;
    top: 8px;
    margin:auto;
    text-align: center;
    vertical-align:middle;
    font-size: 10px;
  }
</style>
