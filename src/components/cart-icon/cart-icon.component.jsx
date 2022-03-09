import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/icons/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { setCartToggleHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ setCartToggleHidden, cartItemCount }) => {
  return (
    <div className="cart-icon" onClick={setCartToggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};

const mapToDispatch = (dispatch) => ({
  setCartToggleHidden: () => dispatch(setCartToggleHidden()),
});

const mapToStateProps = ({ cart: { cartItems } }) => ({
  cartItemCount: cartItems.reduce(
    (cartItemAccumulator, cartItem) =>
      (cartItemAccumulator + cartItem.quantity),
    0
  ),
});

export default connect(mapToStateProps, mapToDispatch)(CartIcon);
