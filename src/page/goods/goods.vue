<template>
  <div id="goods">
    <div class="goods-header">
      新品
    </div>
    <div>
      <div class="goods-scroll-img">

      </div>
      <div class="goods-content">
        <div class="goods-content-block">
          <div class="goods-item-title">
            <div>门锁</div>
            <div>
              查看更多
              <span><i class=" fa fa-arrow-circle-right"></i></span>
            </div>
          </div>
          <img src="./../../assets/banner-1.jpeg" alt="" class="img-class">
        </div>
        <div class="goods-content-block">
          <div class="goods-content-block-item-block">
            <div class="goods-content-block-item" @click="jumpDetail">
              <div style="height: 80px;width:80px;border: 1px solid">

              </div>
              <div style="font-size:12px;text-align: left">
                门锁1
              </div>
            </div>
            <div class="goods-content-block-item" @click="jumpDetail" style="margin-left: 10px;margin-right: 10px;">
              <div style="height: 80px;width:80px;border: 1px solid">

              </div>
              <div style="font-size:12px;text-align: left">
                门锁1
              </div>
            </div>
            <div class="goods-content-block-item" @click="jumpDetail">
              <div style="height: 80px;width:80px;border: 1px solid">

              </div>
              <div style="font-size:12px;text-align: left">
                门锁1
              </div>
            </div>
            <div style="clear: both;"></div>
          </div>
        </div>
      </div>
      <div class="goods-content">
        <div class="goods-content-block">
          <div class="goods-item-title">
            <div>摄像头</div>
            <div>
              查看更多
              <span><i class=" fa fa-arrow-circle-right"></i></span>
            </div>
          </div>
          <img src="./../../assets/banner-1.jpeg" alt="" class="img-class">
        </div>
        <div class="goods-content-block">
          <div class="goods-content-block-item-block">
            <div class="goods-content-block-item" @click="jumpDetail">
              <div style="height: 80px;width:80px;border: 1px solid">

              </div>
              <div style="font-size:12px;text-align: left">
                门锁1
              </div>
            </div>
            <div class="goods-content-block-item" @click="jumpDetail" style="margin-left: 10px;margin-right: 10px;">
              <div style="height: 80px;width:80px;border: 1px solid">

              </div>
              <div style="font-size:12px;text-align: left">
                门锁1
              </div>
            </div>
            <div class="goods-content-block-item" @click="jumpDetail">
              <div style="height: 80px;width:80px;border: 1px solid">

              </div>
              <div style="font-size:12px;text-align: left">
                门锁1
              </div>
            </div>
            <div style="clear: both;"></div>
          </div>
        </div>
      </div>
      <div class="goods-content">
        <div class="goods-content-block">
          <div class="goods-item-title">
            <div>智能配件</div>
            <div>
              查看更多
              <span><i class=" fa fa-arrow-circle-right"></i></span>
            </div>
          </div>
          <img src="./../../assets/banner-1.jpeg" alt="" class="img-class">
        </div>
        <div class="goods-content-block">
          <div class="goods-content-block-item-block">
            <div class="goods-content-block-item" @click="jumpDetail">
              <div style="height: 80px;width:80px;border: 1px solid">

              </div>
              <div style="font-size:12px;text-align: left">
                门锁1
              </div>
            </div>
            <div class="goods-content-block-item" @click="jumpDetail" style="margin-left: 10px;margin-right: 10px;">
              <div style="height: 80px;width:80px;border: 1px solid">

              </div>
              <div style="font-size:12px;text-align: left">
                门锁1
              </div>
            </div>
            <div class="goods-content-block-item" @click="jumpDetail">
              <div style="height: 80px;width:80px;border: 1px solid">

              </div>
              <div style="font-size:12px;text-align: left">
                门锁1
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
  import { Tabbar, TabbarItem, XButton, XHeader,ViewBox } from 'vux'
  export default {
    components: {
      XButton, Tabbar, TabbarItem,XHeader,ViewBox
    },
    name: 'block',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created(){

    },
    methods:{
      backUrl(){
        this.$router.push('/goods');
      },
      jumpDetail(){
        this.$router.push(
          {
            path: '/goodsDetail',
            query: {
              back: '/goods', blogId: '1'
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
