import React from "react";

const GiftCard = ({ gif }) => {
  return (
    <div className="card">
      <p className="title">{gif.title}</p>
      <img src={gif.images.fixed_height_small.url} alt={gif.title} />
    </div>
  );
};

export default GiftCard;
