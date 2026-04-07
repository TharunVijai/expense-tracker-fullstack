import React, { useEffect, useState } from "react";
import "./Reports.css";
import CategoryChart from "./CategoryChart";

const Reports = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // Fetch all expenses
  useEffect(() => {
    fetch("http://localhost:8080/api/expenses")
      .then((res) => res.json())
      .then((data) => {
        setExpenses(data);
        setFilteredExpenses(data); // initially show all
      });
  }, []);

  // Filter function
  const handleFilter = () => {
    if (!fromDate || !toDate) {
      setFilteredExpenses(expenses);
      return;
    }

    const filtered = expenses.filter((exp) => {
      return exp.date >= fromDate && exp.date <= toDate;
    });

    setFilteredExpenses(filtered);
  };

  // Total calculation
  const total = filteredExpenses.reduce((sum, exp) => {
    return sum + Number(exp.amount);
  }, 0);

  return (
    <div className="reports">

      <h2>Reports</h2>

      {/* Filters */}
      <div className="filters">
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />

        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />

        <button onClick={handleFilter}>Apply</button>
      </div>

      {/* Total */}
      <div className="report-summary">
        <h3>Total Expense</h3>
        <p>₹{total}</p>
      </div>

      {/* Chart */}
      <div className="report-chart">
        <CategoryChart expenses={filteredExpenses} />
      </div>

      {/* List */}
      <div className="report-list">
        <h3>Transactions</h3>

        {filteredExpenses.length === 0 ? (
          <p>No data</p>
        ) : (
          filteredExpenses.map((exp) => (
            <div className="report-item" key={exp.id}>
              <span>{exp.title}</span>
              <span>₹{exp.amount}</span>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Reports;