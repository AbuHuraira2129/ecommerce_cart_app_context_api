import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/productCard";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Home = () => {
  const { products } = useContext(ProductContext);
  const {
    state: { cartItems },
  } = useContext(ProductContext);

  return (
    <div className="main">
      <div className="Header">
        <h1 className="AppHeading">Ecoomerce Shop - By Huraira</h1>
        <div className="CartThings">
          <Link to={"/Cart"} className="AddToCartButton">
            {cartItems.length}
            <ShoppingCartOutlinedIcon />
          </Link>
        </div>
      </div>
      <div className="productGrid">
        {products.map((product, index) => (
          <li key={index}>
            <ProductCard
              productItem={product}
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

export default Home;
