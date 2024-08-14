import React from "react";
import SearchResult from "./SearchResult";

export const SearchResultList = ({ results, onAddToCollection, onAddToWishlist, onSetLiked  }) => {
  return (
    <div className="results-dropdown overflow-y-auto max-h-screen p-20">
      <h3 className="mt-4 pb-36 text-4xl font-bold dark:text-lightgray-default">Albums</h3>
      <div className="grid grid-cols-3 gap-32 justify-center">
        {results
          .filter((result) => result.type === "album")
          .map((result, id) => (
            <SearchResult 
            result={result} 
            key={id} 
            onAddToCollection={(result) => onAddToCollection(result)}
            onAddToWishlist={onAddToWishlist}
             />
          ))}
      </div>

      <h3 className="mt-4 text-4xl font-bold dark:text-lightgray-default">Artists</h3>
      <div className="grid grid-cols-3 gap-32  justify-center">
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
