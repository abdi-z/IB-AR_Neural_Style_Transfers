import {
  Box,
  Flex,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const ArtworksDetail = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [creator, setCreator] = useState(null);
  const color = useColorModeValue("white", "gray.800");

  let imgURL =
    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1673624544/hhtmogcvy1ptbyq9kgs7.png";

  useEffect(() => {
    const fetchArtwork = async () => {
      const response = await fetch(
        "http://localhost:4000/api/v1/artworks/" + id
      );
      const json = await response.json();
      setArtwork(json);

      const creator = response.headers.get("creator");
      setCreator(creator);
    };
    fetchArtwork();
  }, []);
  return (
    <>
      {artwork && 1 && (
        <>
          <Flex flexDirection="column" alignItems="center">
            <Box w="80%" padding={10}>
              <Center py={2}>
                <Box
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  bgClip="text"
                  fontWeight="extrabold"
                  display="inline-block"
                  position="relative"
                  _after={{
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "6px",
                    bottom: "-4px",
                    left: 0,
                    background: "linear-gradient(to right, #7928CA, #FF0080)",
                  }}
                >
                  <Text fontSize={["3xl", "4xl", "5xl", "6xl"]}>
                    {artwork.title}
                  </Text>
                </Box>
              </Center>
              <Flex justifyContent="space-between" my={4}>
                <Text>Category: {artwork.categoryID}</Text>
                <Text>Created by: {creator}</Text>
                <Text>
                  Created at:{" "}
                  {formatDistanceToNow(new Date(artwork.createdAt), {
                    addSuffix: true,
                  })}
                </Text>
                <Text>Preset: {artwork.presetID}</Text>
                <Text>NFT link: {artwork.nftLink}</Text>
              </Flex>
            </Box>
          </Flex>

          <Center py={12}>
            <Box
              role={"group"}
              p={6}
              maxW={"582px"}
              w={"full"}
              bg={color}
              boxShadow={"1x2"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Box
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                height={"330px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 4,
                  left: 0,
                  backgroundImage: `url(${imgURL})`,
                  filter: "blur(40px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(70px)",
                  },
                }}
              >
                <Image
                  rounded={"lg"}
                  height={330}
                  width={582}
                  objectFit={"cover"}
                  src={imgURL}
                />
              </Box>
              <Stack pt={10} align={"center"}>
                <Text
                  color={"gray.500"}
                  fontSize={"sm"}
                  textTransform={"uppercase"}
                >
                  Brand
                </Text>
                <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                  {artwork.title}
                </Heading>
                <Text color={"gray.500"} fontSize={"sm"}>
                  By {creator}
                </Text>
                <Text color={"gray.500"} fontSize={"sm"}>
                  {artwork.description}
                </Text>
                <Stack direction={"row"} align={"center"}>
                  <Text fontWeight={800} fontSize={"xl"}>
                    $57
                  </Text>
                  <Text textDecoration={"line-through"} color={"gray.600"}>
                    $199
                  </Text>
                </Stack>
                <Text color={"gray.500"} fontSize={"sm"}>
                  NFT Link: {artwork.nftLink}
                </Text>
                <Text color={"gray.500"} fontSize={"sm"}>
                  Preset ID: {artwork.presetID}
                </Text>
              </Stack>
            </Box>
          </Center>
        </>
      )}
    </>
  );
};

export default ArtworksDetail;
