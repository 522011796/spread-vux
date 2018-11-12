<template>
  <div id="detail" class="main-position">
    <div class="layout-header">
      <div style="position: relative;">
        <span class="header-bar" @click="backUrl"><i class="fa fa-chevron-left"></i></span>
      </div>
    </div>
    <div>
      <div>
        <div class="detail-user-main">
          <div class="detail-user-left">
            <img src="" alt="" class="img-class">
          </div>
          <div class="detail-user-right">
            <div>
              <span>ricky</span>
              <span><i class="fa fa-apple detail-fa-levl"></i></span>
              <span class="detail-user-floor">楼主</span>
              <span class="detail-user-save">+关注楼主</span>
            </div>
            <div class="detail-user-time">2018-11-11 11:11:11</div>

            <div style="position: absolute;right:10px;top:15px;font-size:10px;border:1px solid #dcdee2;border-radius: 2px;padding:1px;">
              <span>智能门锁</span>
            </div>
          </div>
          <div style="clear: both"></div>
        </div>
      </div>
      <div class="detail-content-main">
        <div class="detail-content-title">
          第二代智能门锁发布啦...第二代智能门锁发布啦...第二代智能门锁发布啦...第二代智能门锁发布啦...第二代智能门锁发布啦...
        </div>
        <div class="detail-content-detail">
          <div>
            <div>
              第二代智能门锁发布啦...第二代智能门锁发布啦第二代智能门锁发布啦...第二代智能门锁发布啦第二代智能门锁发布啦...第二代智能门锁发布啦
              第二代智能门锁发布啦...第二代智能门锁发布啦第二代智能门锁发布啦...第二代智能门锁发布啦第二代智能门锁发布啦...第二代智能门锁发布啦
            </div>
            <img src="./../../assets/1.jpeg" alt="" class="img-class">
            <div>
              第二代智能门锁发布啦...第二代智能门锁发布啦第二代智能门锁发布啦...第二代智能门锁发布啦第二代智能门锁发布啦...第二代智能门锁发布啦
              第二代智能门锁发布啦...第二代智能门锁发布啦第二代智能门锁发布啦...第二代智能门锁发布啦第二代智能门锁发布啦...第二代智能门锁发布啦
            </div>
            <img src="./../../assets/1.jpeg" alt="" class="img-class">
            <div>
              第二代智能门锁发布啦...第二代智能门锁发布啦第二代智能门锁发布啦...第二代智能门锁发布啦第二代智能门锁发布啦...第二代智能门锁发布啦
              第二代智能门锁发布啦...第二代智能门锁发布啦第二代智能门锁发布啦...第二代智能门锁发布啦第二代智能门锁发布啦...第二代智能门锁发布啦
            </div>
            <img src="./../../assets/1.jpeg" alt="" class="img-class">
          </div>
        </div>
      </div>
      <div class="ditail-fans-main">
        <div class="detail-fans-heart-num">
          <div><i class="fa fa-heart-o"></i></div>
          <div class="detail-fans-user">12赞过</div>
        </div>
        <div class="detail-fans-list">
          <div>
            <span class="detail-fans-user-total">50人评价</span>
          </div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" class="detail-fans-list-img">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" class="detail-fans-list-img">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" class="detail-fans-list-img">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" class="detail-fans-list-img">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" class="detail-fans-list-img">
          <div class="detail-fans-list-img detail-fans-list-more"><i class="fa fa-ellipsis-h"></i></div>
        </div>
      </div>
      <div class="div-line"></div>
      <div style="padding:10px;">
        <div v-for="(item,index) in 5" :key="index">
          <div class="detail-content-item-left">
            <img src="" alt="" class="img-class">
          </div>
          <div class="detail-content-item-right">
            <div>
              <div style="position: relative">
                <span>rickyTest</span>
                <span><i class="fa fa-apple" style="color:#808695;"></i></span>
                <span class="detail-floor-num">
                  <span v-if="index < 3">
                    <label v-if="index==0">沙发</label>
                    <label v-if="index==1">板凳</label>
                    <label v-if="index==2">地板</label>
                  </span>
                  <label v-else>{{index+1}}楼</label>
                </span>
              </div>
              <div>
                <span class="detail-content-time">2018-11-11 11:11:11</span>
              </div>
            </div>
            <div>
              测试回复...测试回复...测试回复...测试回复...测试回复...测试回复...测试回复...测试回复...测试回复...测试回复...
            </div>
          </div>
          <div style="clear: both"></div>
          <div class="div-line-list"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { XButton,Divider,Cell,Group } from 'vux'
  export default {
    components: {
      XButton,Divider,Cell,Group
    },
    data () {
      return {
        back:''
      }
    },
    name: 'detail',
    created(){
      console.log(this.$route.query.back);
      this.back = this.$route.query.back;
    },
    methods:{
      backUrl(){
        this.$router.push(this.back);
      }
    }
  }
</script>

<style lang="less" scoped>
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
  background: #ffffff;
  text-align: left;
}
.header-bar{
  margin-left:10px;
  width: 30px;
  text-align: center;
}
.weui-cells {
  margin-top: 0;
  background-color: #FFFFFF;
  line-height: 1.41176471;
  font-size: 17px;
  overflow: hidden;
  position: relative;
  margin: 0 !important;
}
.vux-label-desc{
  font-size:12px !important;
}
.detail-user-main{
  height:45px;
  padding:0px 10px;
  background: #eeeeee;
  color:#808695;
}
.detail-user-left{
  float: left;
  height:38px;
  width: 38px;
  border:1px solid #dddddd;
  position: relative;
  top:3px;
}
.detail-user-right{
  margin-left:45px;
  font-size:16px;
}
.detail-user-time{
  font-size: 12px
}
.img-class{
  height:100%;
  width: 100%;
}
.detail-fa-levl{
  font-size:10px;
}
.detail-user-floor{
  padding:1px;
  border:1px solid #42b983;
  border-radius: 2px;
  font-size:10px;
}
.detail-content-main{
  padding:10px;
}
.detail-content-title{
  font-size:14px;
  font-weight: bold;
  margin:0px 0px;
  color:#17233d;
}
.detail-content-detail{
  font-size:13px;
  font-weight: normal;
  color:#515a6e;
  margin-top:10px;
}
.detail-fans-heart-num{
  text-align: center;
  color:#515a6e;
  font-size:25px;
}
.detail-fans-user{
  font-size:12px;
}
.detail-fans-list{
  padding:10px;
}
.detail-fans-list-img{
  height:25px;
  width: 25px;
  border-radius:3px;
  border:1px solid #dddddd;
  margin-right:2px;
}
.detail-fans-list-more{
  display: inline-block;
  position: relative;
  top:-8px;
  text-align: center;
  color:#808695;
}
.detail-fans-user-total{
  font-size:10px;
  color:#808695;
}
.div-line{
  background: #eeeeee;
  height:10px;
}
.div-line-list{
  background: #eeeeee;
  height:1px;
  margin:5px 0px;
}
.detail-content-item-left{
  float: left;
  height:25px;
  width: 25px;
  border:1px solid #dddddd;
}
.detail-content-item-right{
  margin-left:30px;
  font-size:12px;
}
.detail-content-time{
  font-size:10px;
  color:#808695;
  position: relative;
  top:-5px;
}
.detail-floor-num{
  position: absolute;
  right:10px;
  color:#808695;
}
.detail-user-save{
  padding:1px;
  border:1px solid #ed4014;
  color:#ed4014;
  border-radius: 2px;
  font-size:10px;
}
</style>
