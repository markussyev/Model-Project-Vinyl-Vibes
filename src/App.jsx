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

  const [collection, setCollection] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <ThemeProvider>
      <div className='flex h-screen'>
    
      <div className=''> <NavigationMenu /> </div>
      <div className='flex flec-col flex-grow bg-white dark:bg-darkgray-default'>
       <div className='p-2'><TopBar
       setCollection={setCollection}
       setWishlist={setWishlist}
       setFavorites={setFavorites}
       /></div> 
       <div >
   <Switch>
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/Collection">
        <Collection />
      </Route>
      <Route path="/Wishlist">
        <Wishlist />
      </Route>
      <Route path="/Favorites">
        <Favorites />
      </Route>
    </Switch>
    </div>
    </div>
    </div>
    </ThemeProvider>
  )
}

export default App
