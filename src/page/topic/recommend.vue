<template>
  <div id="recommend">
    <div>
      <div style="height: 120px;background: #dddddd">
        <img src="./../../assets/banner-1.jpeg" alt="" class="img-class">
      </div>
      <div class="recommend-content-main">
        <div @click.stop="jumpDetail">
          <div class="recommend-title">
            xxxxxxxxxxxxxxxxxxxxx
          </div>
          <div class="recommend-content">
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
          </div>
        </div>

        <div class="recommend-footer">
          <span class="recommend-footer-item">rickys</span>
          <span class="recommend-footer-item">
            <span @click.stop="eye"><i class="fa fa-eye"></i></span>
            <span>12</span>
          </span>
          <span class="recommend-footer-item">
            <span @click.stop="heart"><i class="fa fa-heart-o"></i></span>
            <span>12</span>
          </span>
          <span class="recommend-footer-item">
            <span @click.stop="up"><i class="fa fa-thumbs-o-up"></i></span>
            <span>12</span>
          </span>
        </div>
      </div>

      <div class="recommend-content-main">
        <div @click.stop="jumpDetail">
          <div class="recommend-title">
            xxxxxxxxxxxxxxxxxxxxx
          </div>
          <div class="recommend-content">
            <div>
              <img src="./../../assets/1.jpeg" alt="" class="img-class">
            </div>
            <div>
              测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            </div>
          </div>
        </div>
        <div class="recommend-footer">
          <span class="recommend-footer-item">rickys</span>
          <span class="recommend-footer-item">
            <span @click.stop="eye"><i class="fa fa-eye"></i></span>
            <span>12</span>
          </span>
          <span class="recommend-footer-item">
            <span @click.stop="heart"><i class="fa fa-heart-o"></i></span>
            <span>12</span>
          </span>
          <span class="recommend-footer-item">
            <span @click.stop="up"><i class="fa fa-thumbs-o-up"></i></span>
            <span>12</span>
          </span>
        </div>
      </div>

      <div class="recommend-content-main">
        <div @click.stop="jumpDetail">
          <div class="recommend-title">
            xxxxxxxxxxxxxxxxxxxxx
          </div>
          <div class="recommend-content">
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
        </div>

        <div class="recommend-footer">
          <span class="recommend-footer-item">rickys</span>
          <span class="recommend-footer-item">
            <span @click.stop="eye"><i class="fa fa-eye"></i></span>
            <span>12</span>
          </span>
          <span class="recommend-footer-item">
            <span @click.stop="heart"><i class="fa fa-heart-o"></i></span>
            <span>12</span>
          </span>
          <span class="recommend-footer-item">
            <span @click.stop="up"><i class="fa fa-thumbs-o-up"></i></span>
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
    name: 'recommend',
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
      },
      jumpDetail(){
        this.$router.push(
          {
            path: '/detail',
            query: {
              back: '/recommend', blogId: '1'
            }
          }
        )
      },
      eye(){
        console.log("eye");
      },
      heart(){
        console.log("heart");
      },
      up(){
        console.log("up");
      }
    }
  }
</script>

<style scoped>
.recommend-content-main{
  background: #ffffff;
  margin-bottom: 5px;
}
.recommend-title{
  padding:10px 10px;
  border-bottom: 1px solid #dcdee2;
  word-break:break-all;
  word-wrap:break-word
}
.recommend-content{
  padding:5px 10px;
  border-bottom: 1px solid #dcdee2;
  word-break:break-all;
  word-wrap:break-word;
  font-size:12px;
}
.recommend-footer{
  padding:5px 10px;
  border-bottom: 1px solid #dcdee2;
  word-break:break-all;
  word-wrap:break-word;
  font-size:12px;
}
.recommend-footer-item{
  margin-right: 5px;
}
.img-class{
  width: 100%;
}
.video-class{
  width: 100%;
}
</style>
