import React from "react";

const Card = (props) => {
  const { heroImg, ratings, reviews, country, heroName, price } = props;
  return (
    <div className="card">
      <img src={heroImg} alt={heroName} className="card--image" />
      <div className="card--stats">
        <img src="./star.png" alt="star" className="card--star" />
        <span className="gray">{ratings}</span>
        <span className="gray">{reviews} • </span>
        <span className="gray">{country}</span>
      </div>
      <p>Life lessons with {heroName}</p>
      <p>
        From <strong>{price}</strong> / person
      </p>
    </div>
  );
};

export default Card;
