import React, { useState } from 'react'
// import axios from 'axios';
import {useAuthContext} from '../contexts/authContext'


import styled from 'styled-components'


const Div = styled.div`
width:50%;

`;

const Login = () => {
    const {login} = useAuthContext();

    const [data, setData] = useState({
        email:"",
        password:""
    })

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        let newdata = { 
            ...data,
            [name]:value
        }
        setData(newdata);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        // let result = await axios.post("http://localhost:3000/signin",data)
        login(data);
        // await axios.post("http://localhost:3000/signin" , data , {withCredentials: true}  )//{ withCredentials: true }
        // .then((c)=>{
        //     axios.defaults.headers.common['Authorization']=`Bearer ${c.data['token']}`;
        //     console.log("c", c.data['token']);
            
        // })

        // console.log(result.data)

    }

  return (
    <Div>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" onChange={handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" onChange={handleInputChange} className="form-control" id="exampleInputPassword1" name="password" value={data.password}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      
    </Div>
  )
}

export default Login
