import { createContext, useReducer } from "react";
import { products } from "../../products";

export const ProductContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: products,
    cartItems: [],
  });

  const AddToCartButtonClick = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });

    console.log("Cart Items:", state.cartItems);
  };

  const RemoveFromCartButtonClick = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });

    console.log("Cart Items:", state.cartItems);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        state,
        AddToCartButtonClick,
        RemoveFromCartButtonClick,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
