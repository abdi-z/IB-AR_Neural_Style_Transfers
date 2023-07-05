import React, { useState } from "react";
import {
  FormControl,
  Input,
  Button,
  Box,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const API_KEY = "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";

const Dalle = () => {
  const [prompt, setPrompt] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [isImageSelected, setIsImageSelected] = useState(true);

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      }),
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        options
      );
      const image = await response.json();
      const imageUrl = image.data[0].url;
      setUploadedUrl(imageUrl);
      console.log(imageUrl);
      setIsImageSelected(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box textAlign="center" mt={8}>
      <Heading as="h1" mb={4}>
        Generate image using Dall-E Model
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input
            type="text"
            value={prompt}
            onChange={handleInputChange}
            placeholder="Enter prompt"
            maxWidth="300px"
            mx="auto"
            _focus={{ outline: "none", borderColor: "teal.500" }}
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="teal"
          mt={4}
          _hover={{ bg: "teal.600" }}
        >
          Generate
        </Button>
      </form>
      {loading ? (
        <Box mt={4}>
          <Spinner size="xl" color="teal" />
        </Box>
      ) : (
        uploadedUrl && (
          <Box
            mt={4}
            maxWidth="500px"
            mx="auto"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
          >
            <img
              src={uploadedUrl}
              alt="Generated Image"
              style={{ maxWidth: "100%" }}
            />
          </Box>
        )
      )}
      <Link
        to="/createartwork/select"
        state={{
          uploadedUrl
        }}
      >
        <Button colorScheme="red" mt={4} _hover={{ bg: "red.400" }} disabled={isImageSelected}>
          Proceed
        </Button>
      </Link>
    </Box>
  );
};

export default Dalle;
