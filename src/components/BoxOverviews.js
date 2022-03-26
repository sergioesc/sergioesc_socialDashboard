import React from "react";

export default function BoxOverviews(props) {
  return (
    <div className={props.classContainer}>
      <div className="card-inner-overview">
        <div className="card-media-overview">
          <img src={props.icon} alt="prueba" />
        </div>
        <div className="card-text-overview">
          <p>{props.textOverview}</p> <small>{props.title}</small>
        </div>
        <div className={props.stats}>
          <i className={props.iconGained} /> {props.statsGained}
        </div>
      </div>
    </div>
  );
}
