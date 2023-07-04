import { useEffect, useState } from "react";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Flex, Spacer, Heading } from "@chakra-ui/react";
import SingleArtwork from "../SingleArtwork/SingleArtwork";
import { motion } from "framer-motion";
import { useArtworksContext } from "../../../hooks/useArtworksContext";
import Navbar2 from "../../Essentials/Navbar/Navbar2";

const AllArtworks = () => {
  const { artworks } = useArtworksContext();
  //   const [artworks, setArtworks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // top 3 liked
  //   const likedArtworks = artworks
  //   .filter((artwork) => {
  //     return Object.keys(artwork.likes).length > 0;
  //   })
  //   .sort((a, b) => {
  //     return Object.keys(b.likes).length - Object.keys(a.likes).length;
  //   })
  //   .slice(0, 3);

  //having count of likes > 0
  const likedArtworks = artworks.filter((artwork) => {
    return Object.keys(artwork.likes).length > 1;
  });

  //   useEffect(() => {
  //     const fetchArtworks = async () => {
  //       setLoading(true);
  //       const response = await fetch("http://localhost:4000/api/v1/artworks");
  //       const json = await response.json();

  //       if (response.ok) {
  //         setArtworks(json);
  //       } else {
  //         setError(true);
  //       }
  //       setLoading(false);
  //     };

  //     fetchArtworks();
  //   }, []);

  return (
    <motion.Box
      p={4}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Navbar2 />
      <Heading mx={10}>Trending Artworks</Heading>
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
        {likedArtworks &&
          likedArtworks.map((Artwork) => (
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

export default AllArtworks;
