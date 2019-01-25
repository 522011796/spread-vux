<template>
  <div id="home">
    <div class="layout-header">
      <div style="position: relative;">
        <span class="header-bar" @click="backUrl"><i class="fa fa-chevron-left"></i></span>
        <span>发帖</span>
        <span class="header-bar-right">
          <div style="display: none" id="htmlDetailShow" ref="htmlDetailShow" v-html="htmlDetailShow"></div>
          <span @click="noteSub" style="border:1px solid #19be6b;border-radius: 3px;color:#19be6b;font-size:10px;padding:1px 3px;">
            确认发帖
          </span>
        </span>
      </div>
    </div>
    <div class="main-position" style="padding:10px 5px;">
      <div style="text-align: center">
        <input type="text" v-model="blogTitle" placeholder="为帖子取一个响亮的标题" style="height:35px;width: 94%;border:1px solid #dcdee2;padding-left:15px;" maxlength="30"/>
      </div>
      <!--<div style="text-align: center;margin-top:10px;">
        <vue-html5-editor :content="content" :height="400" :auto-height="true" :z-index="1000" @change="updateData"></vue-html5-editor>
      </div>-->

      <uploader :options="optionsUpload" class="uploader-example" @file-success="fileSuccess" @file-added="fileAdd" style="display:none">
        <uploader-unsupport></uploader-unsupport>
        <uploader-drop style="display: none">
          <uploader-btn id="uploadBtn" :attrs="attrs">select files</uploader-btn>
          <!--<uploader-btn :attrs="attrs">select images</uploader-btn>-->
          <!--<uploader-btn :directory="true">select folder</uploader-btn>-->
        </uploader-drop>
        <uploader-list></uploader-list>
      </uploader>

      <div class="needsclick" style="text-align: center;margin-top:10px;">
        <quill-editor  ref="myTextEditor"
          :options="editorOption"
          v-model="blogContent">
        </quill-editor>
      </div>
    </div>

    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="errTips" width="15em" style="font-size:12px;"></toast>

  </div>
</template>

