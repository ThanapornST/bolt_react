import React from 'react';
import { Sparkles, Mic, BookOpen, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI Story Generation',
      description: 'Create compelling stories with our advanced AI technology'
    },
    {
      icon: Mic,
      title: 'Voice Generation',
      description: 'Give unique voices to your characters with AI voice synthesis'
    },
    {
      icon: BookOpen,
      title: 'Novel Templates',
      description: 'Start with professional templates across various genres'
    },
    {
      icon: Zap,
      title: 'Fast Creation',
      description: 'Generate complete chapters in minutes, not hours'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Write Amazing Stories
          </h2>
          <p className="text-xl text-gray-600">
            Powerful tools to bring your stories to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;