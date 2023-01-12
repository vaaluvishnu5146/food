import React from "react";
import { useSelector } from "react-redux";
import CartItemCard from "../Components/Card/CartItemCard";
import ProductCard from "../Components/Card/ProductCard";

export default function Cart() {
  const { items = [] } = useSelector((state) => state.cart);
  return (
    <div className="container d-flex p-5">
      <div className="container row">
        <div className="col-md-8">
          <h3 className="text-start mb-3">Cart Items({items.length})</h3>
          <div className="row">
            {items.length > 0 ? (
              items.map((item, index) => (
                <CartItemCard data={item} key={`cart-page-item-${index}`} />
              ))
            ) : (
              <p>No Pizzas found</p>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <h3 className="text-start mb-3">Cart calculation</h3>
        </div>
      </div>
    </div>
  );
}
