<template>
  <div id="blockDetail" class="main-position">
    <div class="layout-header">
      <div style="position: relative;text-align: center;">
        <span class="header-bar" @click="backUrl"><i class="fa fa-chevron-left"></i></span>
        <span style="font-size:12px;">{{blockName}}</span>
      </div>
    </div>
    <div>
      <div style="padding:10px;">
        <div @click="detail">
          <div>
            <span style="display: inline-block;height:25px;width: 25px;border:1px solid #dddddd;">
              <img class="img-class" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </span>
              <span style="font-size:12px;position: relative;top:-8px;">
              网月官方
            </span>
          </div>
          <div class="home-item">
            <div>
              <div class="home-item-title">
                网月智能门锁第二代发布啦，功能简介。。。。。
              </div>
              <div class="home-item-content">
                网月智能门锁第二代发布啦，功能简介，网月智能门锁第二代发布啦，功能简介，网月智能门锁第二代发布啦，功能简介，网月智能门锁第二代发布啦，功能简介。。。。。
              </div>
              <div class="home-item-info">
                <span>
                  <i class="fa fa-eye"></i>
                  12
                </span>
                <span>
                  <i class="fa fa-comment"></i>
                  12
                </span>
                <span>
                  <i class="fa fa-heart"></i>
                  12
                </span>
                <span>2018-11-11 11:11:11</span>
              </div>
            </div>
            <div class="div-line"></div>
          </div>
        </div>

        <div @click="detail">
          <div>
            <span style="display: inline-block;height:25px;width: 25px;border:1px solid #dddddd;">
              <img class="img-class" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </span>
            <span style="font-size:12px;position: relative;top:-8px;">
              第三方官方
            </span>
          </div>
          <div class="home-item">
            <div style="float:left;width: 70%">
              <div class="home-item-title">
                网月智能门锁第二代发布啦，功能简介。。。。。
              </div>
              <div class="home-item-content">
                网月智能门锁第二代发布啦，功能简介，网月智能门锁第二代发布啦，功能简介，网月智能门锁第二代发布啦，功能简介，网月智能门锁第二代发布啦，功能简介。。。。。
              </div>
              <div class="home-item-info">
                <span>
                  <i class="fa fa-eye"></i>
                  12
                </span>
                <span>
                  <i class="fa fa-comment"></i>
                  12
                </span>
                <span>
                  <i class="fa fa-heart"></i>
                  12
                </span>
                <span>2018-11-11 11:11:11</span>
              </div>
            </div>
            <div style="margin-left:70%;">
              <div class="title-img">
                <img src="" alt="" class="img-class">
              </div>
            </div>
            <div style="clear: both"></div>
            <div class="div-line"></div>
          </div>
        </div>

        <div @click="detail">
          <div>
            <span style="display: inline-block;height:25px;width: 25px;border:1px solid #dddddd;">
              <img class="img-class" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </span>
            <span style="font-size:12px;position: relative;top:-8px;">
              网月官方
            </span>
          </div>
          <div class="home-item">
            <div>
              <div class="home-item-title">
                网月智能门锁第二代发布啦，功能简介。。。。。
              </div>
              <div class="home-item-content">
                网月智能门锁第二代发布啦，功能简介，网月智能门锁第二代发布啦，功能简介，网月智能门锁第二代发布啦，功能简介，网月智能门锁第二代发布啦，功能简介。。。。。
              </div>
              <div class="home-item-info">
                <span>
                  <i class="fa fa-eye"></i>
                  12
                </span>
                <span>
                  <i class="fa fa-comment"></i>
                  12
                </span>
                <span>
                  <i class="fa fa-heart"></i>
                  12
                </span>
                <span>2018-11-11 11:11:11</span>
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
  import { XButton,Divider,Cell,Group } from 'vux'
  export default {
    components: {
      XButton,Divider,Cell,Group
    },
    name: 'blockDetail',
    data () {
      return {
        back:'',
        blockName:'版块'
      }
    },
    created(){
      console.log(this.$route.query.back);
      this.back = this.$route.query.back;
      this.blockName = this.$route.query.blockName;
    },
    methods:{
      backUrl(){
        this.$router.push(this.$route.query.backFirstName ? this.$route.query.backFirstName : this.back);
      },
      detail(){
        this.$router.push({path: '/blockDetailContent', query: {back: '/blockDetail',backFirstName:this.back,blockName:this.blockName}});
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
  text-align: left;
}
.header-bar{
  margin-left:10px;
  position: absolute;
  left:10px;
  width: 30px;
  text-align: center;
}
.img-class{
  height:100%;
  width: 100%;
}
.home-item{
  height:140px;
  margin-bottom:20px;
}
.home-item-title{
  font-size:15px;
  color:#17233d;
  height:40px;
  line-height: 20px;
  font-weight: bold;
}
.home-item-content{
  font-size:12px;
  color:#515a6e;
  height:80px;
}
.home-item-info{
  font-size:10px;
  color:#808695;
  height:20px;
  line-height:20px;
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
  margin:5px 0px 5px 0px;
}
.title-img{
  height: 100px;
  width:95%;
  border:1px solid #dddddd;
  position: relative;
  top:15px;
}
</style>
