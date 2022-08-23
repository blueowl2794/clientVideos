import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"
import ReactPlayer from 'react-player';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Detail = () => {
    // const dispatch = useDispatch();
    let {id} = useParams();
    const [data,setData] = useState([])
    useEffect(() =>{
        
        ( async () => {
    
          const config = {
            headers: { Authorization: `Bearer ${localStorage.token}` }
          };
          // console.log(localStorage.token)
        
          // const bodyParameters = {
          //   key: "value"
          // };
        
          await axios.get( 
            `http://localhost:3000/content/${id}`,
            config
          ).then((data)=>setData(data.data)).catch(console.log);
            // const {subdata} = await axios.get('http://localhost:3000/content')
            // setData(subdata)
        }
        )();
    },[]) 
    console.log("dataDetail", data)
    return (<div>
            <Navbar/>
            <ReactPlayer
                url={`http://localhost:3000/${data.file}`}
                width="60%"
                height="60%"
                controls
                playing
                muted
                playbackRate={1}
            />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p><b>{data.createdAt}</b></p>


        </div>
    )
}

export default Detail
