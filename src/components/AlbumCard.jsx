import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import {
  CollectionAddIcon,
  CollectionRemoveIcon,
  WishListAddIcon,
  WishListRemoveIcon,
} from './Icons';

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
    console.log('Add to collection');
    setIsInCollection(true);
    if (onAddToCollection) onAddToCollection();
  };

  const handleRemoveFromCollection = () => {
    console.log('Remove from collection');
    setIsInCollection(false);
    if (onAddToCollection) onAddToCollection();
  };

  const handleAddToWishlist = () => {
    console.log('Add to wishlist');
    setIsInWishlist(true);
    if (onAddToWishlist) onAddToWishlist();
  };

  const handleRemoveFromWishlist = () => {
    console.log('Remove from wishlist');
    setIsInWishlist(false);
    if (onAddToWishlist) onAddToWishlist();
  };

  return (
    <div className='album-card relative flex flex-col items-center w-64 h-96 p-5 rounded-xl bg-white drop-shadow-lg text-darkgray-default dark:bg-darkgray-light dark:text-lightgray-default'>
      <img
        src={imgUrl}
        alt={`${albumName} cover`}
        className='album-cover absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-5 rounded-full w-48 border-4 border-lightcoral-default'
      />
      <div className='album-card-content flex flex-col space-y-20 mt-36'>
        <div>
          <h3 className='album-title  text-xl font-bold '>{albumName}</h3>
          <h6 className='artist-title text-sm font-medium'>{artistTitle}</h6>
          <p>{year}</p>
          <p>{genre}</p>
        </div>

        <div className='album-card-icons flex self-end'>
          {!isInCollection ? (
            <span className='cursor-pointer' onClick={handleAddToCollection}>
              <CollectionAddIcon title='Add to My Collection' />
            </span>
          ) : (
            <CollectionRemoveIcon
              className='cursor-pointer'
              onClick={handleRemoveFromCollection}
              title='Remove from My Collection'
            />
          )}
          {!isInWishlist ? (
            <WishListAddIcon
              className='cursor-pointer'
              onClick={handleAddToWishlist}
              title='Add to My Wishlist'
            />
          ) : (
            <WishListRemoveIcon
              className='cursor-pointer'
              onClick={handleRemoveFromWishlist}
              title='Remove from My Wishlist'
            />
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
