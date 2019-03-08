// components/more/more.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    moreData:String
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
      var moreData = this.data.moreData
      wx.showActionSheet({
        itemList:["内容过期了",`内容和${moreData}不相关`,`不再显示来自${moreData}的内容`],
        success:res=>{
          const index = res.tapIndex;
          if(index == 0||index==1){
            wx.showToast({
              title:"提交了"
            })
          }else{
            wx.showToast({
              title:"完美"
            })
          }
        }
      })
    }
  }
})
