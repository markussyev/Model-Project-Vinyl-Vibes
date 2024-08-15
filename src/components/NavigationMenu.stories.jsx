import React from "react";
import NavigationMenu from "./NavigationMenu";
import { ThemeProvider } from "../ThemeContext";

export default {
  title: "Vinyl-Vibes/NavigationMenu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story, context) => {
      const { darkMode } = context.args;
      return (
        <ThemeProvider>
          <div className={darkMode ? "dark" : ""}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
  argTypes: {
    darkMode: { control: "boolean" },
    homeActive: { control: "boolean" },
    collectionActive: { control: "boolean" },
    wishlistActive: { control: "boolean" },
    favoritesActive: { control: "boolean" },
  },
};

const Template = (args) => <NavigationMenu {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  darkMode: false,
  homeActive: true,
  collectionActive: false,
  wishlistActive: false,
  favoritesActive: false,
};

export const CollectionActive = Template.bind({});
CollectionActive.args = {
  darkMode: false,
  homeActive: false,
  collectionActive: true,
  wishlistActive: false,
  favoritesActive: false,
};

export const WishlistActive = Template.bind({});
WishlistActive.args = {
  darkMode: false,
  homeActive: false,
  collectionActive: false,
  wishlistActive: true,
  favoritesActive: false,
};

export const FavoritesActive = Template.bind({});
FavoritesActive.args = {
  darkMode: false,
  homeActive: false,
  collectionActive: false,
  wishlistActive: false,
  favoritesActive: true,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  darkMode: true,
  homeActive: true,
  collectionActive: false,
  wishlistActive: false,
  favoritesActive: false,
};

export const CollectionActiveDarkMode = Template.bind({});
CollectionActiveDarkMode.args = {
  darkMode: true,
  homeActive: false,
  collectionActive: true,
  wishlistActive: false,
  favoritesActive: false,
};

export const WishlistActiveDarkMode = Template.bind({});
WishlistActiveDarkMode.args = {
  darkMode: true,
  homeActive: false,
  collectionActive: false,
  wishlistActive: true,
  favoritesActive: false,
};

export const FavoritesActiveDarkMode = Template.bind({});
FavoritesActiveDarkMode.args = {
  darkMode: true,
  homeActive: false,
  collectionActive: false,
  wishlistActive: false,
  favoritesActive: true,
};
