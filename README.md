# 🎮 GameDev Roadmap Tracker

A comprehensive web application designed to guide aspiring game developers through a structured 6-month learning journey. This interactive roadmap helps you track progress, manage milestones, schedule study sessions, and master essential game development skills.

**Live Demo:** https://fatizaha.github.io/gamedev-roadmap/

---

## ✨ Features

### 📊 **Dashboard**
- Get a quick overview of your overall progress
- View key statistics and achievements at a glance
- Quick navigation to ongoing weeks and active milestones
- Track completion percentages across different learning phases

### 🗺️ **Visual Roadmap**
- Interactive roadmap displaying the complete 6-month learning path
- Phase-by-phase breakdown of game development fundamentals
- Mark tasks as complete and track progress visually
- Color-coded progress indicators for easy visualization

### 📅 **Weekly Planner**
- Detailed view of current and upcoming weeks
- Week-by-week task management
- Hour logging system to track time spent on each task
- Navigate between different weeks to plan ahead or review past weeks

### 🏆 **Milestones**
- Track major project milestones and achievements
- Add custom URLs to link your milestone projects
- Celebrate key accomplishments in your learning journey
- Track milestone completion status

### ⏰ **Schedule Management**
- Plan your weekly study schedule
- Day-by-day learning sessions
- Quick toggle to mark days as complete
- Track your consistency and commitment

### 📈 **Skills Tracker**
- Monitor mastery of essential game development skills
- Mark skills as mastered to celebrate achievements
- Organize skills by category and complexity level
- Visualize your skill development progress

### 📚 **Resources**
- Curated 100% free learning resources and references
- Links to tutorials, documentation, and tools
- Community recommendations
- Quick access to essential game development materials

### 💾 **Data Persistence**
- All progress is automatically saved to your browser's local storage
- Your data persists between sessions
- No account required - completely privacy-focused
- Easy reset option to start over if needed

### 📱 **Responsive Design**
- Fully responsive layout for desktop, tablet, and mobile
- Optimized mobile navigation with collapsible menu
- Touch-friendly interface for all devices
- Seamless experience across all screen sizes

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed on your system
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FatiZaha/gamedev-roadmap.git
   cd gamedev-roadmap
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deployment

To deploy to GitHub Pages (or similar static hosts):

```bash
npm run deploy
```

This uses `gh-pages` to automatically build and deploy your site.

---

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.2.6** - Modern UI library with hooks and concurrent rendering
- **TypeScript 5.9.3** - Type-safe JavaScript development
- **Vite 7.3.2** - Lightning-fast build tool and dev server

### Styling & UI
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Tailwind Merge 3.4.0** - Intelligent Tailwind class merging
- **clsx 2.1.1** - Conditional className utility

### Icons
- **Lucide React 1.17.0** - Beautiful, consistent icon library

### Build & Deployment
- **@vitejs/plugin-react 5.1.1** - Fast refresh and HMR for React
- **@tailwindcss/vite 4.1.17** - Optimized Tailwind CSS processing
- **vite-plugin-singlefile 2.3.0** - Bundle everything into a single HTML file
- **gh-pages 6.3.0** - Easy GitHub Pages deployment

---

## 📁 Project Structure

```
gamedev-roadmap/
├── src/
│   ├── components/          # React components for each view
│   │   ├── Dashboard.tsx   # Overview dashboard
│   │   ├── Roadmap.tsx     # 6-month roadmap view
│   │   ├── WeekView.tsx    # Weekly task view
│   │   ├── Milestones.tsx  # Milestone tracker
│   │   ├── Schedule.tsx    # Weekly schedule
│   │   ├── Skills.tsx      # Skills mastery tracker
│   │   ├── ResourcesView.tsx # Learning resources
│   │   └── Sidebar.tsx     # Navigation sidebar
│   ├── hooks/              # Custom React hooks
│   │   └── useProgress.ts  # Progress state management
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── LICENSE                 # MIT License
```

---

## 🎯 How to Use

### Getting Started
1. Open the application in your browser
2. Start on the **Dashboard** to get an overview
3. Navigate to the **Roadmap** to see the 6-month learning path

