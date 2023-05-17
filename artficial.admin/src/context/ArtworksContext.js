import { createContext, useReducer } from "react";

export const ArtworksContext = createContext();

export const artworksReducer = (state, action) => {
  switch (action.type) {
    case "SET_ARTWORK":
      return { artworks: action.payload };

    case "CREATE_ARTWORK":
      return { artworks: [action.payload, ...state.artworks] };

    case "DELETE_ARTWORK":
      return {
        artworks: state.artworks.filter(
          (artwork) => artwork._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

export const ArtworksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(artworksReducer, {
    artworks: null,
  });
  return (
    <ArtworksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ArtworksContext.Provider>
  );
};
