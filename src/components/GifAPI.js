import React, { useState, useEffect } from "react";
import axios from "axios";
import GiftCard from "./GiftCard";
import SearchField from "./SearchField";

const GifAPI = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    // Call the getTrending function when the component mounts
    getTrending();
  }, []);

  // Function to fetch GIFs based on search term
  async function getRegular(search) {
    try {
      const URL = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=lKQjpt2zMkC8zScYDmxx7GJlIn3Qsh8K`;
      const response = await axios.get(URL);
      setGifs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Function to fetch trending GIFs
  async function getTrending() {
    try {
      const URL = `https://api.giphy.com/v1/gifs/trending?api_key=lKQjpt2zMkC8zScYDmxx7GJlIn3Qsh8K`;
      const response = await axios.get(URL);
      setGifs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Function to fetch a random GIF
  async function getRandom() {
    try {
      const URL = `https://api.giphy.com/v1/gifs/random?api_key=lKQjpt2zMkC8zScYDmxx7GJlIn3Qsh8K`;
      const response = await axios.get(URL);
      setGifs([response.data.data]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1 className="header">GIFs API</h1>
      {/* Render the SearchField component and pass the getRegular function as a prop */}
      <SearchField getRegular={getRegular} getRandom={getRandom} />

      {/* Render the GiftCard components for each GIF */}
      <div className="gif-grid">
        {gifs.length > 0 ? (
          gifs.map((gif) => <GiftCard key={gif.id} gif={gif} />)
        ) : (
          <p>No GIFs found</p>
        )}
      </div>
      <footer>© 2023 Summer TTP Residency Cohort Jiamin Shi</footer>
    </div>
  );
};

export default GifAPI;
