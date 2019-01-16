<template>
  <div id="detail" class="main-position">
    <div class="layout-header">
      <div style="position: relative;">
        <span class="header-bar" @click="backUrl"><i class="fa fa-chevron-left"></i></span>
        <span>xxxx专区</span>
      </div>
    </div>
    <div class="detail-main" @click.stop="jumpDetailShow">
      <div class="detail-title">
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      </div>
      <div class="detail-footer">
        <span class="detail-footer-item">rickys</span>
        <span class="detail-footer-item">
            <span @click.stop="eye"><i class="fa fa-eye"></i></span>
            <span>12</span>
          </span>
        <span class="detail-footer-item">
            <span @click.stop="heart"><i class="fa fa-heart-o"></i></span>
            <span>12</span>
          </span>
        <span class="detail-footer-item">
            <span @click.stop="up"><i class="fa fa-thumbs-o-up"></i></span>
            <span>12</span>
          </span>
      </div>
    </div>

    <div class="detail-main" @click.stop="jumpDetailShow">
      <div class="detail-title">
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      </div>
      <div class="detail-footer">
        <span class="detail-footer-item">rickys</span>
        <span class="detail-footer-item">
            <span @click.stop="eye"><i class="fa fa-eye"></i></span>
            <span>12</span>
          </span>
        <span class="detail-footer-item">
            <span @click.stop="heart"><i class="fa fa-heart-o"></i></span>
            <span>12</span>
          </span>
        <span class="detail-footer-item">
            <span @click.stop="up"><i class="fa fa-thumbs-o-up"></i></span>
            <span>12</span>
          </span>
      </div>
    </div>

    <div class="detail-main" @click.stop="jumpDetailShow">
      <div class="detail-title">
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      </div>
      <div class="detail-footer">
        <span class="detail-footer-item">rickys</span>
        <span class="detail-footer-item">
            <span @click.stop="eye"><i class="fa fa-eye"></i></span>
            <span>12</span>
          </span>
        <span class="detail-footer-item">
            <span @click.stop="heart"><i class="fa fa-heart-o"></i></span>
            <span>12</span>
          </span>
        <span class="detail-footer-item">
            <span @click.stop="up"><i class="fa fa-thumbs-o-up"></i></span>
            <span>12</span>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { XButton,Divider,Cell,Group } from 'vux'
  import 'video.js/dist/video-js.css'
  import { videoPlayer } from 'vue-video-player'
  export default {
    components: {
      XButton,Divider,Cell,Group,videoPlayer
    },
    data () {
      return {
        back:'',
        blogId:'',
        blogTitle:'',
        userHeadimgurl:'',
        userNickname:'',
        blogContent:'',
        blogAddtime:'',
      }
    },
    name: 'detail',
    created(){
      this.back = this.$route.query.back;
      this.blogId = this.$route.query.blogId;
      this.init();
    },
    methods:{
      backUrl(){
        this.$router.push(
          {
            path: this.back,
          }
        );
      },
      init(){

      },
      jumpDetailShow(){
        this.$router.push(
          {
            path: '/detail',
            query: {
              back:"/blockDetail", backOld:"/block" , blogId: '1'
            }
          }
        )
      }
    },
    computed: {
      play() {
        //return this.$refs.videoPlayer.player
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
  height:45px;
  line-height:45px;
  font-size:13px;
  background: #ffffff;
  border-bottom:1px solid #dddddd;
  color:#808695;
  text-align: center;
}
.header-bar{
  position: absolute;
  left:5px;
  width: 30px;
  text-align: center;
}
.img-class{
  height:200px;
  width: 100%;
  margin:10px 0px;
}
.btn-class{
  font-size:10px !important;
  height: 20px;
  line-height: 20px;
  padding: 0px 5px;
  position: relative;
  top: -5px;
}
.detail-footer{
  padding:5px 0px;
  word-break:break-all;
  word-wrap:break-word;
  font-size:12px;
}
.detail-footer-item{
  margin-right: 5px;
}
.detail-main{
  padding:5px 16px;
  background: #ffffff;
  margin-bottom:10px;
}
</style>
