import React, { useEffect, useState } from "react";
import "./Transactions.css";

const Transactions = () => {
  const [expenses, setExpenses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/expenses")
      .then(res => res.json())
      .then(data => setExpenses(data));
  }, []);


const handleDelete = (id) => {
    console.log("Deleting ID:", id);
  fetch(`http://localhost:8080/api/expenses/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      alert("Deleted ✅");

      // remove from UI without refresh
      setExpenses(expenses.filter((exp) => exp.id !== id));
    })
    .catch((error) => console.error(error));
};

const handleUpdate = () => {
  fetch(`http://localhost:8080/api/expenses/${editData.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editData),
  })
    .then(() => {
      alert("Updated ✅");

      // update UI without refresh
      const updatedList = expenses.map((exp) =>
        exp.id === editData.id ? editData : exp
      );

      setExpenses(updatedList);

      setShowModal(false);
    })
    .catch((error) => console.error(error));
};


  return (
    <div className="transactions">
      <h2>Transactions</h2>

      {expenses.map((exp) => (
        <div className="transaction-row" key={exp.id}>

          <div className="transaction-info">
            {exp.title} - ₹{exp.amount}
          </div>

        <span className={`category-badge ${exp.category}`}>
        {exp.category}
        </span>        
            <button
                className="edit-btn"
                onClick={() => {
                    setEditData(exp);
                    setShowModal(true);
                }}
                >
                Edit
            </button>
          <button className="delete-btn" onClick={() => handleDelete(exp.id)}>Delete</button>

        </div>
      ))}

      {showModal && (
  <div className="modal">
    <div className="modal-content">

      <h3>Edit Expense</h3>

      <input
        type="text"
        value={editData.title}
        onChange={(e) =>
          setEditData({ ...editData, title: e.target.value })
        }
      />

        <input
                type="number"
                value={editData.amount}
                onChange={(e) =>
                setEditData({ ...editData, amount: e.target.value })
                }
            />

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button onClick={() => setShowModal(false)}>Cancel</button>

                <button onClick={handleUpdate}>Save</button>
            </div>

            </div>
        </div>
        )}
    </div>

    
  );
};

export default Transactions;