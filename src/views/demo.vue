<template>
    <div class="tinymce">
        <Editor id="tinymce" v-model="tinymceHtml" :init="init"></Editor>
    </div>
</template>
<script>
    import tinymce from 'tinymce/tinymce'
    import Editor from '@tinymce/tinymce-vue'
    import 'tinymce/themes/silver'
    //--------------------插入引入--------------------
    import 'tinymce/plugins/image'// 插入上传图片插件
    import 'tinymce/plugins/media'// 插入视频插件
    import 'tinymce/plugins/table'// 插入表格插件
    import 'tinymce/plugins/link' //超链接插件
    import 'tinymce/plugins/code' //代码块插件
    import 'tinymce/plugins/lists'// 列表插件
    import 'tinymce/plugins/contextmenu'  //右键菜单插件
    import 'tinymce/plugins/wordcount' // 字数统计插件
    import 'tinymce/plugins/colorpicker' //选择颜色插件
    import 'tinymce/plugins/textcolor'  //文本颜色插件
    import 'tinymce/plugins/fullscreen' //全屏
    import 'tinymce/plugins/help'
    import 'tinymce/plugins/charmap'
    import 'tinymce/plugins/paste'
    import 'tinymce/plugins/print'
    import 'tinymce/plugins/preview'
    import 'tinymce/plugins/hr'
    import 'tinymce/plugins/anchor'
    import 'tinymce/plugins/pagebreak'
    import 'tinymce/plugins/spellchecker'
    import 'tinymce/plugins/searchreplace'
    import 'tinymce/plugins/visualblocks'
    import 'tinymce/plugins/visualchars'
    import 'tinymce/plugins/insertdatetime'
    import 'tinymce/plugins/nonbreaking'
    import 'tinymce/plugins/autosave'
    import 'tinymce/plugins/fullpage'
    import 'tinymce/plugins/toc'
    export default {
        data(){
            return{
                init:{
                    selector: 'Editor',//选择HTML元素
                    //language_url:'../static/tinymce/langs/zh_CN.js',  //导入语言文件
                    //language: "zh_CN",//语言设置
                    //disabled:true, //禁用
                    //skin_url: '../static/tinymce/skins/ui/oxide',//主题样式
                    height:500, //高度
                    menubar: false,// 隐藏最上方menu菜单
                    toolbar: true,//false禁用工具栏（隐藏工具栏）
                    browser_spellcheck: true, // 拼写检查
                    branding: false, // 去水印
                    statusbar: false, // 隐藏编辑器底部的状态栏
                    elementpath: false,  //禁用下角的当前标签路径
                    paste_data_images: true, // 允许粘贴图像
                    plugins:
                        'lists image media table wordcount code fullscreen help  toc fullpage autosave nonbreaking insertdatetime visualchars visualblocks searchreplace spellchecker pagebreak link charmap paste print preview hr anchor' ,
                    toolbar:[
                        'newdocument undo redo | formatselect visualaid|cut copy paste selectall| bold italic underline strikethrough |codeformat blockformats| superscript subscript  | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent |  removeformat ',
                        'code  bullist numlist | lists image media table link |fullscreen help toc fullpage restoredraft nonbreaking insertdatetime visualchars visualblocks searchreplace spellchecker pagebreak anchor charmap  pastetext print preview hr',
                    ]
                },
                tinymceHtml:'',
            }
        },
        components:{
            Editor,
        },
        mounted(){
            tinymce.init({})
        },
    }
</script>
<style scoped>

</style>