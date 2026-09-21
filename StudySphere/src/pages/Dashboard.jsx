import studyResources from "../data/studyResources";

function Dashboard() {
  // =====================================
  // CALCULATE ACTUAL TOPIC PROGRESS
  // =====================================

  let completedTopics = 0;
  let totalTopics = 0;

  studyResources.forEach((category) => {
    category.topics.forEach((topic) => {
      const savedTopics = localStorage.getItem(`progress-${topic.id}`);
      const topics = savedTopics ? JSON.parse(savedTopics) : topic.topicsCovered;

      completedTopics += topics.filter((item) => item.completed).length;
      totalTopics += topics.length;
    });
  });

  const overallProgress = totalTopics
    ? Math.round((completedTopics / totalTopics) * 100)
    : 0;

  // =====================================
  // CONTINUE LEARNING
  // =====================================

  const learningTopics = [];

  studyResources.forEach((category) => {
    category.topics.forEach((topic) => {
      const savedTopics = localStorage.getItem(`progress-${topic.id}`);
      const topics = savedTopics ? JSON.parse(savedTopics) : topic.topicsCovered;

      const completed = topics.filter((item) => item.completed).length;
      const total = topics.length;
      const progress = total ? Math.round((completed / total) * 100) : 0;

      learningTopics.push({
        name: topic.name,
        progress: progress,
      });
    });
  });

  // Show topics that are currently being worked on
  const continueLearning = learningTopics
    .filter((topic) => topic.progress > 0 && topic.progress < 100)
    .slice(0, 3);

  // =====================================
  // TASKMATE / CHECKMATE DATA
  // =====================================

  const savedTasks = localStorage.getItem("tasks");
  const allTasks = savedTasks ? JSON.parse(savedTasks) : [];

  const pendingTasks = allTasks.filter((task) => !task.completed);
  const completedTasks = allTasks.filter((task) => task.completed);
  const totalTasks = allTasks.length;

  const todayTasks = pendingTasks.slice(0, 3);

  return (
    <div className="dashboard">
      {/* =====================================
          HEADER
          ===================================== */}
      <section className="dashboard-header">
        <div>
          <p className="dashboard-label">STUDY OVERVIEW</p>
          <h1>Good evening, Jhanvi</h1>
          <p className="dashboard-subtitle">
            Keep going. You're making progress.
          </p>
        </div>
        <div className="date-box">
          <span>Today</span>
          <strong>20 Sep 2026</strong>
        </div>
      </section>

      {/* =====================================
          STAT CARDS
          ===================================== */}
      <section className="stats-grid">
        <div className="dashboard-stat-card">
          <div className="stat-card-top">
            <span>Overall Progress</span>
            <span className="stat-icon">◔</span>
          </div>
          <h2>{overallProgress}%</h2>
          <p>Keep building your streak</p>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-card-top">
            <span>Tasks Completed</span>
            <span className="stat-icon">✓</span>
          </div>
          <h2>
            {completedTasks.length}/{totalTasks}
          </h2>
          <p>Tasks completed</p>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-card-top">
            <span>Topics Covered</span>
            <span className="stat-icon">▣</span>
          </div>
          <h2>
            {completedTopics}/{totalTopics}
          </h2>
          <p>Topics completed</p>
        </div>
      </section>

      {/* =====================================
          MAIN DASHBOARD GRID
          ===================================== */}
      <section className="dashboard-grid">
        {/* ===================================
            CONTINUE LEARNING
            =================================== */}
        <div className="dashboard-card learning-card">
          <div className="section-heading">
            <div>
              <h2>Continue Learning</h2>
              <p>Pick up where you left off.</p>
            </div>
            <button className="text-button">View all →</button>
          </div>

          <div className="learning-list">
            {continueLearning.length > 0 ? (
              continueLearning.map((topic) => (
                <div className="learning-item" key={topic.name}>
                  <div className="learning-info">
                    <span>{topic.name}</span>
                    <strong>{topic.progress}%</strong>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: `${topic.progress}%` }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-learning">
                Start a topic to see your learning progress here.
              </p>
            )}
          </div>
        </div>

        {/* ===================================
            TODAY'S TASKS
            =================================== */}
        <div className="dashboard-card">
          <div className="section-heading">
            <div>
              <h2>Today's Tasks</h2>
              <p>Stay on top of your work.</p>
            </div>
            <button
              className="text-button"
              onClick={() =>
                (window.location.href = "/WebDev-L2-ToDoList/index.html")
              }
            >
              CheckMate →
            </button>
          </div>

          <div className="today-task-list">
            {todayTasks.length > 0 ? (
              todayTasks.map((task) => (
                <div className="today-task" key={task.id}>
                  <span className="task-check">
                    {task.completed ? "✓" : "○"}
                  </span>
                  <span>{task.text}</span>
                </div>
              ))
            ) : (
              <div className="today-task">
                <span className="task-check">✓</span>
                <span>No pending tasks</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;