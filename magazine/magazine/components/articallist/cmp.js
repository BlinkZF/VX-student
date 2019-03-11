// components/articallist/cmp.js
import {Request} from "../../utils/request.js"
const request = new Request()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articalList:{
      type: Array,
      value:[],
      observer(){
     
      }
    },

    more:{
      type: String,
      value:'',
      observer:'lodMore'
    },
    magazineId:{
      type:Number,
      value:0,
      observer:'hasmoredata'
    },
    word:String
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading:false,
    noMoreData:false,
    type:''
  },

  attached(){
    const curPages = getCurrentPages()
    const index = curPages.length - 1

    let type = ''

    if(curPages[index].route === 'pages/search/search'){
      type = 'search'

    }else{
      type = 'index'

    }
    this.setData({
      type
    })
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    lodMore(){

      

      if(this.data.loading||this.data.noMoreData){
        return
      }


      this.setData({
        loading:true
      })
      if(this.data.type === 'search'){

      }else{
        const magazineId = this.properties.magazineId
      const start = this.properties.articalList.length


      request.getData({
        url:`/getIndexArticleList/${magazineId}/${start}`
      }).then(res => {

        const combinelist = this.data.articalList.concat(res)
        if(combinelist.length == this.data.articalList.length){

          this.setData({
            noMoreData:true
          })
          return
        }
        

        console.log(res)
        this.setData({
          articalList: combinelist,


          loading:false
        })
      })

      }

      
    },
    hasmoredata(){
      this.setData({
        noMoreData:false
      })
    }

  }
})
