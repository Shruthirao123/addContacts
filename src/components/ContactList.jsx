import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);

    const deleteContHandler=(id)=>{
        props.getContactId(id);
    };

    const contacts=[{
        id:"1",
        name:"shruthi",
        email:"s@gmail.com"
    }];

    const elements=contacts.map((item)=>{
        return (
           <ContactCard key={item.id} item={item} clickHandler={deleteContHandler}/>
        );
    });
  return (
    <div className='ui celled list'>
       {elements}
    </div>
  );
};

export default ContactList
