import { DiffOutlined, EditOutlined, LogoutOutlined, HomeOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Popconfirm } from 'antd';
import { useState, useEffect } from 'react';
import './index.scss'
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useStore } from '@/store';
import UserStore from '@/store/user.Store';
import { observer } from 'mobx-react-lite';


const { Header, Content, Footer, Sider } = Layout;


const Navi = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { pathname } = useLocation()
  // 执行副作用：调用接口请求
  const { userStore } = useStore()
  useEffect(() => {
    const getUserInfo = async () => {
      await userStore.getUserInfo()
    }
  },[userStore]) 
  


  return (
    <Layout className='container'>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='demo-logo-vertical' />
        {/* 高亮 defaultSelectedKeys === item key */}
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[pathname]}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item icon={<HomeOutlined />} key="/">
            <Link to="/">Data</Link>
          </Menu.Item>
          <Menu.Item icon={<DiffOutlined />} key="/article">
            <Link to="/article">Content</Link>
          </Menu.Item>
          <Menu.Item icon={<EditOutlined />} key="/publish">
            <Link to="/publish">Publish</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'relative',

          }}>
          <div className='header-ul'>
            <span className='user-name'></span>
            <span className='user-logout'>
              <Popconfirm title="Do you confirm to log out?" okText="Logout" cancelText="cancel">
                <LogoutOutlined /> Log out
              </Popconfirm>
            </span>
          </div>
        </Header>
        <Content className='content'>

          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Layout className='layout-content' style={{ padding: 20 }}>
              {/* 二级路由出口 */}
              <Outlet></Outlet>
            </Layout>
          </div>
        </Content>
        <Footer className='footer'
        >
        </Footer>
      </Layout>
    </Layout>
  );
};

export default observer(Navi);