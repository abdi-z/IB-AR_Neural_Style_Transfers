import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Spinner,
  Center,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import SingleArtwork from "../Artwork/SingleArtwork/SingleArtwork";
import { motion } from "framer-motion";

const CreatorArts = () => {
  const { id } = useParams();
  const [artworks, setArtworks] = useState(null);
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const color = useColorModeValue("red.700", "red.200");

  useEffect(() => {
    const fetchArtworks = async () => {
      setLoading(true);
      const response = await fetch(
        "http://localhost:4000/api/v1/artworks/creator/" + id
      );
      const json = await response.json();

      if (response.ok) {
        setArtworks(json);
        const creator = response.headers.get("creator");
        setCreator(creator);
      } else {
        setError(true);
      }
      setLoading(false);
    };

    fetchArtworks();
  }, []);

  return (
    <motion.Box
      p={4}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Heading>Artworks by {creator}</Heading>
      <SimpleGrid
        // m={1}
        minChildWidth="240px"
        spacing="60px"
        p={5}
        bg="grey.400"
        style={{ position: "relative" }}
      >
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
    </motion.Box>
  );
};

export default CreatorArts;
