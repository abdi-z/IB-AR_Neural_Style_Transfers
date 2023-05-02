import { useEffect, useState } from "react";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Flex, Spacer, Heading } from "@chakra-ui/react";
import SingleArtwork from "../Artwork/SingleArtwork/SingleArtwork";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const GalleryDetails = () => {
  const { gid } = useParams();

  const [gallery, setGallery] = useState(null);
  const [artworks, setArtworks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGalleries = async () => {
      const response = await fetch(
        "http://localhost:4000/api/v1/galleries/" + gid
      );
      const galleries = await response.json();
      if (response.ok) {
        setGallery(galleries);
      } else {
        setError(true);
      }
    };

    fetchGalleries();
  }, [gid]);

  useEffect(() => {
    const fetchArtworks = async () => {
      if (!gallery) return;

      setLoading(true);
      const response = await fetch("http://localhost:4000/api/v1/artworks");
      const json = await response.json();
      if (response.ok) {
        const filteredArtworks = json.filter((artwork) => {
          return gallery?.artworkIDs.includes(artwork._id);
        });
        setArtworks(filteredArtworks);
      } else {
        setError(true);
      }
      setLoading(false);
    };

    fetchArtworks();
  }, [gallery]);

  return (
    <motion.Box
      p={4}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Heading>Welcome to ARTficial!</Heading>
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

export default GalleryDetails;
