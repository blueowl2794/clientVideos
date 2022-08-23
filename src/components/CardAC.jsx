import React from 'react'

const CardAC = ({props,  setId }) => {
    console.log('CardAC', props)
    const onClick = (e)=>{
        e.preventDefault();
        setId(props.id);
    }
  return (
    <div>
        <div onClick={onClick} class="card" Style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{props.id}</h6>
                <p class="card-text">{props.description}</p>
                <p class="card-text"><b>{props.createdAt}</b></p>
                
            </div>
        </div>
    </div>
  )
}

export default CardAC
