import { Layout } from 'antd'
import AdminNav from '../nav/AdminNav'

const { Content } = Layout

const AdminLayout = ({ children }) => {
  return (
    <Layout>
      <AdminNav />
      <Layout>
        <Content style={{ padding: '10px', marginTop:'10px' }}>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
