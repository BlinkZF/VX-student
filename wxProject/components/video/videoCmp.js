// components/video/videoCmp.js
Component({

  //组件的属性列表
  properties: {
    src: String,
    poster: String,
    duration: String,
    mainTitle: String,
    videoId: String
  },

  data: {
    showPoster: false
  },

  lifetimes: {
    attached() {
      this.getVideoInfo()
    },
  },

  //组件的方法列表
  methods: {
    onPlay(e) {
      this._toggleVideoPoster()
      this.video.play();
    },
    onMaskTap(e) {
      this._toggleVideoPoster()
      this.video.seek(0);
      this.video.stop();
    },
    onVideoEnd() {
      this._toggleVideoPoster();
    },
    _toggleVideoPoster() {
      this.setData({
        showPoster: !this.data.showPoster
      })
    },
    getVideoInfo() {
      const Id = this.properties.videoId;
      this.video = wx.createVideoContext(Id, this)
    },
  }
})