import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image, CloudinaryContext } from "cloudinary-react";
import { Center, Flex, Stack } from "@chakra-ui/react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/useAuthContext";

import { Heading, Text } from "@chakra-ui/react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Checkbox, useColorModeValue } from "@chakra-ui/react";

const categories = [
  { value: 1, label: "Portrait" },
  { value: 2, label: "Landscape" },
  { value: 3, label: "Still Life" },
  { value: 4, label: "Abstract" },
  { value: 5, label: "Allegory" },
];
const Step4 = () => {
  const { user } = useAuthContext();
  const { generatedImageURL } = useLocation().state;
  console.log("--step 5--> " + generatedImageURL);
  console.log("--step 5--> " + user._id);

  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryID, setCategoryID] = useState(0);
  const [nftLink, setNftLink] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      title,
      description,
      imgURL: generatedImageURL,
      categoryID,
      nftLink,
      createdByID: user._id,
      likes:{}

    };
    console.log(formData);
    //API call
    try {
      const response = await fetch('http://localhost:4000/api/v1/artworks/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('API response:', data);
      navigate('/allartworks');
      // Additional logic or actions after API call
    } catch (error) {
      console.error('API error:', error);
      // Handle any errors
    }

  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Box
        as="form"
        onSubmit={handleSubmit}
        p="6"
        boxShadow="md"
        rounded="md"
        maxW={{ base: "100%", md: "md" }}
        mx="auto"
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} align={"center"}>
            Generate the stylized image.
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Finally, finish off by pressing the generate button. ✌️
          </Text>
        </Stack>
        <VStack spacing="4">
          <FormControl id="title">
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter title"
            />
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Enter description"
            />
          </FormControl>

          <FormControl id="categoryID">
            <FormLabel>Category</FormLabel>
            <Select
              name="categoryID"
              value={categoryID}
              onChange={(event) => setCategoryID(parseInt(event.target.value))}
              placeholder="Select category"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl id="nftLink">
            <FormLabel>NFT Link (optional)</FormLabel>
            <Input
              type="text"
              name="nftLink"
              value={nftLink}
              onChange={(event) => setNftLink(event.target.value)}
              placeholder="Enter NFT link"
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </VStack>
      </Box>
    </motion.Flex>
  );
};

export default Step4;
