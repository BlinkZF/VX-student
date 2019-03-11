// pages/index/index.js
import {Request} from "../../utils/request.js"
import { random } from "../../utils/randomStr.js";
const request = new Request()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    RecommendInfo:{},
    MarkTypeList: [],
    IndexArticleLis: [],

    getmore:'',
    magazineId:0,

    loading:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
   


  },

  onNav(e){
    
    const magazineId = e.detail.index
    this.setData({
      magazineId:magazineId,
      RecommendInfo:{},
      MarkTypeList: [],
      IndexArticleLis: [],

    })
    this.getData()
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  },


  getData(){
    var magazineId = this.data.magazineId
    var start = 0
    const getRecommendInfo = request.getData({
      url:`/getRecommendInfo/${magazineId}`
    }).then(res => {
      this.setData({
  
        RecommendInfo: res
      })
    })


    const getMarkTypeList = request.getData({
      url:`/getMarkTypeList/${magazineId}`
    }).then(res => {
      this.setData({
       
        MarkTypeList: res
   
      })
    })


    const getIndexArticleLis = request.getData({
      url:`/getIndexArticleList/${magazineId}/${start}`
    }).then(res => {
      this.setData({
        IndexArticleLis: res,
      })
    })

    Promise.all([getIndexArticleLis, getMarkTypeList, getRecommendInfo]).then(res => {


      
      this.hideloading()
    })
  },
  hideloading(){
    this.setData({
      loading:false
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      getmore: random(20)
    })
    

  },


})