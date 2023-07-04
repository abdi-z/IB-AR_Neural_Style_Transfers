import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ai1 from "./images/ai1.jpeg";
import ai2 from "./images/ai2.png";
import ai3 from "./images/ai3.jpeg";
import ai4 from "./images/ai4.jpg";
import ai5 from "./images/ai5.jpeg";
import { motion } from "framer-motion";

const avatars = [
  {
    name: "Ryan Florence",
    url: ai1,
  },
  {
    name: "Segun Adebayo",
    url: ai2,
  },
  {
    name: "Kent Dodds",
    url: ai3,
  },
  {
    name: "Prosper Otemuyiwa",
    url: ai4,
  },
  {
    name: "Christian Nwamba",
    url: ai5,
  },
];

export default function Preface() {
  return (
    <motion.Box
      position={"relative"}
      initial={{ opacity: 0, y:75 }}
      animate={{ opacity: 1 , y:0 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Container
        as={SimpleGrid}
        maxW={"6xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 2, sm: 20, lg: 20 }}
      >
        <Stack spacing={{ base: 10, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Create stunning{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              artworks
            </Text>{" "}
            with our user-friendly platform
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={{ base: "lg", md: "lg" }}
                  position={"relative"}
                  zIndex={1}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",

                    // transform: "scale(1.125)",
                    //bgGradient: "linear(to-bl, red.400,pink.400)",
                    position: "absolute",
                    zIndex: 1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.900"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.300"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Let the world become your canvas
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Unleash your creativity and bring your vision to life. Transform
              your ideas into beautiful, one-of-a-kind artworks with our
              comprehensive art creation tools
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Link to="/createartwork/select1">
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
                Create an Artwork
              </Button>
            </Link>
          </Box>
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={20}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </motion.Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
