import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import Link from 'next/link'
import ToggleTheme from './ToggleTheme'

const TopNav = () => {
  return (
    <Menu mode='horizontal' defaultSelectedKeys={['cms']}>
      <Menu.Item key='cms' icon={<MailOutlined />}>
        <Link href='/'>
          <a>CMS</a>
        </Link>
      </Menu.Item>
      <Menu.Item key='signup' icon={<AppstoreOutlined />}>
        <Link href='/signup'>
          <a>SignUp</a>
        </Link>
      </Menu.Item>
      <Menu.Item key='signin' icon={<AppstoreOutlined />}>
        <Link href='/signin'>
          <a>SignIn</a>
        </Link>
      </Menu.Item>
      <Menu.SubMenu
        style={{ marginLeft: 'auto' }}
        key='SubMenu'
        title='Dashboard'
        icon={<SettingOutlined />}
      >
        <Menu.ItemGroup title='Managment'>
          <Menu.Item key='setting:1' icon={<AppstoreOutlined />}>
            <Link href='/admin'>
              <a>Admin</a>
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
      <Menu.Item key='toogle'>
        <ToggleTheme />
      </Menu.Item>
    </Menu>
  )
}

export default TopNav
