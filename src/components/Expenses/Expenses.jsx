import "./Expenses.css";
import { Card } from "../UI/Card";
import { ExpensesFilter } from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";

export const Expenses = (props) => {
  const { data } = props;
  const [selectedYear, setSelectedYear] = useState("2019");
  const selectedFilterHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = data.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className={"expenses"}>
      <div>
        <ExpensesFilter
          selected={selectedYear}
          onSelectYear={selectedFilterHandler}
        />
      </div>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
