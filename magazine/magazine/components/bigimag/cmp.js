// components/bigimag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgSrc:{
      type:String,
      value:"https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=c59daf67932f07085f502206d91494a1/0ff41bd5ad6eddc4139109d334dbb6fd526633a7.jpg" ,
      observer:function(newVal, oldVal, changpath){

      }
    },
    wordSrc: {
      type:String,
      value:"fsgdfgfdgdegdtgdfgdfgfdgrdge",
      observer: function(){
        
      }

    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
