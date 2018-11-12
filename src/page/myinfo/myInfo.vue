<template>
  <div id="myinfo" class="main-position">
    <div class="layout-header">
      <div style="position: relative;">
        <span>个人中心</span>
      </div>
    </div>
    <div>
      <div class="myinfo-info">
        <div class="myinfo-title">
          <div class="myinfo-header">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" class="img-class">
          </div>
          <div class="myinfo-item">
            <div class="myinfo-item-info">
              <div class="myinfo-item-title">ricky</div>
              <div>138xxxxxxxx</div>
            </div>
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="div-line"></div>
        <div class="myinfo-list">
          <flexbox>
            <flexbox-item>
              <div class="flex-demo text-list" @click="myContent">
                <span>文章</span>
                <span>12</span>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demo text-list">
                <span>关注</span>
                <span>12</span>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demo text-list">
                <span>粉丝</span>
                <span>12</span>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="div-line"></div>
        <div>
          <group style="margin-top:0;">
            <cell title="个人信息" is-link class="block-cell" @click.native="myinfoDetail">
              <img slot="icon" width="35" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </cell>
          </group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { XButton,Divider,Cell,Group,Flexbox, FlexboxItem } from 'vux'
  export default {
    components: {
      XButton,Divider,Cell,Group,Flexbox, FlexboxItem
    },
    name: 'myinfo',
    methods:{
      myinfoDetail(event,name){
        this.$router.push({path: '/myinfoDetail', query: {back: '/myinfo'}});
      },
      myContent(){
        this.$router.push({path: '/myinfoContent', query: {back: '/myinfo'}});
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
    height:40px;
    line-height:40px;
    background: #eeeeee;
    text-align: center;
  }
  .myinfo-info{
    height:150px;
  }
  .myinfo-title{
    position: relative;
    height:110px;
  }
  .myinfo-list{
    height:40px;
    line-height:40px;
  }
  .text-list{
    text-align: center;
    font-size: 13px;
  }
  .myinfo-header{
    position: relative;
    float: left;
    height:100px;
    width: 100px;
    top:5px;
  }
  .myinfo-item{
    float: left;
    font-size: 13px;
    position: relative;
  }
  .myinfo-item-info{
    position: relative;
    left:15px;
    top:20px;
    width: 100%;
  }
  .myinfo-item-title{
    font-size:15px;
  }
  .img-class{
    height:100%;
    width: 100%;
    position: absolute;
    left:5px;
    border:1px solid #dddddd;
  }
  .div-line{
    height:10px;
    background: #eeeeee;
  }
  .block-cell{
    font-size:14px;
    height:30px;
    line-height: 3px;
    margin-top:0;
  }
</style>
