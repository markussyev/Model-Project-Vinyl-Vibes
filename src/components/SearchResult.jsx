import React from "react";
import  AlbumCard from "./AlbumCard";
import ArtistCard  from "./ArtistCard";

export const SearchResult = ({ result }) => {
  return result.type === "album" ? (
    < AlbumCard 
    albumName={result.name}
    artistName={result.artist}
    imgUrl={result.imageUrl}
    /> ) : (
      < ArtistCard 
      artistName={result.name}
      imgUrl={result.imageUrl}
      />
    ) };

    export default SearchResult;