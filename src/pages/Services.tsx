import React from 'react';
import { FaBookOpen, FaFileAlt, FaPlane, FaAward, FaUsers, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: FaBookOpen,
      title: 'University Selection',
      description: 'Expert guidance to choose the best universities that align with your academic goals, career aspirations, and budget.',
      features: [
        'Personalized university matching',
        'Course selection guidance',
        'Ranking & reputation analysis',
        'Location & lifestyle consultation',
        'Scholarship opportunities identification'
      ],
      color: 'text-teal',
    },
    {
      icon: FaFileAlt,
      title: 'Application Processing',
      description: 'Complete support for university applications, including document preparation and submission management.',
      features: [
        'Application form completion',
        'SOP & essay writing assistance',
        'Document compilation & verification',
        'Application tracking & follow-up',
        'Interview preparation'
      ],
      color: 'text-blue-600',
    },
    {
      icon: FaPlane,
      title: 'Visa Guidance',
      description: 'Comprehensive visa support with 95% success rate, covering all aspects of the visa application process.',
      features: [
        'Visa category assessment',
        'Document checklist & preparation',
        'Application form assistance',
        'Interview coaching',
        'Post-approval guidance'
      ],
      color: 'text-green-600',
    },
    {
      icon: FaAward,
      title: 'Scholarship Assistance',
      description: 'Identify and apply for scholarships, grants, and financial aid opportunities to reduce your education costs.',
      features: [
        'Scholarship database access',
        'Eligibility assessment',
        'Application strategy',
        'Essay & portfolio guidance',
        'Financial planning'
      ],
      color: 'text-yellow-600',
    },
    {
      icon: FaUsers,
      title: 'Test Preparation',
      description: 'Comprehensive coaching for IELTS, TOEFL, GRE, GMAT, and other standardized tests required for admissions.',
      features: [
        'Diagnostic assessment',
        'Personalized study plans',
        'Expert instructors',
        'Practice tests & materials',
        'Score improvement guarantee'
      ],
      color: 'text-purple-600',
    },
    {
      icon: FaClock,
      title: 'Pre-Departure Briefing',
      description: 'Essential preparation for your journey abroad, covering cultural adaptation, academic expectations, and practical tips.',
      features: [
        'Cultural orientation sessions',
        'Academic system briefing',
        'Accommodation guidance',
        'Banking & financial setup',
        'Emergency contacts & support'
      ],
      color: 'text-indigo-600',
    },
  ];

  const comparison = [
    {
      aspect: 'University Selection',
      withUs: 'Personalized, expert-matched choices',
      withoutUs: 'Uncertain, potentially mismatched choices',
    },
    {
      aspect: 'Application Success',
      withUs: 'Strong, well-prepared applications',
      withoutUs: 'Uncoordinated, less effective applications',
    },
    {
      aspect: 'Visa Approval',
      withUs: 'Step-by-step support and preparation',
      withoutUs: 'Navigating complex processes alone',
    },
    {
      aspect: 'Scholarship Access',
      withUs: 'Guidance to discover more opportunities',
      withoutUs: 'Limited awareness of options',
    },
    {
      aspect: 'Time Investment',
      withUs: 'Streamlined, clear process',
      withoutUs: 'Confusing, time-consuming process',
    },
    {
      aspect: 'Support',
      withUs: 'Ongoing, end-to-end assistance',
      withoutUs: 'Self-research, trial and error',
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Discovery Call',
      description: 'Free consultation to understand your goals and preferences',
      duration: '30 minutes',
    },
    {
      step: 2,
      title: 'Profile Assessment',
      description: 'Comprehensive evaluation of your academic and professional background',
      duration: '1-2 days',
    },
    {
      step: 3,
      title: 'University Shortlisting',
      description: 'Create a personalized list of universities that match your profile',
      duration: '3-5 days',
    },
    {
      step: 4,
      title: 'Application Preparation',
      description: 'Complete assistance with applications, essays, and documentation',
      duration: '2-4 weeks',
    },
    {
      step: 5,
      title: 'Submission & Tracking',
      description: 'Submit applications and track progress with regular updates',
      duration: '4-8 weeks',
    },
    {
      step: 6,
      title: 'Visa & Departure',
      description: 'Visa guidance and pre-departure support for smooth transition',
      duration: '6-12 weeks',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Comprehensive Study Abroad Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-opensans leading-relaxed">
            From university selection to visa approval, we provide end-to-end support 
            for your international education journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mb-4">
              Our Expert Services
            </h2>
            <p className="text-gray-600 font-opensans text-lg">
              Complete support at every step of your study abroad journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mb-4">
              Our Proven Process
            </h2>
            <p className="text-gray-600 font-opensans text-lg">
              A structured approach that ensures success at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-teal text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                      {process.step}
                    </div>
                    <div className="text-sm text-gray-500">{process.duration}</div>
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-navy mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 font-opensans">
                    {process.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <FaArrowRight className="h-6 w-6 text-teal" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mb-4">
              Why Choose Professional Guidance?
            </h2>
            <p className="text-gray-600 font-opensans text-lg">
              See how expert support can transform your study abroad journey
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-navy text-white">
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-lg">Aspect</h3>
              </div>
              <div className="p-6 bg-teal">
                <h3 className="font-montserrat font-semibold text-lg">With Code Vista Global</h3>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-lg">Without Guidance</h3>
              </div>
            </div>
            
            {comparison.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="p-6 font-opensans font-medium text-navy">
                  {item.aspect}
                </div>
                <div className="p-6 font-opensans text-green-700 bg-green-50">
                  <FaCheckCircle className="inline h-5 w-5 mr-2" />
                  {item.withUs}
                </div>
                <div className="p-6 font-opensans text-gray-600">
                  {item.withoutUs}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-gray-200 font-opensans text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation and discover how our expert services can make your study abroad dreams a reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-gold text-navy px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <FaUsers className="mr-2 h-5 w-5" />
                Book Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;