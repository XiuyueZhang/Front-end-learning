import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Page1', '/home/page1', <PieChartOutlined />),
    getItem('Page2', '/home/page2', <DesktopOutlined />),
    getItem('Team', '/team', <TeamOutlined />, [
        getItem('Sunny', '/team/admin'),
        getItem('Leo', '/team/user'),
    ]),
    getItem('User', 'sub2', <UserOutlined />, [
        getItem('Team 1', '6'), getItem('Team 2', '8')
    ]),
    getItem('About', '/about', <FileOutlined />),
];

const MainMenu: React.FC = () => {

    
    const navigateTo = useNavigate();
    const currentRoute = useLocation();

    let firstOpenKey: string = "";
    const segments = currentRoute.pathname.split("/")
    firstOpenKey = segments.slice(0, -1).join("/");

    const [openKeys, setOpenKeys] = useState([firstOpenKey]);

    const menuClick = (e: { key: string }) => {
        navigateTo(e.key)
    }

    const handleOpenChange = (keys: string[]) => {
        // setOpenKeys to the one user clicked item
        setOpenKeys([keys[keys.length - 1]])
    }

    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            onOpenChange={handleOpenChange}
            openKeys={openKeys} 
        />
    )
    
}

export default MainMenu;

