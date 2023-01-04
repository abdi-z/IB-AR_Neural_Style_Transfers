import { Link } from "react-router-dom";
import { useLogout } from "../../../hooks/useLogout";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { ReactNode } from "react";
import { HStack, VStack, Stack } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Text,
  useColorMode,
  Center,
  Heading,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "./ARTficial.png";
import { useNavigate } from "react-router-dom";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}>
    {children}
  </Link>
);

export default function Navbar() {
  
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
    logout();

  };
  return (
    <>
      <Box bg={useColorModeValue("gray.200", "gray.900")} px={5}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack>
            <Link to="/">
              <Heading
                lineHeight={1.1}
                fontSize={{ base: "1xl", sm: "1xl", md: "1xl", lg: "2xl" }}>
                ART
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text">
                  ficial.
                </Text>{" "}
                {/* with our user-friendly platform */}
              </Heading>
            </Link>
            <Link to="/allartworks">
              <Button
                fontFamily={"heading"}
                w={"full"}
                bgGradient="linear(to-r, red.900,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.900,pink.900)",
                  boxShadow: "xl",
                }}>
                Check Artworks
              </Button>
            </Link>
          </HStack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {user && (
                <Link to="/createartwork">
                  <Button
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"pink.400"}
                    href={"#"}
                    _hover={{
                      bg: "pink.300",
                    }}>
                    Create Artwork
                  </Button>
                </Link>
              )}

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              {user ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}>
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>{user.name}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>View your profile</MenuItem>
                    <MenuItem>Your Artworks</MenuItem>
                    <MenuItem onClick={handleClick}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <>
                  <Link to="/login">
                    <Button as={"a"} fontSize={"sm"} fontWeight={400}>
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button
                      display={{ base: "none", md: "inline-flex" }}
                      fontSize={"sm"}
                      fontWeight={600}
                      color={"white"}
                      bg={"pink.400"}
                      href={"#"}
                      _hover={{
                        bg: "pink.300",
                      }}>
                      Signup
                    </Button>
                  </Link>
                </>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
