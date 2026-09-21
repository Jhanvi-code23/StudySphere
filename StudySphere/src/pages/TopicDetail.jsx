import { useEffect, useState } from "react";
import { getUserData, setUserData } from "../utils/userStorage";

function TopicDetail({ topic, onBack }) {

  // Store topic completion state
  const [topics, setTopics] = useState(() => {

    const initialTopics = topic.topicsCovered.map((item) => ({
      ...item,
      completed: false,
    }));

    return getUserData(
      `progress-${topic.id}`,
      initialTopics
    );
  });


  // Save progress for the current user
  useEffect(() => {

    setUserData(
      `progress-${topic.id}`,
      topics
    );

    window.dispatchEvent(
      new Event("progressUpdated")
    );

  }, [topics, topic.id]);


  // Calculate completed topics
  const completedCount = topics.filter(
    (item) => item.completed
  ).length;

  const totalCount = topics.length;


  // Calculate progress percentage
  const progress = totalCount
    ? Math.round(
        (completedCount / totalCount) * 100
      )
    : 0;


  // Toggle topic completion
  const toggleTopic = (id) => {

    setTopics(
      topics.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed
            }
          : item
      )
    );

  };


  return (
    <div className="topic-detail-page">

      {/* BACK */}
      <button
        className="back-button"
        onClick={onBack}
      >
        ← Back to Resources
      </button>


      {/* HEADER */}
      <div className="topic-detail-header">

        <p className="dashboard-label">
          LEARNING TOPIC
        </p>

        <h1>{topic.name}</h1>

        <p className="topic-description">
          {topic.description}
        </p>

      </div>


      {/* PROGRESS */}
      <div className="detail-progress">

        <div className="detail-progress-top">

          <span>Progress</span>

          <strong>{progress}%</strong>

        </div>

        <div className="topic-progress-track">

          <div
            className="topic-progress-fill"
            style={{
              width: `${progress}%`
            }}
          />

        </div>

        <p>
          {completedCount} of {totalCount} topics completed
        </p>

      </div>


      {/* =========================
          01 — TOPICS COVERED
      ========================= */}
      <section className="detail-section">

        <div className="detail-section-title">

          <span>01</span>

          <div>
            <h2>Topics Covered</h2>
            <p>Track the concepts you have completed.</p>
          </div>

        </div>


        <div className="covered-topics">

          {topics.map((item) => (

            <button
              key={item.id}
              className={
                item.completed
                  ? "covered-topic completed"
                  : "covered-topic"
              }
              onClick={() => toggleTopic(item.id)}
            >

              <span className="check-box">
                {item.completed ? "✓" : ""}
              </span>

              <span>{item.title}</span>

            </button>

          ))}

        </div>

      </section>


      {/* =========================
          02 — NOTES
      ========================= */}

      <section className="detail-section">

        <div className="detail-section-title">

          <span>02</span>

          <div>
            <h2>Notes</h2>
            <p>Quick reference material for this topic.</p>
          </div>

        </div>


        <div className="notes-preview-grid">

          {topic.notes.map((note, index) => (

            <div
              className="note-preview-card"
              key={index}
            >

              <div className="note-preview-header">

                <div className="material-left">

                  <div className="material-icon">
                    PDF
                  </div>

                  <div>
                    <h3>{note.title}</h3>
                    <p>PDF Notes</p>
                  </div>

                </div>

                <span className="note-type">
                  PDF
                </span>

              </div>


              <div className="pdf-preview">

                <iframe
                  src={`${note.file}#toolbar=0&navpanes=0&scrollbar=0`}
                  title={note.title}
                />

              </div>


              <div className="note-preview-footer">

                <span>
                  Quick reference material
                </span>

                <a
                  href={note.file}
                  target="_blank"
                  rel="noreferrer"
                  className="material-link"
                >
                  Open Full PDF →
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          03 — VIDEOS
      ========================= */}

      <section className="detail-section">

        <div className="detail-section-title">

          <span>03</span>

          <div>
            <h2>Videos</h2>
            <p>Recommended videos for learning the topic.</p>
          </div>

        </div>


        <div className="material-list">

          {topic.videos.map((video, index) => (

            <div
              className="material-row"
              key={index}
            >

              <div className="material-left">

                <div className="material-icon video-icon">
                  ▶
                </div>

                <div>
                  <h3>{video.title}</h3>
                  <p>YouTube Video</p>
                </div>

              </div>


              <a
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="material-link"
              >
                Watch →
              </a>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          04 — PRACTICALS
      ========================= */}

      <section className="detail-section">

        <div className="detail-section-title">

          <span>04</span>

          <div>
            <h2>Practicals</h2>
            <p>Practice what you learned through small projects.</p>
          </div>

        </div>


        <div className="practical-grid">

          {topic.practicals.map((practical, index) => (

            <div
              className="practical-card"
              key={index}
            >

              <p className="practical-label">
                PRACTICE TASK
              </p>

              <h3>{practical.title}</h3>

              <p className="practical-description">
                {practical.description}
              </p>

              <a
                href={practical.solutionUrl}
                target="_blank"
                rel="noreferrer"
                className="material-link"
              >
                View Solution →
              </a>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default TopicDetail;