import { useState } from "react";
import { products } from "../data";
import { Link } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState(products);
  return (
    <div>
      <ul className="products">
        {product.map((item, key) => (
          <li key={key}>
            <Link to={"#" + item.id}>
              <div className="product">
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
            </Link>
            <div className="product-price">
              <div>{item.price.toFixed(2)} $</div>
              <button className="button primary">Add To Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
