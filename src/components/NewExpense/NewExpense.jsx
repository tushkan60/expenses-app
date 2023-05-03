import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";
import { useState } from "react";
export const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const [newExpenseFormShowed, setNewExpenseFormShowed] = useState(false);
  const addBtnHandler = () => {
    setNewExpenseFormShowed(true);
  };
  const cancelBtnHandler = () => {
    setNewExpenseFormShowed(false);
  };
  let newExpenseFormContent = (
    <button onClick={addBtnHandler}> Add new expense</button>
  );
  if (
    newExpenseFormShowed === false
      ? newExpenseFormContent
      : (newExpenseFormContent = (
          <ExpenseForm
            onExpenseFormShowed={cancelBtnHandler}
            onSaveExpenseData={saveExpenseDataHandler}
          />
        ))
  )
    return <div className={"new-expense"}>{newExpenseFormContent}</div>;
};
