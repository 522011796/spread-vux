<template>
  <div id="home">
    <div class="layout-header">
      <div style="position: relative;">
        <div v-if="showSearch == true" style="position: relative;">
          <input type="text" v-model="searchBlogTitle" placeholder="请输入文章标题进行搜索" style="height:35px;width: 70%;border:1px solid #dcdee2;padding-left:15px;" maxlength="30"/>
          <span @click="searchTitle" style="position: absolute;right:15%;top:2px;"><i class="fa fa-search" style="font-size:15px;"></i></span>
          <span @click="closeMenu" style="position: absolute;right:3%;top:2px;">取消</span>
        </div>
        <div v-if="showSearch == false">
          <span class="header-bar-left" @click="topMenu"><i class="fa fa-search"></i></span>
          <span>
            <span>网月社区</span>
          </span>
            <span class="header-bar-right">
            <span @click="noteAdd" style="border:1px solid #19be6b;border-radius: 3px;color:#19be6b;font-size:10px;padding:1px 3px;">
              发帖
            </span>
            <i class="fa fa-user-circle-o" style="margin-left:10px;" @click="userInfo"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="main-position">
      <div>
        <swiper loop auto :list="clickList" :index="clickIndex" @on-index-change="imgChange"></swiper>
      </div>

      <div class="home-title-menu">
        <!--<flexbox>
          <flexbox-item class="home-title-menu-tips-left">
            <div class="home-title-menu-item home-title-menu-1">
              <div class="fa fa-map-o"></div>
              <div>
                官方
              </div>
            </div>
          </flexbox-item>
          <flexbox-item class="home-title-menu-tips-right">
            <div class="home-title-menu-item">
              <div class="fa fa-paper-plane-o"></div>
              <div>
                达人集
              </div>
            </div>
          </flexbox-item>
        </flexbox>-->

        <div>
          <div v-for="(item,index) in noteList" :key="index" @click="detailJump($event,item.blogId)">
            <div style="padding:10px 16px;">
              <div style="color:#515a6e;font-weight: bold">
                {{item.blogTitle}}
              </div>
              <div style="position: relative;margin-top:5px;">
                <span style="color:#2db7f5;margin-right:10px;">
                  <img :src="item.userHeadimgurl" style="height:20px;width: 20px;border-radius: 20px;border:1px solid #dddddd;" alt="">
                  <span style="position: relative;top:-5px;">{{item.userNickname}}</span>
                </span>
                  <span style="color:#c5c8ce;font-size:10px;margin-right:10px;position: relative;top:-5px;">
                  {{item.blogAddtime}}
                </span>
              </div>
            </div>
            <div class="div-line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swiper, Flexbox, FlexboxItem,XButton } from 'vux'

  const only2ClickList = null;

  export default {
    components: {
      Swiper,Flexbox,FlexboxItem,XButton
    },
    name: 'home',
    data () {
      return {
        showTopMenu: false,
        showSearch:false,
        searchBlogTitle:'',
        imgList:[{
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
        clickIndex:0,
        clickList:[],
        imgList:[],
        noteList:[]
      }
    },
    created(){
      this.initTop();
      this.initList();
    },
    methods:{
      initTop(){
        let params  = {
          page:1,
          pageSize:20,
          blogSlide:1
        };
        this.$reqApi.get("/proxy/frontend/get-blog-list", params ,res => {
          let imgList = [];
          for(var i=0;i<res.data.data.blogList.length;i++){
            imgList.push({
              id:res.data.data.blogList[i].blogId,
              url: 'javascript:',
              img: res.data.data.blogList[i].blogSlideimgurl,
              title: ''
            });
          }
          this.imgList = imgList;
          console.log(this.imgList);
          this.only2ClickList(this.imgList);
        });
      },
      initList(){
        let params  = {
          page:1,
          pageSize:1000,
          blogSlide:0,
          keyword:this.searchBlogTitle
        };
        this.$reqApi.get("/proxy/frontend/get-blog-list", params ,res => {
          //console.log(res.data.data.blogList);
          this.noteList = res.data.data.blogList;
        });
      },
      detailJump(event,id){
        this.$router.push({path: '/detail', query: {back: '/',blogId:id}});
      },
      noteAdd(){
        if(!localStorage.getItem("userLogin") || localStorage.getItem("userLogin") == false){
          this.$router.push({path: '/myinfo', query: {back: '/'}});
        }else{
          this.$router.push({path: '/note', query: {back: '/'}});
        }
      },
      topMenu(){
        this.showTopMenu = true;
        this.showSearch = true;
      },
      closeMenu(){
        this.showTopMenu = false;
        this.showSearch = false;
        this.searchBlogTitle = '';
        this.initList();
      },
      imgChange (index) {
        this.clickIndex = index;
      },
      only2ClickList(imgList){
        this.clickList = imgList.slice(0, 2).map(item => {
          item.url = '/detail?back=/&blogId=' + item.id;
          return item
        })
      },
      userInfo(){
        this.$router.push({path: '/myinfo', query: {back: '/'}});
      },
      searchTitle(){
        this.initList();
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
.home-title-menu{
  height:40px;
  background: #ffffff;
  font-size:13px;
}
.home-item-info span{
  margin-right:10px;
}
.img-class{
  height:100%;
  width: 100%;
}
.div-line{
  height:1px;
  background: #e8eaec;
  margin:2px 0px 2px 0px;
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
  text-align: center;
  color:#808695;
}
.header-bar-right{
  position: absolute;
  top:0px;
  right:20px;
}
.header-bar-left{
  position: absolute;
  top:0px;
  left:20px;
}
</style>
