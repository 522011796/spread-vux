<template>
  <div>
    <img src="../assets/bg.gif" style="height:100%;width: 100%;position: absolute">
  </div>
</template>

<script>
  import { Group,GroupTitle,Cell,Tabbar,TabbarItem,ViewBox,Flexbox, FlexboxItem } from 'vux'
  export default {
  components: { Group,GroupTitle,Cell,Tabbar,TabbarItem,ViewBox,Flexbox, FlexboxItem},
  name: 'welcome',
  data () {
    return {
      roomNo: '暂无房间号'
    }
  },
  created(){
    var _self = this;
    setTimeout(function () {
      _self.init();
    },500);
  },
  methods:{
    init(){
      /*let url = location.href;
      //let wx_appid = url.substring(url.indexOf('wx_appid=') + 9, url.indexOf('ukey=') - 1);
      let wx_appid = 'wx7605c75d9d12567d';
      //let ukey = url.substring(url.indexOf('ukey=') + 5);
      if (url.indexOf('code=') < 1) {
        let redirect_url = encodeURIComponent(`https://www.rickycloud.cn/wechat-hotal/#/welcome`);
        let url_code = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+wx_appid+"&redirect_uri="+redirect_url+"&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect";
        window.location = url_code;
      }else{
        let mycode = url.substring(url.indexOf('code=') + 5, url.indexOf('state=') - 1);// 前台截取code
        var params = {
          code : mycode
        };
        console.log(mycode);return;
        /!*this.$reqApi.get("/security/wx-code-auth", params ,res => {
          console.log(res);
          this.openid = res.data.data.openid;
          localStorage.removeItem("openid");
          localStorage.removeItem("nickname");
          localStorage.removeItem("headerurl");
          console.log(res.data.data.openid);
          localStorage.setItem("openid",res.data.data.openid);
          localStorage.setItem("nickname",res.data.data.nickname);
          localStorage.setItem("headerurl",res.data.data.headimgurl);
          //localStorage.setItem("ukey",ukey);
          this.$router.push("/");
        });*!/
      }*/

      //本地测试用，正式版本关闭
      var params = {
        code : '001OPbs815OatN1vxds81Y1gs81OPbsy'
      };
      this.$reqApi.postQs("/proxy/security/wx-code-auth", params ,res => {
        console.log(res.data.data.userInfo);
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
        this.$router.push("/");
      },res=>{
        console.log(res);
        localStorage.removeItem("openid");
        localStorage.removeItem("nickname");
        localStorage.removeItem("headerurl");
        localStorage.removeItem("userLogin");
        localStorage.removeItem("phone");
        this.$router.push("/");
      },{"Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'});
    }
  }
}
</script>
