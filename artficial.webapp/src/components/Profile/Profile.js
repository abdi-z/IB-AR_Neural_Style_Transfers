import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Avatar,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  IconButton,
} from "@chakra-ui/react";

const Profile = () => {
  const { user } = useAuthContext();
  const color = useColorModeValue("red.700", "red.200");
  console.log(user);

  return (
    <>
      {user && (
        <>
          <div key={user._id}>
            <Box maxW="lg" mx="auto" mt={10}>
              <Center>
                <Avatar
                  size="xl"
                  name={user.userName}
                  src={user.avatarImgURL}
                />
              </Center>
              <Heading mt={4} textAlign="center">
                {user.userName}
              </Heading>
            </Box>
          </div>

          <Flex
            justify="center"
            align="center"
            h="100vh"
            marginX={{ base: "24px", md: "40px", lg: "156px" }}
            paddingX={{ base: "24px", md: "40px", lg: "156px" }}
          >
            <Container maxW={"2x1"}>
              <Stack spacing={{ base: 6, md: 10 }}>
                <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={"column"}
                  divider={<StackDivider borderColor={color} />}
                >
                  <StackDivider />
                  <Box>
                    <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color={color}
                      fontWeight={"500"}
                      textTransform={"uppercase"}
                      mb={"4"}
                    >
                      Bio
                    </Text>
                    <List spacing={5}>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Email :
                        </Text>{" "}
                        <Text
                          as={"span"}
                          mt={2}
                          textAlign="center"
                          color="gray.500"
                        >
                          {user.email}
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Gender :
                        </Text>{" "}
                        <Text
                          as={"span"}
                          mt={2}
                          textAlign="center"
                          color="gray.500"
                        >
                          {user.gender}
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Contact No :
                        </Text>{" "}
                        <Text
                          as={"span"}
                          mt={2}
                          textAlign="center"
                          color="gray.500"
                        >
                          {user.phoneNumber}
                        </Text>
                      </ListItem>
                    </List>
                    <Center>
                      <IconButton
                        as={Link}
                        to="/profile/update"
                        colorScheme="blue"
                        aria-label="Edit Profile"
                        icon={<EditIcon />}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color={color}
                      fontWeight={"500"}
                      textTransform={"uppercase"}
                      mb={"1"}
                    >
                      Artworks
                    </Text>
                  </Box>
                </Stack>
                <Link to={`/creator/${user._id}/allartworks`}>
                  <Button
                    rounded={"xl"}
                    w={"full"}
                    mt={1}
                    size={"lg"}
                    py={"7"}
                    bg={"linear-gradient(to right, #7928CA, #FF0080)"}
                    color={"white"}
                    textTransform={"uppercase"}
                    _hover={{
                      transform: "translateY(2px)",
                      boxShadow: "lg",
                    }}
                  >
                    Browse all Artworks
                  </Button>
                </Link>

                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={color}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"1"}
                  >
                    Galleries
                  </Text>
                </Box>
                <Link to={`/creator/${user._id}/galleries`}>
                  <Button
                    rounded={"xl"}
                    w={"full"}
                    mt={0}
                    size={"lg"}
                    py={"7"}
                    bg={"linear-gradient(to right, #7928CA, #FF0080)"}
                    color={"white"}
                    textTransform={"uppercase"}
                    _hover={{
                      transform: "translateY(2px)",
                      boxShadow: "lg",
                    }}
                  >
                    Browse all galleries
                  </Button>
                </Link>
              </Stack>
            </Container>
          </Flex>
        </>
      )}
    </>
  );
};

export default Profile;
