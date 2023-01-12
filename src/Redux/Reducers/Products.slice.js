import { createSlice } from "@reduxjs/toolkit";

export const Product = createSlice({
  name: "product",
  initialState: {
    items: [
      {
        isVeg: true,
        isNonVeg: false,
        _id: "63bcec09d654bf0fa4d2afbb",
        name: "Margeritta",
        description: "Margeritta pizza is a tastiest pizza",
        actualPrice: 200,
        image:
          "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=300",
        isActive: false,
        __v: 0,
      },
      {
        isVeg: true,
        isNonVeg: false,
        _id: "63bcece6bff9870a5c1aeb85",
        name: "Tandoori Pizza",
        description:
          "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
        actualPrice: 200,
        image:
          "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.4ef45717e972cf45b43c010e3cde5a22.1.jpg?width=300",
        isActive: true,
        __v: 0,
      },
      {
        isVeg: true,
        isNonVeg: false,
        _id: "63bced2b39023222283cf0d3",
        name: "veggie supreme",
        description:
          "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
        actualPrice: 200,
        image:
          "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=300",
        isActive: true,
        __v: 0,
      },
      {
        isVeg: true,
        isNonVeg: false,
        _id: "63bced795b466a2c9cdd0031",
        name: "Double Paneer supreme",
        description:
          "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
        actualPrice: 300,
        image:
          "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=300",
        isActive: true,
        __v: 0,
      },
      {
        isVeg: true,
        isNonVeg: false,
        _id: "63bcef58b949221ab8cadc59",
        name: "Double Paneer supreme 2",
        description:
          "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
        actualPrice: 330,
        image:
          "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=300",
        isActive: true,
        __v: 0,
      },
      {
        isVeg: false,
        isNonVeg: false,
        _id: "63bcf388276e9e34c4ea4230",
        name: "Chicken Pepproni",
        description:
          "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
        actualPrice: 420,
        image:
          "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=300",
        isActive: false,
        __v: 0,
      },
      {
        isVeg: false,
        isNonVeg: false,
        _id: "63bcf411276e9e34c4ea4234",
        name: "Chicken Pepproni 2",
        description:
          "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
        actualPrice: 420,
        image:
          "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=300",
        isActive: false,
        __v: 0,
      },
    ],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const product = action.payload;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // return state.items
      state.items.push(product);
    },
    removeProduct: (state, action) => {
      state.value -= 1;
    },
    incrementByQuantity: (state, action) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart, removeProduct, incrementByQuantity } =
  Product.actions;

export default Product.reducer;
