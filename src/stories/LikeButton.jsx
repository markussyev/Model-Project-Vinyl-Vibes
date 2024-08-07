import React from 'react';
import PropTypes from 'prop-types';
import {
  LikeIconRegular,
  LikeIconActive,
  LikeIconDarkMode,
  LikeIconActiveDarkMode,
} from './assets/Icons';
import { useTheme } from './ThemeContext';

const icons = {
    LikeIconRegular,
    LikeIconActive,
    LikeIconDarkMode,
    LikeIconActiveDarkMode,
  };

  const LikeButton = ({ liked, setLiked }) => {
    const { themeStyles } = useTheme();
  
    const handleLikeClick = () => {
      setLiked(!liked);
    };
  
    const LikeIcon = icons[themeStyles.likeIcon];
    const LikeIconActive = icons[themeStyles.likeIconActive];
  
    return (
      <div onClick={handleLikeClick}>
        {liked ? <LikeIconActive /> : <LikeIcon />}
      </div>
    );
  };
  
  LikeButton.propTypes = {
    liked: PropTypes.bool.isRequired,
    setLiked: PropTypes.func.isRequired,
  };
  
  export default LikeButton;