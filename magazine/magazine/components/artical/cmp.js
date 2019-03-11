// components/artical/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articalD: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus: false
  },


  attached(){
      let likeStatus = this.data.likeStatus
      const articalDetail = this.data.articalD
      const artId = articalDetail.artId
      
      const likelist = wx.getStorageSync('likelist') || []
      
      likelist.forEach((item, index)=>{
        if(item.artId == artId){
          likeStatus = true

        }
      })

      this.setData({
        likeStatus
      })
      console.log(likeStatus)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    like(e){
      

      const like = e.detail.like
      const articalDetail = this.data.articalD
      const artId = articalDetail.artId
      
      const likelist = wx.getStorageSync('likelist') || []

      if(like){
        likelist.unshift(articalDetail)
        wx.setStorageSync('likelist',likelist)
      } else{

        let myIndex = 0
        likelist.forEach((item, index) => {
          if(item.artId == artId){
            myIndex = index
          }
        })
        likelist.splice(myIndex,1)

        wx.setStorageSync('likelist',likelist)




      }

    }

  }
})
