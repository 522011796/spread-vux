<template>
  <div id="block">
    <div class="block-main" v-for="(item,index) in blockList" :key="index" @click.stop="jumpDetail($event,item)">
      <div class="block-title">
        <div class="block-logo">
          <img :src="item.moduleLogo" alt="" class="img-class">
        </div>
        <div class="block-content">
          <div>{{item.moduleMaintitle}}</div>
          <div class="block-subtitle">{{item.moduleSubtitle}}</div>
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
        msg: 'Welcome to Your Vue.js App',
        pageNum:10000,
        current:1,
        pageNow:1,
        totalCount:0,
        blockList:[]
      }
    },
    created(){
      this.init();
    },
    methods:{
      backUrl(){
        this.$router.push('/');
      },
      init(page){
        var _self = this;
        this.pageNow  = page ? page : this.pageNow;
        var params = {
          moduleType:1,
          page:_self.pageNow,
          pageSize:this.pageNum,
          //blogSlide:0
        };
        this.$reqApi.get('/proxy/frontend/get-module-list',this.$utils.clearData(params),res => {
          //console.log(res.data.data.moduleList);
          //this.totalCount = parseInt(res.data.data.moduleList);
          this.blockList = res.data.data.moduleList;
        });
      },
      jumpDetail(event,item){
        //console.log(item);
        this.$router.push(
          {
            path: '/blockDetail',
            query: {
              back: '/block',
              blockId: item.moduleId,
              blockTitle: item.moduleMaintitle
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
  height: 30px;
  width: 30px;
  border: 1px solid #dddddd;
  float: left;
}
.block-content{
  margin-left: 40px;
  font-size: 13px;
  position: relative;
  color: #515a6e;
}
.block-content div{
  font-weight: normal;
  //color: #515a6e;
}
.block-subtitle{
  font-size: 10px;
  color: #808695;
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
