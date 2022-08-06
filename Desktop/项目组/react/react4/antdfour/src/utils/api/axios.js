import axios from 'axios'
import { message } from 'antd';
//创建axios实例
var instance = axios.create({
    timeout: 1000 * 12
})

let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;

let removePending = (ever) => {
    console.log('ever',ever,'pending',pending)
    for(let p in pending){
        if(pending[p].u === ever.url + '&' + ever.method) { //当当前请求在数组中存在时执行函数体
            pending[p].f(); //执行取消操作
            pending.splice(p, 1); //把这条记录从数组中移除
        }
    }
}  


//设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//请求拦截器
instance.interceptors.request.use(
    config => {
        console.log('config--',config)
        if(!window.navigator.onLine){//断网的时候调用
            message.error('您的网络断网了！！')
        }else{
            removePending(config); //在一个ajax发送前执行一下取消操作
            config.cancelToken = new cancelToken((c)=>{
                // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
                console.log('----lalala啦啦啦',config.url,config.method)
                pending.push({ u: config.url + '&' + config.method, f: c });  
             });
            const passURL = ['/api/login','/api/register'];
            if(passURL.includes(config.url)) return config;
            
            // const tk = localStorage.getItem('@#@TOKEN');
            const tk = sessionStorage.getItem('@#@TOKEN');
            if(tk){
                config.headers.Authorization = 'Bearer '+tk
            }else{
                delete config.headers.Authorization;
            }
          
    
      
            return config;
        }

    },
    error => Promise.reject(error)
)
//响应拦截器
instance.interceptors.response.use(
    res => {
        removePending(res.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
        console.log('res',res)
        //请求结束就从pendingRequest删除请求标志
        // CancelTokenResponse(res.config);
        return res.status === 200 ? Promise.resolve(res) : Promise.reject(res);
    },
    error => {
        const { response } = error;
        //请求已经发出，返回结果不在2xx的范围
        if (response) {
            // CancelTokenResponse(response.config);
            // errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            //断网情况,刷新重新获取数据
            if (!window.navigator.onLine) {
                // store.commit('changeNetwork', false);
            } else {
                return Promise.reject(error);
            }
        }
    }
)

export default instance;