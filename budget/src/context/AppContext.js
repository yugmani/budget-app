import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 5000,
  expenses: [
    { id: 12, name: "Holiday", cost: 350 },
    { id: 13, name: "Shopping", cost: 600 },
    { id: 14, name: "Car Service", cost: 700 },
    { id: 15, name: "Vacation", cost: 1100 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

//  context done:start next 27:48 timer
