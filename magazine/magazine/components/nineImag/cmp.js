// components/nineImag/cmp.js
var myBehavior = require('../behavior/my-behavior')
Component({
  /**
   * 组件的属性列表
   */
   behaviors: [myBehavior],
  properties: {
    imagArr:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    imagArr:[
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg",
      "https://gss0.baidu.com/7051cy89RMgCncy6lo7D0j9wexYrbOWh7c50/activityofmoney/moneypc.jpg"

    ]
      
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ontap(e){
      const index = e.currentTarget.dataset.index
      const array = this.data.imagArr 

      wx.previewImage({
        current: 'array[index]', 
        urls: array
      })



    }

  }
})
