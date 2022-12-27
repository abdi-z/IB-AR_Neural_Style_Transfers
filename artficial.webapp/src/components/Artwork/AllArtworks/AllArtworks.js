import { useEffect } from "react";
import { useArtworksContext } from "../../../hooks/useArtworksContext";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
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
    <>
      All Artworks here
      <SimpleGrid
        // m={1}
        minChildWidth="240px"
        spacing="60px"
        bg="grey.400"
        style={{ position: "relative" }}>
        
          {artworks &&
            artworks.map((Artwork) => (
              <SingleArtwork
                key={Artwork._id}
                artwork={Artwork}
                textAlign={"center"}
              />
            ))}
        
      </SimpleGrid>
    </>
  );
};

export default AllArtworks;
