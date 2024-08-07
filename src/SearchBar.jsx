import React, { useState } from "react";
import { SearchIcon } from "./stories/assets/Icons";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch(
      "https://jsonplaceholder.typicode.com/users"
    )
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
            return value && user && user.name.toLowerCase().includes(value);
        })
        console.log(results);
      })
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper flex items-center border-solid border-2 border-darkgray-lighter p-1 rounded-2xl space-x-5">
      <div className="ml-3">
        <SearchIcon />
      </div>
      <input
        className="border-none focus:outline-none h-full bg-transparent ml-5 "
        placeholder="Search for Vinyls..."
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
