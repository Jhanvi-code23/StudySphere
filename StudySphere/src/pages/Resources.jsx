import { useState } from "react";
import studyResources from "../data/studyResources";
import { getUserData } from "../utils/userStorage";

function Resources({ onTopicSelect }) {
  const [selectedCategory, setSelectedCategory] = useState(
    studyResources[0].category
  );

  const selectedResource = studyResources.find(
    (resource) => resource.category === selectedCategory
  );

  // Calculate progress for the current user
  const getTopicProgress = (topic) => {
    const initialTopics = topic.topicsCovered.map((item) => ({
      ...item,
      completed: false,
    }));

    const topics = getUserData(
      `progress-${topic.id}`,
      initialTopics
    );

    const completed = topics.filter(
      (item) => item.completed
    ).length;

    const total = topics.length;

    return total
      ? Math.round((completed / total) * 100)
      : 0;
  };

  return (
    <div className="resources-page">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div>
          <p className="dashboard-label">
            LEARNING LIBRARY
          </p>

          <h1>Study Resources</h1>

          <p>
            Explore topics, notes, videos and practical tasks.
          </p>
        </div>
      </div>


      {/* CATEGORY TABS */}
      <div className="category-tabs">

        {studyResources.map((resource) => (

          <button
            key={resource.id}
            className={
              selectedCategory === resource.category
                ? "category-tab active"
                : "category-tab"
            }
            onClick={() =>
              setSelectedCategory(resource.category)
            }
          >
            {resource.category}
          </button>

        ))}

      </div>


      {/* TOPIC CARDS */}
      <div className="topic-grid">

        {selectedResource.topics.map((topic) => {

          const progress = getTopicProgress(topic);

          return (
            <div
              className="topic-card"
              key={topic.id}
            >

              <div className="topic-card-top">

                <span className="topic-number">
                  {String(topic.id).slice(-2)}
                </span>

                <span className="topic-progress">
                  {progress}%
                </span>

              </div>


              <h2>{topic.name}</h2>

              <p>{topic.description}</p>


              {/* PROGRESS BAR */}
              <div className="topic-progress-track">

                <div
                  className="topic-progress-fill"
                  style={{
                    width: `${progress}%`
                  }}
                />

              </div>


              {/* OPEN TOPIC */}
              <button
                className="topic-button"
                onClick={() => onTopicSelect(topic)}
              >
                Open Topic →
              </button>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Resources;