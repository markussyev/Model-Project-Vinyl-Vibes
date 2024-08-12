import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "../ThemeContext";
import { CollectionAddIcon, CollectionRemoveIcon, WishListAddIcon, WishListRemoveIcon } from "./Icons";

const AlbumCard = ({
  albumName,
  artistTitle,
  year,
  genre,
  imgUrl,
  inCollection,
  inWishlist,
}) => {
  const { darkMode, themeStyles } = useTheme();

  const [isInCollection, setIsInCollection] = useState(inCollection);
  const [isInWishlist, setIsInWishlist] = useState(inWishlist);

  const handleAddToCollection = () => {
    setIsInCollection(true);
  };

  const handleRemoveFromCollection = () => {
    setIsInCollection(false);
  };

  const handleAddToWishlist = () => {
    setIsInWishlist(true);
  };

  const handleRemoveFromWishlist = () => {
    setIsInWishlist(false);
  };

  return (
    <div className="album-card relative flex flex-col items-center w-64 h-96 p-5 rounded-xl bg-white drop-shadow-lg text-darkgray-default dark:bg-darkgray-light dark:text-lightgray-default">
      <img
        src={imgUrl}
        alt={`${albumName} cover`}
        className="album-cover absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-5 rounded-full w-48 border-4 border-lightcoral-default"
      />
      <div className="album-card-content flex flex-col space-y-20 mt-36">
        <div>
          <h3 className="album-title  text-2xl font-bold ">{albumName}</h3>
        <h6 className="artist-title font-medium">{artistTitle}</h6>
        <p>{year}</p>
        <p>{genre}</p>
        </div>
      
      <div className="album-card-icons flex self-end">
        {!isInCollection ? (
          <CollectionAddIcon
            onClick={handleAddToCollection}
            title="Add to My Collection"
          />
        ) : (
          <CollectionRemoveIcon
            onClick={handleRemoveFromCollection}
            title="Remove from My Collection"
          />
        )}
        {!isInWishlist ? (
          <WishListAddIcon
            onClick={handleAddToWishlist}
            title="Add to My Wishlist"
          />
        ) : (
          <WishListRemoveIcon
            onClick={handleRemoveFromWishlist}
            title="Remove from My Wishlist"
          />
        )}
      </div>
      </div>
    </div>
  );
};

export default AlbumCard;

AlbumCard.propTypes = {
  albumName: PropTypes.string.isRequired,
  artistTitle: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  inCollection: PropTypes.bool,
  inWishlist: PropTypes.bool,
};
