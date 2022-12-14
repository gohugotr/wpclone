import React, { useState, useContext } from 'react'
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Row, Col } from 'antd'
import Link from 'next/link'
import axios from 'axios'
import toast from 'react-hot-toast'
import { AuthContext } from '../context/auth'
import { useRouter } from 'next/router'

const Signup = () => {
  // context
  const [auth, setAuth] = useContext(AuthContext)
  //router
  const router = useRouter()
  // state
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    // console.log('Received values of form: ', values)
    setLoading(true)
    try {
      //  const { data } = await axios.post('http://localhost:8000/api/signup', values)
      //  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/signup`, values)

      // client/context/auth.jsx AuthProvider fonksiyonunda axios için base_url ayarlandı.
      // Böylece url kısaldı.
      const { data } = await axios.post('/signup', values)

      //console.log('data =>', data)
      if (data?.error) {
        toast.error(data.error)
        setLoading(false)
      } else {
        // context'e kaydet
        setAuth(data)
        // local storage'ye kaydeder.
        localStorage.setItem('auth', JSON.stringify(data))

        toast.success('Kullanıcı başarıyla kaydedildi.')
        setLoading(false)

        // redirect
        router.push('/admin')
      }
    } catch (error) {
      toast.error('Signup başarısız oldu. Try again')
      console.log(error)
      setLoading(false)
    }
  }
  return (
    <Row>
      <Col span={8} offset={8}>
        <h1 style={{ paddingTop: '100px' }}>SignUp</h1>

        <Form
          name='normal_login'
          className='login-form'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          {/* Name */}
          <Form.Item
            name='name'
            rules={[
              {
                required: true,
                message: 'Please input your Name!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Name' />
          </Form.Item>

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
          {/* Password confirm */}
          <Form.Item
            name='confirm'
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }

                  return Promise.reject(
                    new Error('The two passwords that you entered do not match!')
                  )
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Confirm Password'
            />
          </Form.Item>

          {/* SignUp Button */}
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
              loading={loading}
            >
              Signup
            </Button>
            <br />
            Or
            <Link href='/signin'>
              <a> Login now!</a>
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default Signup
