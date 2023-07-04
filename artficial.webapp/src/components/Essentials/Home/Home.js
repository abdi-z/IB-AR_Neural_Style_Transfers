import React, { useRef } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HStack, VStack, Stack } from "@chakra-ui/react";
import { motion , useAnimation, useInView} from "framer-motion";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import H5 from "./H5";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})

  

  return (
    <div ref={ref}>

    <motion.Box
      initial={{ opacity: 0, y:75 }}
      animate={{ opacity: 1 , y:0 }}
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}

    >
      <ChakraProvider>
        <Box
          bg={colorMode === "light" ? "gray.100" : "gray.900"}
          minH="100vh"
          py={10}
          >
          <Container maxW="container.lg">
          <H2/>
          <H1/>
          <H3/>
          <H5/>
          <H4/>
          </Container>
        </Box>
      </ChakraProvider>
    </motion.Box>
              </div>
  );
}
