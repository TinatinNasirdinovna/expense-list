import React from "react";

const initialState = {
  cash: 0,
  expenses: 1000,
};

export const Reduce = (state = initialState, action) => {
  switch (action.type) {
    case "BUY":
      return {
        ...state,
        cash:
          action.payload > state.expenses || action.payload < 0
            ?  state.cash
            : state.cash + action.payload,
        expenses:
          action.payload > state.expenses || action.payload < 0
            ? (alert("u vas ne datotochno sredstv"), state.expenses)
            : state.expenses - action.payload,
      };
    case 'DELETE_PRODUCT' : 
    return {...state}  
    default:
      return state;
  }
};
