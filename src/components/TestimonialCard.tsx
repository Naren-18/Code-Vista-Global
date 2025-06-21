import React from 'react';
import { FaStar, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';

interface TestimonialCardProps {
  name: string;
  university: string;
  country: string;
  course: string;
  rating: number;
  testimonial: string;
  image?: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  university,
  country,
  course,
  rating,
  testimonial,
  image,
  beforeAfter,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full">
      <div className="flex items-center mb-4">
        <div className="flex-1">
          <h4 className="font-montserrat font-semibold text-navy text-lg">{name}</h4>
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <FaGraduationCap className="h-4 w-4 mr-1" />
            <span>{course}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FaMapMarkerAlt className="h-4 w-4 mr-1" />
            <span>{university}, {country}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-gold fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
      </div>

      <blockquote className="text-gray-700 font-opensans leading-relaxed mb-4 italic">
        "{testimonial}"
      </blockquote>

      {beforeAfter && (
        <div className="bg-gray-50 rounded-lg p-4 mt-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-red-600">Before:</span>
              <p className="text-gray-600 mt-1">{beforeAfter.before}</p>
            </div>
            <div>
              <span className="font-medium text-green-600">After:</span>
              <p className="text-gray-600 mt-1">{beforeAfter.after}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-sm text-teal font-medium">Success Story</span>
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Verified Graduate
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;