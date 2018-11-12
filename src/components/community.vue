<template>
  <div>
    <tab class="layout-header" style="position: fixed">
      <tab-item selected @click.native="onItemClick($event,'hot')" name="hot">热门</tab-item>
      <tab-item @click.native="onItemClick($event,'block')" name="block">版块</tab-item>
    </tab>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  export default {
    components: {
      Tab, TabItem
    },
    name: 'layout',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        bodyPaddingTop:'',
        bodyPaddingBottom:''
      }
    },
    methods:{
      onItemClick(event,type) {
        console.log(type);
        if (type == 'hot') {
          this.$router.push("/hot");
        } else if (type == 'block') {
          this.$router.push("/block");
        }
      }
    },
    mounted: function () {
      //this.bodyPaddingTop = this.$refs.header.clientHeight  + 'px';
      //this.bodyPaddingBottom = this.$refs.bar.clientHeight  + 'px';
    },
  }
</script>

<style lang="less" scoped>
.layout-header{
  position: fixed;
  width:100%;
  left:0;
  top:0;
  z-index:100;
  padding:0px;
}
.vux-tab-wrap {
  position: relative;
  padding-top: 0px;
}
</style>
