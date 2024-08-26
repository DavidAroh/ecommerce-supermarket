import React, { createContext, useReducer, useMemo } from 'react';

// Create Context
export const CartContext = createContext();

// Initial State
const initialState = {
  cartItems: [],
};

// Reducer Function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemExists = state.cartItems.find(item => item.id === action.payload.id);
      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id ? { ...item, quantity: Math.max(item.quantity + 1, 5) } : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };
    case 'CHANGE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(action.payload.quantity, 1) }
            : item
        ),
      };
    default:
      return state;
  }
};


// Context Provider Component

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const changeQuantity = (id, quantity) => {
    dispatch({ type: 'CHANGE_QUANTITY', payload: { id, quantity } });
  };

  const totalItems = useMemo(() => state.cartItems.reduce((acc, item) => acc + item.quantity, 0), [state.cartItems]);
  const totalPrice = useMemo(() => state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0), [state.cartItems]);

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, removeFromCart, changeQuantity, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
