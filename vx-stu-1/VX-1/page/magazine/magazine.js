// page/magazine/magazine.js
Page({
  /**
   * 页面的初始数据
   */
  data: { //将所有需要的数据都放在这，直接就可以在wxml中使用数据
    likeList: {
      0: true,
      1: true,
      2: true,
      3: true,
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHomeData()
    this.getLikeData()
  },

  getLikeData: function () {
    // 1：先获取数据中的likeList缓存
    // 如果没有缓存  则将其设置为{}
    // 2：通过缓存设置数据中的likeList
    // tap事件==》获得点击文章的索引，然后将对应的值取出来，最后取反，重新设置likelist   重新设置缓存
    var likeListStorage = wx.getStorageSync("likeList")
    if (!likeListStorage) {
      likeListStorage = {}
    }
    this.setData({
      likeList: likeListStorage
    })
  },

  // 点击切换函数
  changShow: function (val) {
    var index = val.currentTarget.dataset.articleindex;
    var likeList = this.data.likeList
    var islist = likeList[index];
    likeList[index] = !islist;
    this.setData({
      likeList: likeList
    })
    // 设置同步缓存
    wx.setStorageSync("likeList", likeList)
  },

  // 请求数据
  getHomeData() {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5c7dd7689a73e31352e880bd/example/example',
      success: function (res) {
        that.setData({
          recommend: res.data.data,
        })
      }
    })
  },
  onArticleTypeTap(val) {

    var typeID = val.currentTarget.dataset.articletypeid
    wx.navigateTo({
      url: '/page/type/type?typeID=' + typeID
    })
  },
  /*
   *知识点：
   *currentTarget :事件绑定的当前组件
   *Target :触发事件的原组件  
   *是将冒泡的实质上是，事件在子元素上触发的(事件源对象)。但是真正执行的时候是在父元素上执行的(执行事件对象),
   */
  // 点击不同的模块  弹出的列表不一样
  onMoreTap(val) {
    if (val.currentTarget.dataset.articletitle == "灯红酒绿的酒吧街！") {
      wx.showActionSheet({
        itemList: ['点赞一下', '浪迹天涯', '为博主加油'],
        success: function (res) {}
      })
    } else {
      wx.showActionSheet({
        itemList: ['点赞一下', '浪迹天涯', '回不去的青春'],
        success: function (res) {}
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})