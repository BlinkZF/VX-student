import {Request} from "../utils/request.js"
class IndexModel extends Request { //继承request上的方法
    getArticlerList() {
        return this.getData({
            url: "/getIndexArticleList/0/0"
            // method:'POST',
            // data:{
            //   name:"shan",
            //   age:18
            // }
        })
    }
    getRecommendInfo() {
        return this.getData({
            url: "/getRecommendInfo/0"
        })
    }
    getMarkTypeList() {
        return this.getData({
            url: "/getMarkTypeList/0"
        })
    }
}
export {
    IndexModel
}

// 
