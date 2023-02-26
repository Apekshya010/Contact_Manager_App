import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import profile from "../images/profile.png";
 

const ContactList = ({contact,deleteContact}) => {

    const removeContact=(id)=>{
        deleteContact(id)
    }
    
    console.log({contact})
    return (
    <div className='list-box'>
        <div className="contact-list-header">
    <div className="contact-list">CONTACT LIST</div>
    <div>
    <Link to='/add' >
    <button>Add Contact</button>
    </Link></div></div>
    {contact.map((contact)=>{
            return (
                <div className="list">
                      <div className='details'>
                        
                <div className='image'>
                 <Avatar src={profile}/> </div> 
                <div>
                <Link to={`/detail/${contact.id}`} state={{contact:contact}} className="link">
                <div className='name'>{contact.name}</div>
                <div className='email'>{contact.email}</div>
                <div className='phone'>{contact.phone}</div>
                </Link>
                </div>
                
                </div>
                <div className='delete-icon'>
                <i class="material-icons" onClick={()=>removeContact(contact.id)}>delete</i>
                </div>
                </div>
            )
        })}
    
    </div>
  )
}
export default ContactList