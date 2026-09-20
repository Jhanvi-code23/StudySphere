const studyResources = [
  {
    id: "web-development",
    category: "Web Development",

    topics: [
      {
        id: "html",
        name: "HTML",
        description: "Learn the structure and semantic elements used to build webpages.",
        progress: 40,

        topicsCovered: [
          { id: 1, title: "HTML Basics", completed: true },
          { id: 2, title: "Headings & Paragraphs", completed: true },
          { id: 3, title: "Links & Images", completed: false },
          { id: 4, title: "Lists & Tables", completed: false },
          { id: 5, title: "Forms", completed: false },
          { id: 6, title: "Semantic HTML", completed: false }
        ],

        notes: [
          {
            title: "HTML Complete Notes",
            file: "StudySphere\\public\\pdfs\\HTML_Handwritten_Exam_Notes (1).pdf"
          }
        ],

        videos: [
          {
            title: "HTML Full Course",
            url: "https://www.youtube.com/"
          }
        ],

        practicals: [
          {
            title: "Build a Personal Portfolio",
            description:
              "Create a personal portfolio webpage using semantic HTML.",
            solutionUrl: "https://github.com/"
          },
          {
            title: "Create a Registration Form",
            description:
              "Build a structured registration form using HTML form elements.",
            solutionUrl: "https://github.com/"
          }
        ]
      },

      {
        id: "css",
        name: "CSS",
        description: "Learn styling, layouts, responsive design and modern CSS.",
        progress: 55,

        topicsCovered: [
          { id: 1, title: "CSS Basics", completed: true },
          { id: 2, title: "Selectors", completed: true },
          { id: 3, title: "Box Model", completed: true },
          { id: 4, title: "Flexbox", completed: false },
          { id: 5, title: "Grid", completed: false },
          { id: 6, title: "Responsive Design", completed: false }
        ],

        notes: [
          {
            title: "CSS Complete Notes",
            file: "StudySphere\\public\\pdfs\\CSS Notes.pdf"
          }
        ],

        videos: [
          {
            title: "CSS Full Course",
            url: "https://www.youtube.com/"
          }
        ],

        practicals: [
          {
            title: "Responsive Landing Page",
            description:
              "Create a responsive landing page using Flexbox and media queries.",
            solutionUrl: "https://github.com/"
          }
        ]
      },

      {
        id: "javascript",
        name: "JavaScript",
        description:
          "Learn JavaScript fundamentals, DOM manipulation and modern ES6 concepts.",
        progress: 60,

        topicsCovered: [
          { id: 1, title: "Variables & Data Types", completed: true },
          { id: 2, title: "Operators & Conditions", completed: true },
          { id: 3, title: "Functions", completed: true },
          { id: 4, title: "Arrays & Objects", completed: false },
          { id: 5, title: "DOM Manipulation", completed: false },
          { id: 6, title: "Events", completed: false },
          { id: 7, title: "ES6 Concepts", completed: false }
        ],

        notes: [
          {
            title: "JavaScript Complete Notes",
            file: "StudySphere\\public\\pdfs\\Javascript Complete Notes.pdf"
          }
        ],

        videos: [
          {
            title: "JavaScript Basics",
            url: "https://www.youtube.com/"
          },
          {
            title: "DOM Manipulation",
            url: "https://www.youtube.com/"
          }
        ],

        practicals: [
          {
            title: "Build a Calculator",
            description:
              "Create a functional calculator using HTML, CSS and JavaScript.",
            solutionUrl: "https://github.com/"
          },
          {
            title: "Build a To-Do List",
            description:
              "Create a task manager with add, delete and completion functionality.",
            solutionUrl: "https://github.com/"
          }
        ]
      },

      {
        id: "react",
        name: "React",
        description:
          "Learn component-based UI development using React and modern hooks.",
        progress: 30,

        topicsCovered: [
          { id: 1, title: "React Basics", completed: true },
          { id: 2, title: "Components", completed: true },
          { id: 3, title: "Props", completed: false },
          { id: 4, title: "State & useState", completed: false },
          { id: 5, title: "Events", completed: false },
          { id: 6, title: "Lists & Keys", completed: false },
          { id: 7, title: "useEffect", completed: false }
        ],

        notes: [
          {
            title: "React Notes",
            file: "StudySphere\\public\\pdfs\\React-Handwritten-notes.pdf"
          }
        ],

        videos: [
          {
            title: "React Course",
            url: "https://www.youtube.com/"
          }
        ],

        practicals: [
          {
            title: "Build a React Dashboard",
            description:
              "Create a dashboard using reusable React components.",
            solutionUrl: "https://github.com/"
          }
        ]
      }
    ]
  },

  {
    id: "dsa",
    category: "DSA",

    topics: [
      {
        id: "arrays",
        name: "Arrays",
        description:
          "Learn array traversal, searching, sorting and common problem-solving patterns.",
        progress: 45,

        topicsCovered: [
          { id: 1, title: "Array Basics", completed: true },
          { id: 2, title: "Traversal", completed: true },
          { id: 3, title: "Searching", completed: true },
          { id: 4, title: "Two Pointer", completed: false },
          { id: 5, title: "Kadane's Algorithm", completed: false },
          { id: 6, title: "Array Rotation", completed: false }
        ],

        notes: [
          {
            title: "Arrays Notes",
            file: "pdfs/Array Notes by Divyanshu Shukla.pdf"
          }
        ],

        videos: [
          {
            title: "Arrays Complete Playlist",
            url: "https://www.youtube.com/"
          }
        ],

        practicals: [
          {
            title: "Array Problem Set",
            description:
              "Practice common array problems including rotation, duplicates and maximum subarray.",
            solutionUrl: "https://github.com/"
          }
        ]
      },

      {
        id: "strings",
        name: "Strings",
        description:
          "Learn string manipulation and common string-based problem solving techniques.",
        progress: 25,

        topicsCovered: [
          { id: 1, title: "String Basics", completed: true },
          { id: 2, title: "Character Traversal", completed: false },
          { id: 3, title: "Palindrome", completed: false },
          { id: 4, title: "Frequency Counting", completed: false },
          { id: 5, title: "String Manipulation", completed: false }
        ],

        notes: [
          {
            title: "Strings Notes",
            file: "/pdfs/strings-notes.pdf"
          }
        ],

        videos: [
          {
            title: "String Problems",
            url: "https://www.youtube.com/"
          }
        ],

        practicals: [
          {
            title: "String Practice Set",
            description:
              "Solve beginner and intermediate string manipulation problems.",
            solutionUrl: "https://github.com/"
          }
        ]
      },

      {
        id: "hashing",
        name: "Hashing",
        description:
          "Understand HashMap, HashSet and frequency-based problem solving.",
        progress: 20,

        topicsCovered: [
          { id: 1, title: "Hashing Basics", completed: true },
          { id: 2, title: "HashSet", completed: false },
          { id: 3, title: "HashMap", completed: false },
          { id: 4, title: "Frequency Counting", completed: false },
          { id: 5, title: "Hashing Problems", completed: false }
        ],

        notes: [
          {
            title: "Hashing Notes",
            file: "/pdfs/hashing-notes.pdf"
          }
        ],

        videos: [
          {
            title: "Hashing in DSA",
            url: "https://www.youtube.com/"
          }
        ],

        practicals: [
          {
            title: "Hashing Problem Set",
            description:
              "Practice frequency counting and lookup problems using HashMap and HashSet.",
            solutionUrl: "https://github.com/"
          }
        ]
      }
    ]
  },

  {
    id: "database",
    category: "Database",

    topics: [
      {
        id: "sql",
        name: "SQL",
        description:
          "Learn queries, filtering, joins, grouping and database operations.",
        progress: 35,

        topicsCovered: [
          { id: 1, title: "SQL Basics", completed: true },
          { id: 2, title: "SELECT & WHERE", completed: true },
          { id: 3, title: "ORDER BY", completed: false },
          { id: 4, title: "GROUP BY", completed: false },
          { id: 5, title: "Joins", completed: false },
          { id: 6, title: "Subqueries", completed: false }
        ],

        notes: [
          {
            title: "SQL Notes",
            file: "/pdfs/sql-notes.pdf"
          }
        ],

        videos: [
          {
            title: "SQL Complete Course",
            url: "https://www.youtube.com/"
          }
        ],

        practicals: [
          {
            title: "Student Database Queries",
            description:
              "Write SQL queries for a student management database.",
            solutionUrl: "https://github.com/"
          }
        ]
      },

      {
        id: "mysql",
        name: "MySQL",
        description:
          "Learn relational database management using MySQL.",
        progress: 25,

        topicsCovered: [
          { id: 1, title: "MySQL Basics", completed: true },
          { id: 2, title: "Creating Tables", completed: false },
          { id: 3, title: "CRUD Operations", completed: false },
          { id: 4, title: "Relationships", completed: false },
          { id: 5, title: "Joins", completed: false }
        ],

        notes: [
          {
            title: "MySQL Notes",
            file: "/pdfs/mysql-notes.pdf"
          }
        ],

        videos: [
          {
            title: "MySQL Tutorial",
            url: "StudySphere\\public\\pdfs\\REVISION NOTES -SQL.pdf"
          }
        ],

        practicals: [
          {
            title: "Student Management Database",
            description:
              "Design tables and perform CRUD operations for a student database.",
            solutionUrl: "https://github.com/"
          }
        ]
      }
    ]
  },

  {
    id: "programming",
    category: "Programming",

    topics: [
      {
        id: "java",
        name: "Java",
        description:
          "Learn Java programming fundamentals and object-oriented concepts.",
        progress: 40,

        topicsCovered: [
          { id: 1, title: "Java Basics", completed: true },
          { id: 2, title: "Variables & Data Types", completed: true },
          { id: 3, title: "Loops", completed: true },
          { id: 4, title: "Arrays", completed: false },
          { id: 5, title: "Methods", completed: false },
          { id: 6, title: "Exception Handling", completed: false }
        ],

        notes: [
          {
            title: "Java Notes",
            file: "/pdfs/java-notes.pdf"
          }
        ],

        videos: [
          {
            title: "Java Programming Course",
            url: "https://www.youtube.com/"
          }
        ],

        practicals: [
          {
            title: "Java Practice Problems",
            description:
              "Solve beginner Java problems involving loops, arrays and methods.",
            solutionUrl: "https://github.com/"
          }
        ]
      },

      {
        id: "oops",
        name: "OOP",
        description:
          "Understand object-oriented programming concepts using Java.",
        progress: 30,

        topicsCovered: [
          { id: 1, title: "Classes & Objects", completed: true },
          { id: 2, title: "Constructors", completed: true },
          { id: 3, title: "Inheritance", completed: false },
          { id: 4, title: "Polymorphism", completed: false },
          { id: 5, title: "Abstraction", completed: false },
          { id: 6, title: "Encapsulation", completed: false }
        ],

        notes: [
          {
            title: "OOP Notes",
            file: "/pdfs/oops-notes.pdf"
          }
        ],

        videos: [
          {
            title: "OOP Concepts in Java",
            url: "https://www.youtube.com/"
          }
        ],

        practicals: [
          {
            title: "OOP Practice",
            description:
              "Implement inheritance, polymorphism and encapsulation using Java.",
            solutionUrl: "https://github.com/"
          }
        ]
      }
    ]
  }
];

export default studyResources;