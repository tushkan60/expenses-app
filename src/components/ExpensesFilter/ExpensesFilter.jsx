import "./ExpensesFilter.css";

export const ExpensesFilter = (props) => {
  const yearChangeHandler = (event) => {
    const selectedYear = event.target.value;
    props.onSelectYear(selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={yearChangeHandler} value={props.selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
