import axios from 'axios';

export const helpCreate = async(dataFile) => {

    const config = {
        headers: { Authorization: `Bearer ${localStorage.token}` }
    };

    await axios.post(`http://localhost:3000/content/create`,dataFile,config )
    .then((c)=>{
        axios.defaults.headers.common['Authorization']=`Bearer ${c.data['token']}`;
    }).catch((err)=>{
        console.error(err);
    });
    
}

export const helpPut = async(dataFile,id) => {

    const config = {
        headers: { Authorization: `Bearer ${localStorage.token}` }
    };

    await axios.put(`http://localhost:3000/content/${id}`,dataFile,config )
    .then((c)=>{
        axios.defaults.headers.common['Authorization']=`Bearer ${c.data['token']}`;
    }).catch((err)=>{
        console.error(err);
    });
    
}
export const helpDelete = async(id) => {

    const config = {
                headers: { Authorization: `Bearer ${localStorage.token}` }
            };
    
            await axios.delete(`http://localhost:3000/content/${id}`,config )
            .then((c)=>{
                axios.defaults.headers.common['Authorization']=`Bearer ${c.data['token']}`;
            }).catch((err)=>{
        console.error(err);
    });
    
}