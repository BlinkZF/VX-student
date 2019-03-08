// components/tag/tagCmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: String,
    tagId: Number
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
    onTap() {
      const tagId = this.properties.tagId;
      // wx.navigateTo({
      //   url: `/pages/type/type?tagId=${tagId}` //es6模板字符串拼接
      // })
      this.showError();
    },
    // 封闭接口
    showError(){
      wx.showToast({
        title:"当前小程序为测试版本，不能直接跳转",
        icon:"none",
        duration:1000,
        mask:true,
      })
    }
  }
})