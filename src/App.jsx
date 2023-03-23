import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Login  from "./components/login/Login";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";

function App() {
  const url = "https://rickandmortyapi.com/api/character";

  const [characters, setCharacters] = useState([]);

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
      <NavBar onSearch={onSearch} onGetRandom={onGetRandom} />
      <Routes>
        <Route path="/" element ={<Login/>}></Route>
        <Route path="/home" element ={
         <Cards characters={characters} onClose={onClose} />
         }></Route>
        <Route path="/about" element ={<About/>}></Route>
        <Route path="/detail/:id" element ={<Detail/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
