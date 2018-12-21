<template>
  <div id="home">
    <div class="layout-header">
      <div style="position: relative;">
        <span class="header-bar" @click="backUrl"><i class="fa fa-chevron-left"></i></span>
        <span>发帖</span>
        <span class="header-bar-right">
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
      <uploader :options="options" class="uploader-example" @file-success="fileSuccess" style="display:">
        <uploader-unsupport></uploader-unsupport>
        <uploader-drop style="display: none">
          <uploader-btn id="uploadBtn" :attrs="attrs">select files</uploader-btn>
          <!--<uploader-btn :attrs="attrs">select images</uploader-btn>-->
          <!--<uploader-btn :directory="true">select folder</uploader-btn>-->
        </uploader-drop>
        <uploader-list></uploader-list>
      </uploader>

      <div class="needsclick" style="text-align: center;margin-top:10px;">
        <quill-editor
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
        content: '请输入文章内容',
        uploadUrl:'/proxy/backend/upload-resource',
        uploadParams:{file:'',fileType:''},
        categoryIdList:[],
        blogTitle:'',
        blogSlide:'',
        blogSlideimgurl:'',
        blogContent:'',
        resourceUrlList:[],
        showPositionValue:false,
        errTips:'',
        options: {
          // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
          target: '/proxy/backend/upload-resource',
          testChunks: false,
          fileParameterName:'resource'
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
    created(){
      this.back = this.$route.query.back;
      this.getType();
    },
    methods:{
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
      fileSuccess (rootFile, file, message, chunk) {
        let _self = this;
        let data = JSON.parse(message);
        var dataType = data.data.resourceExtension.toLowerCase();
        let url = "";
        if(dataType == 'jpeg' || dataType == 'jpg' || dataType == 'png'){
          if(data.data.resourceUrl.indexOf("http://") != -1 || data.data.resourceUrl.indexOf("https://") != -1){
            url = data.data.resourceUrl;
          }else{
            url = "http://" + data.data.resourceUrl;
          }
          console.log(url);
          this.resourceUrlList.push(url);
          _self.blogContent += "<img src='"+url+"' style='width: 100% !important;'/>";
        }
      },
      onError (e) {
        console.log(e.message)
      },
      noteSub(){
        var params = {
          blogTitle:this.blogTitle,
          blogSlide:0,
          blogSlideimgurl:this.blogSlideimgurl,
          blogContent:this.blogContent,
          resourceUrlList:this.resourceUrlList
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
