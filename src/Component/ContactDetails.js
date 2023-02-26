import React from 'react'
import profile from "../images/profile.png"
import { Link, useLocation } from "react-router-dom";

const ContactDetails = ({contact}) => {
  const location = useLocation();
  const {id,name, email,phone} = location.state.contact;

  const filterDetails=contact.filter((contact)=>contact.id===id)
    // console.log(contact)
  return (
    
        <div className='detail-box'>
        <div className="contact-details">CONTACT DETAILS</div>
        {filterDetails.map(()=>{
      return (
        <div className='profile-box'>
        <div className="picture">
            <img alt="pp" src={profile}/>

        </div>
        <div className="profile-details">
          <div className='profile-name'>{name}</div>
          <div>{email}</div>
          <div>{phone}</div>
          
          </div>  
          </div>
          )})}
          <Link to='/'><button> Back to Contact List</button></Link>
        </div>
      
    
  )
}
export default ContactDetails
