import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import CartItem from "../components/CartItem";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    state: { cartItems },
  } = useContext(ProductContext);

  const navigate = useNavigate();

  return (
    <div>
      <div className="CartPageHeader">
        <Link to={"/"} className="BackButton">
          Back
        </Link>
        <h1>Your Cart</h1>
      </div>
      <hr />
      <div className="productCartGrid">
        {cartItems.map((product) => (
          <li key={product.id}>
            <CartItem
              ProductItem={product}
              name={product.name}
              image={product.image}
              description={product.description}
              category={product.category}
              price={product.price}
              stock={product.stock}
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Cart;
