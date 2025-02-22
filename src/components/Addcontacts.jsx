import React,{useState} from 'react'

const Addcontacts = ({addContact}) => {

    const [Contact,setContact]=useState({id:null,name:"",email:""});

    const handleChange=(e)=>{
         const {name,value}=e.target;
         setContact({...Contact,[name]:value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Contact.name && Contact.email){
            addContact(Contact);
            setContact({id:null,name:"",email:""});
        }else{
            alert("All Fields are mandatory");
        }
    };

  return (
    <div className='ui main'>
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={handleSubmit}>
            <div className='field'>
                <label>Name</label>
                <input 
                    type="text" 
                    name='name'
                    value={Contact.name}
                    placeholder="Name" 
                    onChange={handleChange}
                />
            </div>
            <div className='field'>
                <label>Email</label>
                <input 
                    type="text" 
                    name='email' 
                    value={Contact.email}
                    placeholder="Email" 
                    onChange={handleChange}
                />
            </div>
            <button className='ui button blue' type="submit">Add</button>
        </form>
      
    </div>
  )
}

export default Addcontacts
