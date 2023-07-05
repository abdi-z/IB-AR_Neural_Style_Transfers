import React, { useState, useEffect } from "react";
import { Input, Button, Heading, Box, Center } from "@chakra-ui/react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const UpdateForm = () => {
  const { user } = useAuthContext();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Set the initial field values based on the user's data
    setUserName(user.userName);
    setEmail(user.email);
    setPhoneNumber(user.phoneNumber);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { userName, email, phoneNumber };
    const response = await fetch(
      "http://localhost:4000/api/v1/users/" + user._id,
      {
        method: "PATCH",
        body: JSON.stringify(updatedUser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      navigate("/profile");
    } else {
      console.error("Error updating user");
    }
  };

  return (
    <Box mx={300}>
      <Center m={5}>
        <Heading>Update Profile</Heading>
      </Center>

      <label> userName:</label>
      <Input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <label>email:</label>
      <Input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>phoneNumber:</label>
      <Input
        type="text"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
      />
      <Center m={5}>
        <Button colorScheme="teal" variant="solid" onClick={handleSubmit}>
          Update
        </Button>
      </Center>
    </Box>
  );
};

export default UpdateForm;
