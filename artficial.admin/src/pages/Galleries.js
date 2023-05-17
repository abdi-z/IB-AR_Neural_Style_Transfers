import { useEffect, useState } from "react";
// import { useArtistsContext } from "../hooks/useArtistsContext";
import ArtistDetails from "../components/ArtistDetails";
import RecipeForm from "../components/RecipeForm";
import { useAuthContext } from "../hooks/useAuthContext";
import { Box, Text } from "@chakra-ui/react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const Galleries = () => {
  const [artists, setArtists] = useState(null);
  const [count, setCount] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchArtists = async () => {
      const response = await fetch("http://localhost:4000/api/v1/galleries/");
      const json = await response.json();
      if (response.ok) {
        setArtists(json);
        setCount(json.length);
      }
    };
    if (user) {
      fetchArtists();
    }
  }, []);

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
            {count} Galleries Found
          </Text>
          <Text fontSize="md" color="gray.500">
            Click to Refresh
          </Text>
        </Box>

        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>By</Th>
              {/* <Th>Email</Th> */}
              <Th>Created</Th>
            </Tr>
          </Thead>
          <Tbody>
            {artists &&
              artists.map((user) => (
                // <ArtistDetails key={artist._id} artist={artist} />

                <Tr key={user._id}>
                  <Td>{user.galleryName}</Td>
                  <Td>{user.createdByID}</Td>
                  {/* <Td>{Object.values(user.artworkIDs)}</Td> */}
                  <Td>
                    {formatDistanceToNow(new Date(user.createdAt), {
                      addSuffix: true,
                    })}
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Galleries;
