// components/imgbtn/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots:true
  },
  
  properties: {
    openType:String
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
    getInfo(e){
      this.triggerEvent('getuserinfo', e.detail,{})

    }

  }
})
