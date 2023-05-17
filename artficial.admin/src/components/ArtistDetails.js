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
import { TbListDetails } from "react-icons/tb";

const ArtistDetails = ({ artist }) => {
  const { dispatch } = useArtworksContext();
  const { user } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    if (!user) {
      return;
    }
    console.log(artist.userName);
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
    <Box border="1px" borderColor="gray.200" borderRadius="md" p="4" mb="4">
      <Flex justify="space-between" alignItems="center">
        <Heading as="h1" size="lg" mb="2">
          {artist.userName}
        </Heading>
        <IconButton
          colorScheme="red"
          variant="ghost"
          aria-label="Delete artwork"
          icon={<TbListDetails />}
          onClick={() => setIsModalOpen(true)}
        />
      </Flex>
      <Text mb="2">{artist.email}</Text>
      <Text mb="2">{artist.phoneNumber}</Text>
      <Text mb="2">
        {formatDistanceToNow(new Date(artist.createdAt), { addSuffix: true })}
      </Text>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Artwork</ModalHeader>
          <ModalBody>Are you sure you want to delete this artwork?</ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button colorScheme="red" ml={3} onClick={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ArtistDetails;