### Tracking Progress
1. **Complete Tasks**: Click on tasks in any view to mark them as complete
2. **Log Hours**: In the Weekly View, log the hours you spend on each task
3. **Track Milestones**: Record your project completions in the Milestones section
4. **Mark Skills**: Check off skills as you master them in the Skills section

### Planning Your Schedule
1. Visit the **Schedule** section to plan your weekly study sessions
2. Check off days as you complete them
3. Use the **Weekly Planner** to dive into detailed weekly tasks
4. Explore the **Resources** section for learning materials

### Resetting Progress
- Use the **Reset Progress** button to clear all data and start over
- A confirmation dialog will appear to prevent accidental data loss

---

## 💡 Tips for Success

- **Be Consistent**: Try to study game development regularly, following the weekly schedule
- **Log Your Hours**: Tracking time helps you understand your investment and commitment
- **Document Milestones**: Add URLs to your projects for easy reference and portfolio building
- **Explore Resources**: Use the resources section to find tutorials and tools for each phase
- **Review Regularly**: Check the dashboard weekly to stay motivated and focused
- **Adjust as Needed**: The roadmap is a guide—feel free to add more time or explore deeper if needed

---

## 📚 Free Learning Resources & References

All resources listed are 100% free to access:

### 🎮 **Game Engines**

