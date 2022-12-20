import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import Subtotal from "./Subtotal";
const Checkout = () => {
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout-left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="advertisement"
            className="checkout_ad"
          />
          <div>
            <h2 className="checkout_title">Your Shoping Basket</h2>
            <CheckoutProduct />
            <CheckoutProduct />
            <CheckoutProduct />
          </div>
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
