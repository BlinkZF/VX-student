

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
    class: 'common',
    myTagList:[]

  },


  attached(){
    this.jugTag()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap(){
      const mark = {
        tag: this.data.tag,
        tagId: this.properties.tagId
      }

      if(this.data.class == 'common'){
        const myTagList = wx.getStorageSync('myTagList') || []
        
        myTagList.push(mark)
        console.log(myTagList)

        wx.setStorageSync('myTagList', myTagList)

      }else{
        this.reMoveMytag(mark.tagId)
      }


      this.toggleClass()

      this.triggerEvent('tap')

    },
    toggleClass(){

      let className = '';

      if(this.data.class === 'common'){
        className = 'subscribe' 
      } else{
        className = 'common'
      }
      this.setData({
        class: className
      })

    },

    getMytegList(){
      const myTagList = wx.getStorageSync('myTagList') || []
      this.setData({
        myTagList
      })
      return myTagList
    },

    jugTag(){
      const myTagList = this.getMytegList()
    

      myTagList.forEach((item, index)=>{
        if(item.tagId == this.properties.tagId){
          this.setData({
            class:'subscribe'
          })
        }
      })
    },



    reMoveMytag(tagId){
      let myTagList = wx.getStorageSync('myTagList') || []
      let myIndex = 0 

      myTagList.forEach((item, index) => {
        if(item.tagId === tagId){
          myIndex = index
        }else{
          return
        }
      });
      myTagList.splice(myIndex, 1)

      wx.setStorageSync('myTagList', myTagList)
    }

  }
})
