import { useEffect } from "react";
import { useArtworksContext } from "../../../hooks/useArtworksContext";
import { Link } from "react-router-dom";
// components
import SingleArtwork from "../SingleArtwork/SingleArtwork";

const AllArtworks = () => {
  const { artworks, dispatch } = useArtworksContext();

  useEffect(() => {
    const fetchArtworks = async () => {
      const response = await fetch("/api/artworks");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ARTWORKS", payload: json });
      }
    };

    fetchArtworks();
  }, [dispatch]);

  return (
    <div>
      <div>
        All Artworks here
        {artworks &&
          artworks.map((Artwork) => (
            <SingleArtwork key={Artwork._id} artwork={Artwork} />
          ))}
      </div>
    </div>
  );
};

export default AllArtworks;
