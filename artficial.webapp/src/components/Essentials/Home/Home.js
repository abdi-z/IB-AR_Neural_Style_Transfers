import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div>Home Page</div>

      <Link to="/allartworks">
        <blockquote>All Artwork</blockquote>
      </Link>
    </>
  );
}
