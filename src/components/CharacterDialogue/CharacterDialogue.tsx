import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, ArrowLeft, Settings, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: number;
  character: {
    name: string;
    avatar: string;
  };
  content: string;
  position: 'left' | 'right';
  timestamp: string;
}

const CharacterDialogue = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(50);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [activeCharacter, setActiveCharacter] = useState<string>("Lin LanSer");

  const messages: Message[] = [
    {
      id: 1,
      character: {
        name: "Lin LanSer",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop"
      },
      content: "Watch where you're going",
      position: 'left',
      timestamp: "2:30"
    },
    {
      id: 2,
      character: {
        name: "Ruethairat",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
      },
      content: "Guess I'm not 'people', then",
      position: 'right',
      timestamp: "2:45"
    },
    {
      id: 3,
      character: {
        name: "Lin LanSer",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop"
      },
      content: "You really don't care who I am, do you?",
      position: 'left',
      timestamp: "3:00"
    }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handleTimeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value / 100;
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    // Simulate progress for demo
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(prev => (prev + 1) % 225); // 3:45 in seconds
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold">Chapter 1: The Beginning</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <Settings className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <Download className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Character Selection */}
      <div className="border-b border-gray-700 bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex space-x-4">
            {Array.from(new Set(messages.map(m => m.character.name))).map((name) => (
              <button
                key={name}
                onClick={() => setActiveCharacter(name)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCharacter === name
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="max-w-3xl mx-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 mb-6 ${
                message.position === 'right' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div className="relative group">
                <img
                  src={message.character.avatar}
                  alt={message.character.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-500 transition-transform group-hover:scale-105"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
              </div>
              <div className={`max-w-[70%] ${message.position === 'right' ? 'items-end' : 'items-start'}`}>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium text-gray-300">{message.character.name}</span>
                  <span className="text-xs text-gray-500">{message.timestamp}</span>
                </div>
                <div
                  className={`rounded-2xl p-4 ${
                    message.position === 'right'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700/80 text-white'
                  } shadow-lg transform transition-all hover:-translate-y-1`}
                >
                  <p>{message.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audio Player Controls */}
      <div className="bg-gray-800/90 backdrop-blur-sm border-t border-gray-700 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={messages[0].character.avatar}
                alt="Current character"
                className="w-10 h-10 rounded-full border-2 border-blue-500"
              />
              <div>
                <div className="font-medium">Current Scene</div>
                <div className="text-sm text-gray-400">The First Encounter</div>
              </div>
            </div>
            <div className="relative">
              <button
                onMouseEnter={() => setShowVolumeSlider(true)}
                onMouseLeave={() => setShowVolumeSlider(false)}
                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              >
                <Volume2 className="w-5 h-5" />
              </button>
              {showVolumeSlider && (
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-gray-800 rounded-lg shadow-lg"
                  onMouseEnter={() => setShowVolumeSlider(true)}
                  onMouseLeave={() => setShowVolumeSlider(false)}
                >
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <SkipBack className="w-6 h-6" />
            </button>
            <button
              onClick={handlePlayPause}
              className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <SkipForward className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <span className="text-sm text-gray-400">{formatTime(currentTime)}</span>
            <div className="flex-1 relative">
              <div className="h-1 bg-gray-600 rounded-full">
                <div
                  className="absolute h-full bg-blue-500 rounded-full"
                  style={{ width: `${(currentTime / 225) * 100}%` }}
                />
              </div>
              <input
                type="range"
                min="0"
                max="225"
                value={currentTime}
                onChange={handleTimeUpdate}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <span className="text-sm text-gray-400">3:45</span>
          </div>
        </div>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}>
        <source src="/path-to-your-audio.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default CharacterDialogue;