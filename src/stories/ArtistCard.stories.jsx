import React, { useState, useEffect } from 'react';
import ArtistCard from "./ArtistCard";
import { ThemeProvider, useTheme } from './ThemeContext';

export default {
    title: 'Vinyl-Vibes/ArtistCard',
    component: ArtistCard,
    parameters: {
        layout: 'centered'
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
    tags: ['autodocs'],
    argTypes: {
        imgUrl: { control: 'text' },
        artistTitle: { control: 'text' },
        liked: { control: 'boolean' },
        darkMode: { control: 'boolean' },
    },
}

const Template = (args) => {
    const [liked, setLiked] = useState(args.liked);
    const { darkMode, toggleTheme } = useTheme();
    useEffect(() => {
        if (args.darkMode !== darkMode) {
          toggleTheme();
        }
      }, [args.darkMode, darkMode, toggleTheme]);
    
      return <ArtistCard {...args} liked={liked} setLiked={setLiked} />;
    };


export const Regular = Template.bind({});
Regular.args = {

    imgUrl: 'https://i.scdn.co/image/ab6775700000ee85a7982cc7658ff06926b3a2b9',
    liked: false,
    artistTitle: 'Rihanna',
    darkMode: false,

}

export const RegularLiked = Template.bind({});
Regular.args = {
    imgUrl: 'https://i.scdn.co/image/ab6775700000ee85a7982cc7658ff06926b3a2b9',
    liked: true,
    artistTitle: 'Rihanna',
    darkMode: false,
}

export const DarkMode = Template.bind({});
DarkMode.args = {
    imgUrl: 'https://i.scdn.co/image/ab6775700000ee85a7982cc7658ff06926b3a2b9',
    liked: false,
    artistTitle: 'Rihanna',
    darkMode: true,
}

export const DarkModeLiked = Template.bind({});
DarkModeLiked.args = {
    imgUrl: 'https://i.scdn.co/image/ab6775700000ee85a7982cc7658ff06926b3a2b9',
    liked: true,
    artistTitle: 'Rihanna',
    darkMode: true,
}
