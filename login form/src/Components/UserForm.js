import React, { useState } from "react";

function UserForm(props) {
  const [userData, setuserData] = useState({
    userName: "",
    password: "",
  });
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // console.log("userData", userData);
  //   console.log(name);

  const emailValidation = () => {
    if (userData.userName) {
      if (/^[A-Za-z]+$/.test(userData.userName)) {
        setemail("");
        return true;
      } else {
        setemail("* Requried is Email");
      }
    } else {
      setemail("*Email is required");
    }
  };

  const passwordValidation = () => {
    if (userData.password) {
      if (/^[0-9!@]+$/.test(userData.password)) {
        setpassword("");
        return true;
      } else {
        setpassword("*Invalid Password");
      }
    } else {
      setpassword("*Password is required");
    }
  };

  // function to update the state
  let updateUserData = (event) => {
    setuserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  // do all the validation and then send the data
  let saveData = () => {
    emailValidation();
    passwordValidation();
    if (emailValidation() && passwordValidation()) {
      props.getDataFromUserForm(userData);
      //   props.getDataFromUserForm(userData);
      setuserData({
        userName: "",
        password: ""
      });
    }
}

    let handleSubmit = (e) => {
      e.preventDefault();
    };

    return (
      <div>
        <form className="container border" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="userName"
              value={userData.userName}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(event) => {
                updateUserData(event);
              }}
            />
          </div>
          {email && <div className="errorMsg text-danger">{email} </div>}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              value={userData.password}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(event) => {
                updateUserData(event);
              }}
            />
          </div>
          {password && <div className="errorMsg text-danger">{password}</div>}
          <button type="submit" className="btn btn-primary" onClick={saveData}>
            Login
          </button>
        </form>
      </div>
    );
  };

export default UserForm;
