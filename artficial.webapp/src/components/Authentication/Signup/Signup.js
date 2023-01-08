import React, { useState } from "react";
import { useSignup } from "../../../hooks/useSignup";
import { Image, CloudinaryContext } from "cloudinary-react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Radio, RadioGroup } from "@chakra-ui/react";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [imageSelected, setImageSelected] = React.useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("M");
  const [avatarImgURL, setAvatarImgURL] = useState(
    "https://avatars.dicebear.com/api/male/username.svg"
  );
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup form: ", email);
    await signup(email, password, userName, phoneNumber, gender, uploadedUrl);
    navigate("/allartworks");
  };

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
        setIsImageSelected(true);
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
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>User name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Center>
                <RadioGroup onChange={setGender} value={gender} pt={4}>
                  <Stack direction="row">
                    <Radio value="M">Male</Radio>
                    <Radio value="F">Female</Radio>
                    <Radio value="O">Others</Radio>
                  </Stack>
                </RadioGroup>
              </Center>
              <FormControl id="email" isRequired>
                <FormLabel>Profile Photo</FormLabel>
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
              </FormControl>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} to="/login">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </motion.Flex>
  );
};

export default Signup;
