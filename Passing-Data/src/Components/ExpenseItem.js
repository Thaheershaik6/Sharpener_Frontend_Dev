import "./ExpenseItem.css";

function ExpenseItem(props) {
//   const expenseDate = new Date(2021, 8, 19);
//   const expenseTitle = "Car Insurance";
//   const expenseAmount = 228.3;
//   const LocationOfExpenditure = "Benze circle";
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.LocationOfExpenditure}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
