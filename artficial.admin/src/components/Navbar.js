import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Box, Flex, Heading, Spacer, Text, Button } from "@chakra-ui/react";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <Box bg="gray.700" px="4">
      <Flex h="16" alignItems="center">
        <Heading size="md" color="white">
          <Spacer />
          <Link to="/">ARTficial</Link>
        </Heading>
        <Spacer />
        <Heading size="md" color="white">
          <Link to="/"> Admin Panel</Link>
        </Heading>
        <Spacer />
        <Box>
          <Flex alignItems="center">
            {user && (
              <>
                <Text color="white" mr="4">
                  {user.email}
                </Text>
                <Button colorScheme="orange" onClick={handleClick}>
                  Log out
                </Button>
              </>
            )}
            {!user && (
              <Link to="/login">
                <Button colorScheme="orange">Login</Button>
              </Link>
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
