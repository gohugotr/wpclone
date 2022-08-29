import React from 'react'
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Row, Col } from 'antd'
import Link from 'next/link'

const Signin = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
  return (
    <Row>
      <Col span={8} offset={8}>
        <h1 style={{ paddingTop: '100px' }}>Signin</h1>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >

          {/* E-mail */}
          <Form.Item
            name='email'
            hasFeedback
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input prefix={<MailOutlined className='site-form-item-icon' />} placeholder='E-mail' />
          </Form.Item>

          {/* Password */}
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>

          {/* Forgot Password */}
          <Link href='/forgot-password'>
            <a> Forgot Password!</a>
          </Link>
          <br />
          <br />

          {/* SignUp Button */}
          <Form.Item>
            <Button type='primary' htmlType='submit' className='login-form-button'>
              Signin
            </Button>
            <br />
            Or
            <Link href='/signup'>
              <a> Register now!</a>
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default Signin
