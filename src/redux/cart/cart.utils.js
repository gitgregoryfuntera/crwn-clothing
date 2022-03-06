export const addItemToCart = (cartItems, cartItemToBeAdded) => {
  const existingCartItem = cartItems.find(
    (cart) => cart.id === cartItemToBeAdded.id
  );
  if (existingCartItem) {
    return cartItems.map((cart) =>
      cart.id === cartItemToBeAdded.id
        ? { ...cart, quantity: cart.quantity + 1 }
        : cart
    );
  }

  return [...cartItems, { ...cartItemToBeAdded, quantity: 1 }];
};
