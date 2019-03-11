// components/more/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    artical:String

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
    noCaidan: function (e) {
       let type = e.currentTarget.dataset.name
      wx.showActionSheet({
        itemList: ['内容过期了', '内容和' + type + '不相关', '不再显示来自' + type +'的内容'],
        success (res) {
          console.log(res)
          var tapIndex = res.tapIndex
          if(tapIndex == 0|tapIndex == 1 ){
            wx.showToast({
              title:'成功了',
              duration:1000,
              mask:true
              
            })
          }
        },
        fail (res) {
      
        }
      })
    }
  }
})
