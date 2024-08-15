import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'wouter';
import './App.css';
import Collection from './Collection';
import Favorites from './Favorites';
import Home from './Home';
import { ThemeProvider } from './ThemeContext';
import Wishlist from './Wishlist';
import NavigationMenu from './components/NavigationMenu';
import TopBar from './components/TopBar';

function App() {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);

  const [collection, setCollection] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedCollection = JSON.parse(localStorage.getItem('collection')) || [];
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    setCollection(savedCollection);
    setWishlist(savedWishlist);
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('collection', JSON.stringify(collection));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [collection, wishlist, favorites]);

  const onRemoveFromCollection = (album) => {
    // remove the album from the localStorage
    let oldCollection = JSON.parse(localStorage.getItem('collection'));
    let newCollection = oldCollection.filter((al) => al.mbid !== album.mbid);
    localStorage.setItem('collection', JSON.stringify(newCollection));
    setCollection(newCollection);
  };

  return (
    <ThemeProvider>
      <div className='flex h-screen bg-white dark:bg-darkgray-default'>
        <div className='fixed h-full'>
          {' '}
          <NavigationMenu />{' '}
        </div>
        <div className='flex-1 flec-col ml-64'>
          <div className='relative p-2 z-50'>
            <TopBar
              setCollection={setCollection}
              setWishlist={setWishlist}
              setFavorites={setFavorites}
            />
          </div>
          <main className='flex-1 h-full bg-white dark:bg-darkgray-default p-4 overflow-y-auto'>
            <Switch>
              <Route path='/Home'>
                <Home />
              </Route>
              <Route path='/Collection'>
                <Collection
                  collection={collection}
                  onRemoveFromCollection={onRemoveFromCollection}
                  albums={albums}
                />
              </Route>
              <Route path='/Wishlist'>
                <Wishlist wishlist={wishlist} albums={albums} />
              </Route>
              <Route path='/Favorites'>
                <Favorites favorites={favorites} artists={artists} />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
