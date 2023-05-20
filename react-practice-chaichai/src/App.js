import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Navi from '@/pages/Layout'
import 'antd/dist/reset.css';
import {AuthComponent} from '@/components/AuthComponent'
import Publish from './pages/Publish';
import Article from './pages/Article';
import Home from './pages/Home';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from '@/utils/history'


function App() {
  return (
    // 路由配置
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          {/* 创建路由path和组件的对应关系 */}
          {/* 需要鉴权组件layout */}
          <Route path='/' element={
            <AuthComponent>
              <Navi />
            </AuthComponent> 
          }>
            <Route index element={<Home />}></Route>
            <Route path='article' element={<Article />}></Route>
            <Route path='publish' element={<Publish />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </HistoryRouter>
  );
}

export default App;
