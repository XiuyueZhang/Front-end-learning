//  Login module
import { makeAutoObservable } from 'mobx'
import { http, setToken, getToken, removeToken } from '@/utils'

class LoginStore {
    token = getToken() || ''

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

        this.token = res.data.token
        // 存入localStorage
        setToken(this.token)
    }

    clearToken = () => {
        removeToken()
        this.token = ''
    }
}

export default LoginStore