import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal(o tems):<strong>$0</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        thousandSeparator={true}
        displayType={"text"}
        value={0}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
