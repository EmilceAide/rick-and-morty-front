import React, { useState } from "react";
import { Link } from "react-router-dom";
import {validation} from "../../models/validation";

const FormLogin = ({login}) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  


  const handleChange = (e) =>{
    setUserData({
        ...userData,
        [e.target.name]: e.target.value
    })
    setErrors(validation({
        ...userData,
        [e.target.name]: e.target.value
    })
    )
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    const aux = Object.keys(errors)
    if(aux.length===0){
      setUserData({
        email: "",
        password: "",
      })
      setErrors({
        email: "",
        password: "",
      })
    login(userData)
  }
}

  return (
    <from onSubmit={handleSubmit}>
      <label style={{color: 'red'}}>Nombre de Usuario:</label>
      <input
        type="text"
        name="username"
        placeholder="name@example.com"
        value={userData.username}
        onChange={handleChange}
      />
      <p>
      {errors.username && <p style={{color: 'red'}}>{ errors.username }</p>}
      </p>

      <label  style={{color: 'red'}}>Contaseña:</label>
      <input
        type="text"
        name="password"
        placeholder="******"
        value={userData.password}
        onChange={handleChange}
      />
      <p>
      {errors.password && <p style={{color: 'red'}}>{ errors.password }</p>}
      </p> 
      {Object.keys(errors).length === 0 ? (
          <Link to="/home">
            <button type="submit">Ingresar</button>
          </Link>
        ) : null}
    </from>
  );
};

export default FormLogin;
