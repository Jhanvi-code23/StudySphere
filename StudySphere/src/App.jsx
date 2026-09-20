import { useState } from "react";

import Layout from "./components/Layout";
import Resources from "./pages/Resources";
import TopicDetail from "./pages/TopicDetail";

function App() {

  const [selectedTopic, setSelectedTopic] = useState(null);


  return (
    <Layout>

      {selectedTopic ? (

        <TopicDetail
          topic={selectedTopic}
          onBack={() => setSelectedTopic(null)}
        />

      ) : (

        <Resources
          onTopicSelect={(topic) => setSelectedTopic(topic)}
        />

      )}

    </Layout>
  );
}

export default App;