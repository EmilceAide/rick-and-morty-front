import axios from "axios";

export const url = "https://rickandmortyapi.com/api/character";

export const getCharacter = (id) => {
  return axios.get(`${url}/${id}`);
};
