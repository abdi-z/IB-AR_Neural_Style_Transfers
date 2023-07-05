import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CloudinaryContext } from "cloudinary-react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, Heading, Text } from "@chakra-ui/react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";

const Step2 = () => {
  const { uploadedUrl } = useLocation().state;
  console.log("step2:" + uploadedUrl);

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
    <motion.Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={2}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Select a style to apply.</Heading>
          <Text fontSize={"lg"} color={"gray.500"}>
            Upload your image <Link color={"blue.400"}> to get started</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("gray.300", "gray.700")}
          boxShadow={"lg"}
          px={8}
          py={5}
        >
          <Stack spacing={4}>
            <Center>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                ⓘ Select style reference from any of these presets.
              </Text>
            </Center>
            <Stack direction="row">
              <Link
                to="/createartwork/step3"
                state={{
                  styleLink:
                    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688579062/j90cvutqstuwwz1qtlha.jpg",
                  uploadedUrl,
                }}
              >
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src="https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688579062/j90cvutqstuwwz1qtlha.jpg"
                  alt="Dan Abramov"
                />
              </Link>
              <Link
                to="/createartwork/step3"
                state={{
                  styleLink:
                    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688581898/axingvtvba9hoyiou4gs.jpg",
                  uploadedUrl,
                }}
              >
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src="https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688581898/axingvtvba9hoyiou4gs.jpg"
                  alt="Dan Abramov"
                />
              </Link>
              <Link
                to="/createartwork/step3"
                state={{
                  styleLink:
                    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688583440/yqjkbuxy2je4dlsi691y.jpg",
                  uploadedUrl,
                }}
              >
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src="https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688583440/yqjkbuxy2je4dlsi691y.jpg"
                  alt="Dan Abramov"
                />
              </Link>
              <Link
                to="/createartwork/step3"
                state={{
                  styleLink:
                    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1671910106/frida_blrpd3.jpg",
                  uploadedUrl,
                }}
              >
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src="https://res.cloudinary.com/dlx4hhpw2/image/upload/v1671910106/frida_blrpd3.jpg"
                  alt="Dan Abramov"
                  text="hello"
                />
              </Link>
            </Stack>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Picasso
            </Text>
            <Stack direction="row">
              <Link
                to="/createartwork/step3"
                state={{
                  styleLink:
                    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688568613/pawp55sgpnugggdksurv.jpg",
                  uploadedUrl,
                }}
              >
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src="https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688568613/pawp55sgpnugggdksurv.jpg"
                  alt="Dan Abramov"
                />
              </Link>
              <Link
                to="/createartwork/step3"
                state={{
                  styleLink:
                    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688582395/zacusvtcspb2jippzorx.jpg",
                  uploadedUrl,
                }}
              >
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src="https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688582395/zacusvtcspb2jippzorx.jpg"
                  alt="Dan Abramov"
                />
              </Link>
              <Link
                to="/createartwork/step3"
                state={{
                  styleLink:
                    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1671910107/starrynight_e37vxd.jpg",
                  uploadedUrl,
                }}
              >
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src="https://res.cloudinary.com/dlx4hhpw2/image/upload/v1671910107/starrynight_e37vxd.jpg"
                  alt="Dan Abramov"
                />
              </Link>
              <Link
                to="/createartwork/step3"
                state={{
                  styleLink:
                    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688569540/p6hzyyd1t77aw9apjwyy.jpg",
                  uploadedUrl,
                }}
              >
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src="https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688569540/p6hzyyd1t77aw9apjwyy.jpg"
                  alt="Dan Abramov"
                  text="hello"
                />
              </Link>
            </Stack>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Van Gogh.
            </Text>
            <Stack direction="row">
              <Link
                to="/createartwork/step3"
                state={{
                  styleLink:
                    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1671910110/klimt_crnscp.jpg",
                  uploadedUrl,
                }}
              >
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src="https://res.cloudinary.com/dlx4hhpw2/image/upload/v1671910110/klimt_crnscp.jpg"
                  alt="Dan Abramov"
                />
              </Link>
              <Link
                to="/createartwork/step3"
                state={{
                  styleLink:
                    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1671910104/monet_ibeze6.jpg",
                  uploadedUrl,
                }}
              >
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src="https://res.cloudinary.com/dlx4hhpw2/image/upload/v1671910104/monet_ibeze6.jpg"
                  alt="Dan Abramov"
                />
              </Link>
              <Link
                to="/createartwork/step3"
                state={{
                  styleLink:
                    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688583858/d1w6cpm8unyfd8twssty.jpg",
                  uploadedUrl,
                }}
              >
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src="https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688583858/d1w6cpm8unyfd8twssty.jpg"
                  alt="Dan Abramov"
                />
              </Link>
              <Link
                to="/createartwork/step3"
                state={{
                  styleLink:
                    "https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688583420/oxo5wf8lcfoq9bv3tf8v.jpg",
                  uploadedUrl,
                }}
              >
                <Image
                  boxSize="150px"
                  objectFit="cover"
                  src="https://res.cloudinary.com/dlx4hhpw2/image/upload/v1688583420/oxo5wf8lcfoq9bv3tf8v.jpg"
                  alt="Dan Abramov"
                  text="hello"
                />
              </Link>
            </Stack>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Leonardo da Vinci
            </Text>
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
                  }}
                >
                  Back
                </Button>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </motion.Flex>
  );
};

export default Step2;
