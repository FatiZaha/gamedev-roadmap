import { 
  BookOpen, 
  GraduationCap, 
  FileText, 
  PlayCircle, 
  Wrench,
  ExternalLink,
  ListOrdered,
  Video
} from 'lucide-react';
import { resources, youtubeChannels } from '../data/roadmapData';

export default function ResourcesView() {
  // Group resources by category
  const categories = Array.from(new Set(resources.map(r => r.category)));

  const typeIcons: Record<string, React.ReactNode> = {
    course: <GraduationCap size={16} />,
    docs: <FileText size={16} />,
    tutorial: <BookOpen size={16} />,
    video: <PlayCircle size={16} />,
    tool: <Wrench size={16} />,
    book: <BookOpen size={16} />,
  };

  const typeColors: Record<string, string> = {
    course: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    docs: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    tutorial: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    video: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    tool: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    book: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  };

  const recommendedOrder = [
    { step: 1, title: "CS50 Game Development", desc: "Start with fundamentals" },
    { step: 2, title: "MDN Games Documentation", desc: "Learn browser game basics" },
    { step: 3, title: "Phaser Documentation + Tutorials", desc: "Master the main framework" },
    { step: 4, title: "Build Snake", desc: "First complete game" },
    { step: 5, title: "Build Pong", desc: "Practice animations & physics" },
    { step: 6, title: "Build Breakout", desc: "Solidify Phaser skills" },
    { step: 7, title: "Build Platformer", desc: "Master Phaser" },
    { step: 8, title: "Learn WebSockets", desc: "Multiplayer foundations" },
    { step: 9, title: "Build Multiplayer Game", desc: "Real-time networking" },
    { step: 10, title: "Learn Three.js", desc: "Enter 3D" },
    { step: 11, title: "Build 3D Game", desc: "Apply 3D skills" },
    { step: 12, title: "Publish on GitHub Pages & itch.io", desc: "Showcase your work" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <BookOpen size={24} className="text-yellow-400" />
          Learning Resources
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Curated courses, tutorials, and tools for your game dev journey
        </p>
      </div>

      {/* Recommended Order */}
      <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <ListOrdered size={18} className="text-violet-400" />
          Recommended Learning Order
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {recommendedOrder.map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-3 p-3 bg-gray-900/50 border border-gray-800 rounded-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                {item.step}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white">{item.title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources by Category */}
      <div className="space-y-6">
        {categories.map((category) => {
          const categoryResources = resources.filter(r => r.category === category);
          
          return (
            <div key={category} className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-gray-800">
                <h2 className="text-lg font-semibold text-white">{category}</h2>
                <div className="text-sm text-gray-400">{categoryResources.length} resources</div>
              </div>
              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                {categoryResources.map((resource, i) => (
                  <a
                    key={i}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-violet-500/30 hover:bg-gray-800 transition-all group"
                  >
                    <div className={`p-2 rounded-lg border flex-shrink-0 ${typeColors[resource.type]}`}>
                      {typeIcons[resource.type]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors">
                        {resource.title}
                      </div>
                      <div className="text-xs text-gray-500 capitalize mt-0.5">{resource.type}</div>
                      <div className="text-xs text-gray-600 truncate mt-1">{resource.url}</div>
                    </div>
                    <ExternalLink size={14} className="text-gray-600 group-hover:text-violet-400 transition-colors flex-shrink-0 mt-1" />
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* YouTube Channels */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-gray-800">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Video size={20} className="text-rose-500" />
            YouTube Channels to Follow
          </h2>
          <p className="text-sm text-gray-400 mt-1">Subscribe for ongoing tutorials and inspiration</p>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {youtubeChannels.map((channel, i) => (
            <a
              key={i}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-rose-500/30 hover:bg-gray-800 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center flex-shrink-0">
                <Video size={18} className="text-rose-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white group-hover:text-rose-300 transition-colors">
                  {channel.name}
                </div>
                <div className="text-xs text-gray-500">{channel.category}</div>
              </div>
              <ExternalLink size={14} className="text-gray-600 group-hover:text-rose-400 transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
