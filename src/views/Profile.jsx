import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { LOGOUT } from '../config/routes/paths'
import styled from 'styled-components'

const Div = styled.div`
  width:100%;
  text-align:center;
`;
// const Content = styled.div``;
const InfoUser = styled.div`
  width:50%;
  margin:9em;
  text-align:end;
  color:#838485;
  h1{
    color:#ff3d3d;
  }
  b{
    color:#6b6b6b;
  }


`;
// const Div = styled.div``;
// const Div = styled.div``;

const Profile = () => {

  console.log(localStorage)
  return (
    <Div>
      <Navbar/>
      <InfoUser>
        <h1>Ruta privada</h1>
        <p>Hola <b>{localStorage.name}</b>, que bueno es verte de nuevo! 🚀🚀</p>
        <p>Cuenta creada: <b>{localStorage.createdAt}</b></p>
        <p>{localStorage.email}</p>
        <p>tipo de cuenta: <b>{localStorage.role}</b></p>

      </InfoUser>

      {localStorage.role === "admin"&&
        <h2>componente Admin</h2> }
      {localStorage.role === "admin"&&
        <Link to={'/profile/put-content'}>Cambiar/Actualizar contenido<br/></Link>}
      {localStorage.role === "admin"&&
        <Link to={'/profile/create-content'}>Crear contenido<br/></Link>}
      {localStorage.role === "admin"&&
        <Link to={'/profile/put-user'}>Cambiar/Actualizar usuario<br/></Link>}
      {localStorage.role === "admin"&&
        <Link to={'/profile/create-user'}>Crear usuario<br/></Link>}
      <Link to={LOGOUT} ><button type="button" class="btn btn-outline-danger" Style='margin:1em;'>Cerrar sesión</button></Link>
    </Div>
  )
}

export default Profile
