<template>
  <div id="home">
    <div class="home-header">
      <tab ref="top_menu" bar-active-color="#668599" :line-width="1">
        <tab-item active-class="active-6-1" @on-item-click="onItemClick" :selected="activeItem=='recommend' || activeItem=='recommendRoot'">
          <span class="tab-font">推荐</span>
        </tab-item>
        <tab-item  active-class="active-6-1" @on-item-click="onItemClick" :selected="activeItem=='block'">
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
    name: 'layoutTab',
    data () {
      return {
        activeItem:'recommend'
      }
    },
    created(){
      this.activeItem = this.$route.name;
    },
    methods:{
      onItemClick(index){
        if(index == "0"){
          this.$router.push("/recommend");
        }
        if(index == "1"){
          this.$router.push("/block");
        }
      },
      setActive(){//设置菜单的选中状态，路由变化和直接通过浏览器输入对应地址，也可以设置相应的选中状态
        let _self = this;
        this.activeItem = this.$route.name;
      }
    },
    watch: {
      '$route': function (to, from) {//监听路由变化,为了浏览器点击后退和前进也能切换菜单选中
        this.setActive();
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
