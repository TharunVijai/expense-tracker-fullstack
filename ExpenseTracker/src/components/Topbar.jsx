import './Topbar.css'

const Topbar = () => {
  return (
    <div className="topbar">

      {/* LEFT */}
      <div className="topbar-left">
        <h2>Dashboard</h2>
      </div>

      {/* CENTER */}
      <div className="topbar-center">
        <input type="text" placeholder="Search..." />
      </div>

      {/* RIGHT */}
      <div className="topbar-right">
        <span className="icon">🔔</span>
        <span className="profile">TV</span>
      </div>

    </div>
  )
}

export default Topbar