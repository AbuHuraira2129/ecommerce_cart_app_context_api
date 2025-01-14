import React, { useContext } from "react";
import "../style/ProductCard.css";
import { ProductContext } from "../context/ProductContext";
const ProductCard = ({
  productItem,
  name,
  description,
  image,
  category,
  price,
  stock,
}) => {
  const { AddToCartButtonClick, RemoveFromCartButtonClick } =
    useContext(ProductContext);
  const {
    state: { cartItems },
  } = useContext(ProductContext);

  return (
    <div className="CardofProduct">
      {/* Product Image */}
      <img className="ProductImage" src={image} alt={name} />
      {/* Card Content */}
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
      {/* Add to Cart Button */}
      {cartItems.some((p) => p.id === productItem.id) ? (
        <button
          onClick={() => {
            RemoveFromCartButtonClick(productItem);
          }}
          className="RemoveFromCartButton"
        >
          Remove From Cart
        </button>
      ) : (
        <button
          onClick={() => {
            AddToCartButtonClick(productItem);
          }}
          className="AddToCartButton"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
