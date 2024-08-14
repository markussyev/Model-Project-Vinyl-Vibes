import React from "react";
import AlbumCard from "./AlbumCard";
import ArtistCard from "./ArtistCard";

const SearchResult = ({
  result,
  onAddToCollection,
  onAddToWishlist,
  onSetLiked,
}) => {
  if (result.type === "album") {
    return (
      <AlbumCard
        albumName={result.albumName}
        artistTitle={result.artistTitle}
        imgUrl={result.imageUrl}
        year={result.year}
        genre={result.genre}
        inCollection={result.inCollection}
        inWishlist={result.inWishlist}
        onAddToCollection={() => onAddToCollection(result)}
        onAddToWishlist={() => onAddToWishlist(result)}
      />
    );
  } else if (result.type === "artist") {
    return (
      <ArtistCard
        artistTitle={result.artistTitle}
        imgUrl={result.imageUrl}
        liked={result.liked}
        setLiked={() => onSetLiked(result)}
      />
    );
  }
};

export default SearchResult;
