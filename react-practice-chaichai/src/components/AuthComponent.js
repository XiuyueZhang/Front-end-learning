// 判断token是否存在
// 如果存在，正常render
// 如果不存在，重定向到登录路由

// 高阶组件：把一个组件单层另外一个组件的参数传入，
// 然后通过一定的判断，返回新的组件
// children参数，组件内部写的全部都在children里面



import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

function AuthComponent({ children }) {
    const isToken = getToken()
    if (isToken) {
        return <> {children} </>
    } else {
        // 重定向 Navigate 中的 to 属性
        return <Navigate to="/login" replace></Navigate>
    }
}

export { AuthComponent }