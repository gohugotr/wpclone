import {
  UsergroupAddOutlined,
  ContainerOutlined,
  DesktopOutlined,
  UserSwitchOutlined,
  UserOutlined,
  UserAddOutlined,
  PushpinOutlined,
  SettingOutlined,
  CameraOutlined,
  CommentOutlined,
  BgColorsOutlined,
  FileAddOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import Link from 'next/link'

import { useWindowWidth } from '@react-hook/window-size'

const { Sider } = Layout

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const AdminNav = () => {
  const [collapsed, setCollapsed] = useState(false)

  const [current, setCurrent] = useState('')

  const onlyWidth = useWindowWidth()

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname)
  }, [process.browser && window.location.pathname])

  const activeName = (name) => `${current === name && 'active'}`

  useEffect(() => {
    if (onlyWidth < 800) {
      setCollapsed(true)
    } else if (onlyWidth > 800) {
      setCollapsed(false)
    }
  }, [onlyWidth < 800])

  const items = [
    getItem(
      <Link href='/admin'>
        <a className={activeName('/admin')}>Dashboard</a>
      </Link>,
      '1',
      <SettingOutlined />
    ),
    getItem('Posts', '2', <PushpinOutlined />, [
      getItem(
        <Link href='/admin/post'>
          <a>All Posts</a>
        </Link>,
        '3',
        <DesktopOutlined />
      ),
      getItem(
        <Link href='/admin/post/new'>
          <a className={activeName('/admin/post/new')}>Add New</a>
        </Link>,
        '4',
        <FileAddOutlined />
      ),
      getItem(
        <Link href='/admin/categories'>
          <a className={activeName('/admin/categories')}>Categories</a>
        </Link>,
        '5',
        <ContainerOutlined />
      ),
    ]),
    getItem('Media', '8', <CameraOutlined />, [
      getItem(
        <Link href='/admin/media/library'>
          <a className={activeName('/admin/media/library')}>Library</a>
        </Link>,
        '9',
        <UploadOutlined />
      ),
      getItem(
        <Link href='/admin/media/new'>
          <a className={activeName('/admin/media/new')}>Add New</a>
        </Link>,
        '10',
        <FileAddOutlined />
      ),
    ]),
    getItem(
      <Link href='/admin/comments'>
        <a className={activeName('/admin/comments')}>Comments</a>
      </Link>,
      '11',
      <CommentOutlined />
    ),
    getItem('Users', '14', <UserSwitchOutlined />, [
      getItem(
        <Link href='/admin/users'>
          <a className={activeName('/admin/users')}>All Users</a>
        </Link>,
        '15',
        <UsergroupAddOutlined />
      ),
      getItem(
        <Link href='/admin/users/new'>
          <a className={activeName('/admin/users/new')}>Add New</a>
        </Link>,
        '16',
        <UserAddOutlined />
      ),
    ]),
    getItem(
      <Link href='/admin/userid'>
        <a className={activeName('/admin/userid')}>Profile</a>
      </Link>,
      '17',
      <UserOutlined />
    ),
    getItem(
      <Link href='/admin/customize'>
        <a className={activeName('/admin/customize')}>Customize</a>
      </Link>,
      '18',
      <BgColorsOutlined />
    ),
  ]

  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed)
  // }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => {
        setCollapsed(!collapsed) // Manuel collepse edebilmek için
      }}
    >
      <Menu
        style={{ height: '100vh' }}
        //defaultSelectedKeys={['1']}
        defaultOpenKeys={['2', '8', '14']}
        mode='inline'
        inlineCollapsed={collapsed}
        items={items}
      />
    </Sider>
  )
}

export default AdminNav
