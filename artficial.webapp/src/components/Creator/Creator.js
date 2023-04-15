import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const Creator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const color = useColorModeValue("red.700", "red.200");
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/users/" + id)
      .then((response) => response.json())
      .then((data) => setCreator(data));
    console.log("single fetch working!!!");
  }, []);
  return (
    <>
      {creator && (
        <>
          <div key={id}>
            <Box maxW="lg" mx="auto" mt={10}>
              <Center>
                <Avatar
                  size="xl"
                  name={creator.userName}
                  src={creator.avatarImgURL}
                />
              </Center>
              <Heading mt={4} textAlign="center">
                {creator.userName}
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
                          {creator.email}
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
                          {creator.gender}
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
                          {creator.phoneNumber}
                        </Text>
                      </ListItem>
                    </List>
                  </Box>
                  <Box>
                    <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color={color}
                      fontWeight={"500"}
                      textTransform={"uppercase"}
                      mb={"4"}
                    >
                      Artworks
                    </Text>

                    <List spacing={2}>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Email:
                        </Text>{" "}
                        <Text as={"span"} color="gray.500">
                          20 mm
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Gender:
                        </Text>{" "}
                        <Text as={"span"} color="gray.500">
                          20 mm
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Contact No:
                        </Text>{" "}
                        <Text as={"span"} color="gray.500">
                          20 mm
                        </Text>
                      </ListItem>
                    </List>
                  </Box>
                </Stack>
                <Link to={`/creator/${creator._id}/allartworks`}>
                  <Button
                    rounded={"xl"}
                    w={"full"}
                    mt={8}
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
              </Stack>
            </Container>
          </Flex>
        </>
      )}
    </>
  );
};

export default Creator;
