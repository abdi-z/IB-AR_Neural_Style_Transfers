import "../index.css";
import { useState } from "react";
import { useArtworksContext } from "../hooks/useArtworksContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";
import {
  Box,
  Heading,
  Text,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Flex,
} from "@chakra-ui/react";
import { MdMore } from "react-icons/md";

const ArtworkDetails = ({ artwork }) => {
  const { dispatch } = useArtworksContext();
  const { user } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    if (!user) {
      return;
    }
    // console.log(artwork.title);
    setIsModalOpen(false);
    // const response = await fetch("/api/artwork/" + artwork._id, {
    //   method: "DELETE",
    //   headers: {
    //     Authorization: `Bearer ${user.token}`,
    //   },
    // });
    // const json = await response.json();

    // if (response.ok) {
    //   dispatch({ type: "DELETE_ARTWORK", payload: json });
    // }
  };

  return (
    <Box border="10px" borderColor="gray.100" borderRadius="md" p="4">
      <Flex justify="space-between" alignItems="center">
        <Heading as="h1" size="lg" mb="2">
          {artwork.title}
        </Heading>
        <IconButton
          colorScheme="green"
          variant="ghost"
          aria-label="Delete artwork"
          icon={<MdMore />}
          onClick={() => setIsModalOpen(true)}
        />
      </Flex>

      <Text mb="2">Likes : {Object.keys(artwork.likes).length}</Text>
      <Text mb="2">
        {formatDistanceToNow(new Date(artwork.createdAt), { addSuffix: true })}
      </Text>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{artwork.title}</ModalHeader>
          <ModalBody>{artwork.description}</ModalBody>
          <ModalBody>{artwork.createdByID}</ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            {/* <Button colorScheme="red" ml={3} onClick={handleDelete}>
              Delete
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ArtworkDetails;
