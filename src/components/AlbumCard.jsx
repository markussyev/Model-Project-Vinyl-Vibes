import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "../ThemeContext";
import {
  CollectionAddIcon,
  CollectionRemoveIcon,
  WishListAddIcon,
  WishListRemoveIcon,
} from "./Icons";

const AlbumCard = ({
  albumName,
  artistTitle,
  year,
  genre,
  imgUrl,
  inCollection,
  inWishlist,
  onAddToCollection,
  onAddToWishlist,
}) => {
  const { darkMode, themeStyles } = useTheme();

  const [isInCollection, setIsInCollection] = useState(inCollection);
  const [isInWishlist, setIsInWishlist] = useState(inWishlist);

  const handleAddToCollection = () => {
    setIsInCollection(true);
    if (onAddToCollection) onAddToCollection();
  };

  const handleRemoveFromCollection = () => {
    setIsInCollection(false);
    if (onAddToCollection) onAddToCollection();
  };

  const handleAddToWishlist = () => {
    setIsInWishlist(true);
    if (onAddToWishlist) onAddToWishlist();
  };

  const handleRemoveFromWishlist = () => {
    setIsInWishlist(false);
    if (onAddToWishlist) onAddToWishlist();
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
          <h3 className="album-title  text-xl font-bold ">{albumName}</h3>
          <h6 className="artist-title text-sm font-medium">{artistTitle}</h6>
          <p>{year}</p>
          <p>{genre}</p>
        </div>

        <div className="album-card-icons flex self-end">
          {!isInCollection ? (
            <span className="cursor-pointer" onClick={handleAddToCollection}>
              <CollectionAddIcon title="Add to My Collection" />
            </span>
          ) : (
            <span
              className="cursor-pointer"
              onClick={handleRemoveFromCollection}
            >
              <CollectionRemoveIcon title="Remove from My Collection" />
            </span>
          )}
          {!isInWishlist ? (
            <span className="cursor-pointer" onClick={handleAddToWishlist}>
              <WishListAddIcon title="Add to My Wishlist" />
            </span>
          ) : (
            <span className="cursor-pointer" onClick={handleRemoveFromWishlist}>
              <WishListRemoveIcon title="Remove from My Wishlist" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

AlbumCard.propTypes = {
  albumName: PropTypes.string.isRequired,
  artistTitle: PropTypes.string.isRequired,
  year: PropTypes.string,
  genre: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  inCollection: PropTypes.bool,
  inWishlist: PropTypes.bool,
  onAddToCollection: PropTypes.func,
  onAddToWishlist: PropTypes.func,
};

export default AlbumCard;
