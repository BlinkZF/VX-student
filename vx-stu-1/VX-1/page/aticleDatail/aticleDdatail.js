// page/aticleDatail/aticleDdatail.js
var request = require('../utils/request.js')
Page({
  //页面数据初始化
  data: {
    aticleDdatail: {},
    danmuList: [{
        text: "好嗨哦111",
        color: "red",
        time: 12
      },
      {
        text: "好嗨哦222",
        color: "red",
        time: 12
      }
    ],
    playing: false,
    audioCurTime: 0, //歌曲的播放位置
    progressPercent: 0, //进度百分比
    progressPercentLeft: 0, //进度的距离
    progressWidth: 500, //进度条的宽度
    audioCircleOriginonX: 0, //手指滑动的初始位置
    audioCircleMoveX: 0, //手指滑动到的目标位置
    getAudioOrigionFlag: false,
  },

  //生命周期函数--监听页面加载
  onLoad: function (options) {
    this.getData(options.aticleDdatailID);
    this.getPhoneRadio()
  },
  // 播放音乐
  audioPlay: function () {
    const audio = wx.getBackgroundAudioManager()
    audio.title = "此时此刻";
    audio.src = this.data.aticleDdatail.media;
    this.listenAudioPlay()
    this.updataAudioData()
  },
  // 播放音乐
  onAudioPlay: function () {
    const audio = wx.getBackgroundAudioManager()
    var playing = this.data.playing
    if (playing) {
      audio.pause()
    } else {
      this.audioPlay()
    }
    this.setData({
      playing: !playing
    })

  },

  // 监听音乐播放事件
  listenAudioPlay: function () {
    const audio = wx.getBackgroundAudioManager()
    var that = this;
    // 监听音乐播放
    audio.onPause(function () {
      that.setData({
        playing: false
      })
    })
    audio.onStop(function () { //监听音乐中断
      that.setData({
        playing: false
      })
    })
    audio.onEnded(function () { //监听音乐自然结束
      that.setData({
        playing: false
      })
    })
    audio.onPlay(function () { //监听音乐播放
      that.setData({
        playing: true
      })
    })
  },

  //进度条
  updataAudioData: function () {
    var that = this;
    const audio = wx.getBackgroundAudioManager()
    var audioDuration = that.data.aticleDdatail.durition; //获取音频总时间
    audio.onTimeUpdate(function () {
      var audioCurTime = audio.currentTime.toFixed(); //获取播放时间位置
      var percent = audioCurTime / audioDuration;
      var progressPercent = percent * 100; //进度百分比
      var progressPercentLeft = percent * 500; //小圆点前进距离
      that.setData({
        audioCurTime: audioCurTime,
        progressPercent: progressPercent,
        progressPercentLeft: progressPercentLeft
      })
    })
  },

  onAudioCircleStart: function (e) {
    var audioCircleOriginonX = e.touches[0].pageX * this.getPhoneRadio()
    if (!this.data.getAudioOrigionFlag) {
      this.setData({
        audioCircleOriginonX: audioCircleOriginonX,
        getAudioOrigionFlag: true
      })
    }
  },
  onAudioCircleMove: function (e) {
    const audio = wx.getBackgroundAudioManager()
    var audioCircleOriginonX = this.data.audioCircleOriginonX
    var audioCircleMoveX = e.touches[0].pageX * this.getPhoneRadio();
    var progressPercentLeft = audioCircleMoveX - audioCircleOriginonX
    if (progressPercentLeft >= this.data.progressWidth) {
      progressPercentLeft = 500
    } else if (progressPercentLeft < 0) {
      progressPercentLeft = 0
    } else {
      progressPercentLeft = progressPercentLeft
    }
    var progressPercent = progressPercentLeft / this.data.progressWidth * 100; //获取比率
    var audioCurTime = progressPercentLeft / this.data.progressWidth * this.data.aticleDdatail.durition;

    this.audioPlay()
    audio.seek(Number(audioCurTime));
    this.setData({
      audioCurTime: audioCurTime.toFixed(),
      progressPercent: progressPercent,
      progressPercentLeft: progressPercentLeft
    })
  },

  // 获取机型数据
  getPhoneRadio: function () {
    var Radio = 0
    wx.getSystemInfo({
      success: function (res) {
        Radio = 750 / res.screenWidth;
      }
    })
    return Radio;
  },




  // 请求数据
  getData: function (id) {
    var that = this;
    request({
      url: "/" + id,
      success: function (res) {
        console.log(res);
        that.setData({
          aticleDdatail: res
        })
      }
    })
  },
})