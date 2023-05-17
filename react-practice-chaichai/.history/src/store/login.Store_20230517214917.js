//  Login module
import { makeAutoObservable } from 'mobx'

class LoginStore {
    token = ''

    constructor(){
        // 响应式
        makeAutoObservable(this)
    }

    getToken = async ({ mobile, code}) => {
        // 调用http接口
        const res = await http.post('http://geek.itheima.net/v1_0/authorizations',{
            mobile,
            code
        })
        // 存入token
        this.token = res.data
    }
}

export default LoginStore