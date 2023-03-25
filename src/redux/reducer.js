import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
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

    default:
      return { ...state };
  }
};

export default reducer;
