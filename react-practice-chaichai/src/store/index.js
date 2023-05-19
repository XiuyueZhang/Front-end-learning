// 所有模块统一处理
// 导出统一的方法 useStore
import LoginStore from "./login.Store";
import React from 'react'
import UserStore from "./user.Store";

class RootStore {
    constructor(){
        this.loginStore = new LoginStore()
        this.userStore = new UserStore()
    }
}

// 实例化RootStore
const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }