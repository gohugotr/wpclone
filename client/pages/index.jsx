import { useContext } from "react"
import { AuthContext } from "../context/auth"

const Home = () => {

  //context
  const [auth, setAuth] = useContext(AuthContext)

  return (
    <>
      <h2>Home</h2>
      <pre>{ JSON.stringify(auth, null, 4) }</pre>
    </>
  )
}

export default Home
