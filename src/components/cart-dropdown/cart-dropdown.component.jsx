import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";

const CartDropdown = ({ cartItems }) => {
  const navigate = useNavigate();
  const { length } = cartItems;
  let CartItems = <span className="empty-message">Your cart is empty</span>;
  if (length) {
    CartItems = (
      <>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </>
    );
  }
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{CartItems}</div>
      <CustomButton onClick={() => navigate("/checkout")}>
        Go To Checkout
      </CustomButton>
    </div>
  );
};

const mapToStateProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapToStateProps)(CartDropdown);
