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
        <input type="text" placeholder="为帖子取一个响亮的标题" style="height:35px;width: 94%;border:1px solid #dcdee2;padding-left:15px;"/>
      </div>
      <!--<div style="text-align: center;margin-top:10px;">
        <vue-html5-editor :content="content" :height="400" :auto-height="true" :z-index="1000" @change="updateData"></vue-html5-editor>
      </div>-->
      <uploader :options="options" class="uploader-example" @file-success="fileSuccess" style="display: none">
        <uploader-unsupport></uploader-unsupport>
        <uploader-drop>
          <uploader-btn id="uploadBtn" :attrs="attrs">select files</uploader-btn>
          <!--<uploader-btn :attrs="attrs">select images</uploader-btn>-->
          <!--<uploader-btn :directory="true">select folder</uploader-btn>-->
        </uploader-drop>
        <uploader-list></uploader-list>
      </uploader>

      <div class="needsclick" style="text-align: center;margin-top:10px;">
        <quill-editor
          :options="editorOption"
          v-model="detailContent">
        </quill-editor>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swiper, Flexbox, FlexboxItem } from 'vux'
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
    ['image','video']
  ];

  export default {
    components: {
      Swiper,Flexbox,FlexboxItem,quillEditor
    },
    name: 'home',
    data () {
      return {
        showTopMenu: false,
        back:'',
        content: '请输入文章内容',
        uploadUrl:'/upload/file/upload',
        uploadParams:{file:'',fileType:''},
        detailContent:'',
        options: {
          // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
          target: '/upload/file/upload',
          testChunks: false,
          query:{
            fileType:'voice',
            hotelCode:'YRCDO2RQJKOMQP2T'
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
    created(){
      this.back = this.$route.query.back;
    },
    methods:{
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
        console.log(data.data.url)
        console.log(data.data.type)
        if(data.data.type == '.png' || data.data.type == '.jpg' || data.data.type == '.jpeg'){
          let url = "http://" + data.data.url;
          _self.detailContent += "<img src='"+url+"' style='width: 100% !important;height:140px !important;'/>";
        }
      },
      onError (e) {
        console.log(e.message)
      },
      noteSub(){
        console.log(this.detailContent);
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
  height: 500px;
}
.header-bar-right{
  position: absolute;
  top:0px;
  right:20px;
}
</style>
