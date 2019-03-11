class SubscribeModel {
    setMyTaglist(value) {
        wx.setStoragesync('markTaglist', value);
    }
}
