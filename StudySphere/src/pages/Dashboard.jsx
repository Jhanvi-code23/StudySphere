function Dashboard() {

  // 🔴 LATER:
  // These values will come from actual StudySphere data.
  // For now, we are using temporary values to build the UI.

  const overallProgress = 62;
  const completedTasks = 3;
  const totalTasks = 5;
  const completedTopics = 8;
  const totalTopics = 12;


  // 🔴 LATER:
  // Add/remove learning topics here according to the topics
  // you actually want to show on your StudySphere dashboard.

  const learningTopics = [
    {
      name: "JavaScript",
      progress: 75
    },
    {
      name: "React",
      progress: 40
    },
    {
      name: "DSA",
      progress: 25
    }
  ];


  // 🔴 LATER:
  // These will eventually come from the TaskMate data.

  const todayTasks = [
    "Complete JavaScript Arrays",
    "Practice React useState",
    "Revise DBMS notes"
  ];


  return (

    <div className="dashboard">

      {/* =====================================
          HEADER
          ===================================== */}

      <section className="dashboard-header">

        <div>

          <p className="dashboard-label">
            STUDY OVERVIEW
          </p>

          <h1>
            Good evening, Jhanvi
          </h1>

          <p className="dashboard-subtitle">
            Keep going. You're making progress.
          </p>

        </div>

        <div className="date-box">
          <span>Today</span>
          <strong>19 Sep 2026</strong>
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

          <h2>
            {overallProgress}%
          </h2>

          <p>
            Keep building your streak
          </p>

        </div>


        <div className="dashboard-stat-card">

          <div className="stat-card-top">
            <span>Tasks Completed</span>
            <span className="stat-icon">✓</span>
          </div>

          <h2>
            {completedTasks}/{totalTasks}
          </h2>

          <p>
            Tasks completed today
          </p>

        </div>


        <div className="dashboard-stat-card">

          <div className="stat-card-top">
            <span>Topics Covered</span>
            <span className="stat-icon">▣</span>
          </div>

          <h2>
            {completedTopics}/{totalTopics}
          </h2>

          <p>
            Topics completed
          </p>

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

              <p>
                Pick up where you left off.
              </p>
            </div>

            <button className="text-button">
              View all →
            </button>

          </div>


          <div className="learning-list">

            {learningTopics.map((topic) => (

              <div
                className="learning-item"
                key={topic.name}
              >

                <div className="learning-info">

                  <span>
                    {topic.name}
                  </span>

                  <strong>
                    {topic.progress}%
                  </strong>

                </div>


                <div className="progress-track">

                  <div
                    className="progress-fill"
                    style={{
                      width: `${topic.progress}%`
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ===================================
            TODAY'S TASKS
            =================================== */}

        <div className="dashboard-card">

          <div className="section-heading">

            <div>
              <h2>Today's Tasks</h2>

              <p>
                Stay on top of your work.
              </p>
            </div>

            <button className="text-button">
              TaskMate →
            </button>

          </div>


          <div className="today-task-list">

            {todayTasks.map((task, index) => (

              <div
                className="today-task"
                key={index}
              >

                <span className="task-check">
                  ✓
                </span>

                <span>
                  {task}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          QUICK TOOLS
          ===================================== */}

      <section className="quick-tools-section">

        <div className="section-heading">

          <div>
            <h2>Quick Tools</h2>

            <p>
              Useful tools for your study sessions.
            </p>
          </div>

        </div>


        <div className="quick-tools-grid">

          <button className="quick-tool">

            <div className="tool-icon">
              ✓
            </div>

            <div>
              <strong>TaskMate</strong>
              <span>Manage your tasks</span>
            </div>

          </button>


          <button className="quick-tool">

            <div className="tool-icon">
              +
            </div>

            <div>
              <strong>Calculator</strong>
              <span>Quick calculations</span>
            </div>

          </button>


          <button className="quick-tool">

            <div className="tool-icon">
              ◷
            </div>

            <div>
              <strong>Pomodoro</strong>
              <span>Focus sessions</span>
            </div>

          </button>


          <button className="quick-tool">

            <div className="tool-icon">
              ▤
            </div>

            <div>
              <strong>Notes</strong>
              <span>Write something down</span>
            </div>

          </button>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;