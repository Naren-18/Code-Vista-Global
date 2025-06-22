import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaComments, FaCalendarAlt, FaDownload, FaQuestionCircle } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const offices = [
    {
      city: 'Irving, Texas',
      country: 'USA',
      address: '828 Kinwest Pkwy, Irving, Texas 75063',
      phone: '+1-571-249-2658',
      email: 'info@codevistaglobal.com',
      hours: 'Mon-Fri: 9 AM - 6 PM CST',
      isHeadquarters: true,
    },
    
    {
      city: 'India Operations',
      country: 'India',
      address: 'Multiple locations across India',
      phone: '+91 7731867424',
      email: 'info@codevistaglobal.com',
      hours: 'Mon-Sat: 9 AM - 7 PM IST',
      isHeadquarters: false,
    },
  ];

  const faqs = [
    {
      question: 'What documents do I need for university applications?',
      answer: 'Typically, you\'ll need academic transcripts, standardized test scores (IELTS/TOEFL, GRE/GMAT), letters of recommendation, statement of purpose, and passport. We provide a complete checklist based on your chosen universities.',
    },
    {
      question: 'How long does the entire process take?',
      answer: 'The complete process from consultation to visa approval typically takes 6-12 months, depending on the country and intake season. We recommend starting at least 12 months before your intended start date.',
    },
    {
      question: 'Do you guarantee visa approval?',
      answer: 'While no one can guarantee 100% visa approval, we have a 95% success rate due to our thorough preparation and guidance. We ensure your application meets all requirements and prepare you well for interviews.',
    },
    {
      question: 'What are your service fees?',
      answer: 'Our fees vary based on the services you choose and your destination country. We offer comprehensive packages and individual services. Contact us for a personalized quote based on your requirements.',
    },
    {
      question: 'Can you help with scholarships?',
      answer: 'Yes! We have access to a database of 500+ scholarships and grants. Our team helps identify opportunities you\'re eligible for and assists with scholarship applications to maximize your funding chances.',
    },
  ];

  const quickActions = [
    {
      icon: FaCalendarAlt,
      title: 'Book Consultation',
      description: 'Schedule a free 30-minute session',
      action: 'Book Now',
      color: 'bg-teal',
    },
    {
      icon: FaDownload,
      title: 'Download Brochure',
      description: 'Get our complete service guide',
      action: 'Download',
      color: 'bg-blue-600',
    },
    {
      icon: FaComments,
      title: 'Live Chat',
      description: 'Chat with our experts now',
      action: 'Start Chat',
      color: 'bg-green-600',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Get in Touch with Our Experts
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-opensans leading-relaxed">
            Ready to start your study abroad journey? We're here to guide you every step of the way from our offices in the USA, UK, Australia, Canada, Germany, India, and more.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">
              Quick Actions
            </h2>
            <p className="text-gray-600 font-opensans text-lg">
              Choose how you'd like to connect with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <div key={index} className="text-center group">
                <div className={`${action.color} p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="h-8 w-8 text-white mx-auto mt-2" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-navy mb-2">
                  {action.title}
                </h3>
                <p className="text-gray-600 font-opensans mb-4">
                  {action.description}
                </p>
                <button className={`${action.color} text-white px-6 py-2 rounded-lg font-opensans font-medium hover:opacity-90 transition-opacity duration-300`}>
                  {action.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-navy mb-6">
                  Our Office Locations
                </h3>
                
                {offices.map((office, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start">
                      <div className="bg-teal bg-opacity-10 p-3 rounded-lg mr-4 mt-1">
                        <FaMapMarkerAlt className="h-6 w-6 text-teal" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h4 className="font-montserrat font-semibold text-lg text-navy mr-2">
                            {office.city}
                          </h4>
                          {office.isHeadquarters && (
                            <span className="bg-gold text-navy px-2 py-1 rounded-full text-xs font-semibold">
                              Headquarters
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 font-opensans mb-3">{office.address}</p>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-gray-600">
                            <FaPhone className="h-4 w-4 mr-2 text-teal" />
                            <a href={`tel:${office.phone}`} className="hover:text-teal transition-colors">
                              {office.phone}
                            </a>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <FaEnvelope className="h-4 w-4 mr-2 text-teal" />
                            <a href={`mailto:${office.email}`} className="hover:text-teal transition-colors">
                              {office.email}
                            </a>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <FaClock className="h-4 w-4 mr-2 text-teal" />
                            <span>{office.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Support */}
              <div className="bg-gradient-to-r from-teal to-navy rounded-xl p-6 text-white">
                <h4 className="font-montserrat font-semibold text-lg mb-3">
                  Need Immediate Help?
                </h4>
                <p className="font-opensans mb-4 opacity-90">
                  Our support team is available to answer your questions right now.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm">Connect with us now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">
              Our Office in USA
            </h2>
            <p className="text-gray-600 font-opensans text-lg">
              Located in USA with operations across India
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center" style={{ height: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.234567890123!2d-96.95844468481312!3d32.9199380809246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2b7e8b8b8b8b%3A0x1234567890abcdef!2s828%20Kinwest%20Pkwy%2C%20Irving%2C%20TX%2075063%2C%20USA!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '16px', minWidth: '300px', maxWidth: '100%' }}
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Code Vista Global Map"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 font-opensans text-lg">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex items-start">
                  <div className="bg-teal bg-opacity-10 p-2 rounded-lg mr-4 mt-1">
                    <FaQuestionCircle className="h-5 w-5 text-teal" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-semibold text-navy mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 font-opensans leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      
      
    </div>
  );
};

export default Contact;