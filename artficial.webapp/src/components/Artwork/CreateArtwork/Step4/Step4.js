import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image, CloudinaryContext } from "cloudinary-react";
import { Center, Flex, Stack } from "@chakra-ui/react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Button, Heading, Text } from "@chakra-ui/react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import { Checkbox, useColorModeValue } from "@chakra-ui/react";

const Step4 = () => {
  const [imageSelected, setImageSelected] = React.useState("");
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [styleLink, setStyleLink] = useState("www.styleimage.com");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isImageSelected, setIsImageSelected] = useState(true);

  const { uploadedUrl } = useLocation().state;
  console.log("uploaded URL--4--> " + uploadedUrl);

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
        setStyleLink(response.data.secure_url);
        setIsImageSelected(false);
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
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Provide a style refernce.</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Upload your image <Link color={"blue.400"}> to get started</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Center>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                ⓘ You can upload image of any resolution and size.
              </Text>
            </Center>
            <Center>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                <input
                  type="file"
                  onChange={(e) => {
                    setImageSelected(e.target.files[0]);
                  }}
                />
                <Button onClick={uploadImage}>Upload</Button>
              </Text>
            </Center>
            <Stack>
              <Center>
                {loading ? (
                  <Spinner color="red.500" />
                ) : (
                  <Image
                    style={{ width: 200 }}
                    cloudName="dlx4hhpw2"
                    publicId={styleLink}
                  />
                )}
              </Center>
              <Box as={"form"} mt={10}>
                <Link
                  to="/createartwork/step3"
                  state={{
                    styleLink,
                    uploadedUrl,
                  }}
                >
                  <Button
                    fontFamily={"heading"}
                    mt={8}
                    w={"full"}
                    bgGradient="linear(to-r, red.400,pink.400)"
                    color={"white"}
                    _hover={{
                      bgGradient: "linear(to-r, red.400,pink.400)",
                      boxShadow: "xl",
                    }}
                    disabled={isImageSelected}
                  >
                    Proceed
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </motion.Flex>
  );
};

export default Step4;
