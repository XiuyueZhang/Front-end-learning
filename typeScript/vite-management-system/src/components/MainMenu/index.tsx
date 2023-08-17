import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('About', '/about', <FileOutlined />),
];

const MainMenu: React.FC = () => {

    const [openKeys, setOpenKeys] = useState([""]);
    const navigateTo = useNavigate();


    const menuClick = (e: { key: string }) => {
        navigateTo(e.key)
    }

    const handleOpenChange = (keys: string[]) => {
        // setOpenKeys to the one user clicked
        setOpenKeys([keys[keys.length - 1]])
    }

    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={['/home/page1']}
            mode="inline"
            items={items}
            onClick={menuClick}
            onOpenChange={handleOpenChange}
            openKeys={openKeys} />
    )
    
}

export default MainMenu;

