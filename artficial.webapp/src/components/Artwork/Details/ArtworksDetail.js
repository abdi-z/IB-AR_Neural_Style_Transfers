import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArtworksDetail = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/artworks/" + id)
      .then((response) => response.json())
      .then((data) => setArtwork(data));
    console.log("single fetch working!!!");
  }, []);
  return (
    <>
      {artwork && (
        <div key={id}>
          <br />
          <h1 className="text-primary">{artwork.title}</h1>
          <br />
          <strong>Description</strong> <br />
          {artwork.description}
          <br />
          <br />
          <strong>artwork created by:</strong> <br />
          {artwork.categoryID}
        </div>
      )}
    </>
  );
};

export default ArtworksDetail;
