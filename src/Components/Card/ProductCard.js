import React from "react";

export default function ProductCard({ data = {}, onAddToCart = () => {} }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={data.image}
        className="card-img-top"
        alt={`${data.name}-pizza-image`}
      />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.description}</p>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  );
}
