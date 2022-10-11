import { useState } from 'react';
import React from "react";
import './Registration.css'; 
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import { handleRegisterApi } from '../Services/userService';


function Registration() {
    // States for registration

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg ,setErrMsg] = useState('');

 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (firstName === '' || lastName === '' || email === '' || password === '') {
      setError(true);
    } else {
      setError(false);
      navigate("/CreateProfile");
      
    }
    setErrMsg("");
    try{
      
      let data = await handleRegisterApi(firstName,lastName,email, password);
      console.log("fj");
      if (data && data.errCode !== 0){
          setSubmitted(true);
          setErrMsg(data.message);
      }
      if (data && data.errCode === 0){
      // todo when login successfull!
      setSubmitted(true);
      console.log("login successull!")
      }
  }catch(error){
      if (error.response){
          if (error.response.data){
                  setErrMsg(error.response.data.message)
                  console.log(errMsg)

          }
      }
  }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>{errMsg}</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields!</h1>
      </div>
    );
  };
 
  return (
    <div className="screen-Background">
      <div className="screen-Container">
        <h1>User Registration</h1>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        <div className="d-grid gap-2">
        {/* Labels and inputs for form data */}

        <div className='form-group'>
        <label className="label">First Name</label>
        <input 
        placeholder ="Enter First Name..." 
        onChange={handleFirstName} className="input"
          value={firstName} type="text" />
        </div>

        <div className='form-group'>
        <label className="label">Last Name</label>
        <input 
        placeholder ="Enter Last Name..." 
        onChange={handleLastName} className="input"
          value={lastName} type="text" />
        </div>

        <div className='form-group'>
        <label className="label">Email</label>
        <input
        placeholder ="Enter Email..." 
        onChange={handleEmail} className="input"
          value={email} type="email" />
        </div>

        <div className='form-group'>
        <label className="label">Password</label>
        <input
        placeholder ="Enter Password..." 
        onChange={handlePassword} className="input"
          value={password} type="password" />
        </div>

        <Button className="btn-Screen"  onClick={handleSubmit}>
          Create Profile
        </Button>
        </div>
      </form>
      </div>
    </div>
  );
    
}
export default Registration;