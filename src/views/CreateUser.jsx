import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Navbar from '../components/Navbar';
import { helpCreate } from '../helps/helpUser';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Div = styled.div`
    width:50%;
    margin:3em auto;
    // text-align: center;
    select{
        margin-bottom:1em;
    }

`;

const CreateUser = () => {
    let navigate = useNavigate();

    const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
        roleId:'',
    })

    const onChange = (e)=>{
        e.preventDefault()
        setData( {
            ...data,
            [e.target.name]: e.target.value
        }) 
    }
    const onSubmit = async(e)=>{
        e.preventDefault()

        if(!data.name || !data.email || !data.password || !data.roleId) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se solicitan campos!',
                
              })

        }if (data.password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'la contraseña debe ser mayor o igual a 6 caracter',
                
              })
        }
        
        else{
        
            helpCreate(data);
            navigate('/profile/home')

        // const config = {
        //     headers: { Authorization: `Bearer ${localStorage.token}` }
        // };

        // await axios.post(`http://localhost:3000/user/create`,data,config )//{ withCredentials: true }
        // .then((c)=>{
        //     axios.defaults.headers.common['Authorization']=`Bearer ${c.data['token']}`;
        //     console.log("cDeOnsubmit", c.data);
            
        // })
        }
        
        

    }  
  return (
    <div>
        <Navbar/>
        <Div>
            <form  onSubmit={onSubmit}>

                
                <div class="col-md-5 mb-3">
                    <input type="text" onChange={onChange}  value={data.name} name="name" class="form-control" id="validationCustom01" placeholder='Nombre' required />
                </div>
                <div className="col-md-5 mb-3">
                    <input type="email" onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email} placeholder='Email' required/>
                </div>
                <div className="col-md-5 mb-3">
                    <input type="password" onChange={onChange} className="form-control" id="exampleInputPassword1" name="password" value={data.password} placeholder='Password' required/>
                </div>

                <select name="roleId" onChange={onChange} class="form-select form-select-sm" aria-label=".form-select-sm example" Style={'width:50%;'}>
                    <option selected>Selecciona un role</option>
                    <option  name="roleId" value="1">Admin</option>
                    <option  name="roleId" value="2">User</option>
                    <option  name="roleId" value="3">User Menor</option>
                    
                </select>
            
                
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </Div>

      
    </div>
  )
}

export default CreateUser
