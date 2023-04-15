import { useArtworksContext } from "../../../hooks/useArtworksContext";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const SingleArtwork = ({ artwork }) => {
  const { dispatch } = useArtworksContext();

  const handleClick = async () => {
    const response = await fetch("/api/artworks/" + artwork._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_ARTWORKS", payload: json });
    }
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{artwork.title}</Heading>
          <Text>{artwork.description.substring(1, 50) + "..."}</Text>
          <Text color="blue.600" fontSize="1xl" textAlign={"right"}>
            {formatDistanceToNow(new Date(artwork.createdAt), {
              addSuffix: true,
            })}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link to={`/allartworks/${artwork._id}`}>
            <Button variant="solid" colorScheme="blue">
              View now
            </Button>
          </Link>
          <Link to={`/creator/${artwork.createdByID}`}>
            <Button variant="ghost" colorScheme="blue">
              View creator
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default SingleArtwork;
