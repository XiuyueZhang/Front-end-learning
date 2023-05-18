import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Layout from '@/pages/Layout'
import 'antd/dist/reset.css';
import {AuthComponent} from '@/components/AuthComponent'



function App() {
  return (
    // 路由配置
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 创建路由path和组件的对应关系 */}
          {/* 需要鉴权组件layout */}
          <Route path='/' element={
            <AuthComponent>
              <Layout />
            </AuthComponent> 
          }></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
