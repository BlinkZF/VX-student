// components/Aindex/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots:true,
    
    
  },
  properties: {
    recommend:Object,
    mark:Array,
    magazineId:{
      type:Number,
      value:0,
    }
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    date:'',
    magazineTypeArr:["清芒","兴趣","物质","世界","心事","灵魂"],

  },

  attached(){
    this.getDate()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getDate(){
      const monthArr = ["十二"]
      const dayArr = ["十","十一","十二","十三","十四"]
      const month = monthArr[new Date().getMonth() - 11]
      
      const day = dayArr[new Date().getDate() - 10 ]
      const date = `${month}月${day}日`
      this.setData({
        date: date
      })
    },
    oncat(){
      wx.navigateTo({
        url: '/pages/catlog/catlog'
      })
    }


  }
})
