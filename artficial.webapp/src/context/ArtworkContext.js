import { createContext, useReducer } from 'react'

export const ArtworksContext = createContext()

export const artworksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ARTWORKS': 
      return {
        artworks: action.payload
      }
    case 'CREATE_ARTWORKS':
      return {
        artworks: [action.payload, ...state.artworks]
      }
    case 'DELETE_ARTWORKS':
      return {
        artworks: state.artworks.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const ArtworksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(artworksReducer, {
    artworks: null
  })

  return (
    <ArtworksContext.Provider value={{...state, dispatch}}>
      { children }
    </ArtworksContext.Provider>
  )
}