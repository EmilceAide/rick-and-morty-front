import axios from "axios";

export const url = "http://localhost:3001/rickandmorty";

export const getCharacterOnSearch = (id) => {
  return axios.get(`${url}/onsearch/${id}`);
};

export const getCharacter = (id) => {
  return axios.get(`${url}/detail/${id}`);
};
