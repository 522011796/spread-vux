<template>
  <div id="myinfo" class="main-position">
    <div class="layout-header">
      <div style="position: relative;">
        <span class="header-bar" @click="backUrl"><i class="fa fa-chevron-left"></i></span>
        <span>个人中心</span>
      </div>
    </div>
    <div>
      <div style="position: relative;height:70px;border:1px solid #dddddd;">
        <div style="float:left;width: 60px;height:60px;border-radius: 60px;border:1px solid #dddddd;position: relative;top:5px;left:20px;">

        </div>
        <div style="margin-left:90px;color:#808695;font-size:12px;">
            <div style="position: relative;top:15px;left:0px;">
              <div style="font-size:15px;">
                ricky
              </div>
              <div style="margin-top:5px;">
                未绑定手机
              </div>
            </div>
        </div>
      </div>

      <div v-if="phoneBind == false">
        <x-button :gradients="['#2db7f5', '#2db7f5']" style="font-size:12px;height:40px;width: 90%;margin-top:20px;" @click.native="bindPhone">绑定手机</x-button>
      </div>

      <div v-if="phoneBind == true" style="margin-top:20px;">
        <div style="text-align: center">
          <input type="text" placeholder="请输入手机号" style="height:40px;width: 80%;border:1px solid #dcdee2;padding-left:15px;"/>
        </div>
        <div style="text-align: center;position: relative;margin-top:10px;">
          <input type="text" placeholder="请输入验证码" style="height:40px;width: 80%;border:1px solid #dcdee2;padding-left:15px"/>
          <x-button mini plain type="primary" style="font-size:12px;width:100px;position: absolute;right:30px;top:8px;">获取验证码</x-button>
        </div>
        <div style="text-align: center">
          <x-button :gradients="['#2db7f5', '#2db7f5']" style="font-size:12px;height:40px;width: 90%;margin-top:20px;">提交</x-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { XButton,Divider,Cell,Group,Flexbox, FlexboxItem,XInput } from 'vux'
  export default {
    components: {
      XButton,Divider,Cell,Group,Flexbox, FlexboxItem,XInput
    },
    name: 'myinfo',
    data () {
      return {
        back:'',
        phoneBind:false
      }
    },
    created(){
      this.back = this.$route.query.back;
    },
    methods:{
      backUrl(){
        this.$router.push(this.back);
      },
      myinfoDetail(event,name){
        this.$router.push({path: '/myinfoDetail', query: {back: '/myinfo'}});
      },
      myContent(){
        this.$router.push({path: '/myinfoContent', query: {back: '/myinfo'}});
      },
      bindPhone(){
        this.phoneBind = true;
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
    height:35px;
    line-height:35px;
    font-size:13px;
    background: #ffffff;
    color:#808695;
    text-align: center;
  }
  .header-bar{
    position: absolute;
    left:5px;
    width: 30px;
    text-align: center;
  }
</style>
