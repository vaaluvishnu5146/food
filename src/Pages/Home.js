import React from "react";
import ProductCard from "../Components/Card/ProductCard";
import SliderOne from "../Components/ImageSliders/SliderOne";
import { useSelector } from "react-redux";

export default function Home({}) {
  const { items = [] } = useSelector((state) => {
    console.log(state);
    return state.food;
  });
  console.log(items);
  return (
    <div id="home-page-container">
      <SliderOne />
      <section id="product-listing-container" className="d-flex">
        {items.length > 0 ? (
          items.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))
        ) : (
          <p>No Pizza found</p>
        )}
      </section>
    </div>
  );
}
