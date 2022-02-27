import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/icons/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import setCartToggleHidden from "../../redux/cart/cart.actions";

const CartIcon = ({ setCartToggleHidden }) => {
  return (
    <div className="cart-icon" onClick={setCartToggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapToDispatch = (dispatch) => ({
  setCartToggleHidden: () => dispatch(setCartToggleHidden()),
});

export default connect(null, mapToDispatch)(CartIcon);
