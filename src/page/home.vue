<template>
  <div id="home">
    <div class="layout-header">
      <div style="position: relative;">
        <span class="header-bar-left" @click="topMenu"><i class="fa fa-search"></i></span>
        <span>网月社区</span>
        <span class="header-bar-right">
          <span @click="noteAdd" style="border:1px solid #19be6b;border-radius: 3px;color:#19be6b;font-size:10px;padding:1px 3px;">
            发帖
          </span>
          <i class="fa fa-user-circle-o" style="margin-left:10px;" @click="userInfo"></i>
        </span>
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
          <div v-for="(n,index) in 10" :key="index" @click="detailJump">
            <div style="padding:10px 16px;">
              <div style="color:#515a6e;">
                网月教程网月教程网月教程网月教程网月教程网月教程网月教程网月教程
              </div>
              <div style="position: relative;margin-top:5px;">
                <span style="color:#2db7f5;margin-right:10px;">
                  <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg" style="height:20px;width: 20px;border-radius: 20px;border:1px solid #dddddd;" alt="">
                  <span style="position: relative;top:-5px;">ricky</span>
                </span>
                  <span style="color:#c5c8ce;font-size:10px;margin-right:10px;position: relative;top:-5px;">
                  2018-11-11 12:12:12
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
  import { Swiper, Flexbox, FlexboxItem } from 'vux'

  const only2ClickList = null;

  export default {
    components: {
      Swiper,Flexbox,FlexboxItem
    },
    name: 'home',
    data () {
      return {
        showTopMenu: false,
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
          title: '送你一次旅行',
          fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
        }],
        clickIndex:0,
        clickList:only2ClickList
      }
    },
    created(){
      this.only2ClickList();
    },
    methods:{
      detailJump(){
        this.$router.push({path: '/detail', query: {back: '/'}});
      },
      noteAdd(){
        this.$router.push({path: '/note', query: {back: '/'}});
      },
      topMenu(){
        this.showTopMenu = true;
      },
      closeMenu(){
        this.showTopMenu = false;
      },
      imgChange (index) {
        this.clickIndex = index;
      },
      only2ClickList(){
        this.clickList = this.imgList.slice(0, 2).map(item => {
          item.url = '/?' + item.id
          return item
        })
      },
      userInfo(){
        this.$router.push({path: '/myinfo', query: {back: '/'}});
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
