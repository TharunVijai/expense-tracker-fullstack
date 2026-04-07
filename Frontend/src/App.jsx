import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import Dashboard from "./pages/Dashboard.jsx"; // ✅ ADD THIS
import AddExpense from "./pages/AddExpense.jsx";
import Transactions from './pages/Transactions.jsx';
import Reports from "./pages/Reports.jsx";

function App() {
  return (
      <section className="container">

        <Sidebar />

        <div className="container-right">
          <Topbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add" element={<AddExpense />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>

        </div>

      </section>
  );
}

export default App;