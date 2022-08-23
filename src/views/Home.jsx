import React from 'react'
import Content from '../components/Content'
// import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
// import { LOGOUT } from '../config/routes/paths'


const Home = () => {
  return (
    <div>
      <Navbar/>
      {localStorage.name?null:<h1>Inicia sesion para ver nuestro contenido</h1>}
      {/* <Link to={LOGOUT}>Inicia sesión</Link> */}
      <Content/>
    </div>
  )
}

export default Home
