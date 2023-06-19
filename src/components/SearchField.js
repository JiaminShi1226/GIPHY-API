import React, { useState } from "react";
import GiftCard from "./GiftCard";

// Component with a search field input
const SearchField = ({ getRegular, getRandom, gifs }) => {
  const [search, setSearch] = useState("");

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getRegular(search);
  };

  return (
    <div className="form">
      <form onSubmit={handleFormSubmit}>
        <input
          className="input-field"
          value={search}
          placeholder="Enter terms"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={getRandom}>
          Random
        </button>
      </form>
      {/* Render the GiftCard components for each GIF */}
      <div className="gif-grid">
        {gifs.length > 0 ? (
          gifs.map((gif) => <GiftCard key={gif.id} gif={gif} />)
        ) : (
          <p>No GIFs found</p>
        )}
      </div>
    </div>
  );
};

export default SearchField;
