import axios from 'axios';


export const helpCreate = async(data) => {
    
    const config = {
        headers: { Authorization: `Bearer ${localStorage.token}` }
    };
    
    await axios.post(`http://localhost:3000/user/create`,data,config )
    .then((c)=>{
        axios.defaults.headers.common['Authorization']=`Bearer ${c.data['token']}`;
        console.log("cDeOnsubmit", c.data);
        
    }).catch((err)=>{
        console.error(err);
    });
    
}

export const helpPut = async(data,id) => {
    
    const config = {
        headers: { Authorization: `Bearer ${localStorage.token}` }
    };
    
    await axios.put(`http://localhost:3000/user/${id}`,data,config )
    .then((c)=>{
        axios.defaults.headers.common['Authorization']=`Bearer ${c.data['token']}`;  
        console.log("cDeOnsubmit", c.data);
        
    }).catch((err)=>{
        console.error(err);
    });
    
}
export const helpDelete = async(id) => {
    
    const config = {
        headers: { Authorization: `Bearer ${localStorage.token}` } 
    };
    
    await axios.delete(`http://localhost:3000/user/${id}`,config )
    .then((c)=>{
        axios.defaults.headers.common['Authorization']=`Bearer ${c.data['token']}`;
        console.log("cDeOnsubmit", c.data);
        
    }).catch((err)=>{
        console.error(err);
    });
    
}
