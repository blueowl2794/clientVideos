import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import CardUser from '../components/CardUser'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Swal from 'sweetalert2'
import { getUsers, getRoles } from '../store/reducer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { helpPut, helpDelete } from '../helps/helpUser';  
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  width:100%;
  // display:flex;
  // flex-direction:column;
  // justify-content:center;
  align-items:center;
  text-align:center;
  margin:0em auto;
  h1{
    color:#ff4f4f;
  }
  div{
    margin:1em auto ;
    padding:2em auto;
  }
`;
const SubForm = styled.div`
  width:50%;
  // display:flex;
  // flex-direction:column;
  // justify-content:center;
  align-items:center;
  text-align:center;
  margin:0em auto;
  div{
    margin-bottom:1em;
  }
  select{
    margin-bottom:1em;
  }
  
`;


const PutUser = () => {
    const { users } = useSelector(state => state.info);
    const { roles } = useSelector(state => state.info);

    const dispatch = useDispatch();

    const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
        roleId:'',
    })
    const [id, setId] = useState("")
    let navigate = useNavigate();

    useEffect(() =>{
        dispatch(getUsers());
        dispatch(getRoles());
        
    },[]) 

   
    const valida = /\s/

    const onChange = (e)=>{
        e.preventDefault()
        setData( {
            ...data,
            [e.target.name]: e.target.value
        }) 
    }

    const onSubmit = async(e)=>{
        e.preventDefault()
        if (!data.roleId) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se solicita rol!',
              })
        }if (data.password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La contraseña debe ser mayor o igual a 6 caracteres!',
              })
            
        }if (valida.test(data.name)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El nombre no puede terner espacios ni caracteres distintos a letras!',
              })
        }
        else{
            helpPut(data,id)
            navigate('/profile/home')
        } 
    }  

    const onClick = async(e)=>{
        e.preventDefault()
        if (!id){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se solicita un usuario!',
              })
        }else{
            helpDelete(id)
            navigate('/profile/home')
        }
    } 

  return (
    <div>
        <Navbar/>
        <Div>
            <h1>Selecciona un usuario</h1>
            <div>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={4}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    >

                        {users?users.map(i=>(
                            <SwiperSlide key={"i.id"}>
                            <CardUser ey={i.id} props ={i} setId={setId}/>
                            </SwiperSlide>
                        )):null}
                        
                </Swiper>

            </div>
        </Div>
        <SubForm>
            <form  onSubmit={onSubmit}>

                <select name="roleId" onChange={onChange} class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Selecciona un role</option>
                    {
                    roles?roles.map(i=><option  name="roleId" value={i.id}>{i.role}</option>):null 
                    } 
                </select>

                <div class="col-md-4">
                    <input type="text" onChange={onChange}  value={data.name} name="name" class="form-control" id="validationCustom01"  placeholder='Nombre' required/>
                </div>

                <div className="mb-3">
                    <input type="email" onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email} placeholder='Email' required/>
                </div>

                <div className="mb-3">
                    <input type="password" onChange={onChange} className="form-control" id="exampleInputPassword1" name="password" value={data.password} placeholder='password'/>
                </div>

            
                
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </SubForm>


        <button onClick={onClick} class="btn btn-outline-danger" Style='margin-left:18%; margin-top:5em;'>Delete</button>
      
    </div>
  )
}

export default PutUser
