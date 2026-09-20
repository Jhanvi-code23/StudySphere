import { useState } from "react";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import TopicDetail from "./pages/TopicDetail";
import Progress from "./pages/Progress";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedTopic(null);
  };

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
          onTopicSelect={(topic) => setSelectedTopic(topic)}
        />
      );
    }

    if (currentPage === "progress") {
      return <Progress />;
    }

    return <Dashboard />;
  };

  return (
    <Layout
      currentPage={currentPage}
      onNavigate={handleNavigate}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;