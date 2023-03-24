import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import FormLogin from "./components/Form/FormLogin";
// import Footer from "./components/Footer/Footer";

function App() {
  const url = "https://rickandmortyapi.com/api/character";
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const EMAIL = "emi@gmail.com";
  const PASSWORD = "Pass123!";

  function login(userData) {
    if (userData.password === PASSWORD && userData === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    axios
      .get(`${url}/${id}`)
      .then(({ data }) => {
        const idChar = characters.map((el) => el.id);
        if (data.id) {
          if (!idChar.includes(data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            alert(`¡Ya tienes el personaje con id: ${data.id}!`);
          }
        }
      })
      .catch(() => {
        alert("¡No hay personajes con este ID!");
      });
  };

  const onClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((el) => el.id !== id));
  };

  const onGetRandom = (min, max, cb) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const ramdom = Math.floor(Math.random() * (max - min) + min);
    return cb(ramdom);
  };

  return (
    <div className="App">
      {location.pathname === "/" ? (
        <FormLogin login={login} />
      ) : (
        <NavBar onSearch={onSearch} onGetRandom={onGetRandom} logout={logout} />
      )}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail url={url} />}></Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
