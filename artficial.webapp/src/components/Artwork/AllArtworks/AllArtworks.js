import { useEffect, useState } from "react";
import { useArtworksContext } from "../../../hooks/useArtworksContext";
import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
// components
import SingleArtwork from "../SingleArtwork/SingleArtwork";

const AllArtworks = () => {
  const { artworks, dispatch } = useArtworksContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArtworks = async () => {
      setLoading(true);
      const response = await fetch("/api/artworks");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ARTWORKS", payload: json });
      } else {
        setError(true);
      }

      setLoading(false);
    };

    fetchArtworks();
  }, [dispatch]);

  return (
    <>
      <Heading>
        Welcome to ARTficial
      </Heading>
      <SimpleGrid
        // m={1}
        minChildWidth="240px"
        spacing="60px"
        bg="grey.400"
        style={{ position: "relative" }}>
        {loading && (
          <Center>
            <Spinner color="red.500" />
          </Center>
        )}
        {error && <Center>Something went wrong</Center>}
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
