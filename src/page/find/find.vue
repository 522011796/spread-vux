<template>
  <div id="find">
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="errTips" width="15em" style="font-size:10px;"></toast>
    <div class="find-header">
      发现
    </div>
    <div>
      <div class="find-scroll-img">
        <swiper auto loop :list="blogTopList" style="height: 100%"></swiper>
      </div>

      <div v-for="(item,index) in blogList" :key="index">
        <div v-if="item.arrayList.videoArr.length > 0">
          <div class="find-content-main" @click.stop="jumpDetail($event,item)">
            <div class="find-title">
              {{item.blogTitle}}
            </div>
            <div class="find-content">
              <div>
                <video :src="item.arrayList.videoArr[0].data" class="video-class"
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
              <div style="padding:0px 10px;">
                {{item.arrayList.textStr}}
              </div>
            </div>
            <div class="find-footer">
              <span class="find-footer-item">rickys</span>
              <span class="find-footer-item">
                <span @click.stop="eye">
                  <i class="fa fa-eye"></i>
                </span>
                <span>{{item.blogPv}}</span>
              </span>
              <!--<span class="find-footer-item">
                <span @click.stop="heart">
                  <i class="fa fa-heart-o"></i>
                  <i class="fa fa-heart"></i>
                </span>
                <span>12</span>
              </span>-->
              <span class="find-footer-item">
                <span @click.stop="up($event,item,index)">
                  <i v-if="item.blogLikestatus == 0" class="fa fa-thumbs-o-up"></i>
                  <i v-if="item.blogLikestatus == 1" class="fa fa-thumbs-up"></i>
                </span>
                <span>{{item.blogLike}}</span>
              </span>
            </div>
          </div>
        </div>

        <!--图片-->
        <div v-else-if="item.arrayList.imgArr.length > 0" class="find-content-main">
          <div :data-blogid="item.blogId" @click.stop="jumpDetail($event,item)">
            <div class="find-title">
              {{item.blogTitle}}
            </div>
            <div class="find-content">
              <div>
                <img :src="item.arrayList.imgArr[0].data" alt="" class="img-class">
              </div>
              <div style="padding:0px 10px;">
                {{item.arrayList.textStr}}
              </div>
            </div>
          </div>

          <div class="find-footer">
            <span class="find-footer-item">rickys</span>
            <span class="find-footer-item">
              <span @click.stop="eye"><i class="fa fa-eye"></i></span>
              <span>{{item.blogPv}}</span>
            </span>
            <!--<span class="find-footer-item">
              <span @click.stop="heart($event,item)">
                <i v-if="heartStatus == false" class="fa fa-heart-o-up"></i>
                <i v-if="heartStatus == true" class="fa fa-heart"></i>
              </span>
              <span>12</span>
            </span>-->
            <span class="find-footer-item">
              <span @click.stop="up($event,item,index)">
                <i v-if="item.blogLikestatus == 0" class="fa fa-thumbs-o-up"></i>
                <i v-if="item.blogLikestatus == 1" class="fa fa-thumbs-up"></i>
              </span>
              <span>{{item.blogLike}}</span>
            </span>
          </div>
        </div>

        <!--文本-->
        <div v-else-if="item.arrayList.textArr.length > 0">
          <div class="find-content-main" @click.stop="jumpDetail($event,item)">
            <div :data-blogid="item.blogId" @click.stop="jumpDetail($event,item)">
              <div class="find-title">
                {{item.blogTitle}}
              </div>
              <div class="find-content" style="padding:5px 10px;">
                {{item.arrayList.textStr}}
              </div>
            </div>

            <div class="find-footer">
              <span class="find-footer-item">rickys</span>
              <span class="find-footer-item">
                <span @click.stop="eye"><i class="fa fa-eye"></i></span>
                <span>{{item.blogPv}}</span>
              </span>
              <!--<span class="find-footer-item">
                <span @click.stop="heart"><i class="fa fa-heart-o"></i></span>
                <span>12</span>
              </span>-->
              <span class="find-footer-item">
                <span @click.stop="up($event,item,index)">
                  <i v-if="item.blogLikestatus == 0" class="fa fa-thumbs-o-up"></i>
                  <i v-if="item.blogLikestatus == 1" class="fa fa-thumbs-up"></i>
                </span>
                <span>{{item.blogLike}}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, XButton, XHeader,ViewBox,Toast,Swiper } from 'vux'
  const only2ClickList = null;

  export default {
    components: {
      XButton, Tabbar, TabbarItem,XHeader,ViewBox,Toast,Swiper
    },
    name: 'block',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        pageNum:10000,
        current:1,
        pageNow:1,
        totalCount:0,
        blogList:[],
        blogTopList:[],
        likeStatus:false,
        heartStatus:false,
        showPositionValue:false,
        errTips:''
      }
    },
    created(){
      this.init();
      this.getTop();
    },
    methods:{
      backUrl(){
        this.$router.push('/');
      },
      init(page){
        var _self = this;
        this.pageNow  = page ? page : this.pageNow;
        var params = {
          blogSlide:0,
          page:_self.pageNow,
          pageSize:this.pageNum,
          blogFind:1
          //blogSlide:0
        };
        this.$reqApi.get('/proxy/frontend/get-blog-list',this.$utils.clearData(params),res => {
          console.log(res.data.data);
          this.blogList = res.data.data.blogList;
          let blogListData = res.data.data.blogList;
          this.totalCount = parseInt(res.data.data.blogCount);
          for(var i=0;i<blogListData.length;i++){
            let jsonText = JSON.parse(blogListData[i].blogText);
            let textArr = [];
            let imgArr = [];
            let videoArr = [];
            let textStr = "";
            for(var j=0;j<jsonText.length;j++){
              if(jsonText[j].type == 'text'){
                textArr.push(
                  {
                    type:'text',
                    data:jsonText[j].data
                  }
                );
                textStr += jsonText[j].data;
              }
              if(jsonText[j].type == 'img'){
                imgArr.push(
                  {
                    type:'img',
                    data:jsonText[j].data
                  }
                );
              }
              if(jsonText[j].type == 'video'){
                videoArr.push(
                  {
                    type:'video',
                    data:jsonText[j].data
                  }
                );
              }
            }

            if(this.$utils.getLength(textStr) > 100){
              textStr = textStr.substr(0,100)+"..."
            }else{
              textStr = textStr.data
            }

            this.blogList[i]['blogLikeStatus'] = 0;

            this.blogList[i]['arrayList'] =  {
              textArr: textArr,
              imgArr: imgArr,
              videoArr: videoArr,
              textStr: textStr
            };
          }

          this.blogList = Object.assign([], this.blogList);
        });
      },
      getTop(page){
        var _self = this;
        this.pageNow  = page ? page : this.pageNow;
        var params = {
          blogSlide:1,
          page:_self.pageNow,
          pageSize:this.pageNum,
          blogFind:1
        };
        let imgList = [];
        this.$reqApi.get('/proxy/frontend/get-blog-list',this.$utils.clearData(params),res => {
          for(var i=0;i<res.data.data.blogList.length;i++){
            imgList.push({
              id:res.data.data.blogList[i].blogId,
              url: 'javascript:',
              img: res.data.data.blogList[i].blogSlideimgurl,
              title: ''
            });
          }
          this.blogTopList = imgList;
          console.log(this.blogTopList);
          this.only2ClickList(this.blogTopList);
        });
      },
      only2ClickList(){
        this.blogTopList.slice(0, 2).map(item => {
          item.url = '/detail?back=/&blogId=' + item.id;
          return item
        });
      },
      jumpDetail(event,item){
        var paramsData = {
          blogId:item.blogId
        };
        this.$reqApi.postQs("/proxy/frontend/set-blog-stat", paramsData ,res => {
          this.$router.push(
            {
              path: '/detail',
              query: {
                back: '/find', blogId: item.blogId
              }
            }
          )
        },res=>{
          //this.$Message.error(res.data.desc);
        },{"Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'});
      },
      eye(){
        console.log("eye");
      },
      heart(){
        console.log("heart");
      },
      up(event,params,index){
        var paramsData = {
          blogId:params.blogId,
          likeType: this.blogList[index].blogLikeStatus== 0 ? 1 : 0
        };

        if(!localStorage.getItem("userLogin") || localStorage.getItem("userLogin") == false){
          this.showPositionValue = true;
          this.errTips = "请完善个人信息";
        }else{
          this.$reqApi.postQs("/proxy/frontend/set-blog-like", paramsData ,res => {
            this.blogList[index].blogLikestatus = this.blogList[index].blogLikestatus == 0 ? 1 : 0;

            if(this.blogList[index].blogLikestatus == 0){
              this.blogList[index].blogLike--;
            }else{
              this.blogList[index].blogLike++;
            }
          },null,{"Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'});
        }
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
    padding:8px 10px;
    border-bottom: 1px solid #dcdee2;
    word-break:break-all;
    word-wrap:break-word;
    font-size: 13px;
    font-weight: bold;
  }
  .find-content{
    padding:0px 0px;
    border-bottom: 1px solid #dcdee2;
    word-break:break-all;
    word-wrap:break-word;
    font-size:12px;
  }
  .find-footer{
    padding:10px 10px;
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
    height: 190px;
  }
</style>
