import React, {useState} from "react";
 import { SearchResultList } from "./components/SearchResultsList";
 import SearchBar from "./components/SearchBar";






function Home () {
   
const [results, setResults] = useState([])
    return (
       
            <div className="bg-white dark:bg-darkgray-default">
                <h1>HI This is Home</h1>
                <SearchBar setResults={setResults} />
                < SearchResultList results={results} /> 
            </div>
    
    )
}

export default Home