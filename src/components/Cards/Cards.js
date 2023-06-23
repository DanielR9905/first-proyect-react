import React from "react";
import Card from "../Card/Card";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const cards = [
  {
    id: 1,
    title: "DR Website",
    image: image1,
  },
  {
    id: 1,
    title: "DR Blog",
    image: image2,
  },
  {
    id: 1,
    title: "DR CV",
    image: image3,
  },
];

export default function Cards() {
  return (
    <>
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="row">
          {cards.map(card => (
            <div className="col-md-4" key={card.id}>
              <Card title={card.title}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
