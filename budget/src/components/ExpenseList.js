import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

function ExpenseList() {
  const { expenses } = useContext(AppContext);
  // const expenses = [
  //   { id: 1242, name: "Shopping", cost: 50 },
  //   { id: 1322, name: "Holiday", cost: 503 },
  //   { id: 4522, name: "Transportation", cost: 550 },
  //   { id: 5523, name: "Fuel", cost: 520 },
  //   { id: 7242, name: "ChildCare", cost: 760 },
  // ]; used before AppContext applied
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
