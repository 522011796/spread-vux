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
          {{blogTitle}}
        </div>
        <div>
          <div style="position: relative;margin-top:5px;">
            <span style="color:#2db7f5;margin-right:10px;">
              <img :src="userHeadimgurl" style="height:20px;width: 20px;border-radius: 20px;border:1px solid #dddddd;" alt="">
              <span style="position: relative;top:-8px;font-size:10px;">{{userNickname}}</span>
              <span>
                <x-button mini plain type="primary" class="btn-class" v-if="foucsStatus == false" @click.native="addUserStatus()">+关注</x-button>
                <x-button mini plain type="primary" class="btn-class" v-if="foucsStatus == true">已关注</x-button>
              </span>
            </span>
            <span style="color:#c5c8ce;font-size:10px;margin-right:10px;position: relative;top:-5px;">

            </span>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top:10px;font-size:12px;color:#515a6e;padding:0px 10px;">
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
        blockId:'',
        foucsStatus:false,
        blogAuthor:''
      }
    },
    name: 'detail',
    created(){
      this.back = this.$route.query.back;
      this.backOld = this.$route.query.backOld;
      this.blogId = this.$route.query.blogId;
      this.blockId = this.$route.query.blockId;
      this.init();
    },
    methods:{
      backUrl(){
        this.$router.push(
          {
            path: this.back,
            query: {
              back: '/block', blogId: this.blogId,blockId:this.blockId
            }
          }
        );
      },
      init(){
        var params = {
          blogId: this.blogId
        };
        this.$reqApi.get('/proxy/frontend/get-blog-info',this.$utils.clearData(params),res => {
          console.log(res.data.data.blogInfo);
          this.userNickname = res.data.data.blogInfo.userNickname;
          this.userHeadimgurl = res.data.data.blogInfo.userHeadimgurl;
          this.blogAddtime = res.data.data.blogInfo.blogAddtime;
          this.blogTitle = res.data.data.blogInfo.blogTitle;
          this.blogAuthor = res.data.data.blogInfo.blogAuthor;

          let c2 = res.data.data.blogInfo.blogContent.replace(/<img/g, '<img style="max-width:100%;"');
          this.blogContent = c2;

          this.getUserFoucsStatus(this.blogAuthor)
        });
      },
      getUserFoucsStatus(blogAuthor){
        var params = {
          focusReciver:blogAuthor,
        };
        this.$reqApi.get('/proxy/frontend/get-focus-status',this.$utils.clearData(params),res => {
          this.foucsStatus = true;
        });
      },
      addUserStatus(){
        var paramsData = {
          focusReciver:this.blogAuthor,
          focusType:1
        };
        this.$reqApi.postQs("/proxy/frontend/set-user-focus", paramsData ,res => {
          this.foucsStatus = true;
        },res=>{
          //this.$Message.error(res.data.desc);
        },{"Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'});
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
</style>
