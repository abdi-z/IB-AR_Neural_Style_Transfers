import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image, CloudinaryContext } from "cloudinary-react";
import { Stack } from "@chakra-ui/react";
import axios from "axios";

import { Button, Heading, Text } from "@chakra-ui/react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

const Step2 = () => {
  const [imageSelected, setImageSelected] = React.useState("");
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate form data and set errors
    // if form is valid, submit data to server
  };

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "kf2dcmgt");
    axios
      .post("https://api.cloudinary.com/v1_1/dlx4hhpw2/image/upload", formData)
      .then((response) => {
        console.log(response);
        setUploadedUrl(response.data.secure_url);
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
              Let's get started
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
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
          {uploadedUrl && (
            <Image
              style={{ width: 200 }}
              cloudName="dlx4hhpw2"
              publicId={uploadedUrl}
            />
          )}
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
    </Box>
  );
};

export default Step2;
