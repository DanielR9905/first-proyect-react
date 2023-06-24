import React from "react";
import '../Cards/Cards.css'

export default function Card({title, imageSource, extract, url, targetBlank}) {
  return (
    <>
        <div className="card text-center bg-dark animate__animated animate__bounce">
            <div className="contain-overflow">
              <img src={imageSource}  className="img-featured" alt=""/>
            </div>
            <div className="card-body text-light">
                <h4 className="caZrd-title">{title}</h4>
                <p className="card-text text-secondary">
                  {
                    extract ? extract : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dolorum atque voluptatibus! Asperiores libero esse eligendi assumenda labore consequuntur modi tempore deserunt optio quo velit earum, sapiente odit eius ut'
                  }
                  </p>
                <a href={url} className="btn btn-outline-secondary" target={targetBlank}>Go to this website</a>
            </div>
        </div>
    </>
  );
}
