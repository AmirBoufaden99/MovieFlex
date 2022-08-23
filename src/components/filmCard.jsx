import React from "react";
import "../styles/filmCard.css";

export default function FilmCard(props) {
  return (
      <div className="cardContainer">
        <img src={props.link} alt="image" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <div className="cardOverContainer">
          <h2>{props.overTitle}</h2>
          <p>{props.overDesc}</p>
        </div>
      </div>
  );
}
