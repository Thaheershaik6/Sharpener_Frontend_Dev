import "./ExpenseItem.css";
 
function ExpenseDetails(props) {
  //   const amount = props.amount.toString("en-US", { amount: "long" });
  //   const location = props.location.toString("en-US", { location: "long" });
  //   const title = props.title.toString("en-US", { title: "long" });

  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <h2>{props.location}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
