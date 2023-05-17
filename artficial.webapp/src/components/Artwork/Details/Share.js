import React from "react";
import { IconButton } from "@chakra-ui/react";
import { BsWhatsapp, BsTwitter } from "react-icons/bs";
import { TwitterShareButton, WhatsappShareButton } from "react-share";

const Share = ({ url }) => {
  const title = "Checkout this masterpiece(s)";
  return (
    <div>
      <div>
        <p>Share on WhatsApp</p>
        <WhatsappShareButton url={url} title={title}>
          <IconButton
            colorScheme="green"
            variant="ghost"
            aria-label="Delete artwork"
            icon={<BsWhatsapp />}
          />
        </WhatsappShareButton>
      </div>

      <p>Share on Twitter</p>
      <TwitterShareButton url={url} title={title}>
        <IconButton
          colorScheme="blue"
          variant="ghost"
          aria-label="Delete artwork"
          icon={<BsTwitter />}
        />
      </TwitterShareButton>
    </div>
  );
};

export default Share;
