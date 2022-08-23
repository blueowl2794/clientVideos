import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Swal from 'sweetalert2'
import { getInfo, getCategories } from '../store/reducer';
import CardAC from '../components/CardAC';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { helpPut, helpDelete } from '../helps/helpContent';
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
  
`;

const AdminContent = () => {
    const { infos } = useSelector(state => state.info);
    const { categories } = useSelector(state => state.info);
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [data,setData] = useState({
        title:'',
        description:'',
        myFile:'',
        categoryId:'',
    });

    let navigate = useNavigate();

    useEffect(() =>{
        dispatch(getInfo());
        dispatch(getCategories());
        
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
        if (!data.categoryId || !id) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se solicitan campos!',
              })    
        }else{
            const dataFile = new FormData();
            dataFile.append('myFile',data.myFile)
            dataFile.append('title',data.title)
            dataFile.append('description',data.description)
            dataFile.append('categoryId',data.categoryId)

            helpPut(dataFile,id)
            navigate('/profile/home')

        }

    }  
    const onClick = async(e)=>{
        e.preventDefault()
        if (!id) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se solicita un Contenido!',
                
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
            <h1>Selecciona un Contenido</h1>
            <div>

                <Swiper
                    spaceBetween={0}
                    slidesPerView={4}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    >

                        {infos?infos.map(i=>(
                            <SwiperSlide key={"i.id"}>
                                
                                <CardAC key={i.id} props ={i} setId={setId}/>

                            </SwiperSlide>
                        
                        )):null}
                        
                </Swiper>
            </div>
        </Div>
        <SubForm>
            <form action="/upload" onSubmit={onSubmit} enctype="multipart/form-data">   
                <div class="col-md-4">
                    
                    <input type="text" onChange={onChange}  value={data.title} name="title" class="form-control" id="validationCustom01"  placeholder='Nuevo titulo' required/>
                    
                </div>

                <div class="mb-3">
                    <textarea onChange={onChange}  value={data.description} name="description" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Nueva descripcion' required></textarea>
                </div>

                <select name="categoryId" onChange={onChange} class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Selecciona una nueva categoria</option>
                    {
                        categories?categories.map(i=><option  name="categoryId" value={i.id}>{i.name}</option>):null
                    }
                </select>
            
                <div class="mb-3">
                    <label for="formFile" class="form-label">Nuevo archivo </label>
                    <input class="form-control" type="file" id="formFile" onChange={onChangeFile}  /*value={data.myFile}*/ name="myFile" />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </SubForm>
        <button onClick={onClick} class="btn btn-outline-danger" Style='margin-left:18%; margin-top:5em;'>Delete</button>
    </div>
  )
}

export default AdminContent
