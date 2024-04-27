import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  const defaultUserImage = "/img/default_user.png";
  const defaultGigImage = "/img/default_gig.png";

  return (
    <Link to={`/gig/${item.id}`} className="link">
      <div className="gigCard">
        <div className="imageContainer">
          <img className="gigImage" src={item.img || defaultGigImage} alt={`Preview of ${item.title}`} />
        </div>
        <div className="info">
          <div className="user">
            <img className="userImage" src={item.pp || defaultUserImage} alt={`${item.username}'s profile`} />
            <span className="username">{item.username}</span>
          </div>
          <p className="description">{item.desc}</p>
          <div className="rating">
            <img src="./img/star.png" alt="Star rating" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="Favorite" className="heartIcon" />
          <div className="price">
            <span className="priceText">STARTING AT</span>
            <h2 className="priceAmount">$ {item.price.toFixed(2)}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
