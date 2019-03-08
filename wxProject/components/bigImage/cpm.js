// components/bigImage/cpm.js
Component({
  /**
   * 组件的属性列表
   */
  properties: { //当properties与data中有同名，优先侠士properties中的数据
    imgSrc:String,
    minTitle:String,




    // imgSrc: {
    //   type: String,
    //   value: "https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1830667072.jpg",
    //   observer: function (newVal,odlVal,changePath) {//当数据变化的时候，会触发这个函数
    //     console.log(newVal,odlVal,changePath)
    //   },
    // },
    // minTitle:{
    //   type: String,
    //   value: "14年经典端游IP改编,震撼上线!诠释超大自由立体空间 畅快陆海..",
    //   observer: function () {},
    // },
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

  }
})