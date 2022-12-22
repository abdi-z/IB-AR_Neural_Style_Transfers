import { ArtworksContext } from '../context/ArtworkContext'
import { useContext } from 'react'

export const useArtworksContext = () => {
  const context = useContext(ArtworksContext)

  if (!context) {
    throw Error('useArtworksContext must be used inside an ArtworksContextProvider')
  }

  return context
}