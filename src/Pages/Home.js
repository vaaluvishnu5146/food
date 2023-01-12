import React, { useState, useEffect } from "react";
import ProductCard from "../Components/Card/ProductCard";
import SliderOne from "../Components/ImageSliders/SliderOne";
import { addItemToCart } from "../Redux/Reducers/Cart.slice";
import { useSelector, useDispatch } from "react-redux";
import { saveItemsToStore } from "../Redux/Reducers/Products.slice";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const dispatcher = useDispatch();
  const { items = [] } = useSelector((state) => {
    return state.food;
  });

  useEffect(() => {
    if (loading) {
      fetch("http://localhost:5000/api/products")
        .then((response) => response.json())
        .then((result) => {
          setLoading(false);
          const { message = "", data = [] } = result;
          if (message != null) {
            dispatcher(saveItemsToStore(data));
          }
        })
        .catch((err) => console.log(err));
    }

    return () => {};
  }, []);

  const handleCart = (data) => {
    console.log(data);
    if (data.name) {
      dispatcher(addItemToCart(data));
    }
  };

  return (
    <div id="home-page-container">
      <SliderOne />
      <section id="product-listing-container" className="d-flex">
        {items.length > 0 ? (
          items.map((product, index) => (
            <ProductCard
              key={`product-card-${index}`}
              data={product}
              onAddToCart={handleCart}
            />
          ))
        ) : (
          <p>No Pizza found</p>
        )}
      </section>
    </div>
  );
}
