import { ArtworksContext } from "../context/ArtworksContext";
import { useContext } from "react";

export const useArtworksContext = () => {
  const context = useContext(ArtworksContext);
  if (!context) throw Error("no context");
  return context;
};
