import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CloudinaryContext } from "cloudinary-react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { Button, Heading, Text } from "@chakra-ui/react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

const Step3 = () => {
  const { styleLink, uploadedUrl } = useLocation().state;
  // console.log("The style link in coming is :", styleLink);
  // console.log("The uploaded url in coming is :", uploadedUrl);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [generatedImageURL, setGeneratedImageURL] = React.useState();
  const generateImage = () => {
    setLoading(true);
    axios
      .post("http://localhost:5000/nst", {
        styleImageURL: styleLink,
        contentImageURL: uploadedUrl,
      })
      .then((data) => {
        console.log(data.data.outputImage)
        setLoading(false);
        setGeneratedImageURL(data.data.outputImage);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };
  return (
    <Box pt={35}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={4}
        bg={"gray.900"}
        mx={"25rem"}
        borderRadius={"7px"}
        my={"5rem"}>
        <Stack
          bg={"gray.900"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}>
          <Stack spacing={4}>
            <Heading
              color={"gray.300"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}>
              Generate image
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Click the button below to apply stylization.
            </Text>
            <Stack direction="row"></Stack>
          </Stack>
          <Box as={"form"} mt={10}>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, red.900,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.900,pink.900)",
                boxShadow: "xl",
              }}
              onClick={generateImage}>
              Generate!
            </Button>
          </Box>
          {error && <h1>error</h1>}
          {loading ? (
            <h1>Loading</h1>
          ) : (
            <Image
              boxSize="150px"
              objectFit="cover"
              src={generatedImageURL}
              alt="Dan Abramov"
            />
          )}
          <Box as={"form"} mt={10}>
            <Link to="/createartwork/step1">
              <Button
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient="linear(to-r, blue.400,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }}>
                Back
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default Step3;
