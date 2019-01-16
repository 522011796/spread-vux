<template>
  <div id="find">
    <div class="find-header">
      发现
    </div>
    <div>
      <div class="find-scroll-img">

      </div>
      <div class="find-content-main">
        <div class="find-title">
          xxxxxxxxxxxxxxxxxxxxx
        </div>
        <div class="find-content">
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        </div>
        <div class="find-footer">
          <span class="find-footer-item">rickys</span>
          <span class="find-footer-item">
            <span><i class="fa fa-eye"></i></span>
            <span>12</span>
          </span>
          <span class="find-footer-item">
            <span><i class="fa fa-heart-o"></i></span>
            <span>12</span>
          </span>
          <span class="find-footer-item">
            <span><i class="fa fa-thumbs-o-up"></i></span>
            <span>12</span>
          </span>
          <span>
            <span class="find-footer-item" style="position: absolute;right: 0">
              2019-01-01 11:11:11
            </span>
          </span>
        </div>
      </div>

      <div class="find-content-main">
        <div class="find-title">
          xxxxxxxxxxxxxxxxxxxxx
        </div>
        <div class="find-content">
          <div>
            <img src="./../../assets/1.jpeg" alt="" class="img-class">
          </div>
          <div>
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
          </div>
        </div>
        <div class="find-footer">
          <span class="find-footer-item">rickys</span>
          <span class="find-footer-item">
            <span><i class="fa fa-eye"></i></span>
            <span>12</span>
          </span>
          <span class="find-footer-item">
            <span><i class="fa fa-heart-o"></i></span>
            <span>12</span>
          </span>
          <span class="find-footer-item">
            <span><i class="fa fa-thumbs-o-up"></i></span>
            <span>12</span>
          </span>
        </div>
      </div>

      <div class="find-content-main">
        <div class="find-title">
          xxxxxxxxxxxxxxxxxxxxx
        </div>
        <div class="find-content">
          <div>
            <video src="https://media.w3.org/2010/05/sintel/trailer.mp4" class="video-class"
                   controls
                   style="
                  object-fit: cover;"
                   webkit-playsinline="true"
                   x-webkit-airplay="true"
                   playsinline="true"
                   x5-video-player-type="h5"
                   x5-video-orientation="h5"
                   x5-video-player-fullscreen="true"
                   preload="auto"
                   poster="https://bbs.9451.com/proxy/img/video.jpg">
            </video>
          </div>
          <div>
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
          </div>
        </div>
        <div class="find-footer">
          <span class="find-footer-item">rickys</span>
          <span class="find-footer-item">
            <span><i class="fa fa-eye"></i></span>
            <span>12</span>
          </span>
          <span class="find-footer-item">
            <span><i class="fa fa-heart-o"></i></span>
            <span>12</span>
          </span>
          <span class="find-footer-item">
            <span><i class="fa fa-thumbs-o-up"></i></span>
            <span>12</span>
          </span>
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
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .find-header{
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
  .find-scroll-img{
    height: 120px;
    background: #f8f8f8;
  }
  .find-content-main{
    background: #ffffff;
    margin-bottom: 5px;
  }
  .find-title{
    padding:10px 10px;
    border-bottom: 1px solid #dcdee2;
    word-break:break-all;
    word-wrap:break-word
  }
  .find-content{
    padding:5px 10px;
    border-bottom: 1px solid #dcdee2;
    word-break:break-all;
    word-wrap:break-word;
    font-size:12px;
  }
  .find-footer{
    padding:5px 10px;
    border-bottom: 1px solid #dcdee2;
    word-break:break-all;
    word-wrap:break-word;
    font-size:12px;
    position: relative;
  }
  .find-footer-item{
    margin-right: 5px;
  }
  .img-class{
    width: 100%;
  }
  .video-class{
    width: 100%;
  }
</style>
