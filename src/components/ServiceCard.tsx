import React from 'react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  color?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  color = 'text-teal' 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-2">
      <div className="flex items-center mb-4">
        <div className="bg-gray-100 group-hover:bg-teal group-hover:bg-opacity-10 p-3 rounded-lg transition-all duration-300">
          <Icon className={`h-8 w-8 ${color} group-hover:scale-110 transition-transform duration-300`} />
        </div>
      </div>
      
      <h3 className="text-xl font-montserrat font-semibold text-navy mb-3 group-hover:text-teal transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 font-opensans mb-4 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm font-opensans text-gray-700">
            <div className="w-2 h-2 bg-teal rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="text-teal font-opensans font-medium hover:text-navy transition-colors duration-200 flex items-center group">
          Learn More
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;