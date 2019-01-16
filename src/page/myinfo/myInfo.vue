<template>
  <div id="myinfo" class="main-position">
    <div class="layout-header">
      <div style="position: relative;">
        <span>个人中心</span>
      </div>
    </div>
    <div>
      <div v-if="phoneBind == false && pwdBind == false" style="position: relative;border-top:1px solid #dddddd;">
        <div style="height:70px;background: #ffffff">
          <div style="float:left;width: 60px;height:60px;border-radius: 60px;border:1px solid #dddddd;position: relative;top:5px;left:20px;">
            <img :src="userLogoUrl" alt="" style="height:100%;width: 100%;border-radius: 100%;">
          </div>
          <div style="margin-left:90px;color:#808695;font-size:12px;">
            <div style="position: relative;top:15px;left:0px;">
              <div style="font-size:15px;font-weight: bold">
                {{nickname}}
              </div>
              <div style="font-size:12px;margin-top:10px;">
                {{phone}}
              </div>
              <div v-if="phone == ''" style="margin-top:5px;">
                <span>未绑定手机</span>
                <x-button mini plain type="primary" style="font-size:10px;position: absolute;right:10px;top:10px" @click.native="bindPhone">绑定手机</x-button>
              </div>
            </div>
          </div>
          <div style="clear: both;"></div>
        </div>
        <div style="background: #ffffff;padding-top: 10px;padding-bottom:10px;">
          <div class="myinfo-title-icon">
            <div style="text-align: center;display: inline-block;font-size: 10px;">
              <div>关注</div>
              <div style="font-size:10px;">0</div>
            </div>
            <div style="text-align: center;display: inline-block;;margin-left: 20%;margin-right: 20%;font-size: 10px;">
              <div>粉丝</div>
              <div style="font-size:10px;">0</div>
            </div>
            <div style="text-align: center;display: inline-block;font-size: 10px;">
              <div>喜欢</div>
              <div style="font-size:10px;">0</div>
            </div>
            <div style="clear: both;"></div>
          </div>
        </div>

        <div style="background: #ffffff;padding-top: 10px;padding-bottom:10px;margin:10px 0px;">
          <div class="myinfo-title-icon">
            <div style="text-align: center;display: inline-block;">
              <img src="./../../assets/like.png" alt="" class="img-icon-class">
              <div style="font-size:10px;">被喜欢</div>
            </div>
            <div style="text-align: center;display: inline-block;;margin-left: 20%;margin-right: 20%;">
              <img src="./../../assets/comment.png" alt="" class="img-icon-class">
              <div style="font-size:10px;">评论</div>
            </div>
            <div style="text-align: center;display: inline-block;">
              <img src="./../../assets/notice.png" alt="" class="img-icon-class">
              <div style="font-size:10px;">通知</div>
            </div>
            <div style="clear: both;"></div>
          </div>
        </div>

        <div>
          <group>
            <cell title="设置" is-link>
              <i slot="icon" style="font-size:20px;margin-right:5px;" class="fa fa-cog"></i>
            </cell>
          </group>
        </div>
      </div>

      <!--<div v-if="phoneBind == false">
        <x-button :gradients="['#2db7f5', '#2db7f5']" style="font-size:12px;height:40px;width: 90%;margin-top:20px;" @click.native="bindPhone">绑定手机</x-button>
      </div>-->

      <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="errTips" width="15em" style="font-size:12px;"></toast>

      <div v-if="phoneBind == true" style="margin-top:20px;">
        <div style="text-align: center">
          <span style="display: inline-block;width: 85%;text-align: left;color:#ed4014;font-size:13px;height:25px;">
            请完善相应的信息再进行操作
          </span>
        </div>
        <div style="text-align: center;">
          <span style="display: inline-block;height:40px;width: 85%;">
              <input type="text" v-model="userPhone" placeholder="请输入手机号" style="height:40px;width: 100%;border:1px solid #dcdee2;padding-left:0px;"/>
          </span>
        </div>
        <div style="text-align: center;position: relative;margin-top:10px;">
          <div>
            <span style="display: inline-block;height:40px;width: 85%;position: relative">
              <input type="text" v-model="imgCode" placeholder="请输入图片验证码" style="height:40px;width: 100%;border:1px solid #dcdee2;padding-left:0px;"/>
              <img style="-webkit-user-select: none;position: absolute;top:5px;right:0%;height:38px;width: 80px;z-index:9999;" :src="imgCodeUrl" @click="changeImg">
            </span>
          </div>
        </div>
        <div style="text-align: center;position: relative;margin-top:10px;">
          <span style="display: inline-block;height:40px;width: 85%;">
            <input type="text" v-model="smsCode" placeholder="请输入验证码" style="height:40px;width: 100%;border:1px solid #dcdee2;padding-left:0px"/>
            <x-button mini plain type="primary" style="font-size:12px;width:100px;position: absolute;right:30px;top:8px;" v-if="showSec == false" @click.native="getPhoneCode">获取验证码</x-button>
            <x-button mini plain type="primary" style="font-size:12px;width:100px;position: absolute;right:30px;top:8px;" v-if="showSec == true">{{secTime}}s</x-button>
          </span>
        </div>
        <div style="text-align: center">
          <x-button :gradients="['#2db7f5', '#2db7f5']" style="font-size:12px;height:40px;width: 90%;margin-top:20px;" @click.native="bindPhoneSub">提交</x-button>
          <!--<x-button :gradients="['#E64340', '#E64340']" style="font-size:12px;height:40px;width: 90%;margin-top:20px;" @click.native="cancelBindPhone">取消</x-button>-->
        </div>
      </div>

      <div v-if="pwdBind == true" style="margin-top:20px;">
        <div style="text-align: center">
          <span style="display: inline-block;width: 85%;text-align: left;color:#ed4014;font-size:13px;height:25px;">
            请完善相应的信息再进行操作
          </span>
        </div>
        <div style="text-align: center">
          <input type="password" v-model="userPass" placeholder="请输入登录密码" style="height:40px;width: 80%;border:1px solid #dcdee2;padding-left:15px;"/>
        </div>
        <div style="text-align: center">
          <input type="password" v-model="userRePass" placeholder="请再次输入登录密码" style="height:40px;width: 80%;border:1px solid #dcdee2;padding-left:15px;"/>
        </div>
        <div style="text-align: center">
          <x-button :gradients="['#2db7f5', '#2db7f5']" style="font-size:12px;height:40px;width: 90%;margin-top:20px;" @click.native="bindPwdSub">提交</x-button>
          <!--<x-button :gradients="['#E64340', '#E64340']" style="font-size:12px;height:40px;width: 90%;margin-top:20px;" @click.native="cancelBindPhone">取消</x-button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { XButton,Divider,Cell,Group,Flexbox, FlexboxItem,XInput,Toast, CellBox } from 'vux'
  export default {
    components: {
      XButton,Divider,Cell,Group,Flexbox, FlexboxItem,XInput,Toast, CellBox
    },
    name: 'myinfo',
    data () {
      return {
        back:'',
        phoneBind:false,
        pwdBind:false,
        captcha:'',
        userPhone:'',
        imgCode:'',
        smsCode:'',
        userPass:'',
        userRePass:'',
        errTips:'',
        imgCodeUrl:'proxy/security/captcha',
        showPositionValue:false,
        showSec:false,
        secTime:0,
        TIME_COUNT:120,
        timer:null,
        userLogoUrl:'',
        nickname:'',
        phone:''
      }
    },
    created(){
      this.back = this.$route.query.back;
      this.init();
    },
    methods:{
      init(){
        if(!localStorage.getItem("userLogin") || localStorage.getItem("userLogin") == false){
          this.phoneBind = true;
          this.changeImg();
        }else{
          this.userLogoUrl = localStorage.getItem("headerurl");
          this.nickname = localStorage.getItem("nickname");
          this.phone = localStorage.getItem("phone");
        }
      },
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
      },
      bindPhoneSub(){
        var params = {
          userPhone:this.userPhone,
          smsCode:this.smsCode,
          imgCode:this.imgCode
        };
        this.errTips = "";
        if(this.userPhone == ""){
          this.showPositionValue = true;
          this.errTips = "请输入手机号码";
          return;
        }else if(!(/^1[34578]\d{9}$/.test(this.userPhone))){
          this.showPositionValue = true;
          this.errTips = "请输入正确的手机号码";
          return;
        }
        if(this.smsCode == ""){
          this.showPositionValue = true;
          this.errTips = "请输入手机验证码";
          return;
        }
        if(this.imgCode == ""){
          this.showPositionValue = true;
          this.errTips = "请输入图片验证码";
          return;
        }
        this.$reqApi.postQs("/proxy/security/wx-bind-phone", params ,res => {
          console.log(11111);
          localStorage.removeItem("openid");
          localStorage.removeItem("nickname");
          localStorage.removeItem("headerurl");
          localStorage.removeItem("userLogin");
          localStorage.removeItem("phone");
          localStorage.setItem("openid",res.data.data.userInfo.userOpenid);
          localStorage.setItem("nickname",res.data.data.userInfo.userNickname);
          localStorage.setItem("headerurl",res.data.data.userInfo.userHeadimgurl);
          localStorage.setItem("phone",res.data.data.userInfo.userPhone);
          localStorage.setItem("userLogin",res.data.data.userInfo.userLogin);
          //userLogin
          this.$router.push({path: '/myinfo', query: {back: '/'}});
          this.phoneBind = false;
          this.pwdBind = false;
          this.init();
        },res=>{
          console.log(res);
          if(res.data.code == 201){
            this.pwdBind = true;
            this.phoneBind = false;
          }else{
            this.showPositionValue = true;
            this.errTips = res.data.desc;
          }
          this.changeImg();
        },{"Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'});
      },
      bindPwdSub(){
        var params = {
          userPhone:this.userPhone,
          userPass:this.userPass,
          userRePass:this.userRePass
        };

        this.errTips = "";
        if(this.userPass != this.userRePass){
          this.showPositionValue = true;
          this.errTips = "两次密码输入不一致";
        }else if(this.userPass == "" || this.userRePass == ""){
          this.showPositionValue = true;
          this.errTips = "请完善密码信息";
        }else if((this.userPass !== "" && this.userPass.length < 6) || (this.userPass !== "" && this.userPass.length > 16)){
          this.showPositionValue = true;
          this.errTips = "密码长度为:6-16位";
        }else if((this.userRePass !== "" && this.userRePass.length < 6) || (this.userRePass !== "" && this.userRePass.length > 16)){
          this.showPositionValue = true;
          this.errTips = "密码长度为:6-16位";
        }

        this.$reqApi.postQs("/proxy/security/set-password", params ,res => {
          console.log(res);
          this.showPositionValue = true;
          this.errTips = res.data.desc;
          this.$router.push({path: '/myinfo', query: {back: '/'}});
          this.phoneBind = false;
          this.pwdBind = false;
          this.init();
        },res=>{
          this.showPositionValue = true;
          this.errTips = res.data.desc;
        },{"Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'});
      },
      getPhoneCode(){
        var params = {
          userPhone:this.userPhone,
          imgCode:this.imgCode
        };

        this.errTips = "";
        if(this.userPhone == ""){
          this.showPositionValue = true;
          this.errTips = "请输入手机号码";
          return;
        }else if(!(/^1[34578]\d{9}$/.test(this.userPhone))){
          this.showPositionValue = true;
          this.errTips = "请输入正确的手机号码";
          return;
        }
        if(this.imgCode == ""){
          this.showPositionValue = true;
          this.errTips = "请输入图片验证码";
          return;
        }
        this.$reqApi.postQs("/proxy/security/send-sms-code", params ,res => {
          this.showSec = true;
          this.secTime = 120;
          this.timerOut();
          this.showPositionValue = true;
          this.errTips = res.data.desc;
        },res=>{
          console.log(res);
          this.showSec = false;
          this.showPositionValue = true;
          this.errTips = res.data.desc;
          this.changeImg();
        },{"Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'});
      },
      changeImg(){
        this.imgCodeUrl = 'proxy/security/captcha?radnom=' + Math.random();
      },
      timerOut(){
        let _self = this;
        if (!_self.timer) {
          _self.showSec = true;
          _self.secTime = _self.TIME_COUNT;
          _self.timer = setInterval(() => {
            if (_self.secTime > 0 && _self.secTime <= _self.TIME_COUNT) {
              _self.secTime--;
              _self._self.secTime;
            } else {
              _self.showSec = false;
              clearInterval(_self.timer);
              _self.timer = null;
            }
          }, 1000)
        }
      },
      cancelBindPhone(){
        this.phoneBind = false;
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
    height:45px;
    line-height:45px;
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
  .img-icon-class{
    height:25px;
    width: 25px;
  }
  .myinfo-title-icon{
    text-align: center;
  }
</style>
