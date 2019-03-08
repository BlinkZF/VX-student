//index.js
//获取应用实例
import {IndexModel} from "../../models/index.js"
const indexModel = new IndexModel();

Page({
  data: {

  },
  onLoad: function (options) {
    this.getData();
  },
  getData() {
    const articler = indexModel.getArticlerList()
    const recommend = indexModel.getRecommendInfo()
    const markType = indexModel.getMarkTypeList()
    Promise.all([articler, recommend, markType]).then(res => {
      console.log(res);
    })
  }
})