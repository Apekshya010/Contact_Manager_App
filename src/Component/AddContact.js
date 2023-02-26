import React from 'react'
import { Link } from 'react-router-dom';


class AddContact extends React.Component{
    state={
        name:"",
        email:"",
        phone:"",
    };
    addContacts=(e)=>{
        e.preventDefault();
        if (this.state.name==="" || this.state.email==="" ){
            return alert("Please fill name and email fields.")
            
        }
        
        this.props.getContact(this.state)
        this.setState({name:"",email:"",phone:""});
        console.log(this.props)
        document.getElementById("show-contact").style.display='block';
    
    }
    render(){
        return(
            <div>
            <div className="add-box">
                <div className="add-contact">
                ADD CONTACT
                </div>
                
                <form onSubmit={this.addContacts}>
                    <div className="field">
                    <label className="label-text">Name:</label>
                    <input type="text" placeholder="Enter your name" value={this.state.name} name="name" onChange={(e)=>this.setState({name:e.target.value})}/>
                    </div>

                    <div className="field">
                    <label className="label-text">Email:</label>
                    <input type="email" placeholder="Enter your email" value={this.state.email} name="email" onChange={(e)=>this.setState({email:e.target.value})}/>
                    </div>

                    <div className="field">
                    <label className="label-text">Phone:</label>
                    <input type="number" placeholder="Enter your phone number" value={this.state.phone} name="phone" onChange={(e)=>this.setState({phone:e.target.value})}/>
                    </div>
                    <div>
                       <button>+ADD</button>
                    </div>
                </form>
                </div>
                <div id="show-contact">
                <p className='msg'>Your contact is added successfully!</p>
                <Link to ='/'><button className='show-button'>Show Contacts</button></Link>
                </div>
            </div>
        )
    }
}
export default AddContact