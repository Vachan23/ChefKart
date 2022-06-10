import { createContext, useReducer } from 'react';

const cartContext = createContext();

//reducer

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      return [...state];
    }
    default: {
      return state;
    }
  }
};

//Provider

const CartProvider = () => {
  let initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);
};
