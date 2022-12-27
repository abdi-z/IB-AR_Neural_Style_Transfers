import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

const Step1 = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate form data and set errors
    // if form is valid, submit data to server
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
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            />
            {errors.email && <FormHelperText>{errors.email}</FormHelperText>}
          </FormControl>
          <FormControl isInvalid={errors.password} mt={4}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password || ""}
              onChange={handleChange}
            />
            {errors.password && (
              <FormHelperText>{errors.password}</FormHelperText>
            )}
          </FormControl>
          <Button mt={4} type="submit">
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Step1;
