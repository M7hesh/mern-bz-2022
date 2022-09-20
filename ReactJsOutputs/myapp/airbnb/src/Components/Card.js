import React from "react";

const Card = (props) => {
  const { heroImg, ratings, reviews, country, title, price, openSpots } = props;
  return (
    <section className="card--list">
      <div className="card">
        {!openSpots && <div className="card--badge">SOLD OUT</div>}
        {country === "Online" && !!openSpots && (
          <div className="card--badge">ONLINE</div>
        )}
        <img src={`./images/${heroImg}`} alt="" className="card--image" />
        <div className="card--stats">
          <img src="./star.png" alt="star" className="card--star" />
          <span className="gray">{ratings}</span>
          <span className="gray">({reviews}) • </span>
          <span className="gray">{country}</span>
        </div>
        <p>{title}</p>
        <p>
          From <strong>${price}</strong> / person
        </p>
      </div>
    </section>
  );
};

export default Card;
