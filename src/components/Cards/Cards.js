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
    extract: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae enim itaque ex.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae enim itaque ex.',
    url: 'https://DanielR9905.github.io/1',
    blank: '_blank'
  },
  {
    id: 1,
    title: "DR Blog",
    image: image2,
    extract: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae enim itaque ex.',
    url: 'https://DanielR9905.blog.io',
    blank: '_blank'
  },
  {
    id: 1,
    title: "DR CV",
    image: image3,
    extract: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae enim itaque ex.Quae enim itaqueQuae enim itaque',
    url: 'https://DanielR9905.github.io/2',
    blank: '_blank'
  },
];

export default function Cards() {
  return (
    <>
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="row">
          {cards.map(card => (
            <div className="col-md-4" key={card.id}>
              <Card title={card.title} imageSource={card.image} url={card.url} targetBlank={card.blank} extract={card.extract}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
