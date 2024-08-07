import { useState } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import UserAvatar from './stories/UserAvatar'
import NavigationMenu from './NavigationMenu'
import { ThemeProvider } from './stories/ThemeContext'


function App() {

  return (
    <ThemeProvider>
    <div>
    <h1>HI Hello</h1>
    <div><SearchBar/></div>
    <div><NavigationMenu/></div>
    </div>
    </ThemeProvider>
  )
}

export default App
