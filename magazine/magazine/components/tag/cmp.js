// components/tag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    tagWord:String,
    tagId:String

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
    onTap(){
      // const tagid = this.properties.tagId
      // wx.navigateTo({
      //   url: `/pages/type/type?typeId=` + tagid
      // }
      // )
      this._showErro()
    },


    _showErro(){
      wx.showToast({
        title:'不错',
        icon:'none',
        duration:1000,
        mask:true
        
      })
    }



  }
})
