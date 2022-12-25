import { useArtworksContext } from "../../../hooks/useArtworksContext";

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
    <div className="workout-details">
      <h4>{artwork.title}</h4>
      <p>
        <strong>Title: </strong>
        {artwork.title}
      </p>
      <p>
        <strong>Desciption: </strong>
        {artwork.description}
      </p>
      <p>
        {formatDistanceToNow(new Date(artwork.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default SingleArtwork;
