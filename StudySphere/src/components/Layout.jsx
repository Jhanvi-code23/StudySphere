import Sidebar from "./Sidebar";

function Layout({ children, currentPage, onNavigate }) {
  return (
    <div className="app-layout">
      <Sidebar
        currentPage={currentPage}
        onNavigate={onNavigate}
      />

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;