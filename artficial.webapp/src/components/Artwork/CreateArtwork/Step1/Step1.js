import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image, CloudinaryContext } from "cloudinary-react";
import { Center, Flex, Stack } from "@chakra-ui/react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Button, Heading, Text } from "@chakra-ui/react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

const Step1 = () => {
  const [imageSelected, setImageSelected] = React.useState("");
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const uploadImage = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "kf2dcmgt");
    axios
      .post("https://api.cloudinary.com/v1_1/dlx4hhpw2/image/upload", formData)
      .then((response) => {
        // console.log(response);
        setLoading(false);
        setUploadedUrl(response.data.secure_url);
      });
  };

  return (
    <motion.Box
      pt={25}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}>
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
          <Center>
            <Stack spacing={4}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Heading
                  color={"gray.300"}
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}>
                  Let's get started
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, red.400,pink.400)"
                    bgClip="text">
                    !
                  </Text>
                </Heading>
              </Box>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                Start off by uploading the image to be stylized.
              </Text>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                <input
                  type="file"
                  onChange={(e) => {
                    setImageSelected(e.target.files[0]);
                  }}
                />
                <Button onClick={uploadImage}>Upload</Button>
              </Text>
            </Stack>
          </Center>
          <Center>
            {loading ? (
              <Spinner color="red.500" />
            ) : (
              <Image
                style={{ width: 200 }}
                cloudName="dlx4hhpw2"
                publicId={uploadedUrl}
              />
            )}
          </Center>
          <Box as={"form"} mt={10}>
            <Link to="/createartwork/step2" state={{ uploadedUrl }}>
              <Button
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }}>
                Proceed
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </motion.Box>
  );
};

export default Step1;
