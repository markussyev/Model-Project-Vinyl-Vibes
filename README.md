# Vinyl Collection App

## Project Description

The Vinyl Collection App is a web application designed for vinyl record enthusiasts who want to keep track of their collection and wishlist. Users can search for albums and artists, add albums to their collection if they already own them, or add them to their wishlist if they wish to acquire them in the future. The app fetches data from the Last.fm API and allows users to manage their collection and wishlist with ease, using local storage to retain user preferences between sessions.

## Features

- **Search Albums and Artists:** Users can search for albums and artists using the Last.fm API.
- **Manage Collection:** Add or remove albums from your personal collection.
- **Wishlist:** Keep track of albums you wish to purchase.
- **Favorites:** Like your favorite artists and keep them in a dedicated list.
- **Responsive Design:** Built with Tailwind CSS to ensure a consistent experience across devices.
  

## Setup Instructions

### Prerequisites

Before setting up the project, make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)
- Vite (installed as a dev dependency)
  

### Installation

1. **Clone the Repository:**

```bash
git clone https://github.com/markussyev/Model-Project-Vinyl-Vibes.git
cd Model-Project-Vinyl-Vibes
```

2. Install Dependencies:

Navigate to the project directory and run the following command:

```bash
npm install
```

3. Set Up Environment Variables:

Create a .env file in the root directory and add your Last.fm API key:

```bash
VITE_FMKEY=your_last_fm_api_key
```


4. Run the Project:

Start the development server using Vite:

```bash
npm run dev
```
The application will be accessible at http://localhost:3000.


## Storybook

This project includes Storybook for isolated component development and testing. To start Storybook, run:

```bash
npm run storybook
Storybook will be available at http://localhost:6006.
```

## Dependencies

Below is a list of the main dependencies used in this project:

- React: ^18.x
- Vite: ^4.x
- Tailwind CSS: ^3.x
- Wouter: ^2.x
- Last.fm API: for fetching album and artist data
- Local Storage: for persisting user data
- Storybook: for component testing and development
  

To install all dependencies, run:

```bash
npm install
```


## Project Structure

The project is structured as follows:

- /src: Contains all the source code for the application
- /components: Reusable React components like AlbumCard, ArtistCard, etc.
- /pages: Page components like Collection, Wishlist, etc.
- /hooks: Custom hooks used in the project, such as useTheme.
- /assets: Static assets like images and icons.
- /styles: Tailwind CSS configuration and global styles.
- /utils: Utility functions and helpers.
- /public: Contains the static files, such as the index.html file.
- /.storybook: Configuration files for Storybook.
- /node_modules: Contains all the npm packages.
- /dist: The production build of the application (after running npm run build).


## Additional Information

- **Design:** The design and mid-fidelity prototypes were created using Figma.
- **Version Control:** The project is under version control using Git, and hosted on GitHub.
- **Deployment:** This app can be easily deployed to platforms like Vercel, Netlify, or any static site hosting service that supports React and Vite.
