import { Link } from "react-router-dom";
import { useLogout } from "../../../hooks/useLogout";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { ReactNode } from "react";
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
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
//import logo from './ARTficial.png'
// const Navbar = () => {
//   const { logout } = useLogout();
//   const { user } = useAuthContext();

//   const handleClick = () => {
//     logout();
//   };
//   return (
//     <header>
//       <div className="container">
//         <Link to="/">
//           <img src="" alt="logo" style={{ paddingTop: "5px" }} />
//         </Link>
//         <Link to="/createartwork">
//           <h1>Create artwork</h1>
//         </Link>
//         <nav>
//           {user && (
//             <div>
//               <span className="usersEmail">{user.email}</span>
//               <button className="logout" onClick={handleClick}>
//                 Log out
//               </button>
//             </div>
//           )}
//           {!user && (
//             <div className="">
//               <Link className="loginButton" to="/login">
//                 Login
//               </Link>
//               <Link className="signupButton" to="/signup">
//                 Signup
//               </Link>
//             </div>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
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

  const handleClick = () => {
    logout();
  };
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link to="/">
              <img src="" alt="logo" style={{ paddingTop: "0px" }} />
            </Link>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
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
                      <p>{user.email}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
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
