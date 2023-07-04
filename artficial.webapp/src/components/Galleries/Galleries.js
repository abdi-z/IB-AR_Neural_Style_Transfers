import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Spinner,
  Center,
  Heading,
  Text,
  VStack,
  Flex,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  FormData,
  Box,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import SingleArtwork from "../Artwork/SingleArtwork/SingleArtwork";
import { motion } from "framer-motion";
import { useAuthContext } from "../../hooks/useAuthContext";

const Galleries = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const [galleries, setGalleries] = useState(null);
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [galleryName, setGalleryName] = useState("");
  const [artworkIDs, setArtworkIDs] = useState([]);

  const color = useColorModeValue("red.700", "red.200");

  useEffect(() => {
    const fetchArtworks = async () => {
      setLoading(true);
      const response = await fetch(
        "http://localhost:4000/api/v1/galleries/creator/" + id
      );
      const json = await response.json();

      if (response.ok) {
        setGalleries(json);
        // const creator = response.headers.get("creator");
        // setCreator(creator);
      } else {
        setError(true);
      }
      setLoading(false);
    };

    fetchArtworks();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { galleryName, artworkIDs, createdByID: user._id };
    try {
      const response = await fetch("http://localhost:4000/api/v1/galleries/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("created");
      // Handle successful response (e.g., show success message)
      // Update the galleries state with the newly created gallery
      setGalleries([...galleries, data]);

      // Clear the form fields after a successful creation
      setGalleryName("");
      setArtworkIDs([]);
    } catch (err) {
      console.error(err);
      // Handle error (e.g., show error message)
    }
  };

  const handleDelete = async (galleryId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/galleries/${galleryId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Update the galleries state after successful deletion
        setGalleries((prevGalleries) =>
          prevGalleries.filter((gallery) => gallery._id !== galleryId)
        );
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <motion.Box
      p={4}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      {/* <Heading>Galleries by {creator}</Heading> */}
      <Flex direction="column">
        <Box mx={8} p={5}>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="galleryName">Gallery Name</FormLabel>
              <Input
                type="text"
                id="galleryName"
                name="galleryName"
                value={galleryName}
                onChange={(e) => setGalleryName(e.target.value)}
              />
            </FormControl>
            <Button type="submit" mt={4}>
              Create Gallery
            </Button>
          </form>
        </Box>

        <SimpleGrid
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
          {galleries && galleries.length > 0 ? (
            galleries.map((gallery) => (
              <Box key={gallery._id}>
                  <Flex
                    background="gray.500"
                    borderRadius="md"
                    boxShadow="lg"
                    justify="space-between"
                    p={4}
                    w="100%"
                    _hover={{ background: "gray.400" }}
                  >
                <Link to={`/creator/${id}/galleries/${gallery._id}`}>
                    <Text fontSize="xl">{gallery.galleryName}</Text>
                </Link>

                <RiDeleteBin6Line
                  size={24}
                  color={"red"}
                  cursor="pointer"
                  onClick={() => handleDelete(gallery._id)}
                  
                  />
                  </Flex>
              </Box>
            ))
          ) : (
            <Box>
              <Text>No galleries found</Text>
            </Box>
          )}
        </SimpleGrid>
      </Flex>
    </motion.Box>
  );
};

export default Galleries;
