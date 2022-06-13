import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function RecipeList(props) {


let callList=(val)=>{
  props.getData(val)

}

// let navigate=useNavigate()
//   let navigateToGulab=()=>{
//     navigate("/RecipeDetails")
//     console.log(navigate)
  // }

  return (
    <div>
      {props.list.map((val,idx)=>{
        return    <div key={idx} className="card text-dark bg-light mb-3" style={{maxWidth: '20rem',cursor:"pointer"}} onClick={()=>{callList(val)}}>
   <div className="card-header text-center">{val.id}</div>
     <div className="card-body">
       <h4 className="card-title text-center">{val.dishName}</h4>
       <img height={200} width={200} src={val.img} className="card-img-top"/>
     </div>
   </div>
      })}
 
   </div>
  )
}

export default RecipeList