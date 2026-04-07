import React, { useState } from "react";
import "./AddExpense.css";

const AddExpense = () => {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  fetch("http://localhost:8080/api/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then(() => {
      alert("Expense Added ✅");
      console.log(form);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

  return (
    <div className="add-expense">
      <h2>Add Expense :</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Expense Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value={"FOOD"}>Food</option>
          <option value={"TRAVEL"}>Travel</option>
          <option value={"SHOPPING"}>Shopping</option>
          <option value={"BILLS"}>Bills</option>
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <button type="submit">Add Expense</button>

      </form>
    </div>
  );
};

export default AddExpense;