import React from "react";

export default function CartItemCard({ data = {} }) {
  return (
    <div className="card">
      <div className="row">
        <div className="col-2">
          <img src={data.image} alt={data.name} width="120px" />
        </div>
        <div className="col-10">
          <h4 className="text-start mb-3">{data.name}</h4>
          <h5 className="text-start">{data.actualPrice}</h5>
        </div>
      </div>
    </div>
  );
}
