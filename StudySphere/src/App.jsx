import { useEffect, useState } from "react";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import TopicDetail from "./pages/TopicDetail";
import Progress from "./pages/Progress";
import Pomodoro from "./pages/Pomodoro";
import Profile from "./pages/Profile";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [selectedTopic, setSelectedTopic] = useState(null);

  const [showPomodoro, setShowPomodoro] = useState(false);

  const [session, setSession] = useState(() => {
    return JSON.parse(
      localStorage.getItem("currentSession")
    );
  });


  // Check login session
  useEffect(() => {
    if (!session) {
      window.location.href =
        "/WebDev-L2-LoginAuth/login.html";
    }
  }, [session]);


  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedTopic(null);
  };


  const handleLogout = () => {
    localStorage.removeItem("currentSession");

    setSession(null);
    setShowPomodoro(false);
  };


  // Don't render StudySphere without login
  if (!session) {
    return null;
  }


  const renderPage = () => {

    if (selectedTopic) {
      return (
        <TopicDetail
          topic={selectedTopic}
          onBack={() => setSelectedTopic(null)}
        />
      );
    }


    if (currentPage === "dashboard") {
      return <Dashboard />;
    }


    if (currentPage === "resources") {
      return (
        <Resources
          onTopicSelect={(topic) =>
            setSelectedTopic(topic)
          }
        />
      );
    }


    if (currentPage === "progress") {
      return <Progress />;
    }


    if (currentPage === "profile") {
      return <Profile />;
    }


    return <Dashboard />;
  };


  return (
    <Layout
      currentPage={currentPage}
      onNavigate={handleNavigate}
      onPomodoroToggle={() =>
        setShowPomodoro((prev) => !prev)
      }
      onLogout={handleLogout}
    >

      {renderPage()}

      {showPomodoro && (
        <Pomodoro
          onClose={() =>
            setShowPomodoro(false)
          }
        />
      )}

    </Layout>
  );
}

export default App;