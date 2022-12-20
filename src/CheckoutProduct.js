import React from "react";
import "./CheckoutProduct.css";
const CheckoutProduct = () => {
  return (
    <div className="checkoutProduct">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
        alt="product"
        className="checkout_productImage"
      />
      <div className="checkout_productInfo">
        <p className="checkout_productTitile">
          Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
          Water Repellent Fabric for Men and Women (Blue)
        </p>
        <p className="checkout_productPrice">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="checkout_productRating">⭐⭐</div>
        <button>Remove from Bucket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
