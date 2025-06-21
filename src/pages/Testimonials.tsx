import React from 'react';
import { FaStar } from 'react-icons/fa';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  // Early, simple testimonials
  const testimonials = [
    {
      name: 'Arjun Patel',
      university: 'University Applicant',
      country: 'India',
      course: 'MS Computer Science',
      rating: 5,
      testimonial: 'The team at Code Vista Global was supportive and made the process clear. I felt confident every step of the way.',
    },
    {
      name: 'Priya Sharma',
      university: 'Business School Applicant',
      country: 'India',
      course: 'MBA',
      rating: 5,
      testimonial: 'I appreciated the honest advice and personal attention. The guidance helped me focus my applications.',
    },
    {
      name: 'Rahul Kumar',
      university: 'Engineering Program',
      country: 'India',
      course: 'Engineering',
      rating: 5,
      testimonial: 'Code Vista Global answered all my questions and made the process less stressful. Thank you for your support!',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Early Student Impressions
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-opensans leading-relaxed">
            Hear from students who have started their journey with Code Vista Global.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;