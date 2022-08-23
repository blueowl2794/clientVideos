import React from 'react'

const CardUser = ({props,  setId }) => {
    
    const onClick = (e)=>{
        e.preventDefault();
        setId(props.id);
    }
    return (
        <div>
            <div onClick={onClick} class="card" Style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{props.id}</h6>
                    <p class="card-text">{props.email}</p>
                    <p class="card-text"><b>{props.role}</b></p>
                    
                </div>
            </div>
        </div>
    )
}

export default CardUser
