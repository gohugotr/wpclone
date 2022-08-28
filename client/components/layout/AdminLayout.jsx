import { Layout } from "antd";
import AdminNav from "../nav/AdminNav";

const { Sider, Content } = Layout;


const AdminLayout = ({children}) => {
    return (
      <Layout>
       <AdminNav/>
        <Layout>
          <Content >
            {children}
          </Content> 
        </Layout>
      </Layout>
    )
}

export default AdminLayout