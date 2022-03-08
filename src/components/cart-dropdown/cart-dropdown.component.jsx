import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div cart-items>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapToStateProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapToStateProps)(CartDropdown);
