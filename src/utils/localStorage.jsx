

const employees = [ 
  {
    id: 1,
    firstname: "Aarav",
    email: "e@e.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Update client report",
        description: "Prepare Q2 updates and send to client",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-04-10",
        category: "Reporting"
      },
      {
        title: "Fix login issue",
        description: "Resolve login bug in frontend app",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-04-08",
        category: "Development"
      },
      {
        title: "Organize meeting",
        description: "Set up Zoom call with marketing team",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-04-15",
        category: "Management"
      }
    ]
  },
  {
    id: 2,
    firstname: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create landing page",
        description: "Design and develop new campaign landing page",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-04-11",
        category: "Design"
      },
      {
        title: "Prepare pitch deck",
        description: "Slides for upcoming investor meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-04-01",
        category: "Presentation"
      },
      {
        title: "Code review",
        description: "Review PRs from the mobile dev team",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-04-14",
        category: "Development"
      },
      {
        title: "Bug triage",
        description: "Prioritize incoming bug reports",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-04-07",
        category: "QA"
      }
    ]
  },
  {
    id: 3,
    firstname: "Neha",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Market research",
        description: "Analyze competitor trends for Q2",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-04-13",
        category: "Marketing"
      },
      {
        title: "Optimize database",
        description: "Improve indexing and query performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-04-04",
        category: "Database"
      },
      {
        title: "Feedback analysis",
        description: "Sort through customer feedback",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-04-14",
        category: "Support"
      }
    ]
  },
  {
    id: 4,
    firstname: "Rohan",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Security audit",
        description: "Run system-wide vulnerability checks",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-04-12",
        category: "Security"
      },
      {
        title: "System updates",
        description: "Patch all servers with latest updates",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-04-09",
        category: "IT"
      },
      {
        title: "Incident response drill",
        description: "Simulate data breach scenario",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-04-05",
        category: "Security"
      },
      {
        title: "Clean server logs",
        description: "Purge old logs to free disk space",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-04-14",
        category: "IT"
      }
    ]
  },
  {
    id: 5,
    firstname: "Priya",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Write documentation",
        description: "Create onboarding docs for new hires",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-04-10",
        category: "Documentation"
      },
      {
        title: "Team training session",
        description: "Host training on new tools",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-04-03",
        category: "HR"
      },
      {
        title: "Employee feedback",
        description: "Collect anonymous survey results",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-04-14",
        category: "HR"
      }
    ]
  }
];

  
const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];
  
  export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalStorage = ()=>{
        const employees = JSON.parse(localStorage.getItem('employees'))
        const admin = JSON.parse(localStorage.getItem('admin'))

       return {employees,admin}
  }
  
