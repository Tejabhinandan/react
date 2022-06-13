import React from 'react'

function UserTable(props) {
    // console.log("props in table",props);
    return (
        <div>
            {
                props.userFormData.map((val, idx) => {
                    return <div key={idx}>
                        <h1>{val.userName}</h1>
                        <h1>{val.password}</h1>
                    </div>
                })
            }
        </div>
    )
}

export default UserTable