import React from 'react'

function UserTable(props) {

  
  
  return( <div>
   
           <table className="table">
            <thead>
          <tr >
                    <th>Username</th>
                    <th>lastname</th>
                    <th>Age</th>
                    </tr>   
                    </thead>
                    <tbody>
                    {
                   props.userFormData.map((val,ind)=>{
                     return(<tr  key={ind}>
              
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.Age}</td>
                </tr>)
              
               

        })
      }
       </tbody>
          </table>
    </div>
  );
}

export default UserTable