import instance from "./axios"

/**
 * 获取图书列表
 */
const api={
    Login:function(data){
        console.log('data---',data)
       return instance.request({
           url: "/api/login",
           contentType: "application/json; charset=utf-8",
           method: "post",
           data, // 请求类型为 post 时
        //    params: data // 请求类型为 get 时
       })
    },
    Works:function(data){
        console.log('data---',data)
        return instance.request({
                url: "/api/worksList",
                contentType: "application/json; charset=utf-8",
                method: "post",
                data, // 请求类型为 post 时
                //    params: data // 请求类型为 get 时
        })
    }
}

export default api