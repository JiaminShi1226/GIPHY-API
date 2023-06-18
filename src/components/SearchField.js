import React, { useState } from "react";

// Component with a search field input
const SearchField = ({ getRegular, getRandom }) => {
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
    </div>
  );
};

export default SearchField;
