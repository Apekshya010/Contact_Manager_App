import './App.css';
import Header from './Component/Header.js';
import AddContact from './Component/AddContact';
import ContactList from './Component/ContactList';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactDetails from './Component/ContactDetails';
// import {uuid} from 'uuidv4';



function App() {
  const LOCAL_KEY="contact";
  const [contacts,setContacts]= useState(
    JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? []
  );


  const contactHandler=(e)=>{
  setContacts([...contacts,{
    id:Math.floor(Math.random()*100),...e}])
  };

const deleteHandler=(id)=>{
  const newContact=contacts.filter((e)=>{
    return e.id!==id;
  })
setContacts(newContact);
}

// useEffect(() => {
  
//   console.log('UseEfect called')
//   const retrieveContacts = localStorage.getItem(LOCAL_KEY);
//   console.log(typeof retrieveContacts, retrieveContacts)
//   if (retrieveContacts) {
//     const parsedContacts = JSON.parse(retrieveContacts);
//     console.log(typeof parsedContacts,parsedContacts);
//     setContacts(parsedContacts);
//   }
// }, []);

useEffect(() => {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
}, [contacts]);
  
  return (
    
      <Router>
      <div className='header'>
      <Header/>
      </div>
      <Routes>
      <Route path="/add" element={<AddContact getContact={contactHandler}/>}/>
      <Route path="/" exact element={<ContactList contact={contacts} deleteContact={deleteHandler}/>}/>
      <Route path="/detail/:id" element={<ContactDetails contact={contacts}/>}/>
      </Routes>
      {/* <AddContact contactHandler={contactHandler}/>
      <ContactList contact={contacts} deleteContact={deleteHandler}/> */}
      </Router>
    
  );
}

export default App;
