import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined, LogoutOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Popconfirm } from 'antd';
import { useState } from 'react';
import './index.scss'

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Data Display', 'sub1', <UserOutlined />, [
    getItem('sub1', '3'),
    getItem('sub2', '4'),
    getItem('sub3', '5'),
  ]),
  getItem('Content Management', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Post Article', '9', <FileOutlined />),
];

const Homepage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className='container'>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='demo-logo-vertical' />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'relative',

          }}>
          <span className='user-name'>user.name</span>
          <span className='user-logout'>
            <Popconfirm title="Do you confirm to log out?" okText="Logout" cancelText="cancel">
              <LogoutOutlined/> Log out
            </Popconfirm>
          </span>
        </Header>
        <Content className='content'>
          <Breadcrumb className='breadcrumb'>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Content here
          </div>
        </Content>
        <Footer className='footer'
        >
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Homepage;