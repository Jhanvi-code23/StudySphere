import studyResources from "../data/studyResources";

function Progress() {

  // Get the latest progress of a topic
  const getTopicProgress = (topic) => {

    const savedTopics = localStorage.getItem(
      `progress-${topic.id}`
    );

    const topics = savedTopics
      ? JSON.parse(savedTopics)
      : topic.topicsCovered;

    const completed = topics.filter(
      (item) => item.completed
    ).length;

    const total = topics.length;

    return {
      completed,
      total,
      progress: total
        ? Math.round((completed / total) * 100)
        : 0
    };
  };


  // Calculate category progress
  const getCategoryProgress = (category) => {

    let completed = 0;
    let total = 0;

    category.topics.forEach((topic) => {

      const topicProgress = getTopicProgress(topic);

      completed += topicProgress.completed;
      total += topicProgress.total;

    });

    return {
      completed,
      total,
      progress: total
        ? Math.round((completed / total) * 100)
        : 0
    };
  };


  // Overall progress
  let overallCompleted = 0;
  let overallTotal = 0;

  studyResources.forEach((category) => {

    category.topics.forEach((topic) => {

      const topicProgress = getTopicProgress(topic);

      overallCompleted += topicProgress.completed;
      overallTotal += topicProgress.total;

    });

  });

  const overallProgress = overallTotal
    ? Math.round(
        (overallCompleted / overallTotal) * 100
      )
    : 0;


  return (

    <div className="progress-page">

      {/* =========================
          HEADER
      ========================= */}

      <div className="page-header">

        <div>

          <p className="dashboard-label">
            LEARNING ANALYTICS
          </p>

          <h1>My Progress</h1>

          <p>
            Track your learning progress across all subjects.
          </p>

        </div>

      </div>


      {/* =========================
          OVERALL PROGRESS
      ========================= */}

      <section className="overall-progress-card">

        <div className="overall-progress-info">

          <div>

            <p className="progress-label">
              OVERALL PROGRESS
            </p>

            <h2>
              {overallProgress}%
            </h2>

            <p>
              {overallCompleted} of {overallTotal} topics completed
            </p>

          </div>

          <div className="progress-circle">

            <span>
              {overallProgress}%
            </span>

          </div>

        </div>


        <div className="overall-progress-track">

          <div
            className="overall-progress-fill"
            style={{
              width: `${overallProgress}%`
            }}
          />

        </div>

      </section>


      {/* =========================
          CATEGORY PROGRESS
      ========================= */}

      <section className="progress-section">

        <div className="section-heading">

          <div>

            <h2>Category Progress</h2>

            <p>
              See how you are progressing in each subject area.
            </p>

          </div>

        </div>


        <div className="category-progress-grid">

          {studyResources.map((category) => {

            const categoryProgress =
              getCategoryProgress(category);

            return (

              <div
                className="category-progress-card"
                key={category.id}
              >

                <div className="category-progress-top">

                  <div>

                    <h3>
                      {category.category}
                    </h3>

                    <p>
                      {categoryProgress.completed} of{" "}
                      {categoryProgress.total} topics
                    </p>

                  </div>

                  <strong>
                    {categoryProgress.progress}%
                  </strong>

                </div>


                <div className="progress-track">

                  <div
                    className="progress-fill"
                    style={{
                      width: `${categoryProgress.progress}%`
                    }}
                  />

                </div>

              </div>

            );

          })}

        </div>

      </section>


      {/* =========================
          TOPIC-WISE PROGRESS
      ========================= */}

      <section className="progress-section">

        <div className="section-heading">

          <div>

            <h2>Topic Progress</h2>

            <p>
              Detailed progress for each topic.
            </p>

          </div>

        </div>


        <div className="topic-progress-list">

          {studyResources.map((category) => (

            <div
              className="progress-category"
              key={category.id}
            >

              <div className="progress-category-heading">

                <span>
                  {category.category}
                </span>

              </div>


              {category.topics.map((topic) => {

                const topicProgress =
                  getTopicProgress(topic);

                return (

                  <div
                    className="progress-topic-row"
                    key={topic.id}
                  >

                    <div className="progress-topic-info">

                      <span>
                        {topic.name}
                      </span>

                      <strong>
                        {topicProgress.progress}%
                      </strong>

                    </div>


                    <div className="progress-track">

                      <div
                        className="progress-fill"
                        style={{
                          width: `${topicProgress.progress}%`
                        }}
                      />

                    </div>

                  </div>

                );

              })}

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Progress;