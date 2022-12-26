import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
const Step3 = () => {
  const [pseudoState, setPseudoState] = React.useState();
  return (
    <div>
      Preface
      <Link to="/" state={{ pseudoState }}>
        <Button
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}>
          Continue
        </Button>
      </Link>
    </div>
  );
};

export default Step3;
