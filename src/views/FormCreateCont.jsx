import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { getInfo } from '../store/reducer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { helpCreate } from '../helps/helpContent';
import { useNavigate } from "react-router-dom";

const Div = styled.div`
    width:50%;
    margin:3em auto;
    // text-align: center;
    select{
        margin-bottom:1em;
    }

`;


const FormCreateCont = () => {
    const { infos } = useSelector(state => state.info);
    const dispatch = useDispatch();
    const [data,setData] = useState({
        title:'',
        description:'',
        myFile:'',
        categoryId:'',
    })

    let navigate = useNavigate();
    
    console.log("admincontent",infos)

    useEffect(() =>{
        dispatch(getInfo());
        
    },[]) 

    const onChange = (e)=>{
        e.preventDefault()
        setData( {
            ...data,
            [e.target.name]: e.target.value
        }) 
    }
    const onChangeFile = (e)=>{
        e.preventDefault()
        const [ file ] = e.target.files
        setData( {
            ...data,
            [e.target.name]: file
        }) 
    }

    const onSubmit = async(e)=>{
        e.preventDefault()
        const esvideo = data.myFile.type.split("/").includes('video')
        if(!data.categoryId) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se solicita categoria!',
                
              })

        }if (!esvideo) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se requiere un formato de video',
              })
        }else{

            const dataFile = new FormData();
            dataFile.append('myFile',data.myFile)
            dataFile.append('title',data.title)
            dataFile.append('description',data.description)
            dataFile.append('categoryId',data.categoryId)
    
            helpCreate(dataFile)
            navigate('/profile/home')

        }

    }   


  return (
    <div>
        <Navbar/>
        <Div>
            <form action="/upload" onSubmit={onSubmit} enctype="multipart/form-data">     
                <div class="col-md-4 mb-3">
                    
                    <input type="text" onChange={onChange}  value={data.title} name="title" class="form-control" id="validationCustom01" placeholder='Nuevo titulo' required/>
                    
                </div>

                <div class="col-md-5 mb-3">
                    <textarea onChange={onChange}  value={data.description} name="description" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Nueva descripcion' required></textarea>
                </div>

                <select name="categoryId" onChange={onChange} class="form-select form-select-sm" aria-label=".form-select-sm example" Style={'width:50%;'} required>
                    <option selected>Selecciona una nueva categoria</option>
                    <option  name="categoryId" value="1">entretenimiento</option>
                    <option  name="categoryId" value="2">aventura</option>
                    <option  name="categoryId" value="3">infantil</option>
                    <option  name="categoryId" value="4">adultos</option>
                </select>
            
                <div class="col-md-5 mb-3">
                    <input class="form-control" type="file" id="formFile" onChange={onChangeFile}  /*value={data.myFile}*/ name="myFile" required/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </Div>
      
    </div>
  )
}

export default FormCreateCont
