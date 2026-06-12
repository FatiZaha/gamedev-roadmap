import { Week, Month, Milestone, Skill, Resource } from '../types';

export const months: Month[] = [
  { month: 1, name: "Game Dev Fundamentals", description: "Core concepts: game loops, rendering, input, collision, sprites, Phaser.js basics" },
  { month: 2, name: "Master Phaser.js", description: "Scenes, tilemaps, physics, AI, state management, save systems" },
  { month: 3, name: "Multiplayer Games", description: "WebSockets, Socket.IO, game synchronization, matchmaking, Spring Boot" },
  { month: 4, name: "Computer Graphics", description: "Vectors, linear algebra, Three.js, 3D scenes, cameras, lighting" },
  { month: 5, name: "Advanced Game Dev", description: "Design patterns, optimization, AI, particles, audio, polish" },
  { month: 6, name: "Portfolio Project", description: "Capstone: 2D MMORPG Prototype + Portfolio Website" },
];

export const weeks: Week[] = [
  {
    id: 1, weekNumber: 1, month: 1, phase: "Fundamentals", hours: "10-15h",
    learn: ["What is a game loop", "Rendering", "Input handling", "Delta time", "Collision detection"],
    practice: ["Simple moving square", "Keyboard controls", "Collision with walls"],
    courses: ["CS50 Introduction to Game Development (Weeks 1–2)"],
    tasks: [
      { id: "w1t1", title: "Learn what is a game loop", completed: false, url: "https://developer.mozilla.org/en-US/docs/Games" },
      { id: "w1t2", title: "Learn rendering basics", completed: false, url: "https://developer.mozilla.org/en-US/docs/Games" },
      { id: "w1t3", title: "Learn input handling", completed: false, url: "https://developer.mozilla.org/en-US/docs/Games" },
      { id: "w1t4", title: "Learn delta time", completed: false, url: "https://www.youtube.com/watch?v=GFO_txvwK_c" },
      { id: "w1t5", title: "Learn collision detection", completed: false, url: "https://cs50.harvard.edu/games/2018/" },
      { id: "w1t6", title: "Build simple moving square", completed: false },
      { id: "w1t7", title: "Implement keyboard controls", completed: false },
      { id: "w1t8", title: "Build collision with walls", completed: false },
      { id: "w1t9", title: "Complete CS50 Game Dev Weeks 1-2", completed: false, url: "https://cs50.harvard.edu/games/2018/" },
    ]
  },
  {
    id: 2, weekNumber: 2, month: 1, phase: "Fundamentals", hours: "10-15h",
    learn: ["Sprites", "Animation", "Physics basics"],
    practice: ["Build Pong game"],
    courses: [],
    milestone: "Pong with score, menus, game over",
    tasks: [
      { id: "w2t1", title: "Learn sprites", completed: false, url: "https://developer.mozilla.org/en-US/docs/Games" },
      { id: "w2t2", title: "Learn animation", completed: false, url: "https://www.youtube.com/watch?v=GFO_txvwK_c" },
      { id: "w2t3", title: "Learn physics basics", completed: false, url: "https://cs50.harvard.edu/games/2018/" },
      { id: "w2t4", title: "Build Pong game", completed: false },
      { id: "w2t5", title: "Add score system", completed: false },
      { id: "w2t6", title: "Create menus", completed: false },
      { id: "w2t7", title: "Build Game Over screen", completed: false },
    ]
  },
  {
    id: 3, weekNumber: 3, month: 1, phase: "Fundamentals", hours: "10-15h",
    learn: ["HTML5 Canvas", "Phaser.js basics"],
    practice: ["Build Breakout clone"],
    courses: ["Phaser Official Tutorials"],
    tasks: [
      { id: "w3t1", title: "Learn HTML5 Canvas", completed: false, url: "https://developer.mozilla.org/en-US/docs/Games" },
      { id: "w3t2", title: "Learn Phaser.js basics", completed: false, url: "https://docs.phaser.io" },
      { id: "w3t3", title: "Complete Phaser Official Tutorials", completed: false, url: "https://phaser.io/learn" },
      { id: "w3t4", title: "Build Breakout clone", completed: false, url: "https://phaser.io/examples" },
    ]
  },
  {
    id: 4, weekNumber: 4, month: 1, phase: "Fundamentals", hours: "10-15h",
    learn: ["Polish and deployment"],
    practice: ["Project #1: Snake Game"],
    courses: [],
    milestone: "Project 1: Snake Game",
    tasks: [
      { id: "w4t1", title: "Build Snake Game core", completed: false, url: "https://phaser.io/examples" },
      { id: "w4t2", title: "Add high score tracking", completed: false },
      { id: "w4t3", title: "Add sound effects", completed: false },
      { id: "w4t4", title: "Add mobile support", completed: false },
      { id: "w4t5", title: "Build pause menu", completed: false },
      { id: "w4t6", title: "Publish on GitHub Pages", completed: false, url: "https://pages.github.com" },
    ]
  },
  {
    id: 5, weekNumber: 5, month: 2, phase: "Phaser Mastery", hours: "10-15h",
    learn: ["Scenes", "Tilemaps", "Cameras"],
    practice: ["Build Platformer prototype"],
    courses: [],
    tasks: [
      { id: "w5t1", title: "Learn Phaser scenes", completed: false, url: "https://docs.phaser.io" },
      { id: "w5t2", title: "Learn tilemaps", completed: false, url: "https://phaser.io/learn" },
      { id: "w5t3", title: "Learn cameras", completed: false, url: "https://phaser.io/examples" },
      { id: "w5t4", title: "Build platformer prototype", completed: false, url: "https://www.youtube.com/playlist?list=PLzDRvYVwl53vxdAPq8OznBAdjf0eeiipT" },
    ]
  },
  {
    id: 6, weekNumber: 6, month: 2, phase: "Phaser Mastery", hours: "10-15h",
    learn: ["Physics engine", "Enemy AI"],
    practice: ["Build Mario-style platformer"],
    courses: [],
    tasks: [
      { id: "w6t1", title: "Learn physics engine", completed: false, url: "https://docs.phaser.io" },
      { id: "w6t2", title: "Learn enemy AI", completed: false, url: "https://www.gamedeveloper.com/programming/behavior-trees-for-ai-how-they-work" },
      { id: "w6t3", title: "Build Mario-style platformer", completed: false, url: "https://www.youtube.com/playlist?list=PLzDRvYVwl53vxdAPq8OznBAdjf0eeiipT" },
    ]
  },
  {
    id: 7, weekNumber: 7, month: 2, phase: "Phaser Mastery", hours: "10-15h",
    learn: ["State management", "Save system"],
    practice: ["Build RPG prototype"],
    courses: [],
    tasks: [
      { id: "w7t1", title: "Learn state management", completed: false, url: "https://docs.phaser.io" },
      { id: "w7t2", title: "Learn save systems", completed: false, url: "https://phaser.io/learn" },
      { id: "w7t3", title: "Build RPG prototype", completed: false, url: "https://phaser.io/examples" },
    ]
  },
  {
    id: 8, weekNumber: 8, month: 2, phase: "Phaser Mastery", hours: "10-15h",
    learn: ["Polish and deployment"],
    practice: ["Project #2: Complete Platformer"],
    courses: [],
    milestone: "Project 2: Platformer",
    tasks: [
      { id: "w8t1", title: "Build 5-10 levels", completed: false, url: "https://phaser.io/examples" },
      { id: "w8t2", title: "Add enemies", completed: false },
      { id: "w8t3", title: "Add coins", completed: false },
      { id: "w8t4", title: "Add power-ups", completed: false },
      { id: "w8t5", title: "Create boss fight", completed: false },
      { id: "w8t6", title: "Deploy online", completed: false, url: "https://itch.io" },
    ]
  },
  {
    id: 9, weekNumber: 9, month: 3, phase: "Multiplayer", hours: "10-15h",
    learn: ["WebSockets", "Socket.IO concepts"],
    practice: ["Build real-time chat"],
    courses: [],
    tasks: [
      { id: "w9t1", title: "Learn WebSockets", completed: false, url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
      { id: "w9t2", title: "Learn Socket.IO concepts", completed: false, url: "https://socket.io/docs/v4/" },
      { id: "w9t3", title: "Build real-time chat app", completed: false, url: "https://socket.io/docs/v4/" },
    ]
  },
  {
    id: 10, weekNumber: 10, month: 3, phase: "Multiplayer", hours: "10-15h",
    learn: ["Client-server architecture for games"],
    practice: ["Build Multiplayer Tic-Tac-Toe"],
    courses: [],
    tasks: [
      { id: "w10t1", title: "Learn client-server architecture", completed: false, url: "https://docs.colyseus.io" },
      { id: "w10t2", title: "Build Spring Boot backend", completed: false },
      { id: "w10t3", title: "Build Phaser frontend", completed: false, url: "https://docs.phaser.io" },
      { id: "w10t4", title: "Complete Multiplayer Tic-Tac-Toe", completed: false, url: "https://socket.io/docs/v4/" },
    ]
  },
  {
    id: 11, weekNumber: 11, month: 3, phase: "Multiplayer", hours: "10-15h",
    learn: ["Game synchronization", "Rooms", "Matchmaking"],
    practice: ["Build Multiplayer Connect Four"],
    courses: [],
    tasks: [
      { id: "w11t1", title: "Learn game synchronization", completed: false, url: "https://docs.colyseus.io" },
      { id: "w11t2", title: "Learn rooms", completed: false, url: "https://docs.colyseus.io" },
      { id: "w11t3", title: "Learn matchmaking", completed: false, url: "https://socket.io/docs/v4/" },
      { id: "w11t4", title: "Build Multiplayer Connect Four", completed: false, url: "https://docs.colyseus.io" },
    ]
  },
  {
    id: 12, weekNumber: 12, month: 3, phase: "Multiplayer", hours: "10-15h",
    learn: ["Real-time gameplay systems"],
    practice: ["Project #3: Multiplayer Battle Arena"],
    courses: [],
    milestone: "Project 3: Multiplayer Battle Arena",
    tasks: [
      { id: "w12t1", title: "Implement movement", completed: false, url: "https://docs.colyseus.io" },
      { id: "w12t2", title: "Implement attacks", completed: false },
      { id: "w12t3", title: "Implement health system", completed: false },
      { id: "w12t4", title: "Build scoreboard", completed: false },
      { id: "w12t5", title: "Implement real-time updates", completed: false, url: "https://socket.io/docs/v4/" },
      { id: "w12t6", title: "Deploy multiplayer game", completed: false, url: "https://itch.io" },
    ]
  },
  {
    id: 13, weekNumber: 13, month: 4, phase: "3D Graphics", hours: "10-15h",
    learn: ["Vectors", "Linear algebra basics"],
    practice: ["Practice problems and exercises"],
    courses: ["Khan Academy", "3Blue1Brown"],
    tasks: [
      { id: "w13t1", title: "Learn vectors", completed: false, url: "https://www.khanacademy.org/math/linear-algebra" },
      { id: "w13t2", title: "Learn linear algebra basics", completed: false, url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
      { id: "w13t3", title: "Complete Khan Academy exercises", completed: false, url: "https://www.khanacademy.org/math/linear-algebra" },
      { id: "w13t4", title: "Watch 3Blue1Brown videos", completed: false, url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
    ]
  },
  {
    id: 14, weekNumber: 14, month: 4, phase: "3D Graphics", hours: "10-15h",
    learn: ["Three.js fundamentals"],
    practice: ["Build Interactive 3D scene"],
    courses: [],
    tasks: [
      { id: "w14t1", title: "Learn Three.js fundamentals", completed: false, url: "https://threejs.org/docs/" },
      { id: "w14t2", title: "Build interactive 3D scene", completed: false, url: "https://threejs.org/manual/" },
    ]
  },
  {
    id: 15, weekNumber: 15, month: 4, phase: "3D Graphics", hours: "10-15h",
    learn: ["Cameras", "Lights", "Materials"],
    practice: ["Build 3D Maze Game"],
    courses: [],
    tasks: [
      { id: "w15t1", title: "Learn cameras in Three.js", completed: false, url: "https://threejs.org/docs/" },
      { id: "w15t2", title: "Learn lights", completed: false, url: "https://threejs.org/manual/" },
      { id: "w15t3", title: "Learn materials", completed: false, url: "https://threejs-journey.com" },
      { id: "w15t4", title: "Build 3D Maze Game", completed: false, url: "https://www.youtube.com/watch?v=Q7AOvWpIVHU" },
    ]
  },
  {
    id: 16, weekNumber: 16, month: 4, phase: "3D Graphics", hours: "10-15h",
    learn: ["Putting it together"],
    practice: ["Build 3D Racing Prototype"],
    courses: [],
    milestone: "3D Racing Prototype",
    tasks: [
      { id: "w16t1", title: "Build 3D Racing Prototype", completed: false, url: "https://threejs.org/docs/" },
      { id: "w16t2", title: "Apply vectors knowledge", completed: false, url: "https://www.khanacademy.org/math/linear-algebra" },
      { id: "w16t3", title: "Implement cameras", completed: false, url: "https://threejs.org/manual/" },
      { id: "w16t4", title: "Add lighting and materials", completed: false, url: "https://threejs-journey.com" },
    ]
  },
  {
    id: 17, weekNumber: 17, month: 5, phase: "Advanced", hours: "10-15h",
    learn: ["Design patterns: State, Observer, Component"],
    practice: ["Refactor earlier projects using patterns"],
    courses: [],
    tasks: [
      { id: "w17t1", title: "Learn State Pattern", completed: false },
      { id: "w17t2", title: "Learn Observer Pattern", completed: false },
      { id: "w17t3", title: "Learn Component Pattern", completed: false },
      { id: "w17t4", title: "Refactor earlier projects", completed: false },
    ]
  },
  {
    id: 18, weekNumber: 18, month: 5, phase: "Advanced", hours: "10-15h",
    learn: ["Object pooling", "Memory management"],
    practice: ["Optimize existing games"],
    courses: [],
    tasks: [
      { id: "w18t1", title: "Learn object pooling", completed: false, url: "https://webglfundamentals.org" },
      { id: "w18t2", title: "Learn memory management", completed: false, url: "https://developer.mozilla.org/en-US/docs/Games" },
      { id: "w18t3", title: "Optimize existing games", completed: false },
    ]
  },
  {
    id: 19, weekNumber: 19, month: 5, phase: "Advanced", hours: "10-15h",
    learn: ["Game AI"],
    practice: ["Build enemy behavior system"],
    courses: [],
    tasks: [
      { id: "w19t1", title: "Learn Game AI concepts", completed: false, url: "https://learn.unity.com" },
      { id: "w19t2", title: "Build enemy behavior system", completed: false, url: "https://www.gamedeveloper.com/programming/behavior-trees-for-ai-how-they-work" },
    ]
  },
  {
    id: 20, weekNumber: 20, month: 5, phase: "Advanced", hours: "10-15h",
    learn: ["Particle systems", "Audio systems"],
    practice: ["Add polish to previous games"],
    courses: [],
    tasks: [
      { id: "w20t1", title: "Learn particle systems", completed: false, url: "https://phaser.io/examples" },
      { id: "w20t2", title: "Learn audio systems", completed: false, url: "https://docs.phaser.io" },
      { id: "w20t3", title: "Add effects to previous games", completed: false },
      { id: "w20t4", title: "Add sound to previous games", completed: false },
    ]
  },
  {
    id: 21, weekNumber: 21, month: 6, phase: "Capstone", hours: "10-15h",
    learn: ["Capstone planning and architecture"],
    practice: ["Define scope and core systems for MMORPG"],
    courses: [],
    tasks: [
      { id: "w21t1", title: "Define project scope", completed: false, url: "https://www.coursera.org/learn/game-design" },
      { id: "w21t2", title: "Design architecture", completed: false, url: "https://docs.colyseus.io" },
      { id: "w21t3", title: "Plan core systems", completed: false },
      { id: "w21t4", title: "Set up project structure", completed: false },
    ]
  },
  {
    id: 22, weekNumber: 22, month: 6, phase: "Capstone", hours: "10-15h",
    learn: ["Core gameplay implementation"],
    practice: ["Build world, movement, multiplayer sync"],
    courses: [],
    tasks: [
      { id: "w22t1", title: "Build game world", completed: false, url: "https://docs.phaser.io" },
      { id: "w22t2", title: "Implement movement", completed: false, url: "https://docs.colyseus.io" },
      { id: "w22t3", title: "Implement multiplayer sync", completed: false, url: "https://socket.io/docs/v4/" },
    ]
  },
  {
    id: 23, weekNumber: 23, month: 6, phase: "Capstone", hours: "10-15h",
    learn: ["Persistence, inventory, combat"],
    practice: ["Build remaining core systems"],
    courses: [],
    tasks: [
      { id: "w23t1", title: "Build persistence system", completed: false },
      { id: "w23t2", title: "Build inventory system", completed: false },
      { id: "w23t3", title: "Build combat system", completed: false },
    ]
  },
  {
    id: 24, weekNumber: 24, month: 6, phase: "Capstone", hours: "10-15h",
    learn: ["Final polish, deployment, portfolio site"],
    practice: ["Project #4: Capstone - MMORPG + Portfolio"],
    courses: [],
    milestone: "Capstone: 2D MMORPG Prototype",
    tasks: [
      { id: "w24t1", title: "Final polish", completed: false },
      { id: "w24t2", title: "Deploy MMORPG", completed: false, url: "https://www.netlify.com" },
      { id: "w24t3", title: "Build portfolio website", completed: false },
      { id: "w24t4", title: "Showcase all projects", completed: false, url: "https://itch.io" },
    ]
  },
];

export const dailySchedule = [
  { day: "Monday", hours: "2h", focus: "Learning", icon: "📚" },
  { day: "Tuesday", hours: "2h", focus: "Coding", icon: "💻" },
  { day: "Wednesday", hours: "2h", focus: "Coding", icon: "💻" },
  { day: "Thursday", hours: "2h", focus: "Learning", icon: "📚" },
  { day: "Friday", hours: "2h", focus: "Coding", icon: "💻" },
  { day: "Saturday", hours: "4h", focus: "Project Development", icon: "🚀" },
  { day: "Sunday", hours: "1h", focus: "Review & Planning", icon: "📋" },
];

export const skills: Skill[] = [
  { category: "Frontend", name: "Phaser.js", mastered: false },
  { category: "Frontend", name: "Three.js", mastered: false },
  { category: "Frontend", name: "Canvas API", mastered: false },
  { category: "Frontend", name: "WebGL basics", mastered: false },
  { category: "Backend", name: "Spring Boot", mastered: false },
  { category: "Backend", name: "WebSockets", mastered: false },
  { category: "Backend", name: "Multiplayer architecture", mastered: false },
  { category: "Backend", name: "Matchmaking", mastered: false },
  { category: "Game Dev", name: "Game loops", mastered: false },
  { category: "Game Dev", name: "Physics", mastered: false },
  { category: "Game Dev", name: "Animation", mastered: false },
  { category: "Game Dev", name: "AI", mastered: false },
  { category: "Game Dev", name: "UI/UX", mastered: false },
  { category: "Game Dev", name: "Audio", mastered: false },
  { category: "Portfolio", name: "Snake Game", mastered: false },
  { category: "Portfolio", name: "Platformer", mastered: false },
  { category: "Portfolio", name: "Multiplayer Battle Arena", mastered: false },
  { category: "Portfolio", name: "3D Racing Prototype", mastered: false },
  { category: "Portfolio", name: "Capstone (MMORPG)", mastered: false },
  { category: "Portfolio", name: "Portfolio Website", mastered: false },
];

export const milestones: Milestone[] = [
  { id: "m1", title: "Snake Game", description: "High score, sound, mobile support, pause menu. Published on GitHub Pages.", week: 4, completed: false, icon: "🐍" },
  { id: "m2", title: "Complete Platformer", description: "5-10 levels, enemies, coins, power-ups, boss fight. Deployed online.", week: 8, completed: false, icon: "🍄" },
  { id: "m3", title: "Multiplayer Battle Arena", description: "Real-time multiplayer with movement, attacks, health, and live scoreboard.", week: 12, completed: false, icon: "⚔️" },
  { id: "m4", title: "3D Racing Prototype", description: "Interactive 3D game with Three.js, vectors, cameras, lighting, and materials.", week: 16, completed: false, icon: "🏎️" },
  { id: "m5", title: "2D MMORPG Prototype", description: "Full capstone combining all skills. Persistent multiplayer world + portfolio website.", week: 24, completed: false, icon: "🏰" },
];

// Master resource library
export const resources: Resource[] = [
  // Fundamentals
  { title: "CS50 Introduction to Game Development", url: "https://cs50.harvard.edu/games/2018/", category: "Fundamentals", type: "course" },
  { title: "MDN Game Development Center", url: "https://developer.mozilla.org/en-US/docs/Games", category: "Fundamentals", type: "docs" },
  { title: "freeCodeCamp JavaScript Game Development", url: "https://www.youtube.com/watch?v=GFO_txvwK_c", category: "Fundamentals", type: "video" },
  
  // Phaser
  { title: "Phaser Documentation", url: "https://docs.phaser.io", category: "Phaser", type: "docs" },
  { title: "Phaser Learn Tutorials", url: "https://phaser.io/learn", category: "Phaser", type: "tutorial" },
  { title: "Phaser Examples", url: "https://phaser.io/examples", category: "Phaser", type: "tutorial" },
  { title: "Phaser 3 Tutorial Series (Code Monkey)", url: "https://www.youtube.com/playlist?list=PLzDRvYVwl53vxdAPq8OznBAdjf0eeiipT", category: "Phaser", type: "video" },
  
  // Game Design
  { title: "Introduction to Game Design (Coursera)", url: "https://www.coursera.org/learn/game-design", category: "Game Design", type: "course" },
  
  // Multiplayer
  { title: "Socket.IO Documentation", url: "https://socket.io/docs/v4/", category: "Multiplayer", type: "docs" },
  { title: "MDN WebSocket API", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API", category: "Multiplayer", type: "docs" },
  { title: "Colyseus Multiplayer Framework", url: "https://docs.colyseus.io", category: "Multiplayer", type: "docs" },
  
  // Math
  { title: "3Blue1Brown - Essence of Linear Algebra", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr", category: "Math", type: "video" },
  { title: "Khan Academy Trigonometry", url: "https://www.khanacademy.org/math/trigonometry", category: "Math", type: "course" },
  { title: "Khan Academy Linear Algebra", url: "https://www.khanacademy.org/math/linear-algebra", category: "Math", type: "course" },
  
  // Three.js
  { title: "Three.js Documentation", url: "https://threejs.org/docs/", category: "3D Graphics", type: "docs" },
  { title: "Three.js Manual", url: "https://threejs.org/manual/", category: "3D Graphics", type: "docs" },
  { title: "Three.js Journey", url: "https://threejs-journey.com", category: "3D Graphics", type: "course" },
  { title: "Three.js Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=Q7AOvWpIVHU", category: "3D Graphics", type: "video" },
  
  // Advanced Graphics
  { title: "WebGL Fundamentals", url: "https://webglfundamentals.org", category: "Graphics", type: "tutorial" },
  { title: "The Book of Shaders", url: "https://thebookofshaders.com", category: "Graphics", type: "book" },
  
  // AI
  { title: "Unity Learn AI Pathways", url: "https://learn.unity.com", category: "AI", type: "course" },
  { title: "Behavior Trees Introduction", url: "https://www.gamedeveloper.com/programming/behavior-trees-for-ai-how-they-work", category: "AI", type: "tutorial" },
  
  // Publishing
  { title: "GitHub Pages", url: "https://pages.github.com", category: "Publishing", type: "tool" },
  { title: "itch.io", url: "https://itch.io", category: "Publishing", type: "tool" },
  { title: "Netlify", url: "https://www.netlify.com", category: "Publishing", type: "tool" },
];

// YouTube channels to follow
export const youtubeChannels = [
  { name: "Brackeys", url: "https://www.youtube.com/@Brackeys", category: "Game Development" },
  { name: "Code Monkey", url: "https://www.youtube.com/@CodeMonkeyUnity", category: "Game Development" },
  { name: "Game Maker's Toolkit", url: "https://www.youtube.com/@GMTK", category: "Game Design" },
  { name: "Ourcade", url: "https://www.youtube.com/@ourcadeco", category: "Phaser" },
  { name: "Bruno Simon (Three.js)", url: "https://www.youtube.com/@BrunoSimon", category: "Three.js" },
];

// Phase-based resources mapping
export const phaseResources: Record<string, string[]> = {
  "Fundamentals": ["CS50 Introduction to Game Development", "MDN Game Development Center", "Phaser Learn Tutorials"],
  "Phaser Mastery": ["Phaser Documentation", "Phaser Examples", "Phaser 3 Tutorial Series (Code Monkey)"],
  "Multiplayer": ["Socket.IO Documentation", "MDN WebSocket API", "Colyseus Multiplayer Framework"],
  "3D Graphics": ["3Blue1Brown - Essence of Linear Algebra", "Three.js Documentation", "Three.js Journey"],
  "Advanced": ["Unity Learn AI Pathways", "Behavior Trees Introduction", "WebGL Fundamentals"],
  "Capstone": ["Introduction to Game Design (Coursera)", "GitHub Pages", "itch.io", "Netlify"],
};

export const phaseColors: Record<string, string> = {
  "Fundamentals": "from-blue-500 to-cyan-500",
  "Phaser Mastery": "from-emerald-500 to-teal-500",
  "Multiplayer": "from-orange-500 to-amber-500",
  "3D Graphics": "from-purple-500 to-violet-500",
  "Advanced": "from-pink-500 to-rose-500",
  "Capstone": "from-indigo-500 to-blue-600",
};

export const phaseBgColors: Record<string, string> = {
  "Fundamentals": "bg-blue-500/10 border-blue-500/30 text-blue-300",
  "Phaser Mastery": "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
  "Multiplayer": "bg-orange-500/10 border-orange-500/30 text-orange-300",
  "3D Graphics": "bg-purple-500/10 border-purple-500/30 text-purple-300",
  "Advanced": "bg-pink-500/10 border-pink-500/30 text-pink-300",
  "Capstone": "bg-indigo-500/10 border-indigo-500/30 text-indigo-300",
};

export const skillMilestoneMap: Record<string, string> = {
  "Snake Game": "m1",
  "Platformer": "m2",
  "Multiplayer Battle Arena": "m3",
  "3D Racing Prototype": "m4",
  "Capstone (MMORPG)": "m5",
  "Portfolio Website": "m5",
};

export const skillWeeksMap: Record<string, number[]> = {
  "Phaser.js": [3, 5, 6, 7, 8],
  "Three.js": [14, 15, 16],
  "Canvas API": [3],
  "WebGL basics": [13, 14],
  "Spring Boot": [10, 12],
  "WebSockets": [9, 10, 11, 12],
  "Multiplayer architecture": [10, 11, 12],
  "Matchmaking": [11],
  "Game loops": [1],
  "Physics": [1, 2, 6],
  "Animation": [2],
  "AI": [6, 19],
  "UI/UX": [3, 4, 8, 20],
  "Audio": [4, 20],
};
