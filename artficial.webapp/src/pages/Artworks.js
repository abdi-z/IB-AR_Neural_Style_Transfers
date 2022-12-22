import { useEffect }from 'react'
import { useArtworksContext } from "../hooks/useArtworksContext"
import { Link } from 'react-router-dom'
// components
import ArtworkDetails from '../components/ArtworkDetails'

const Artworks = () => {
  const {artworks, dispatch} = useArtworksContext()

  useEffect(() => {
    const fetchArtworks = async () => {
      const response = await fetch('/api/artworks')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_ARTWORKS', payload: json})
      }
    }

    fetchArtworks()
  }, [dispatch])

  return (
    <div className="home">
      <div className="workouts">
        All Artworks here
          <Link to="/">
          <blockquote>Home Page</blockquote>
          </Link>
        {artworks && artworks.map((Artwork) => (
          <ArtworkDetails key={Artwork._id} artwork={Artwork} />
        ))}
      </div>

    </div>
  )
}

export default Artworks


