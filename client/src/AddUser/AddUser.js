import React, { useState } from 'react'
import './adduser.css'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'

function AddUser() {

     const initialUser ={
        name:"",
        email:"",
        address:""
     };
     const [user, setUser]= useState(initialUser)
     const navigate=useNavigate();

     const inputHandler=(e)=>{
        const{name, value} = e.target
        console.log(name, value)
        

        setUser({...user, [name]:value});
     }

     const submitForm = async (e)=>{
        e.preventDefault();
        await axios
        .post("http://localhost:8000/api/user", user)
        .then((response)=>{
            console.log('User Created sucessfully')
            navigate("/")
        })
        .catch((error)=>{
            console.log(" error creating user",error)
        })
     }



  return (
    <div className='addUser'>
        <Link to="/" type="button" class="btn btn-secondary">
        <i class="fa fa-backward" aria-hidden="true"></i> Back</Link>
          <h3>Add New User</h3>
          <form className='addUserForm' onSubmit={submitForm}>
            <div className='inputGroup'>
                <label htmlFor='name'>Name</label>
                <input type='text'   
                onChange={inputHandler}
                value={user.name}
                name='name'autoComplete='off' placeholder='Enter Your Name' />
                </div>
                <div className='inputGroup'>
                <label htmlFor='email'>Email</label>
                <input type='email' 
                 value={user.email}
                onChange={inputHandler}
               
                name="email" autoComplete='off' placeholder='Enter Your Email' />
                </div> 
                <div className='inputGroup'>
                <label htmlFor='address'>Address</label>
                <input type='text'
                value={user.address}
                onChange={inputHandler}
                
                name="address" autoComplete='off' placeholder='Enter Your Address' />
            </div>
            <div className='inputGroup'>
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>

          </form> 
    </div>
  )
}

export default AddUser