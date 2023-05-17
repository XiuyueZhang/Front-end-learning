//  Login module
import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'

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
        // 存入toke
        console.log(res.data.data)
        this.token = res.data.data.token
    }
}

export default LoginStore