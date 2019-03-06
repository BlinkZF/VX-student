// 请求接口
var baseUrl = "https://www.easy-mock.com/mock/5c7dd7689a73e31352e880bd/example";

function request(params) {
    wx.request({
        url: baseUrl + params.url,
        success: function (res) {
            if (res.statusCode == 200) {
                params.success(res.data.data)
            } else {
                showError()
            }
        },
        fail: function () {
            showError()
        }
    })
}

function showError() {
    wx.showToast({
        totle: "请求错误",
        icon: "none"
    })
}

module.exports = request