#### **Unity**
- [Unity Learn](https://learn.unity.com) - Official free learning platform
- [Unity Documentation](https://docs.unity.com) - Comprehensive docs and API reference
- [Brackeys](https://www.youtube.com/c/Brackeys) - Free game dev tutorials
- [CodeMonkey](https://www.youtube.com/c/CodeMonkey) - Programming concepts for games

#### **Unreal Engine**
- [Unreal Online Learning](https://www.unrealengine.com/en-US/onlinelearning) - Official free courses
- [Unreal Documentation](https://docs.unrealengine.com) - Complete technical documentation
- [Ben UI UE4 Tutorials](https://www.youtube.com/c/BenUIUE4Tutorials) - Free UE4/UE5 tutorials

#### **Godot**
- [Godot Official Tutorials](https://docs.godotengine.org/en/stable/community/tutorials.html) - Free tutorials
- [Godot Documentation](https://docs.godotengine.org) - Complete engine documentation
- [GDQuest](https://www.gdquest.com) - Free Godot game dev content
- [HeartBeast](https://www.youtube.com/c/HeartBeast) - Indie game dev tutorials

### 💻 **Programming Fundamentals**

#### **C# & C++**
- [Microsoft Learn C#](https://learn.microsoft.com/en-us/dotnet/csharp/) - Official free C# learning path
- [LearnCpp.com](https://www.learncpp.com) - Comprehensive C++ tutorial
- [W3Schools C#](https://www.w3schools.com/cs/) - Interactive C# tutorials
- [Code.org](https://code.org) - Free programming fundamentals

#### **JavaScript**
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Comprehensive JS reference
- [JavaScript.info](https://javascript.info) - Modern JavaScript tutorial
- [FreeCodeCamp JavaScript](https://www.freecodecamp.org/learn/javascript/) - Full JS curriculum

### 🎨 **Graphics & Design**

#### **2D Graphics**
- [Aseprite Documentation](https://aseprite.en.softonic.com/download) - Open-source sprite editor
- [Pixilart](https://www.pixilart.com) - Free online pixel art tool
- [Blender Documentation](https://docs.blender.org) - Free 3D graphics software
- [GIMP Tutorials](https://www.gimp.org/tutorials/) - Free image editor

#### **3D Modeling**
- [Blender Beginner Series](https://www.blender.org/support/tutorials/) - Official free tutorials
- [Sketchfab](https://sketchfab.com) - Free 3D models library
- [TurboSquid Free](https://www.turbosquid.com/Search/3D-Models/free) - Free 3D assets
- [Poly Haven](https://polyhaven.com) - Free 3D models and textures

#### **UI/UX Design**
- [Figma Community](https://www.figma.com/community) - Free design resources
- [Design Principles](https://www.interaction-design.org/courses) - Free design courses
- [Adobe XD Tutorials](https://helpx.adobe.com/xd/tutorials.html) - Free XD resources

### 🔊 **Audio & Sound Design**

#### **Music & Sound Effects**
- [Freesound.org](https://freesound.org) - Community sound effects library
- [Zapsplat](https://www.zapsplat.com) - Free sound effects and music
- [OpenGameArt.org](https://opengameart.org) - Free game assets including audio
- [ccMixter](https://ccmixter.org) - Creative commons music

#### **Audio Tools**
- [Audacity](https://www.audacityteam.org) - Free audio editor
- [FMOD Studio](https://www.fmod.com) - Free for indie developers
- [Reaper](https://www.reaper.fm) - Affordable DAW with unlimited trial

### 🎬 **Game Design & Theory**

- [Extra Credits](https://www.youtube.com/c/ExtraCredits) - Game design principles
- [Game Design Document](https://www.gamedesigndocument.net) - GDD resources
- [Game Jams on Itch.io](https://itch.io/jams) - Participate in free game jams
- [Game Developer Articles](https://www.gamasutra.com) - Industry insights

### 📖 **General Learning Platforms**

- [YouTube Channels](https://www.youtube.com) - Hundreds of free game dev channels
- [Itch.io](https://itch.io) - Game dev resources and community
- [GitHub](https://github.com) - Open-source game projects
- [Reddit Communities](https://www.reddit.com/r/gamedev) - r/gamedev and r/Unity3D
- [Discord Communities](https://discord.com) - Join game dev servers
- [Twitch](https://www.twitch.tv) - Live game dev streams

### 🛠️ **Development Tools & Version Control**

- [Git & GitHub](https://github.com/git-tips/tips) - Free version control
- [Visual Studio Code](https://code.visualstudio.com) - Free code editor
- [Git for Windows](https://gitforwindows.org) - Git installation guide
- [GitHub Student Pack](https://education.github.com/pack) - Free tools for students

### 📚 **Free Books & Documentation**

- [Game Programming Patterns](https://gameprogrammingpatterns.com) - Free online book
- [Making Games with Pygame](https://inventwithpython.com/pygame/) - Free Python game dev book
- [The Basics of Game Design](https://www.igi-global.com/chapter/open-access/273215) - Open access game design

---

## 🎨 Customization

### Modifying the Roadmap
Edit the task data in the `useProgress` hook to customize:
- Weekly tasks and descriptions
- Learning phases and milestones
- Skill categories
- Resource links

### Styling
- Modify colors and styling in component files
- Adjust Tailwind configuration in `tailwind.config.js`
- Component styles use Tailwind utility classes for easy modification

### Adding New Features
The modular component structure makes it easy to:
- Add new tracking categories
- Implement additional analytics
- Create custom views and filters
- Add data export capabilities

---

## 🔐 Data & Privacy

- **Local Storage**: All your progress is stored locally in your browser
- **No Server Communication**: No data is sent to external servers
- **Private**: Your learning journey remains completely private
- **Portable**: Your data stays on your device

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs and issues
- Suggest new features or resources
- Improve documentation
- Submit pull requests

Please ensure your contributions maintain code quality and follow the existing code style.

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Bundled with [Vite](https://vitejs.dev)
- Icons from [Lucide React](https://lucide.dev)
- Inspired by community-driven learning paths
- Resources curated from the global game development community

---

## 📞 Support & Questions

If you have questions or need help:
1. Check the [GitHub Issues](https://github.com/FatiZaha/gamedev-roadmap/issues)
2. Review the project structure and code comments
3. Feel free to open a new issue with your question
4. Join the game dev community on Reddit or Discord for additional support

---

## 🎓 Learning Roadmap Overview

This application implements a structured 6-month game development learning path covering:
- **Month 1: Fundamentals** - Core concepts and foundational knowledge
- **Month 2: Game Engines** - Introduction to game development engines
- **Month 3: Programming** - Essential programming skills for game development
- **Month 4: Graphics & Design** - Visual development and design principles
- **Month 5: Audio & Polish** - Sound design and game refinement
- **Month 6: Deployment** - Publishing and sharing your games

---

## 🚀 Next Steps

Ready to start your game development journey?

1. **Visit the live app:** https://fatizaha.github.io/gamedev-roadmap/
2. **Explore the resources** in the Resources section
3. **Start with fundamentals** and progress week by week
4. **Join the community** and share your progress
5. **Build your portfolio** with the projects you complete

---

**Made with ❤️ for aspiring game developers everywhere**

*All resources listed are free and accessible to everyone. Start learning today!* 🎮🚀
