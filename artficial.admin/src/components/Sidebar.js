import { Box, Text, Link, VStack, Icon, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaArtstation, FaUser, FaRegBuilding } from "react-icons/fa";

function Sidebar() {
  return (
    <Box bg="gray.800" h="200vh" w="16rem" py="10" px="10">
      <VStack spacing="10" align="flex-start">
        <Link
          as={RouterLink}
          to="/artworks"
          color="whiteAlpha.700"
          _hover={{ color: "whiteAlpha.900" }}
        >
          <Icon as={FaArtstation} fontSize="xl" mr="2" />
          <Text fontSize="lg">Artworks</Text>
        </Link>
        <Divider />
        <Link
          as={RouterLink}
          to="/users"
          color="whiteAlpha.700"
          _hover={{ color: "whiteAlpha.900" }}
        >
          <Icon as={FaUser} fontSize="xl" mr="2" />
          <Text fontSize="lg">Users</Text>
        </Link>
        <Divider />
        <Link
          as={RouterLink}
          to="/galleries"
          color="whiteAlpha.700"
          _hover={{ color: "whiteAlpha.900" }}
        >
          <Icon as={FaRegBuilding} fontSize="xl" mr="2" />
          <Text fontSize="lg">Galleries</Text>
        </Link>
      </VStack>
    </Box>
  );
}

export default Sidebar;
