import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaCheckCircle, FaGlobe, FaUsers, FaAward, FaBookOpen, FaBullseye, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import StatsCounter from '../components/StatsCounter';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLoading, setShowLoading] = useState(true);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Your Gateway to Global Education',
      subtitle: 'Expert guidance for your international education journey',
      highlight: 'New Beginnings'
    },
    {
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Study in USA',
      subtitle: 'Access to premier institutions ',
      highlight: 'Country Presence'
    },
    {
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Personalized Guidance',
      subtitle: 'Tailored support for your academic goals',
      highlight: 'Expert Counselors'
    },
    {
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Your Success is Our Priority',
      subtitle: 'Comprehensive support from application to arrival',
      highlight: 'Dedicated Service'
    }
  ];

  useEffect(() => {
    // Show loading screen on every page load for testing
    setShowLoading(true);
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const countries = [
    { name: 'United States', flag: '🇺🇸' },
    { name: 'India', flag: '🇮🇳' },
  ];

  const process = [
    {
      icon: FaBullseye,
      title: 'Initial Consultation',
      description: 'We understand your goals and create a personalized roadmap.',
    },
    {
      icon: FaBookOpen,
      title: 'University Selection',
      description: 'Expert guidance to choose the best universities in USA and India.',
    },
    {
      icon: FaCheckCircle,
      title: 'Application & Visa',
      description: 'Complete support through application submission and visa processing.',
    },
  ];

  const partners = [
    'Top Universities', 'Educational Institutions', 'Academic Partners', 
    'Research Universities', 'Technical Institutes'
  ];

  if (showLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Slideshow Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow Container */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/80"></div>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
        >
          <FaChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
        >
          <FaChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gold scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            {/* Highlight Badge */}
            <div className="inline-block bg-gold/90 text-navy px-6 py-2 rounded-full font-montserrat font-semibold text-sm md:text-base mb-6 animate-pulse">
              {slides[currentSlide].highlight}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 animate-slide-up leading-tight">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-8 max-w-4xl mx-auto font-opensans leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gold text-navy px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg">
                Start Your Journey
                <FaArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-white hover:text-navy transition-all duration-300 backdrop-blur-sm">
                Download Brochure
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-gold mb-1">USA</div>
                <div className="text-gray-200 font-opensans text-sm">Operations</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-gold mb-1">India</div>
                <div className="text-gray-200 font-opensans text-sm">Operations</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 col-span-2 md:col-span-1">
                <div className="text-2xl md:text-3xl font-bold text-gold mb-1">Expert</div>
                <div className="text-gray-200 font-opensans text-sm">Counseling Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mb-4">
              Why Choose Code Vista Global?
            </h2>
            <p className="text-gray-600 font-opensans text-lg max-w-3xl mx-auto">
              Your Dreams, Our Expertise - Experience the difference of personalized guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-teal bg-opacity-10 p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-teal group-hover:bg-opacity-20 transition-all duration-300">
                <FaUsers className="h-8 w-8 text-teal mx-auto mt-2" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-navy mb-3">Expert Counselors</h3>
              <p className="text-gray-600 font-opensans">
                Experienced counselors dedicated to your international education success
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gold bg-opacity-10 p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-gold group-hover:bg-opacity-20 transition-all duration-300">
                <FaAward className="h-8 w-8 text-yellow-600 mx-auto mt-2" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-navy mb-3">Proven Success</h3>
              <p className="text-gray-600 font-opensans">
                High success rate with admissions to top-ranked global universities
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-blue-200 transition-all duration-300">
                <FaGlobe className="h-8 w-8 text-blue-600 mx-auto mt-2" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-navy mb-3">Global Network</h3>
              <p className="text-gray-600 font-opensans">
                Connections with universities across 25+ countries worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mb-4">
              Your Journey in 3 Simple Steps
            </h2>
            <p className="text-gray-600 font-opensans text-lg">
              We make studying abroad simple, transparent, and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-teal bg-opacity-10 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-teal mx-auto" />
                  </div>
                  <div className="absolute -top-4 -left-4 bg-gold text-navy w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-navy mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-opensans">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <FaArrowRight className="h-6 w-6 text-teal" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Stats Counter */}
      <StatsCounter />

      {/* University Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mb-4">
              Our University Network
            </h2>
            <p className="text-gray-600 font-opensans text-lg">
              Building partnerships with world-renowned institutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-navy rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gold font-montserrat font-bold text-lg">
                    {partner.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <p className="font-opensans text-sm text-gray-700">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-200 font-opensans text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation with our experts and take the first step towards your international education
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-navy px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <FaClock className="mr-2 h-5 w-5" />
              Book Free Consultation
            </button>
            {/* <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-white hover:text-navy transition-all duration-300">
              Take Country Quiz
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;