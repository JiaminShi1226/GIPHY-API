import React, { useState } from "react";
import GiftCard from "./GiftCard";

// Component with a search field input
const SearchField = ({ getRegular, getRandom, gifs }) => {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getRegular(search, rating);
  };

  return (
    <div className="form">
      <form onSubmit={handleFormSubmit}>
        {/* Search field input */}
        <input
          className="input-field"
          value={search}
          placeholder="Enter terms"
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Rating */}
        <div className="select-wrapper">
          <select
            className="filters"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">All Ratings</option>
            <option value="g">G</option>
            <option value="pg">PG</option>
            <option value="pg-13">PG-13</option>
            <option value="r">R</option>
          </select>
        </div>

        {/* Search and Random buttons */}
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
