import React, { useState } from "react";
import { Input, Button, Heading, Box ,Center} from "@chakra-ui/react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

const UpdateForm = () => {
  const { user } = useAuthContext();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("first");
    const updatedUser = { userName, email, phoneNumber };
    console.log(updatedUser);
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
      console.log(json);
      localStorage.setItem("user", JSON.stringify(json));
      setUserName("");
      setEmail("");
      setPhoneNumber("");
    } else {
      console.error("Error updating user");
    }
  };
  return (
    <Box mx={300} >
      <Center m={5}>

      <Heading>Update Profile</Heading>
      </Center >

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
      {/* {error && <div className="error">{error}</div>} */}
    </Box>
  );
};

export default UpdateForm;
