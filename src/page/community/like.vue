<template>
  <div id="like">
    <div class="layout-header">
      <div style="position: relative;">
        <span class="header-bar" @click="backUrl"><i class="fa fa-chevron-left"></i></span>
        <span>喜欢</span>
      </div>
    </div>
    <div class="block-main" @click.stop="jumpDetail">
      <div class="block-title">
        <div class="block-logo">
          <img src="./../../assets/1.jpeg" alt="" class="img-class">
        </div>
        <div class="block-content">
          <div>xxxxxxxxxxxxxxxxxxxx</div>
          <div class="block-subtitle">喜欢的文章名称</div>
          <span>
            <x-button mini plain type="primary" class="btn-class">+关注</x-button>
          </span>
        </div>
        <div style="clear: both;"></div>
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
    name: 'block',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        back:''
      }
    },
    created(){

    },
    methods:{
      backUrl(){
        this.$router.push('/myinfo');
      },
      jumpDetail(){
        this.$router.push(
          {
            path: '/blockDetail',
            query: {
              back: '/block', blogId: '1'
            }
          }
        )
      }
    }
  }
</script>

<style scoped>
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
    color:#808695;
    text-align: center;
    border-bottom:1px solid #dddddd;
  }
.block-main{
  background: #ffffff;
  margin-bottom: 5px;
}
.block-title{
  height: 35px;
  padding: 5px 10px 5px 10px;
}
.block-logo{
  height: 35px;
  width: 35px;
  border: 1px solid #dddddd;
  float: left;
}
.block-content{
  margin-left: 40px;
  position: relative;
}
.block-content div{
  font-weight: normal;
  color: #515a6e;
}
.block-subtitle{
  font-size: 12px;
}
.block-content-item-icon{
  position: absolute;
  right: 5px;
  top: 10px;
}
.img-class{
  height: 100%;
  width: 100%;
}
.btn-class{
  font-size:10px !important;
  height: 20px;
  line-height: 20px;
  padding: 0px 5px;
  position: absolute;
  right: 5px;
  top: 10px;
}
.header-bar{
  position: absolute;
  left:5px;
  width: 30px;
  text-align: center;
}
.block-subtitle{
  font-size: 12px;
}
</style>
