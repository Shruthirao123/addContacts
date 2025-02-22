import React from 'react'
import image from "../images/image.png";

const ContactCard = (props) => {
    const {id,name,email}=props.item;
  return (
    <div>
       <div className='i1'>
            <div className='part1'> 
            <img className='userImg ui avatar iamge' src={image} alt="user"/>
            <div className='content'>
                <div className='header'>{name}</div>
                <div>{email}</div>     
            </div>
            </div>
            <i className='trash alternate outline icon' style={{color:"red",marginTop:"7px"}}
            onClick={()=>{
                props.clickHandler(id)
            }}>
            </i>
        </div> 

    </div>
  )
}

export default ContactCard
