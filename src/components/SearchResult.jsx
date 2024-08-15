import React from "react";
import AlbumCard from "./AlbumCard";
import ArtistCard from "./ArtistCard";

const SearchResult = ({
  result,
  onAddToCollection,
  onRemoveFromCollection,
  onAddToWishlist,
  onRemoveFromWishlist,
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
        onRemoveFromCollection={() => onRemoveFromCollection(result)}
        onAddToWishlist={() => onAddToWishlist(result)}
        onRemoveFromWishlist={() => onRemoveFromWishlist(result)}
      />
    );
  } else if (result.type === "artist") {
    return (
      <ArtistCard
        artistTitle={result.artistTitle}
        imgUrl={result.imageUrl}
        liked={result.liked}
        handleSetLiked={() => onSetLiked(result)}
      />
    );
  }
};

export default SearchResult;
