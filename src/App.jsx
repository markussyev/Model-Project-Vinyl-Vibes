import React, {useState} from 'react'
import './App.css'
import {Switch, Route} from 'wouter'
import { ThemeProvider } from './ThemeContext'
import NavigationMenu from './components/NavigationMenu'
import Home from './Home'
import Collection from './Collection'
import Wishlist from './Wishlist'
import Favorites from './Favorites'
import TopBar from './components/TopBar'




function App() {

  const [albums, setAlbums] = useState([]); 
  const [artists, setArtists] = useState([]);

  const [collection, setCollection] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <ThemeProvider>
      <div className='flex h-screen bg-white dark:bg-darkgray-default'>
    
      <div className='fixed h-full'> <NavigationMenu /> </div>
      <div className='flex-1 flec-col ml-64'>
       <div className='p-2 z-30'><TopBar
       setCollection={setCollection}
       setWishlist={setWishlist}
       setFavorites={setFavorites}
       /></div> 
       <main className='flex-1 p-4 overflow-y-auto' >
   <Switch>
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/Collection">
        <Collection collection={collection} albums={albums} />
      </Route>
      <Route path="/Wishlist">
        <Wishlist wishlist={wishlist} albums={albums} />
      </Route>
      <Route path="/Favorites">
        <Favorites favorites={favorites} artists={artists} />
      </Route>
    </Switch>
    </main>
    </div>
    </div>
    </ThemeProvider>
  )
}

export default App