<script>
  import { Swiper, Flexbox, FlexboxItem,Toast } from 'vux'
  import Uploader from 'vux-uploader'

  import initRichText from './../utils/edit';
  initRichText();

  import { quillEditor } from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'

  const toolbarOptions = [
    ['bold'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'color': [] }],
    ['image']
  ];

  export default {
    components: {
      Swiper,Flexbox,FlexboxItem,quillEditor,Toast
    },
    name: 'home',
    data () {
      return {
        showTopMenu: false,
        back:'',
        blockId:'',
        content: '请输入文章内容',
        uploadUrl:'',
        uploadParams:{file:'',fileType:''},
        categoryIdList:[],
        blogTitle:'',
        blogSlide:'',
        blogSlideimgurl:'',
        blogContent:'',
        resourceUrlList:[],
        showPositionValue:false,
        errTips:'',
        filename:'',
        fileKey:'',
        uploadOtherData:{},
        htmlDetailShow:'',
        optionsUpload: {
          // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
          target: 'https://leo-bucket.oss-cn-hangzhou.aliyuncs.com',
          testChunks: false,
          chunkSize: '1024000000',
          fileParameterName:'file',
          singleFile:true,
          //simultaneousUploads: 100,
          query: {
            policy: "",
            callback: "",
            key: "",
            OSSAccessKeyId: "",
            signature: "",
            expire: "",
            success_action_status: 200,
          }
        },
        attrs: {
          //accept: 'image/*'
        },
        editorOption:{
          modules: {
            toolbar: {
              container: toolbarOptions,  // 工具栏
              handlers: {
                'image': function (value) {
                  if (value) {
                    document.querySelector('#uploadBtn').click();
                  } else {
                    this.quill.format('image', false);
                  }
                }
              }
            }
          }
        }
      }
    },
    watch: {
      blogContent: {
        handler(newValue, oldValue) {
          let article = newValue.replace(/(\<iframe|\<\/iframe)/gi, function ($0, $1) {
            return {
              "<iframe":"<p><video width='100%' height='180px' style='object-fit: cover;' controls webkit-playsinline='true' playsinline='true' x5-video-player-type='h5' x5-video-orientation='h5' x5-video-player-fullscreen='true' preload='auto' poster='https://bbs.9451.com/proxy/img/video.jpg'",
              "</iframe": "</video></p",
            }[$1];
          });

          this.htmlDetailShow = article;
        },
        deep: true
      }
    },
    created(){
      this.back = this.$route.query.back;
      this.blockId = this.$route.query.blockId;
      //console.log(this.optionsUpload);
      this.getType();
      this.getPhp();
    },
    methods:{
      getTest(){
        return "https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js"
      },
      getType(){
        this.$reqApi.get("/proxy/backend/get-category-list", {} ,res => {
          this.categoryList = res.data.data.categoryList;
        });
      },
      backUrl(){
        this.$router.push({path: '/', query: {back: '/'}});
      },
      updateData(e = ''){
        let c1 = e.replace(/<img width="100%"/g, '<img');
        let c2 = c1.replace(/<img/g, '<img width="100%"');
        this.content = c2;
        console.info(e);
      },
      fileAdd(file){
        let size = (file.size / (1024 * 1024)).toFixed(2);
        //console.log(file.fileType.toLowerCase());
        if(size > 1024){
          this.showPositionValue = true;
          this.errTips = '文件不能大于1G';
          file.ignored = true;
        }else if(file.fileType.toLowerCase() != 'image/png' && file.fileType.toLowerCase() != 'image/jpg' && file.fileType.toLowerCase() != 'image/jpeg' && file.fileType.toLowerCase() != 'video/mp4'){
          this.showPositionValue = true;
          this.errTips = '文件格式:jpg、jpeg、png、mp4';
          file.ignored = true;
        }else{
          this.handleBeforeUpload(file);
        }
      },
      fileSuccess (rootFile, file, message, chunk) {
        let editor = this.$refs.myTextEditor.quill;
        let _self = this;
        let data = JSON.parse(message);
        //console.log(data.data);
        var dataType = data.data.resourceContenttype.toLowerCase();
        let url = "";
        if(dataType == 'image/jpeg' || dataType == 'image/jpg' || dataType == 'image/png'){
          url = data.data.resourceUrl;
          //console.log(url);
          this.resourceUrlList.push(url);
          //_self.blogContent += "<img src='"+url+"' style='width: 100% !important;'/>";
          let length = editor.getSelection().index;
          editor.insertEmbed(length, 'image', url);
          // 调整光标到最后
          editor.setSelection(length + 1)
        }

        if(dataType == 'video/mp4'){
          url = data.data.resourceUrl;
          _self.processStatusShow = false;
          _self.resourceUrlList.push(url);
          //console.log(url);
          let length = editor.getSelection().index;
          editor.insertEmbed(length, 'video', url);
          // 调整光标到最后
          editor.setSelection(length + 1);
        }
      },
      onError (e) {
        console.log(e.message)
      },
      noteSub(){
        let article = this.blogContent.replace(/(\<iframe|\<\/iframe)/gi, function ($0, $1) {
          return {
            "<iframe":"<p><video width='100%' height='180px' style='object-fit: cover;' controls webkit-playsinline='true' playsinline='true' x5-video-player-type='h5' x5-video-orientation='h5' x5-video-player-fullscreen='true' preload='auto' poster='https://bbs.9451.com/proxy/img/video.jpg'",
            "</iframe": "</video></p",
          }[$1];
        });

        let subDataHtml = {};
        let subDataArr = [];

        let countP = document.querySelector("#htmlDetailShow").querySelectorAll("p");
        //console.log(article);
        for(var i =0;i<countP.length;i++){
          //console.log(document.querySelector("#htmlDetailShow").querySelectorAll("p")[i].querySelector("video"));
          if(document.querySelector("#htmlDetailShow").querySelectorAll("p")[i].querySelector("img")){
            //console.log(document.querySelector("#htmlDetailShow").querySelectorAll("p")[i].querySelectorAll("[src]")[0].currentSrc);
            subDataArr.push(
              {
                type: "img",
                data: document.querySelector("#htmlDetailShow").querySelectorAll("p")[i].querySelectorAll("[src]")[0].currentSrc
              }
            );
          }else if(document.querySelector("#htmlDetailShow").querySelectorAll("p")[i].querySelector("video")){
            //console.log(document.querySelector("#htmlDetailShow").querySelectorAll("p")[i].querySelector("video").currentSrc);
            subDataArr.push(
              {
                type: "video",
                data: document.querySelector("#htmlDetailShow").querySelectorAll("p")[i].querySelector("video").currentSrc
              }
            );
          }else{
            //console.log(document.querySelector("#htmlDetailShow").querySelectorAll("p")[i].innerText);
            if(document.querySelector("#htmlDetailShow").querySelectorAll("p")[i].innerText.indexOf("\n") != -1){
              console.log("\n");
              subDataArr.push(
                {
                  type: "text",
                  data: "\n"
                }
              );
            }else{
              subDataArr.push(
                {
                  type: "text",
                  data: document.querySelector("#htmlDetailShow").querySelectorAll("p")[i].innerText
                }
              );
            }
          }
        }

        let categoryIdListDefault = [5];
        let blockArr = [this.blockId];
        var params = {
          blogTitle:this.blogTitle,
          blogSlide:0,
          blogSlideimgurl:this.blogSlideimgurl,
          blogContent:article,
          resourceUrlList:this.resourceUrlList,
          moduleIdList:JSON.stringify(blockArr),
          categoryIdList:JSON.stringify(categoryIdListDefault),
          blogText: JSON.stringify(subDataArr)
        };

        if(this.blogTitle == ""){
          this.showPositionValue = true;
          this.errTips = '请填写标题';
          return;
        }
        if(this.blogContent == ""){
          this.showPositionValue = true;
          this.errTips = '请填写内容';
          return;
        }

        console.log(params);

        this.$reqApi.postQs("/proxy/backend/add-blog", params ,res => {
          console.log(res);
          this.showPositionValue = true;
          this.errTips = res.data.desc;
          this.$router.push("/");
        },res=>{
          console.log(res);
          this.showPositionValue = true;
          this.errTips = res.data.desc;
        },{"Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'});
      },
      getTargetHost(){
        this.$reqApi.get("/proxy/backend/get-policy", {} ,res => {
          this.optionsUpload.target = res.data.data.host;
        });
      },
      getOtherQuery(){
        this.$reqApi.get("/proxy/backend/get-policy", {} ,res => {

          let uploadOtherData = {
            policy: res.data.data.policy,
            callback: res.data.data.callback,
            key: res.data.data.dir,
            OSSAccessKeyId: res.data.data.accessid,
            signature: res.data.data.signature,
            expire: res.data.data.expire,
            success_action_status: 200,
            //name:'123412341234.png'
          };

          return uploadOtherData;

        });
      },
      getPhp(){
        this.$reqApi.get("/proxy/backend/get-policy", {} ,res => {
          //console.log(res.data.data);
          if(this.filename!=""){
            this.filename = this.filename
          }

          this.uploadUrl = res.data.data.host;
          this.fileKey = res.data.data.dir;

          this.uploadOtherData = res.data.data;

        });
      },
      handleBeforeUpload(file){
        let key = "";
        //key = this.uploadOtherData.key + file.name;
        this.filename = "";

        this.filename = file.name;
        this.optionsUpload.query.key = "";
        //this.optionsUpload.query.key = this.fileKey + file.name;
        this.optionsUpload.query.policy = this.uploadOtherData.policy;
        this.optionsUpload.target = this.uploadOtherData.host;
        this.optionsUpload.query.policy = this.uploadOtherData.policy;
        this.optionsUpload.query.callback = this.uploadOtherData.callback;
        this.optionsUpload.query.OSSAccessKeyId = this.uploadOtherData.accessid;
        this.optionsUpload.query.signature = this.uploadOtherData.signature;
        this.optionsUpload.query.expire = this.uploadOtherData.expire;
        this.optionsUpload.query.success_action_status = this.uploadOtherData.success_action_status;
        this.$set(this.optionsUpload.query,'key',this.fileKey + file.name);
        console.log(this.optionsUpload.query.key);
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
.home-title-menu{
  height:40px;
  background: #ffffff;
  font-size:13px;
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
  margin:2px 0px 2px 0px;
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
  text-align: center;
  color:#808695;
}
.header-bar{
  position: absolute;
  left:5px;
  width: 30px;
  text-align: center;
}
.quill-editor {
  height: 300px;
}
.header-bar-right{
  position: absolute;
  top:0px;
  right:20px;
}
</style>
