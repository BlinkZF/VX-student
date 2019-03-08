// components/nineImage/nineImage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrl: [
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=981257135,247768947&fm=26&gp=0.jpg",
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2504804117,2736704576&fm=26&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4067466954,1579411334&fm=26&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1338150693,3726746987&fm=26&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3073572701,3643789545&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2284948024,1774133143&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2041995480,3226063697&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2671529511,1947244718&fm=26&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4067466954,1579411334&fm=26&gp=0.jpg",
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=981257135,247768947&fm=26&gp=0.jpg",
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2504804117,2736704576&fm=26&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4067466954,1579411334&fm=26&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1338150693,3726746987&fm=26&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3073572701,3643789545&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2284948024,1774133143&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2041995480,3226063697&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2671529511,1947244718&fm=26&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4067466954,1579411334&fm=26&gp=0.jpg"
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      wx.previewImage({
        urls:this.data.imgUrl,
        current: e.currentTarget.id, //设置从哪个图片开始预览
      })
    }
  }
})