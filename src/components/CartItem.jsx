import React, { useContext } from "react";
import "../style/ProductCard.css";
import { ProductContext } from "../context/ProductContext";

const CartItem = ({
  ProductItem,
  name,
  description,
  image,
  category,
  price,
  stock,
}) => {
  const {
    RemoveFromCartButtonClick,
    state: { cartItems },
  } = useContext(ProductContext);

  return (
    <div className="CartCardofProduct">
      {/* Product Image */}
      <img className="ProductImage" src={image} alt={name} />
      {/* Card Content */}
      <div className="ContentWrap">
        <div className="ProductCardContent">
          <p className="ProductCategory">{category}</p>
          <h4 className="ProductName">{name}</h4>
          <p className="ProductDescription">{description}</p>
        </div>
        {/* Price and Stock */}
        <div className="ProductPriceAndStock">
          <h3 className="ProductPrice">{price}</h3>
          <p className="ProductStock">Stock: {stock}</p>
        </div>
        <button
          onClick={() => {
            RemoveFromCartButtonClick(ProductItem);
          }}
          className="RemoveFromCartButton"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
