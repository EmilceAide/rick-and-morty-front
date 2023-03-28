import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  charactersFav: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        charactersFav: [...state.myFavorites, action.payload],
      };

    case DELETE_FAVORITE:
      const { id } = action.payload;
      const index = state.myFavorites.findIndex((item) => item.id === id);
      const newMyFavorites = [...state.myFavorites];
      newMyFavorites.splice(index, 1);
      return {
        ...state,
        myFavorites: newMyFavorites,
      };

    case FILTER:
      if (state.charactersFav.length !== 0) {
        const allCharsFiltered = state.charactersFav.filter(
          (el) => el.gender === action.payload
        );
        return {
          ...state,
          charactersFav: allCharsFiltered,
        };
      } else {
        // Si no hay personajes en la lista de favoritos, devolver el estado original
        return {
          ...state,
          charactersFav: state.myFavorites,
        };
      }

    case ORDER:
      const orderType = action.payload;
      const sortedCharsFav = [...state.charactersFav].sort((a, b) => {
        return orderType === "Ascendente" ? a.id - b.id : b.id - a.id;
      });
      return {
        ...state,
        charactersFav: sortedCharsFav,
      };

    default:
      return { ...state };
  }
};

export default reducer;
