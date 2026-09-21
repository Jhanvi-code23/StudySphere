function Sidebar({ currentPage, onNavigate }) {
  return (
    <aside className="sidebar">

      {/* LOGO */}
      <div className="sidebar-logo">
        <div className="logo-icon">🎓</div>

        <div>
          <h2>
            Study<span>Sphere</span>
          </h2>

          <p>Learn • Plan • Achieve</p>
        </div>
      </div>


      {/* NAVIGATION */}
      <nav className="sidebar-nav">

        <p className="nav-heading">MAIN</p>

        <button
          className={
            currentPage === "dashboard"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => onNavigate("dashboard")}
        >
          <span>⌂</span>
          Dashboard
        </button>


        <button
          className={
            currentPage === "resources"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => onNavigate("resources")}
        >
          <span>▣</span>
          Study Resources
        </button>


        <button
          className={
            currentPage === "progress"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => onNavigate("progress")}
        >
          <span>◔</span>
          Progress
        </button>


        <button
          className="nav-item"
          onClick={() => alert("Notes section coming next!")}
        >
          <span>▤</span>
          Notes
        </button>


        {/* UTILITIES */}
        <p className="nav-heading utilities-heading">
          UTILITIES
        </p>


        <button
          className="nav-item"
          onClick={() => window.location.href= "/WebDev-L2-ToDoList/index.html"}
        >
          <span>✓</span>
          CheckMate
        </button>


        <button
  className="nav-item"
  onClick={() => {
    window.location.href = "/WebDev-L2-Calculator/index.html";
  }}
>
  <span>▣</span>
  Calculator
</button>


        <button
          className="nav-item"
          onClick={() => alert("Pomodoro section coming next!")}
        >
          <span>◷</span>
          Pomodoro
        </button>


        {/* ACCOUNT */}
        <p className="nav-heading utilities-heading">
          ACCOUNT
        </p>


        <button
          className="nav-item"
          onClick={() => alert("Profile section coming next!")}
        >
          <span>◉</span>
          Profile
        </button>

      </nav>


      {/* LOGOUT */}
      <div className="sidebar-bottom">
        <button
          className="logout-button"
          onClick={() => alert("Logout functionality coming later!")}
        >
          <span>↪</span>
          Logout
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;