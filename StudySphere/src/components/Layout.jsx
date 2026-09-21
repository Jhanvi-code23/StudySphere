import Sidebar from "./Sidebar";

function Layout({ children, currentPage, onNavigate, onPomodoroToggle, onLogout }) {
  return (
    <div className="app-layout">
      <Sidebar
        currentPage={currentPage}
        onNavigate={onNavigate}
        onPomodoroToggle={onPomodoroToggle}
        onLogout={onLogout}
      />

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;