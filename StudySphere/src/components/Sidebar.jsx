function Sidebar() {

  return (
    <aside className="sidebar">

      {/* =========================
          LOGO
          ========================= */}

      <div className="sidebar-logo">

        <div className="logo-icon">
          🎓
        </div>

        <div>
          <h2>
            Study<span>Sphere</span>
          </h2>

          <p>Learn • Plan • Achieve</p>
        </div>

      </div>


      {/* =========================
          MAIN NAVIGATION
          ========================= */}

      <nav className="sidebar-nav">

        <p className="nav-heading">
          MAIN
        </p>

        <button className="nav-item active">
          <span>⌂</span>
          Dashboard
        </button>

        <button className="nav-item">
          <span>▣</span>
          Study Resources
        </button>

        <button className="nav-item">
          <span>◔</span>
          Progress
        </button>

        <button className="nav-item">
          <span>▤</span>
          Notes
        </button>


        {/* =========================
            UTILITIES
            ========================= */}

        <p className="nav-heading utilities-heading">
          UTILITIES
        </p>

        <button className="nav-item">
          <span>✓</span>
          TaskMate
        </button>

        <button className="nav-item">
          <span>▦</span>
          Calculator
        </button>

        <button className="nav-item">
          <span>◷</span>
          Pomodoro
        </button>


        {/* =========================
            ACCOUNT
            ========================= */}

        <p className="nav-heading utilities-heading">
          ACCOUNT
        </p>

        <button className="nav-item">
          <span>◉</span>
          Profile
        </button>

      </nav>


      {/* =========================
          BOTTOM SECTION
          ========================= */}

      <div className="sidebar-bottom">

        <button className="logout-button">
          <span>↪</span>
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;