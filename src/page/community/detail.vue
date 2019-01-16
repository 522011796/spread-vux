<template>
  <div id="detail" class="main-position">
    <div class="layout-header">
      <div style="position: relative;">
        <span class="header-bar" @click="backUrl"><i class="fa fa-chevron-left"></i></span>
        <span>网月社区</span>
      </div>
    </div>
    <div style="padding:5px 16px;background: #ffffff">
      <div>
        <div>
          xxxxxxxxxxxxxx
        </div>
        <div>
          <div style="position: relative;margin-top:5px;">
            <span style="color:#2db7f5;margin-right:10px;">
              <img src="" style="height:20px;width: 20px;border-radius: 20px;border:1px solid #dddddd;" alt="">
              <span style="position: relative;top:-8px;font-size:10px;">ricky</span>
              <span>
                <x-button mini plain type="primary" class="btn-class">+关注</x-button>
              </span>
            </span>
            <span style="color:#c5c8ce;font-size:10px;margin-right:10px;position: relative;top:-5px;">

            </span>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top:10px;font-size:12px;color:#515a6e;">
      <div v-html="blogContent">

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
        backOld:'',
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
      this.backOld = this.$route.query.backOld;
      this.blogId = this.$route.query.blogId;
      this.init();
    },
    methods:{
      backUrl(){
        this.$router.push(
          {
            path: this.back,
            query: {
              back: '/block', blogId: '1'
            }
          }
        );
      },
      init(){

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
</style>
