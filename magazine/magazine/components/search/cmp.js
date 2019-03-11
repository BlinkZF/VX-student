// components/search/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value : String
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
    insearch(e){
      let value = e.detail.value || this.data.value

      if(value !== '读书'){
        wx.showToast({
          title:'好儿子才不读书',
          icon:'none'
        })
        return
      }

    
      wx.navigateTo({
        url: `/pages/search/search?search=${value}`
      })


    },
    onBlur(e){

      this.setData({
        value: e.detail.value
      })
    }

  }
})
