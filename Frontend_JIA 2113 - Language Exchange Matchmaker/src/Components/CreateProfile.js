import { useState } from 'react';
import React from "react";
import './Registration.css'; 
import './CreateProfile.css'; 
import Select from "react-select";

import Button from 'react-bootstrap/Button';
import { handleProfileCreationAPI } from '../Services/userService';

function CreateProfile() {
    // States for registration
  const [nativeLanguage, setNativeLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [targetLanguageProficiency, setTargetLanguageProficiency] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [profession, setProfession] = useState('');
  const [hobby, setHobby] = useState('');
  const [errMsg ,setErrMsg] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
 const NativeLanguage = [
  {value: "English", label: "English"},
  {value: "Korean", label: "Korean"},
 ]

 const TargetLanguage = [
  {value: "English", label: "English"},
  {value: "Korean", label: "Korean"},
 ]
 const TargetLanguageProficiency = [
  {value: "Beginner", label: "Beginner"},
  {value: "Intermediate", label: "Intermediate"},
  {value: "Fluent", label: "Fluent"},
 ]

 const Gender = [
  {value: "Male", label: "Male"},
  {value: "Female", label: "Female"},
  {value: "Other", label: "Other"},
 ]

 const Profession = [
  {value:"Education", label:"Education"},
  {value:"Engineering", label: "Engineering"},
  {value:"Retail", label:"Retail"},
  {value:"Finance", label:"Finance"},
 ]
 const Hobby = [
  {value:"Reading", label:"Reading"},
  {value:"Sport", label: "Sport"},
  {value:"Gardening", label:"Gardening"},
  {value:"Workout", label:"Workout"},
 ]




 const handleNativeLanguage = (selectedOption) => {
  setNativeLanguage(selectedOption);
 };

 const handleTargetLanguage = (selectedOption) => {
  setTargetLanguage(selectedOption);
 };
 const handleTargetLanguageProficiency = (selectedOption) => {
  setTargetLanguageProficiency(selectedOption);
 };

 const handleAge = (e) => {
  setAge(e);
 };

 const handleGender = (selectedOption) => {
  setGender(selectedOption);
 };
 const handleProfession = (selectedOption) => {
  setProfession(selectedOption);
 };
 const handleHobby = (selectedOption) => {
  setHobby(selectedOption);
 };



  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nativeLanguage === '' || targetLanguage === '' || targetLanguageProficiency === '' || age === '' || profession === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
    setError("");
    try{
      // console.log('Sending create')
      let data = await handleProfileCreationAPI(nativeLanguage, targetLanguage, targetLanguageProficiency, age, gender, profession, hobby);
      // console.log('Create done')

      if (data && data.errCode !== 0){
          setSubmitted(true);
          setErrMsg(data.message);
      }
      if (data && data.errCode === 0){
      // todo when login successfull!
      setSubmitted(true);
      console.log("Profile Creation Successful!")
      }
    } catch(error){
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
        <h1> Updated</h1>
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
        <h1>enter required fields</h1>
      </div>
    );
  };
 
  return (
    <div className="screen-Background">
      <div className="screen-Container">
        <h1>Set Profile</h1>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        <div className="d-grid gap-2">
        {/* Labels and inputs for form data */}

        <div className='form-group'>
        <label className="label">Native Language*</label>
        <Select options={NativeLanguage} onChange={handleNativeLanguage}/>
        </div>

        <div className='form-group'>
        <label className="label">Target Language*</label>
        <Select options={TargetLanguage} onChange={handleTargetLanguage}/>
        </div>

        <div className='form-group'>
        <label className="label">Level of Target Language*</label>
        <Select options={TargetLanguageProficiency} onChange={handleTargetLanguageProficiency}/>
        </div>

        <div className='form-group'>
        <label className="label">Age*</label>
        <input 
        placeholder ="Enter Age"
        onChange={handleAge} className="input"
        type="text" />
        </div>
      

        <div className='form-group'>
        <label className="label">Gender</label>
        <Select options={Gender} onChange={handleGender}/>
        </div>

        <div className='form-group'>
        <label className="label">Profession*</label>
        <Select options={Profession} onChange={handleProfession}/>
        </div>

        <div className='form-group'>
        <label className="label">Hobby</label>
        <Select options={Hobby} onChange={handleHobby} />
        </div>
        

        </div>
        <Button className="btn-Screen"  onClick={handleSubmit}>
          Create Profile
        </Button>
      </form>
      </div>
    </div>
  );
    
}
export default CreateProfile;