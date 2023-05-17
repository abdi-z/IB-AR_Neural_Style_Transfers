import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="8">
      <Heading textAlign="center" size="xl">
        Login
      </Heading>
      <Box bg="gray.500" boxShadow="lg" rounded="lg" p="6">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              autoComplete="on"
            />
          </FormControl>
          <Button
            colorScheme="blue"
            mt="6"
            type="submit"
            isDisabled={isLoading}
            isLoading={isLoading}
            px="33px"
            mx="35%"
          >
            Log in
          </Button>
        </form>
        {error && (
          <Text mt="4" color="red.500" textAlign="center">
            {error}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default Login;
