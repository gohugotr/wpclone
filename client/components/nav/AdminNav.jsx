import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import Link from 'next/link'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const items = [
  getItem(
    <Link href='/admin'>
      <a>Dashboard</a>
    </Link>,
    '1',
    <PieChartOutlined />
  ),
  getItem('Posts', 'sub1', <MailOutlined />, [
    getItem(
      <Link href='/admin/posts'>
        <a>All Posts</a>
      </Link>,
      '2',
      <DesktopOutlined />
    ),
    getItem(
      <Link href='/admin/posts/new'>
        <a>Add New</a>
      </Link>,
      '3',
      <ContainerOutlined />
    ),
    getItem(
      <Link href='/admin/categories'>
        <a>Categories</a>
      </Link>,
      '4',
      <ContainerOutlined />
    ),
  ]),
  getItem('Media', 'sub2', <MailOutlined />, [
    getItem(
      <Link href='/admin/media/library'>
        <a>Library</a>
      </Link>,
      '5'
    ),
    getItem(
      <Link href='/admin/media/new'>
        <a>Add New</a>
      </Link>,
      '6'
    ),
  ]),
  getItem(
    <Link href='/admin/comments'>
      <a>Comments</a>
    </Link>,
    '7',
    <DesktopOutlined />
  ),
  getItem('Users', 'sub3', <MailOutlined />, [
    getItem(
      <Link href='/admin/users'>
        <a>All Users</a>
      </Link>,
      '8'
    ),
    getItem(
      <Link href='/admin/users/new'>
        <a>Add New</a>
      </Link>,
      '9'
    ),
  ]),
  getItem(
    <Link href='/admin/userid'>
      <a>Profile</a>
    </Link>,
    '10',
    <AppstoreOutlined />
  ),
  getItem(
    <Link href='/admin/customize'>
      <a>Customize</a>
    </Link>,
    '11',
    <AppstoreOutlined />
  ),
]

const { Sider } = Layout

const AdminNav = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Sider collapsible>
      <Menu
        style={{ height: '100vh' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1', 'sub2', 'sub3']}
        mode='inline'
        inlineCollapsed={collapsed}
        items={items}
      />
    </Sider>
  )
}

export default AdminNav
