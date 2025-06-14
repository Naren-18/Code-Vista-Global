import React from 'react';
import { FaAward, FaUsers, FaGlobe, FaCheckCircle, FaBullseye } from 'react-icons/fa';

const About = () => {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      expertise: 'International Education Strategy',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Senior Counselor',
      expertise: 'US & Canada Programs',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      name: 'Priya Sharma',
      role: 'India Operations Head',
      expertise: 'Student Counseling',
      experience: '10+ years',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      name: 'David Wilson',
      role: 'Visa Specialist',
      expertise: 'Immigration & Visa Processing',
      experience: '8+ years',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
  ];

  const values = [
    {
      icon: FaBullseye,
      title: 'Excellence',
      description: 'We are committed to delivering the highest standards in every aspect of our work.',
    },
    {
      icon: FaUsers,
      title: 'Trust',
      description: 'We build relationships through transparency, integrity, and reliability.',
    },
    {
      icon: FaGlobe,
      title: 'Global Vision',
      description: 'We connect students to opportunities across borders and cultures.',
    },
    {
      icon: FaAward,
      title: 'Student Success',
      description: 'Our success is measured by the achievements and satisfaction of our students.',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Shaping Global Futures
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-opensans leading-relaxed">
            At Code Vista Global, we are passionate about guiding students toward international academic opportunities. Our team is dedicated to providing expert support and personalized counseling for every step of your journey.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-montserrat font-semibold text-teal mb-3">Mission</h3>
                  <p className="text-gray-600 font-opensans leading-relaxed">
                    To empower students with the knowledge, resources, and confidence to pursue their academic dreams internationally, through honest guidance and comprehensive support.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-semibold text-teal mb-3">Vision</h3>
                  <p className="text-gray-600 font-opensans leading-relaxed">
                    To become a trusted partner for students seeking global education, recognized for our innovative approach, ethical practices, and commitment to student success.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Students collaborating"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-lg">
                <div className="text-2xl font-bold text-navy">Forward</div>
                <div className="text-sm text-navy">Looking Ahead</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-300 font-opensans text-lg">
              The principles that guide our journey and shape our future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white bg-opacity-10 p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                  <value.icon className="h-8 w-8 text-gold mx-auto mt-2" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 font-opensans leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Excellence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-600 font-opensans text-lg">
              We are dedicated to continuous improvement, ethical practices, and delivering exceptional value to every student we serve.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gray-50 p-8 rounded-lg mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                <FaAward className="h-12 w-12 text-teal mx-auto" />
              </div>
              <h4 className="font-montserrat font-semibold text-navy">Quality</h4>
              <p className="text-sm text-gray-600 font-opensans">Raising standards in education consulting</p>
            </div>
            <div className="text-center group">
              <div className="bg-gray-50 p-8 rounded-lg mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                <FaCheckCircle className="h-12 w-12 text-green-500 mx-auto" />
              </div>
              <h4 className="font-montserrat font-semibold text-navy">Integrity</h4>
              <p className="text-sm text-gray-600 font-opensans">Honest, transparent, and ethical guidance</p>
            </div>
            <div className="text-center group">
              <div className="bg-gray-50 p-8 rounded-lg mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                <FaGlobe className="h-12 w-12 text-blue-500 mx-auto" />
              </div>
              <h4 className="font-montserrat font-semibold text-navy">Global Reach</h4>
              <p className="text-sm text-gray-600 font-opensans">Connecting students to worldwide opportunities</p>
            </div>
            <div className="text-center group">
              <div className="bg-gray-50 p-8 rounded-lg mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                <FaUsers className="h-12 w-12 text-purple-500 mx-auto" />
              </div>
              <h4 className="font-montserrat font-semibold text-navy">Student Focus</h4>
              <p className="text-sm text-gray-600 font-opensans">Personalized support for every journey</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;