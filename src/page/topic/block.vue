<template>
  <div id="block">
    <div class="block-main" @click.stop="jumpDetail">
      <div class="block-title">
        <div class="block-logo">
          <img src="./../../assets/1.jpeg" alt="" class="img-class">
        </div>
        <div class="block-content">
          <div>xxxxxxxxxxxxxxxxxxxx</div>
          <div class="block-subtitle">xxxxxxxxxxxxxxxx</div>
          <span>
            <i class="fa fa-angle-right block-content-item-icon"></i>
          </span>
        </div>
        <div style="clear: both;"></div>
      </div>
    </div>
    <div class="block-main" @click.stop="jumpDetail">
      <div class="block-title">
        <div class="block-logo">
          <img src="./../../assets/1.jpeg" alt="" class="img-class">
        </div>
        <div class="block-content">
          <div>xxxxxxxxxxxxxxxxxxxx</div>
          <div class="block-subtitle">xxxxxxxxxxxxxxxx</div>
          <span>
            <i class="fa fa-angle-right block-content-item-icon"></i>
          </span>
        </div>
        <div style="clear: both;"></div>
      </div>
    </div>
    <div class="block-main" @click.stop="jumpDetail">
      <div class="block-title">
        <div class="block-logo">
          <img src="./../../assets/1.jpeg" alt="" class="img-class">
        </div>
        <div class="block-content">
          <div>xxxxxxxxxxxxxxxxxxxx</div>
          <div class="block-subtitle">xxxxxxxxxxxxxxxx</div>
          <span>
            <i class="fa fa-angle-right block-content-item-icon"></i>
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
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created(){

    },
    methods:{
      backUrl(){
        this.$router.push('/');
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
.block-main{
  background: #ffffff;
  margin-bottom: 5px;
}
.block-title{
  height: 35px;
  padding: 5px 10px;
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
</style>
