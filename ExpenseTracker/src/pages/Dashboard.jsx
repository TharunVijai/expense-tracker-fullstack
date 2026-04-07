import React, { useEffect, useState } from "react";
import "./Dashboard.css"; import CategoryChart from "./CategoryChart";
import { Doughnut } from "react-chartjs-2";

const Dashboard = () => {

  //fetching all expenses - then calculating the amount
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
  fetch("http://localhost:8080/api/expenses")
    .then(res => res.json())
    .then(data => {
      setExpenses(data);
        });
    }, []);

//calculating the total expense for expenses pill
const totalExpense = expenses.reduce((total, exp) => {
  return total + exp.amount;
}, 0);

const [income, setIncome] = useState( Number(localStorage.getItem("income")) || 0 );
const [showIncomeModal, setShowIncomeModal] = useState(false);
useEffect(() => {
  localStorage.setItem("income", income);
}, [income]);

//---------------------------------------------------------------------
  return (
    <div className="dashboard">

      {/* Summary Cards */}
      <div className="cards">
        <div className="card balance">
          <h3>Total Balance</h3>
          <p>₹{income - totalExpense}</p>
        </div>

        <div className="card income" onClick={() => setShowIncomeModal(true)}>
          <h3>Income</h3>
          <p>₹{income}</p>
        </div>

        <div className="card expense">
          <h3>Expense</h3>
          <p>₹{totalExpense}</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="chart">
        <h2>Expense Overview</h2>
        <div className="chart-box"> <CategoryChart expenses={expenses} /> </div>
      </div>

{/*-------------------------------------------------------------------*/}
      {showIncomeModal && (
        <div className="modal">
          <div className="modal-content">

            <h3>Edit Income</h3>

            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
            />

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button onClick={() => setShowIncomeModal(false)}>Cancel</button>

              <button onClick={() => setShowIncomeModal(false)}>Save</button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;