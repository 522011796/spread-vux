<template>
  <div id="detail" class="main-position">
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="errTips" width="15em" style="font-size:10px;"></toast>
    <div class="layout-header">
      <div style="position: relative;">
        <span class="header-bar" @click="backUrl"><i class="fa fa-chevron-left"></i></span>
        <span>{{blockTitle}}</span>
        <span class="header-write-bar" @click="jumpNote"><i class="fa fa-edit" style="font-size:20px;"></i></span>
      </div>
    </div>
    <div class="detail-main" v-for="(item,index) in blockList" @click.stop="jumpDetailShow($event,item)">
      <div class="detail-title">
        {{item.blogTitle}}
      </div>
      <div class="detail-footer">
        <span class="detail-footer-item">rickys</span>
          <span class="detail-footer-item">
            <span @click.stop="eye"><i class="fa fa-eye"></i></span>
            <span>{{item.blogPv}}</span>
          </span>
          <!--<span class="detail-footer-item">
            <span @click.stop="heart"><i class="fa fa-heart-o"></i></span>
            <span>12</span>
          </span>-->
          <span class="detail-footer-item">
            <span @click.stop="up($event,item,index)">
              <i v-if="item.blogLikestatus == 0" class="fa fa-thumbs-o-up"></i>
              <i v-if="item.blogLikestatus == 1" class="fa fa-thumbs-up"></i>
            </span>
            <span>{{item.blogLike}}</span>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { XButton,Divider,Cell,Group,Toast } from 'vux'
  import 'video.js/dist/video-js.css'
  import { videoPlayer } from 'vue-video-player'
  export default {
    components: {
      XButton,Divider,Cell,Group,videoPlayer,Toast
    },
    data () {
      return {
        back:'',
        blockId:'',
        blockTitle:'',
        pageNum:10000,
        current:1,
        pageNow:1,
        totalCount:0,
        blockList:[],
        errTips:'',
        showPositionValue:false,
      }
    },
    name: 'detail',
    created(){
      this.back = this.$route.query.back;
      this.blockId = this.$route.query.blockId;
      this.blockTitle = this.$route.query.blockTitle;
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
      init(page){
        var _self = this;
        this.pageNow  = page ? page : this.pageNow;
        var params = {
          blogModule:this.blockId,
          page:_self.pageNow,
          pageSize:this.pageNum,
          //blogSlide:0
        };
        this.$reqApi.get('/proxy/frontend/get-blog-list',this.$utils.clearData(params),res => {
          this.blockList = res.data.data.blogList;
        });
      },
      jumpDetailShow(event,item){
        var paramsData = {
          blogId:item.blogId
        };
        this.$reqApi.postQs("/proxy/frontend/set-blog-stat", paramsData ,res => {
          this.$router.push(
            {
              path: '/detail',
              query: {
                back:"/blockDetail", backOld:"/block" , blogId: item.blogId, blockId:this.blockId
              }
            }
          )
        },res=>{
          //this.$Message.error(res.data.desc);
        },{"Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'});
      },
      up(event,params,index){
        var paramsData = {
          blogId:params.blogId,
          likeType: this.blockList[index].blogLikeStatus== 0 ? 1 : 0
        };

        if(!localStorage.getItem("userLogin") || localStorage.getItem("userLogin") == false){
          this.showPositionValue = true;
          this.errTips = "请完善个人信息";
        }else{
          this.$reqApi.postQs("/proxy/frontend/set-blog-like", paramsData ,res => {
            this.blockList[index].blogLikestatus = this.blockList[index].blogLikestatus == 0 ? 1 : 0;

            if(this.blockList[index].blogLikestatus == 0){
              this.blockList[index].blogLike--;
            }else{
              this.blockList[index].blogLike++;
            }
          },null,{"Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'});
        }
      },
      jumpNote(){
        this.$router.push(
          {
            path: '/note',
            query:{
              blockId: this.blockId
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
.header-write-bar{
  position: absolute;
  right:5px;
  top:5px;
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
