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

const Step2 = () => {
  const { uploadedUrl } = useLocation().state;
  const [imageSelected, setImageSelected] = React.useState("");
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [michelangelo, setMichelangelo] = React.useState(
    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1671910110/klimt_crnscp.jpg"
  );
  const [leonardo, setLeonardo] = React.useState(
    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1671910106/frida_blrpd3.jpg"
  );
  const [monet, setMonet] = React.useState(
    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1671910104/monet_ibeze6.jpg"
  );
  const [vangogh, setVangogh] = React.useState(
    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1671910107/starrynight_e37vxd.jpg"
  );

  return (
    <Box pt={25}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={1}
        bg={"gray.900"}
        mx={"20rem"}
        borderRadius={"7px"}
        my={"2rem"}>
        <Stack
          bg={"gray.900"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}>
          <Stack
            spacing={4}
            display="flex"
            justifyContent="center"
            alignItems="center">
            <Heading
              color={"gray.300"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}>
              Select a style preset
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Select one of the following the style presets.
            </Text>
            <Stack direction="row">
              <Link
                to="/createartwork/step3"
                state={{ styleLink: michelangelo, uploadedUrl }}>
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src={michelangelo}
                  alt="Dan Abramov"
                />
              </Link>
              <Link
                to="/createartwork/step3"
                state={{ styleLink: leonardo, uploadedUrl }}>
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src={leonardo}
                  alt="Dan Abramov"
                />
              </Link>
              <Link
                to="/createartwork/step3"
                state={{ styleLink: monet, uploadedUrl }}>
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src={monet}
                  alt="Dan Abramov"
                />
              </Link>
              <Link
                to="/createartwork/step3"
                state={{ styleLink: vangogh, uploadedUrl }}>
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src={vangogh}
                  alt="Dan Abramov"
                  text="hello"
                />
              </Link>
            </Stack>
          </Stack>

          <Box as={"form"} mt={10}>
            <Link to="/createartwork/step1">
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
                Back
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Step2;
