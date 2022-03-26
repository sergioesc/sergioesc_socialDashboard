import React from "react";
export default function BoxFollowers(props) {
  return (
    <div className={props.classContainer}>
      <div className="card-inner">
        <div className="card-media">
          <img src={props.icon} alt="prueba" /> @{props.username}
        </div>
        <div className="card-followers">
          {props.followers} <small>F O L L O W E R S</small>
        </div>
        <div className={props.classFollower}>
          <i className={props.iconGained} /> {props.followersGained}
        </div>
      </div>
    </div>
  );
}
