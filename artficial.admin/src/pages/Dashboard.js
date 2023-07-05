import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  Center,
  Text,
  Divider,
} from "@chakra-ui/react";

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalArtworks, setTotalArtworks] = useState(0);
  const [totalGalleries, setTotalGalleries] = useState(0);
  const [mostLikedArtwork, setMostLikedArtwork] = useState("Gaejin Renaissance");
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    const fetchArtworks = async () => {
      const response = await fetch(
        "http://localhost:4000/api/v1/artworks/mostliked/"
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data.maxLikedArtwork)
        setMostLikedArtwork(data.maxLikedArtwork);
        setLikesCount(data.maxLikes);
      }
    };
    fetchArtworks();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/users/");
        const data = await response.json();
        setTotalUsers(data.length);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchArtworks = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/artworks/");
        const data = await response.json();
        setTotalArtworks(data.length);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchGalleries = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/galleries/");
        const data = await response.json();
        setTotalGalleries(data.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
    fetchArtworks();
    fetchGalleries();
  }, []);

  return (
    <Box bg="gray.500" h="100vh">
      <Flex>
        <Box flex="1" p="10">
          <Heading as="h1" mb="10" textAlign="center">
            Welcome to the Dashboard
          </Heading>
          <Box bg="gray.500" p="0" borderRadius="md" boxShadow="md">
            <Box w="100%" bg="gray.700" h="100%">
              <Center h="20" color="white" fontSize="2xl" fontWeight="bold">
                Analytics
              </Center>
              <Box p="4">
                <Box p="2" bg="gray.600" borderRadius="md">
                  <Stat>
                    <StatLabel textAlign="center" color="gray.300">
                      Total Users
                    </StatLabel>
                    <StatNumber textAlign="center" color="gray.100">
                      {totalUsers}
                    </StatNumber>
                  </Stat>
                  <Divider />
                  <Stat mt="4">
                    <StatLabel textAlign="center" color="gray.300">
                      Total Artworks
                    </StatLabel>
                    <StatNumber textAlign="center" color="gray.100">
                      {totalArtworks}
                    </StatNumber>
                  </Stat>
                  <Divider />
                  <Stat mt="4">
                    <StatLabel textAlign="center" color="gray.300">
                      Total Galleries
                    </StatLabel>
                    <StatNumber textAlign="center" color="gray.100">
                      {totalGalleries}
                    </StatNumber>
                  </Stat>
                  <Divider />
                  <Stat mt="4">
                    <StatLabel textAlign="center" color="gray.300">
                      Most Liked Artwork
                    </StatLabel>
                    <StatNumber textAlign="center" color="gray.100">
                      {mostLikedArtwork}
                    </StatNumber>
                    <Text textAlign="center" fontSize="sm" color="gray.100">                      
                      Likes: {likesCount}
                    </Text>
                  </Stat>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
export default Dashboard;
