import React from "react";

export default function Card(props) {
  return (
    <>
        <div className="card text-center bg-dark">
            <img src=""/>
            <div className="card-body text-light">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dolorum atque voluptatibus! Asperiores libero esse eligendi assumenda labore consequuntur modi tempore deserunt optio quo velit earum, sapiente odit eius ut.</p>
                <a href="#!" className="btn btn-outline-secondary">Go to this website</a>
            </div>
        </div>
    </>
  );
}
