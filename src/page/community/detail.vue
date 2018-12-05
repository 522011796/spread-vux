<template>
  <div id="detail" class="main-position">
    <div class="layout-header">
      <div style="position: relative;">
        <span class="header-bar" @click="backUrl"><i class="fa fa-chevron-left"></i></span>
        <span>网月社区</span>
      </div>
    </div>
    <div style="padding:10px 16px;">
      <div>
        <div>
          网月教程网月教程网月教程网月教程网月教程网月教程网月教程网月教程
        </div>
        <div>
          <div style="position: relative;margin-top:5px;">
            <span style="color:#2db7f5;margin-right:10px;">
              <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg" style="height:20px;width: 20px;border-radius: 20px;border:1px solid #dddddd;" alt="">
              <span style="position: relative;top:-5px;font-size:10px;">ricky</span>
            </span>
            <span style="color:#c5c8ce;font-size:10px;margin-right:10px;position: relative;top:-5px;">
              2018-11-11 12:12:12
            </span>
          </div>
        </div>
      </div>
      <div style="margin-top:10px;font-size:12px;color:#515a6e;">
        网月教程网月教程网月教程网月教程网月教程网月教程网月教程网月教程
        <video-player  class="video-player vjs-custom-skin"
                       ref="videoPlayer"
                       :playsinline="true"
                       :options="playerOptions"
                       @play="onPlayerPlay($event)"
                       @pause="onPlayerPause($event)"
        >
        </video-player>
        网月教程网月教程网月教程网月教程网月教程网月教程网月教程网月教程
        <img src="./../../assets/1.jpeg" alt="" class="img-class" />
        网月教程网月教程网月教程网月教程网月教程网月教程网月教程网月教程
        <img src="./../../assets/1.jpeg" alt="" class="img-class" />
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
        playerOptions: {
//        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "video/mp4",
            src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //你的m3u8地址（必填）
          }],
          poster: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg", //你的封面地址
          notSupportedMessage: '此视频暂无法播放，请稍后再试',
        }
      }
    },
    name: 'detail',
    created(){
      this.back = this.$route.query.back;
    },
    methods:{
      backUrl(){
        this.$router.push(this.back);
      },
      onPlayerPlay(player) {
        console.log(player);
        this.videoDialogVisible = true
      },
      onPlayerPause(player){
        console.log("pause");
      },
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
  height:35px;
  line-height:35px;
  font-size:13px;
  background: #ffffff;
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
</style>
