import React from 'react';
import { FaUsers, FaAward, FaGraduationCap, FaGlobe } from 'react-icons/fa';

const StatsCounter = () => {
  const stats = [
    {
      icon: FaUsers,
      count: 'Growing',
      suffix: '',
      label: 'Student Community',
      color: 'text-teal',
    },
    {
      icon: FaGraduationCap,
      count: 'Expanding',
      suffix: '',
      label: 'University Network',
      color: 'text-gold',
    },
    {
      icon: FaGlobe,
      count: '25+',
      suffix: ' Countries',
      label: 'Global Operations',
      color: 'text-blue-500',
    },
    {
      icon: FaAward,
      count: 'Dedicated',
      suffix: '',
      label: 'Expert Support',
      color: 'text-green-500',
    },
  ];

  return (
    <div className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
            Our Commitment
          </h2>
          <p className="text-gray-300 font-opensans max-w-2xl mx-auto">
            A new beginning with a strong foundation in 25+ countries worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-2">
                {stat.count}{stat.suffix}
              </div>
              <div className="text-gray-300 font-opensans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;