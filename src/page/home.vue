<template>
  <div id="home">
    <div class="home-header">
      <tab bar-active-color="#668599" :line-width="1">
        <tab-item active-class="active-6-1" @on-item-click="onItemClick" selected>
          <span class="tab-font">推荐</span>
        </tab-item>
        <tab-item  active-class="active-6-1" @on-item-click="onItemClick">
          <span class="tab-font">板块</span>
        </tab-item>
      </tab>
    </div>

    <div class="home-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { Swiper, Flexbox, FlexboxItem,XButton, Tab, TabItem } from 'vux'

  const only2ClickList = null;

  export default {
    components: {
      Swiper,Flexbox,FlexboxItem,XButton, Tab, TabItem
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
          pageSize:10000,
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
          console.log(res.data.data.blogList);
          this.noteList = res.data.data.blogList;
        });
      },
      onItemClick(index){
        if(index == "0"){
          this.$router.push("/home");
        }
        if(index == "1"){
          this.$router.push("/home");
        }
      }
    }
  }
</script>

<style scoped>
.home-header{
  position: fixed;
  z-index: 9999;
  height: 45px;
  width: 100%;
  top: 0px;
}
.home-main{
  position: relative;
}
.tab-font{
  font-size:12px;
}
.active-6-1 {
  color: #434343 !important;
  border-color: #434343 !important;
  font-weight: bold;
}
</style>
