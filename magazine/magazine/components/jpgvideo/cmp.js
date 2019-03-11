// components/jpgvideo/cmp.js



Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:String,
    poster:String,
    duration:String,
    mainTitle:String,



    videoId: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay(){
      this._toggol()

      this._playVideo()
    },

    onMaskTap(){

      this._toggol()
      this._stopVideo()

    },



  _toggol(){
      
    this.setData({

      showPoster: !this.data.showPoster
    })

  },
  _playVideo(){

    const id = this.properties.videoId

      
    const video = wx.createVideoContext(id, this)

    video.play()
  },



  _stopVideo(){



    const id = this.properties.videoId

      
    const video = wx.createVideoContext(id, this)

    video.stop()
    video.seek(0)

  },

  videoEnd(){
    this._toggol()
  }
















  }
})
