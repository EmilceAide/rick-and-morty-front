import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar.jsx";
import About from "./components/About";
import Detail from "./components/Detail";
import FormLogin from "./components/FormLogin";
import Favorite from "./components/Favorites";
import Cards from "./components/Cards";
import { getCharacter} from "./service/axios";
// import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState(false);
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
  access && navigate("/") 
  }, [access, navigate]);

  const onClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((el) => el.id !== id));
  };

  const onGetRandom = (min, max, cb) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const ramdom = Math.floor(Math.random() * (max - min) + min);
    return cb(ramdom);
  };

  const onSearch = (id) => {
    setIsLoading(true);
    getCharacter(id)
      .then(({ data }) => {
        const idChar = characters.map((el) => el.id);
        if (data.id) {
          if (!idChar.includes(data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
            setIsLoading(false)
          } else {
            alert(`¡Ya tienes el personaje con id: ${data.id}!`);
            setIsLoading(false)
          }
        }
      })
      .catch(() => {
        alert("¡No hay personajes con este ID!");
      });
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
          element={<Cards characters={characters} onClose={onClose} isLoading={isLoading} />}
        ></Route>
        <Route
          path="/detail/:id"
          element={<Detail getCharacter={getCharacter} />}
        ></Route>
        <Route path="/favorites" element={<Favorite />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      {/* {location.pathname !== "/" && <Footer />} */}
    </div>
  );
}

export default App;
