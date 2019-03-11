import {Request} from "../utils/request.js"

class IndexModel extends Request{
    getArticalList() {
        return this.getData({
            url:'/getIndexArticleList/0/0'
        })
    }

    getMarkList(){
        return this.getData({
            url: '/getMarkTypeList/0'
        })
    }
    getRecomendInfo(){
        return this.getData({
            url:'/getRecommendInfo/0'  
        })
    }

}
export {IndexModel}