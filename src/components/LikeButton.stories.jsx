import React, { useState, useEffect } from 'react';
import LikeButton from './LikeButton';
import { ThemeProvider, useTheme } from '../ThemeContext';

export default {
  title: 'Vinyl-Vibes/LikeButton',
  component: LikeButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story, context) => {
      const { darkMode } = context.args;
      return (
        <ThemeProvider>
          <div className={darkMode ? 'dark' : ''}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
  argTypes: {
    liked: { control: 'boolean' },
    darkMode: { control: 'boolean' },
  },
};

const Template = (args) => {
  const [liked, setLiked] = useState(args.liked);
  const { darkMode, toggleTheme } = useTheme();

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    if (args.darkMode !== darkMode) {
      toggleTheme();
    }
  }, [args.darkMode, darkMode, toggleTheme]);

  return <LikeButton liked={liked} handleLikeClick={handleLikeClick} />;
};

export const Unliked = Template.bind({});
Unliked.args = {
  liked: false,
  darkMode: false,
};

export const Liked = Template.bind({});
Liked.args = {
  liked: true,
  darkMode: false,
};

export const UnlikedDarkMode = Template.bind({});
UnlikedDarkMode.args = {
  liked: false,
  darkMode: true,
};

export const LikedDarkMode = Template.bind({});
LikedDarkMode.args = {
  liked: true,
  darkMode: true,
};
