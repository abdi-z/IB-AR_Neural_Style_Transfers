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
          <Heading fontSize={"4xl"}>Select a Content to apply.</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Upload your image <Link color={"blue.400"}> to get started</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          px={8}
          py={5}
        >
          <Stack spacing={5}>
            <Center>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                ⓘ You can upload image of any resolution and sizze.
              </Text>
            </Center>
            <Box as={"form"} mt={0}>
              <Link to="/createartwork/step1">
                <Button
                  fontFamily={"heading"}
                  mb={5}
                  w={"full"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                >
                  Step 1
                </Button>
              </Link>
            </Box>

            <Center>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                ⓘ You can upload image of any resolution and size.
              </Text>
            </Center>
            <Box as={"form"} mt={5}>
              <Link to="/createartwork/dalle">
                <Button
                  fontFamily={"heading"}
                  mt={0}
                  w={"full"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                >
                  Dalle
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
