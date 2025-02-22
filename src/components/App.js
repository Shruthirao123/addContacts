import React,{useEffect, useState} from "react";  
import './App.css';
import Header from "./Header";
import Addcontacts from "./Addcontacts";
import ContactList from "./ContactList";
 
import {Routes,Route} from 'react-router-dom'
function App() {

  const [contacts, setContacts] = useState( [
      { id: 1, name: "krishna", email: "krishna@gmail.com" }
    ]);

  const addContact=(contact)=>{
    const newId=contacts.length ? contacts[contacts.length-1].id+1:1;
     contact.id=newId;
     const arr=[...contacts,contact]
     setContacts(arr);
     localStorage.setItem('local_items',JSON.stringify(arr));
  };

  useEffect(()=>{
    const ans=JSON.parse(localStorage.getItem("local_items"));
    if(ans){
      setContacts(ans);
    }
  },[]);

  const removeContact=(id)=>{
      const copyList=contacts.filter((item)=>{
        return item.id !=id ;
      });
      setContacts(copyList)
  }
 
  return (
     
    <div className="ui container">
        <Header/>
        <Routes> 
        <Route path="/add" element={<Addcontacts addContact={addContact}/>}/>
        <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContact}/>}/>
        </Routes>    
    </div>
  );
}

export default App;
