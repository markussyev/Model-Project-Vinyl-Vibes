import React, { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';
import { ThemeProvider, useTheme } from '../ThemeContext';

export default {
    title: 'Vinyl-Vibes/AlbumCard',
    component: AlbumCard,
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
        albumName: { control: 'text' },
        artistTitle: { control: 'text' },
        year: { control: 'text' },
        genre: { control: 'text' },
        inCollection: { control: 'boolean' },
        inWishlist: { control: 'boolean' },
        darkMode: { control: 'boolean' },
    },
}

const Template = (args) => {
    const [inCollection, setInCollection] = useState(args.inCollection);
    const [inWishlist, setInWishlist] = useState(args.inWishlist);
    const { darkMode, toggleTheme } = useTheme();
    useEffect(() => {
        if (args.darkMode !== darkMode) {
          toggleTheme();
        }
      }, [args.darkMode, darkMode, toggleTheme]);
    
      return <AlbumCard {...args} inCollection={inCollection} inWishlist={inWishlist} />;
    }

export const Regular = Template.bind({});
Regular.args = {
    imgUrl: 'https://i.scdn.co/image/ab67616d0000b2735c9890c0456a3719eeecd8aa',
    albumName: 'The Fame Monster',
    artistTitle: 'Lady Gaga',
    year: '2009',
    genre: 'Pop',
    inCollection: false,
    inWishlist: false,
    darkMode: false,
}

export const InCollection = Template.bind({});
InCollection.args = {
    imgUrl: 'https://i.scdn.co/image/ab67616d0000b2735c9890c0456a3719eeecd8aa',
    albumName: 'The Fame Monster',
    artistTitle: 'Lady Gaga',
    year: '2009',
    genre: 'Pop',
    inCollection: true,
    inWishlist: false,
    darkMode: false,
}

export const InWishlist = Template.bind({});
InWishlist.args = {
    imgUrl: 'https://i.scdn.co/image/ab67616d0000b2735c9890c0456a3719eeecd8aa',
    albumName: 'The Fame Monster',
    artistTitle: 'Lady Gaga',
    year: '2009',
    genre: 'Pop',
    inCollection: false,
    inWishlist: true,
    darkMode: false,
}

export const InCollectionAndWishlist = Template.bind({});
InCollectionAndWishlist.args = {
    imgUrl: 'https://i.scdn.co/image/ab67616d0000b2735c9890c0456a3719eeecd8aa',
    albumName: 'The Fame Monster',
    artistTitle: 'Lady Gaga',
    year: '2009',
    genre: 'Pop',
    inCollection: true,
    inWishlist: true,
    darkMode: false,
}

export const DarkMode = Template.bind({});
DarkMode.args = {
    imgUrl: 'https://i.scdn.co/image/ab67616d0000b2735c9890c0456a3719eeecd8aa',
    albumName: 'The Fame Monster',
    artistTitle: 'Lady Gaga',
    year: '2009',
    genre: 'Pop',
    inCollection: false,
    inWishlist: false,
    darkMode: true,
}

export const InCollectionDarkMode = Template.bind({});
InCollectionDarkMode.args = {
    imgUrl: 'https://i.scdn.co/image/ab67616d0000b2735c9890c0456a3719eeecd8aa',
    albumName: 'The Fame Monster',
    artistTitle: 'Lady Gaga',
    year: '2009',
    genre: 'Pop',
    inCollection: true,
    inWishlist: false,
    darkMode: true,
}

export const InWishlistDarkMode = Template.bind({});
InWishlistDarkMode.args = {
    imgUrl: 'https://i.scdn.co/image/ab67616d0000b2735c9890c0456a3719eeecd8aa',
    albumName: 'The Fame Monster',
    artistTitle: 'Lady Gaga',
    year: '2009',
    genre: 'Pop',
    inCollection: false,
    inWishlist: true,
    darkMode: true,
}

export const InCollectionAndWishlistDarkMode = Template.bind({});
InCollectionAndWishlistDarkMode.args = {
    imgUrl: 'https://i.scdn.co/image/ab67616d0000b2735c9890c0456a3719eeecd8aa',
    albumName: 'The Fame Monster',
    artistTitle: 'Lady Gaga',
    year: '2009',
    genre: 'Pop',
    inCollection: true,
    inWishlist: true,
    darkMode: true,
}