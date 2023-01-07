import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CloudinaryContext } from "cloudinary-react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { saveAs } from "file-saver";

import { Button, Heading, Text } from "@chakra-ui/react";
import {
  Box,
  FormControl,
  FormLabel,
  Center,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Step3 = () => {
  const { styleLink, uploadedUrl } = useLocation().state;
  // console.log("The style link in coming is :", styleLink);
  // console.log("The uploaded url in coming is :", uploadedUrl);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [generatedImageURL, setGeneratedImageURL] = React.useState();
  const downloadImage = () => {
    saveAs(generatedImageURL, "ARTficial.png"); // Put your image url here.
  };
  const generateImage = () => {
    setLoading(true);
    axios
      .post("http://localhost:5000/nst", {
        styleImageURL: styleLink,
        contentImageURL: uploadedUrl,
      })
      .then((data) => {
        console.log(data.data.outputImage);
        setLoading(false);
        setGeneratedImageURL(data.data.outputImage);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };
  return (
    <motion.Box
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}>
        
      <Box
        display="flex"
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
            <Center>
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
            </Center>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Click the button below to apply stylization.
            </Text>
            <Stack direction="row"></Stack>
          </Stack>
          <Box>
            {generatedImageURL ? (
              <Button
                fontFamily={"heading"}
                w={"full"}
                bgGradient="linear(to-r, red.900,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.900,pink.900)",
                  boxShadow: "xl",
                }}
                onClick={downloadImage}> 
                Download!
              </Button>
            ) : (
              <Button
                fontFamily={"heading"}
                w={"full"}
                bgGradient="linear(to-r, red.900,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.900,pink.900)",
                  boxShadow: "xl",
                }}
                onClick={generateImage} disabled={loading}>
                Generate!
              </Button>
            )}
          </Box>
          <Center>
            {error && <h1>error</h1>}
            {loading ? (
              <Spinner color="red.500" />
            ) : (
              generatedImageURL && (
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src={generatedImageURL}
                />
              )
            )}
          </Center>
          <Box as={"form"} mt={10}>
            <Link to="/createartwork/step1">
              <Button
                fontFamily={"heading"}
                w={"full"}
                bgGradient="linear(to-r, blue.400,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }} disabled={loading}>
                Back
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </motion.Box>
  );
};
export default Step3;
