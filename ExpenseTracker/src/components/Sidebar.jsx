import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>Expense Tracker <span>$</span></h2>
      </div>
 
      <nav className="menu">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}
        >
          Dashboard
        </NavLink>

        <NavLink 
          to="/add" 
          className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}
        >
          Add Expense
        </NavLink>

        <NavLink 
          to="/transactions" 
          className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}
        >
          Transactions
        </NavLink>

        <NavLink 
          to="/reports" 
          className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}
        >
          Reports
        </NavLink>
      </nav>

    </aside>
  );
};

export default Sidebar;