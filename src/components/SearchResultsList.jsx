import React from "react";
import SearchResult from "./SearchResult";

export const SearchResultList = ({ results, onAddToCollection, onAddToWishlist, onSetLiked  }) => {
  return (
    <div className="results-dropdown overflow-y-auto">
      <h3 className="mt-4 text-lg text-center">Albums</h3>
      <div className="grid grid-cols-3 gap-10 justify-center">
        {results
          .filter((result) => result.type === "album")
          .map((result, id) => (
            <SearchResult 
            result={result} 
            key={id} 
            onAddToCollection={onAddToCollection}
            onAddToWishlist={onAddToWishlist}
             />
          ))}
      </div>

      <h3 className="mt-4 text-lg text-center">Artists</h3>
      <div className="grid grid-cols-3 gap-10 justify-center">
        {results
          .filter((result) => result.type === "artist")
          .map((result, id) => (
            <SearchResult 
            result={result} 
            key={id}
            onSetLiked={onSetLiked} 
            />
          ))}
      </div>
    </div>
  );
};

export default SearchResultList;
