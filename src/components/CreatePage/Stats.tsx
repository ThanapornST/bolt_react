import React from 'react';
import { BookOpen, Clock, Star, Trophy } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: BookOpen,
      label: 'Total Projects',
      value: '12',
      change: '+2 this month',
      trend: 'up',
    },
    {
      icon: Clock,
      label: 'Writing Time',
      value: '48h',
      change: '10h this week',
      trend: 'up',
    },
    {
      icon: Star,
      label: 'Avg. Rating',
      value: '4.8',
      change: '+0.3 this month',
      trend: 'up',
    },
    {
      icon: Trophy,
      label: 'Achievements',
      value: '8',
      change: 'Silver author',
      trend: 'neutral',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center">
            <div className="p-2 bg-blue-50 rounded-lg">
              <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
            </div>
            <div className="ml-3 sm:ml-4">
              <p className="text-xs sm:text-sm font-medium text-gray-500">{stat.label}</p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">{stat.change}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats