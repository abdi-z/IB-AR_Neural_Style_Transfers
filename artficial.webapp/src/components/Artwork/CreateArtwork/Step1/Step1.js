import React from "react";
import {
  Button,
  Flex,
  Heading,
  Image,
  Container,
  Icon,
  IconProps,
  Stack,
  Text,
  Select,
  FormControl,
  Box,
  FormLabel,
  IconButton,
  Input,
  Progress,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
const Step1 = () => {
  const [pseudoState, setPseudoState] = React.useState();
  return (
    <Container maxW={"7xl"}>
      <Progress value={33} height="2rem" colorScheme="pink" mt={10} />
      <Text
        color={"white"}
        style={{ position: "absolute", top: "22.5%", left: "50%" }}>
        33%
      </Text>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 26 }}
        direction={{ base: "column", md: "row" }}>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}>
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            // boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}>
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://img.freepik.com/free-vector/business-partners-handshake_74855-5222.jpg?w=1380&t=st=1661446580~exp=1661447180~hmac=401d0f59df91ab4dc0aec93b2c72d9ed1189d1a86fcf93b8fedd6e3e159bf526"
              }
            />
          </Box>
        </Flex>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                // bg: "red.400",
                zIndex: -1,
              }}>
              Set up pickup a location📍
            </Text>
            <br />
          </Heading>

          <Stack spacing={2}>
            <FormControl id="title">
              <FormLabel>
                State:{" "}
                <Tooltip
                  fontSize="md"
                  label="Add the state of the location of attire."
                  aria-label="A tooltip">
                  <QuestionOutlineIcon mb={0.5} />
                </Tooltip>
              </FormLabel>
              <Select
                placeholder="Select a relevant category"
                //</FormControl>onChange={(e) => handleInputChange(e.target.value)}
              >
                <option value="Punjab">Punjab</option>
                <option value="KPK">KPK</option>
                <option value="Balochistan">Balochistan</option>
                <option value="Sindh">Sindh</option>
              </Select>
            </FormControl>
            <FormControl id="description">
              <FormLabel>
                Location{" "}
                <Tooltip
                  fontSize="md"
                  label="Give the complete address of the pickup location of the attire."
                  aria-label="A tooltip">
                  <QuestionOutlineIcon />
                </Tooltip>
              </FormLabel>
              <Input
                type="text"
                //  onChange={(e) => setInputLocation(e.target.value)}
                // value={inputLocation}
              />
            </FormControl>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}>
              <Link to="/earn/setPrice">
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}>
                  Continue
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Step1;
