import logo from './logo.svg';
import './App.css';

import UserForm from "./components/UserForm"
import UserTable from "./components/UserTable"
import React,{useEffect, useState} from "react"

function getData(){
  const storeData= localStorage.getItem("form")
  if(storeData){
    return JSON.parse(storeData)
  }else{
   return []
  }
}
function App() {
  const [userFormData, setuserFormData] = useState(getData())

  console.log("userformdata in parent",userFormData)


  let getGetFromUserForm=(userData)=>{
   
    let userFormDataCopy=[...userFormData]
    userFormDataCopy.push(userData)
    
    console.log(userFormDataCopy)

    setuserFormData(
      userFormDataCopy
      )}

      useEffect(() => {
        localStorage.setItem("form",JSON.stringify(userFormData))
      
      }, [userFormData])
    
  
  return (
    <div className="App">
      <UserForm getDataFromUserForm={getGetFromUserForm}/>
      <UserTable userFormData={userFormData} />
    </div>
  );
}

export default App;