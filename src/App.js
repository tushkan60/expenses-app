import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 567.6,
    date: new Date(2019, 2, 28),
  },
  {
    id: 2,
    title: "Something one",
    amount: 323.6,
    date: new Date(2020, 8, 23),
  },
  {
    id: 3,
    title: "Something two",
    amount: 1232.4,
    date: new Date(2021, 3, 18),
  },
  {
    id: 4,
    title: "Something three",
    amount: 876.5,
    date: new Date(2021, 9, 20),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className={"bg-black"}>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
