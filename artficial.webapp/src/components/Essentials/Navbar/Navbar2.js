import { useState } from "react";
import {  Flex, Button, Icon, Text } from "@chakra-ui/react";
import { FaFire, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyComponent = () => {
  const [activeComponent, setActiveComponent] = useState("all");

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };
  

  return (
    <Flex align="center" justify="center">
    
    <Link to="/allartworks">
      <Button
        fontFamily="heading"
        bg={activeComponent === "all" ? "pink.500" : "gray.500"}
        color="white"
        onClick={() => handleComponentChange("all")}
        mr={2}
      >
        <Icon as={FaList} mr={2} />
        All
      </Button>
    </Link>

      <Text fontSize="lg" fontWeight="bold" color="gray.500">
        |
      </Text>

      <Link to="/trending">

        <Button
            fontFamily="heading"
            bg={activeComponent === "trending" ? "pink.500" : "gray.500"}
            color="white"
            onClick={() => handleComponentChange("trending")}
            ml={2}
            >
            <Icon as={FaFire} mr={2} />
            Trending
        </Button>

      </Link>

      {activeComponent === "all" && (
        <div>
          {/* Render the "All" component */}
        </div>
      )}

      {activeComponent === "trending" && (
        <div>
          {/* Render the "Trending" component */}
        </div>
      )}
    </Flex>
  );
};

export default MyComponent;
