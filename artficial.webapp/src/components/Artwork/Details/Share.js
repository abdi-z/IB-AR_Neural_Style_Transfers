import React, { useState } from "react";
import {
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { BsWhatsapp, BsTwitter, BsFillShareFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { TwitterShareButton, WhatsappShareButton } from "react-share";

const Share = ({ url }) => {
  const title = "Checkout this masterpiece(s)";
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <IconButton
        colorScheme="blue"
        variant="ghost"
        aria-label="Share artwork via Whatsapp"
        icon={<FaShare />}
        onClick={handleOpen}
      />

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share Artwork</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <WhatsappShareButton url={url} title={title}>
              <IconButton
                colorScheme="green"
                variant="ghost"
                aria-label="Share artwork via Whatsapp"
                icon={<BsWhatsapp />}
              />
            </WhatsappShareButton>
            <TwitterShareButton url={url} title={title}>
              <IconButton
                colorScheme="blue"
                variant="ghost"
                aria-label="Share artwork via Twitter"
                icon={<BsTwitter />}
              />
            </TwitterShareButton>
          </ModalBody>
          <ModalFooter>
            {/* Add any additional buttons or content for the modal footer */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Share;
