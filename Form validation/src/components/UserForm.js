import React, { useEffect, useState } from "react";


function UserForm(props) {
  const [userData, setUserData] = useState({});
  const [FirstNameError, setFirstNameError] = useState("")
  const [LastNameError, setLastNameError] = useState("")
  const [AgeError, setAgeError] = useState("")
const firstNameValidation=()=>{
  if(userData.firstName){

    if (/^[A-Za-z]+$/.test(userData.firstName)){
      setFirstNameError("")
           return true
  
          } else {
            setFirstNameError("*Invalid FirstName")
          }
  }else{
    setFirstNameError("*userName is required")

  }
}

const lastNameValidation=()=>{
  if(userData.lastName){
    let regex= /^[A-Za-z]+$/
    if (regex.test(userData.firstName)){
      setLastNameError("")
           return true
  
          } else {
            setLastNameError("*Invalid LastName")
          }
  }else{
    setLastNameError("*Lastname is required")

  }

}

const ageValidation=()=>{
  if(userData.Age){
    if(userData.Age >0 && userData.Age<100){
      setAgeError("")
      return true
    }else{
      setAgeError("*Invalid Age")
    }
  }else{
    setAgeError("*Age is required")

  }
   
}

  let updateUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  let saveData =()=> {
    firstNameValidation()
    lastNameValidation()
    ageValidation()


    if(firstNameValidation() && lastNameValidation() && ageValidation() ){
      props.getDataFromUserForm(userData);
    setUserData({
      firstName: "",
      lastName: "",
      Age:"",
    });
    }
    
  };
  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
       <div>
      <form className="container border" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
      
          </label>
          <input
           placeholder="Enter First Name"
            type="text"
            className="form-control"
            id="inputUsername"
            name="firstName"
            value={userData.firstName}
            onChange={(event) => {
              updateUserData(event);
            }}
          />
          {FirstNameError && <div className="errorMsg text-danger">{FirstNameError} </div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputlastName1" className="form-label">
          </label>
          <input
          placeholder="Enter Last Name"
            type="text"
            className="form-control"
            id="inputLastname"
            value={userData.lastName}
            name="lastName"
            onChange={(event)=>{updateUserData(event)}}
          />
          {LastNameError && <div className="errorMsg text-danger">{LastNameError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputage" className="form-label">
        
          </label>
          <input
          placeholder="Enter Age"
            type="text"
            className="form-control"
            id="inputAge"
            value={userData.Age}
            name="Age"
            onChange={(event)=>{updateUserData(event)}}
          />
          {AgeError && <div className="errorMsg text-danger">{AgeError}</div>}
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={saveData}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;