import {
  Box,
  Flex,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../../../hooks/useAuthContext";
import Share from "./Share";

const ArtworksDetail = () => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [creator, setCreator] = useState(null);
  const [galleries, setGalleries] = useState([]);
  const [galleryId, setGalleryId] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const color = useColorModeValue("white", "gray.800");

  let imgURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAC+CAMAAAARDgovAAAAjVBMVEUA/wEA/wD///////6d85sA+AD8/Pz//f5wcHCPj4+ZmZne3t6EhIT6+vr29fbS0tDr6+u0tLSkpKR5envOzc66uryVk5RoZmfFxMWjoqF0c3Lo6Oji4uKIiIjX19fx8fFLqEpxbHKtrq5fYGHHx8pSUlRMSktCQUJiYWJsa2szMTJ/fX7JycilpaM8OzonwPxBAAAE+klEQVR4nO2WaXviNhRGmUsrY3mJFwkMtuWpSdpQ6Pz/n1fJ4Cxt5+kXj+/bPvdkAXmL0Dk4bL5s/vL1tw3/sOn/eNJGmAE3JU0wAG5KmmAA3JQ0wQC4KWmCAXBT0gQD4KakCQbATUkTDICbkiYYADe1YhPg81txJYQZcFPSBAPgpqQJBsBNSRMMgJuSJhgANyVNMABuSppgANyUNMEAuClpggFwUys2AT6/FVdCmAE3JU0wAG5KmmAA3JQ0wQC4KWmCAXBT0gQD4KakCQbATUkTDICbkiYYADe1YhPg81txJYQZcFPSBAPgpqQJBsBNSRMMgJuSJhgANyVNMABuSppgANyUNMEAuClpggFwUys2AT6/FVdCmAE3JU0wAG5KmmAA3JQ0wQC4KWmCAXBT0gQD4KakCQbATUkTDICbkiYYADe1YhPg81txJYQZcFPSBAPgpqQJBsBNSRMMgJuSJhgANyVNMABuSppgANyUNMEAuClpggFwUys2AT6/FVdCmAE3JU0wAG5KmmAA3JQ0wQC4KWmCAXBT0gQD4KakCQbATUkTDICbkiYYADe1YhPg81txJYQZcFPSBAPgpqQJBsBNSRMMgJuSJhgANyVNMABuSppgANyUNMEAuClpggFwUys2AT6/FVdCmAE3JU0wAG5KmmAA3JQ0wQC4KWmCAXBT0gQD4KakCQbATUkTDICbkiYYADe1YhPg81txJYQZWYs3wlJ8CbFMP5v557ub/v2I/+pJPwsTm68/CRObXyiKIhJos+OeAQp+JaLlIIoUKYpIKf80pBZFYRgplfmR8pumwf1v3/eEQ6aN4Xs6M5wTdkXRNHgMw/FhlFN0/1oYvxLbxVD3H1XcaHrc+mvTtC3zv1QYq/uOztC0cRqpD1fwz/0e/7L9I4XHsGzqMQ47plUM+5Zm2XfHQ7aJH2OdDeWH3d3bwOwfL+jjaRRl/nWbWuXpq85IN3S8HDMaR6rOdZvXjrL0RuZSZ263K5acd2DZlQjVJqMzp9INhp7NSzWebV7azNlnU7X6cMtHq4bSPuu88W8FUyXDaCNXGjMO4QIq6vpz1Gr/1GoaNJ07dyXqc6L9wVC1s/k5t3XdPl+XnHdg2fuEf0fnaZm4F7OzKe3c2Zm602Xc7PfuYNombXurKz0ae00TRe2rMb3dV+nYx3okqiypjA5R++ulGX57rfKhT+nlHEfni6Z8bGhorF+Y6PdrlB2m/3kLTn3R+4Qn2zb66WlPpzKmU3HJ2jg79Pubdtvy2Lljcdomr/VAT99q/54Y/6DipLpTP4xP4R3VGH8FOvh7yXA5ajqZjGqdUmy3lDY03nwoNjlR/u2qssvSd4rF7xOZS07Nni7NbnhpD11Xt73pitjlSaldWtRujPtbYrX2/pPL0NSJ39COt1s8ne7vq+e8cK5u4uE09sPF1kPamMHfJKqGqCyzXVLp1JX7JecdWHQlwp1P2d61lsa82pdDqQddDjpumzYf+yLXTRFr1caVa6hyJZVX18Y6L3PTJXb6P6GKuI+7OG6pTA2N/g7ZpFZVPokyTZ+aNL0V/ZEGf5UF5z3xQ/53qM9DH8rbWH089POrCZ9Esu9ccQV+xGfM8B7xlT9e6/QdbE8P6m1HNj2E0duh0zGPX2pemekIet9B83ELs/hKKHqf+PsWeluW+0qoT1vvS0Xzx6jH8/kKH0+l98+nS/MnZayIoHBJJY8AAAAASUVORK5CYII=";

  //like an artwork
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/v1/artworks/${id}`
        );
        const data = await response.json();
        const { likes } = data;
        const { _id: userId } = user;
        console.log(Object.keys(likes).length);
        setIsLiked(likes?.[userId] || false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleLike = async () => {
    try {
      const userId = user._id;
      const method = "PATCH";
      await fetch(`http://localhost:4000/api/v1/artworks/${id}/like`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });
      setIsLiked(!isLiked);
      console.log({ userId, method });
    } catch (error) {
      console.error(error);
    }
  };

  // fetch all galleries by a creator
  useEffect(() => {
    const fetchGalleries = async () => {
      const response = await fetch(
        "http://localhost:4000/api/v1/galleries/creator/" + user._id
      );
      const json = await response.json();
      setGalleries(json);
    };

    fetchGalleries();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { artworkId: id };
    console.log(formData); // log the form value
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/galleries/${galleryId}/addartwork/`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("Artwork added!!");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

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
                  bgGradient="linear(to-l, #ffaa4e, #EF0070)"
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
                    background: "linear-gradient(to right, #ffaa4e, #EF0070)",
                  }}
                >
                  <Text fontSize={["3xl", "4xl", "5xl", "6xl"]}>
                    {artwork.title}
                  </Text>

                  {/* <IconButton
        aria-label={isLiked ? 'Unlike' : 'Like'}
        icon={<FaHeart color={isLiked ? 'red.500' : 'gray.500'} />}
        onClick={handleLike}
      /> */}
                  <Icon
                    as={FaHeart}
                    w={8}
                    h={8}
                    color={isLiked ? "red.500" : "gray.500"}
                    onClick={handleLike}
                  />
                </Box>
              </Center>
              <Share url={window.location.href} />
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
          <Center>
            <Box>
              <form onSubmit={handleSubmit}>
                <FormControl id="gallery" mb={4}>
                  <FormLabel>Select Gallery:</FormLabel>
                  {galleries && galleries.length > 0 ? (
                    <>
                      <Select
                        name="gallery"
                        onChange={(e) => setGalleryId(e.target.value)}
                      >
                        {galleries.map((gallery) => (
                          <option key={gallery._id} value={gallery._id}>
                            {gallery.galleryName}
                          </option>
                        ))}
                      </Select>
                      <Button
                        type="submit"
                        background={"red.600"}
                        boxShadow={"1x2"}
                        rounded={"lg"}
                        m={2}
                      >
                        Add to Gallery
                      </Button>
                    </>
                  ) : (
                    <Button
                      as={Link}
                      to={`/creator/${user._id}/galleries`}
                      colorScheme="green"
                      size="md"
                    >
                      Create Gallery
                    </Button>
                  )}
                </FormControl>
              </form>
            </Box>
          </Center>
        </>
      )}
    </>
  );
};

export default ArtworksDetail;
