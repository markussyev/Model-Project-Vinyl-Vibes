import React from 'react';
import PropTypes from 'prop-types';
import {
  LikeIconRegular,
  LikeIconActive,
  LikeIconDarkMode,
  LikeIconActiveDarkMode,
} from './Icons';
import { useTheme } from '../ThemeContext';

const icons = {
    LikeIconRegular,
    LikeIconActive,
    LikeIconDarkMode,
    LikeIconActiveDarkMode,
  };

  const LikeButton = ({ liked, handleLikeClick }) => {
    const { themeStyles } = useTheme();
  
    // const handleLikeClick = () => {
    //   setLiked(!liked);
    // };
  
    const LikeIcon = icons[themeStyles.likeIcon];
    const LikeIconActive = icons[themeStyles.likeIconActive];
  
    return (
      <span className="cursor-pointer" onClick={handleLikeClick}>
        {liked ? <LikeIconActive /> : <LikeIcon />}
      </span>
    );
  };
  
  LikeButton.propTypes = {
    liked: PropTypes.bool.isRequired,
    setLiked: PropTypes.func.isRequired,
  };
  
  export default LikeButton;