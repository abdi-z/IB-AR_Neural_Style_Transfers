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
  useColorModeValue,
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
      .post("http://localhost:5000/api/v1/nst", {
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
    <motion.Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={2} >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} align={"center"}>Generate the stylized image.</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Finally, finish off by{" "}
            <Link color={"blue.400"}> pressing the generate button.</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          px={0}
          py={5}>
          <Stack spacing={4}>
            <Center>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                ⓘ The rendering may take time depending on size of image.
              </Text>
            </Center>
            <Box>
              {generatedImageURL ? (
                <Center>
                  <Button
                    fontFamily={"heading"}
                    w={"50%"}
                    bgGradient="linear(to-r, red.900,pink.400)"
                    color={"white"}
                    _hover={{
                      bgGradient: "linear(to-r, red.900,pink.900)",
                      boxShadow: "xl",
                    }}
                    onClick={downloadImage}>
                    Download!
                  </Button>
                </Center>
              ) : (
                <Center>
                  <Button
                    fontFamily={"heading"}
                    w={"50%"}
                    bgGradient="linear(to-r, red.900,pink.400)"
                    color={"white"}
                    _hover={{
                      bgGradient: "linear(to-r, red.900,pink.900)",
                      boxShadow: "xl",
                    }}
                    onClick={generateImage}
                    disabled={loading}>
                    Generate!
                  </Button>
                </Center>
              )}
            </Box>
            <Center>
              {error && <h1>Oops! An error occured</h1>}
              {loading ? (
                <Spinner color="red.500" />
              ) : (
                generatedImageURL && (
                  <Image
                    boxSize="350px"
                    objectFit="cover"
                    src={generatedImageURL}
                  />
                )
              )}
            </Center>
            <Link to="/createartwork/step1">
              <Center>
                <Button
                  fontFamily={"heading"}
                  w={"50%"}
                  bgGradient="linear(to-r, blue.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                  disabled={loading}>
                  Back
                </Button>
              </Center>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </motion.Flex>
  );
};
export default Step3;
