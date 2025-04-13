import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getMeals() {
      try {
        const response = await axios.get("http://localhost:3000/meals");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching meals:", error);
        throw error;
      }
    }

    getMeals();
  }, []);
  console.log(products);

  return (
    <ul id="meals">
      {products.map((product) => (
        <li className="meal-item" key={product.id}>
          <article>
            <img src={`http://localhost:3000/${product.image}`} alt="" />
            <div>
              <h3>{product.name}</h3>
              <span className="meal-item-price">{product.price}</span>
              <p className="meal-item-description">{product.description}</p>
            </div>
            <p className="meal-item-actions">
              <button>Add to Cart</button>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
