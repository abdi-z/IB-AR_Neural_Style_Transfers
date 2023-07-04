import { useState, useEffect } from "react";
import { useArtworksContext } from "../hooks/useArtworksContext";
import ArtworkDetails from "../components/ArtworkDetails";
import RecipeForm from "../components/RecipeForm";
import { useAuthContext } from "../hooks/useAuthContext";
import { Box, Text } from "@chakra-ui/react";
const Artworks = () => {
  const { artworks, dispatch } = useArtworksContext();
  const [count, setCount] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchArtworks = async () => {
      const response = await fetch("http://localhost:4000/api/v1/artworks/");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_ARTWORK", payload: json });
        setCount(json.length);
      }
    };
    if (user) {
      fetchArtworks();
    }
  }, [dispatch]);

  return (
    <div className="home">
      {/* <RecipeForm /> */}
      <div className="recipes">
        <Box
          bg="gray.600"
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderTopWidth="1px"
          borderBottomWidth="1px"
          borderTopColor="gray.400"
          borderBottomColor="gray.400"
          _hover={{ bg: "gray.500", cursor: "pointer" }}
        >
          <Text fontSize="xl" fontWeight="bold">
            {count} Artists Found
          </Text>
          <Text fontSize="md" color="gray.400">
            Actions
          </Text>
        </Box>

        {artworks &&
          artworks.map((artwork) => (
            <ArtworkDetails key={artwork._id} artwork={artwork} />
          ))}
      </div>
    </div>
  );
};

export default Artworks;
