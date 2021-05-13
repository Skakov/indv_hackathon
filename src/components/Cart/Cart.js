import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../context/ProductsContext"; 
import { calcTotalPrice } from "../../helpers/CalcPrice"; 
import "./Cart.css";


const Cart = () => {
  const { getCart, cart, changeProductCount } = useContext(productsContext);

  useEffect(() => {
    getCart();
  }, []);
  return (
    <div className="cart">
      {cart?.products ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Count</th>
                <th>SubPrice</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((elem) => (
                <tr key={elem.item.id}>
                  <td>
                    <img
                      style={{ width: "55px" }}
                      src={elem.item.img1}
                      alt="product_img"
                    />
                  </td>
                  <td>{elem.item.name}</td>
                  <td>{elem.item.price}</td>
                  <td>
                    <input
                      onChange={(e) =>
                        changeProductCount(e.target.value, elem.item.id)
                      }
                      type="number"
                      value={elem.count}
                    />
                  </td>
                  <td>{elem.subPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total:{calcTotalPrice(cart.products)}</h4>
          <button>Купить</button>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Cart;