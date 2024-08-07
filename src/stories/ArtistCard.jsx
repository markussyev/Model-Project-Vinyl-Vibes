import React from "react";
import PropTypes from "prop-types";
import "./ArtistCard.css";
import { useTheme } from './ThemeContext';
import LikeButton from "./LikeButton";

const ArtistCard = ({ imgUrl, artistTitle, liked, setLiked }) => {
  const { themeStyles } = useTheme();


  return (
    <div
      className="static artist-card w-60 h-72 flex flex-col content-between items-center space-y-6 rounded-xl bg-white drop-shadow-lg dark:bg-darkgray-light text-lightgray-default">
      <div className="absolute self-end p-2">
      <LikeButton liked={liked} setLiked={setLiked} />
      </div>
      <img
        src={imgUrl}
        alt={artistTitle}
        className="artist-card-img mt-5 rounded-full w-48 border-4 border-lightcoral-default"
      />
      <div className="artist-card-content">
        <h3 className="card-title text-darkgray-default text-3xl dark:text-lightgray-default">
          {artistTitle}
        </h3>
      </div>
    </div>
  );
};

export default ArtistCard;

ArtistCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  artistTitle: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  setLiked: PropTypes.func.isRequired,
};

ArtistCard.defaultProps = {
  liked: false,
  setLiked: () => {},
};
