import React from "react";
import { Link } from "react-router-dom";
import { HStack, VStack, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.Box
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}>
      <VStack></VStack>
    </motion.Box>
  );
}
