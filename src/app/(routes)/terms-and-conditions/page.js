'use client';

import React, { useState, useEffect } from 'react';
import { 
  ScrollText, 
  Shield, 
  CreditCard, 
  Car, 
  Users, 
  Clock, 
  FileText, 
  Scale, 
  Phone, 
  Mail, 
  Globe,
  ChevronDown,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Calendar,
  MapPin,
  Star,
  Download,
  Print,
  HelpCircle
} from 'lucide-react';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('booking');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const termsData = [
    {
      id: 'booking',
      icon: Calendar,
      title: 'Booking Confirmation',
      shortTitle: 'Booking',
      gradient: 'from-blue-500 to-blue-600',
      content: [
        'All bookings must be made in advance via our website, phone, WhatsApp, or email.',
        'Bookings are subject to vehicle availability and will be confirmed only after receiving a confirmation message or email from Triveni Cabs.',
        'Triveni Cabs reserves the right to cancel any booking if the customer provides false or incomplete information.'
      ],
      highlights: ['Advance booking required', 'Confirmation via message/email', 'Subject to availability']
    },
    {
      id: 'pricing',
      icon: CreditCard,
      title: 'Pricing and Payments',
      shortTitle: 'Payments',
      gradient: 'from-green-500 to-green-600',
      content: [
        'All prices are quoted based on the selected vehicle type, distance, route, and service type (one-way, round-trip, or hourly).',
        'Toll tax, parking charges, inter-state taxes, and additional waiting time charges are not included unless specifically mentioned.',
        'A partial or full advance payment may be required to confirm the booking.',
        'Payments must be made via approved modes (UPI, Bank Transfer, Card, Cash, etc.).'
      ],
      highlights: ['Dynamic pricing model', 'Additional charges apply', 'Multiple payment options']
    },
    {
      id: 'vehicle',
      icon: Car,
      title: 'Vehicle & Driver Responsibilities',
      shortTitle: 'Vehicle & Driver',
      gradient: 'from-purple-500 to-purple-600',
      content: [
        'Triveni Cabs ensures that all vehicles are clean, well-maintained, and driven by licensed, professional drivers.',
        'Passengers are requested to cooperate with drivers and not engage in any unlawful or unsafe activities during the ride.',
        'Any damage to the vehicle caused by the passenger will be chargeable.'
      ],
      highlights: ['Licensed professional drivers', 'Well-maintained vehicles', 'Damage charges apply']
    },
    {
      id: 'customer',
      icon: Users,
      title: 'Customer Responsibilities',
      shortTitle: 'Customer',
      gradient: 'from-orange-500 to-orange-600',
      content: [
        'The customer must provide accurate pickup and drop details and be available at the scheduled time.',
        'Consumption of alcohol, drugs, or any illegal activity during the ride is strictly prohibited.',
        'Customers must not misbehave with the driver or support staff.'
      ],
      highlights: ['Accurate pickup details required', 'No illegal activities', 'Respectful behavior expected']
    },
    {
      id: 'delays',
      icon: Clock,
      title: 'Delays and Liability',
      shortTitle: 'Liability',
      gradient: 'from-red-500 to-red-600',
      content: [
        'Triveni Cabs will make every effort to reach the pickup location on time but shall not be held responsible for delays due to traffic, weather, vehicle breakdowns, or any unforeseen events.',
        'We are not liable for any loss of personal belongings during the journey.'
      ],
      highlights: ['Best effort for punctuality', 'Not liable for external delays', 'Personal belongings at own risk']
    },
    {
      id: 'modifications',
      icon: FileText,
      title: 'Modifications and Cancellation',
      shortTitle: 'Modifications',
      gradient: 'from-indigo-500 to-indigo-600',
      content: [
        'Any modifications to the booking (timing, route, vehicle type) must be communicated at least 24 hours in advance and are subject to availability.',
        'For cancellation and refund terms, please refer to our Cancellation & Refund Policy.'
      ],
      highlights: ['24-hour advance notice', 'Subject to availability', 'Separate refund policy']
    },
    {
      id: 'jurisdiction',
      icon: Scale,
      title: 'Jurisdiction',
      shortTitle: 'Legal',
      gradient: 'from-teal-500 to-teal-600',
      content: [
        'All disputes are subject to the jurisdiction of courts located in Ghaziabad, Uttar Pradesh, or the companys registered address.'
      ],
      highlights: ['Ghaziabad, UP jurisdiction', 'Legal compliance required']
    }
  ];

  const faqs = [
    {
      question: "How far in advance should I book a taxi?",
      answer: "We recommend booking at least 2-4 hours in advance for local trips and 24 hours for outstation journeys to ensure vehicle availability.",
      icon: Calendar
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, bank transfers, credit/debit cards, and cash payments. Online payments are preferred for advance bookings.",
      icon: CreditCard
    },
    {
      question: "Can I modify my booking after confirmation?",
      answer: "Yes, modifications can be made up to 24 hours before your scheduled pickup time, subject to vehicle availability.",
      icon: FileText
    },
    {
      question: "What if my driver is late?",
      answer: "While we strive for punctuality, delays may occur due to traffic or unforeseen circumstances. We'll keep you informed and adjust your schedule accordingly.",
      icon: Clock
    },
    {
      question: "Are there any hidden charges?",
      answer: "No hidden charges. All additional costs like tolls, parking, and interstate taxes are clearly communicated upfront or itemized in your final bill.",
      icon: Shield
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#FACF2D] to-yellow-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-black via-gray-900 to-black py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FACF2D]/10 to-yellow-500/10"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#FACF2D]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#FACF2D] to-yellow-500 rounded-2xl mb-8 shadow-2xl transform rotate-12">
            <ScrollText className="w-12 h-12 text-black transform -rotate-12" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Terms & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] to-yellow-400"> Conditions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Please read our terms and conditions carefully before using Triveni Cabs services.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
              <AlertCircle className="w-5 h-5 mr-2 text-[#FACF2D]" />
              Last Updated: July 2025
            </div>
          </div>


        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#FACF2D] to-yellow-400 p-6 text-black">
                  <h3 className="text-xl font-bold flex items-center">
                    <FileText className="w-6 h-6 mr-2" />
                    Quick Navigation
                  </h3>
                </div>
                <div className="p-2">
                  {termsData.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center space-x-3 group ${
                        activeSection === section.id 
                          ? 'bg-gradient-to-r from-[#FACF2D]/20 to-yellow-400/20 text-black shadow-sm' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${activeSection === section.id ? 'bg-[#FACF2D] text-black' : 'bg-gray-100 text-gray-500'} transition-all duration-300`}>
                        <section.icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-sm">{section.shortTitle}</span>
                      <ChevronRight className={`w-4 h-4 ml-auto transition-transform duration-300 ${activeSection === section.id ? 'rotate-90' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-[#FACF2D]" />
                  Key Highlights
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>24-hour advance booking</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Multiple payment options</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Licensed professional drivers</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Clean maintained vehicles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="lg:col-span-3 space-y-12">
            {termsData.map((section, index) => (
              <div 
                key={section.id}
                id={section.id}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  {/* Section Header */}
                  <div className={`bg-gradient-to-r ${section.gradient} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 transform translate-x-20 -translate-y-20"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 transform -translate-x-16 translate-y-16"></div>
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                          <section.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-1 opacity-90">Section {index + 1}</div>
                          <h2 className="text-3xl font-bold">{section.title}</h2>
                        </div>
                      </div>
                      <div className="hidden md:flex flex-col items-end space-y-1">
                        {section.highlights.slice(0, 2).map((highlight, i) => (
                          <div key={i} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="p-8">
                    <ul className="space-y-6">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-4 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <span className="text-gray-700 leading-relaxed text-lg group-hover/item:text-gray-900 transition-colors duration-200">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlights for mobile */}
                    <div className="md:hidden mt-8 pt-6 border-t border-gray-100">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3">Key Points:</h4>
                      <div className="flex flex-wrap gap-2">
                        {section.highlights.map((highlight, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-[#FACF2D] via-yellow-400 to-yellow-500 rounded-3xl p-8 md:p-12 text-black relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-black/5 transform -translate-x-24 translate-y-24"></div>
              
              <div className="relative">
                <h2 className="text-4xl font-bold mb-6 flex items-center">
                  <Phone className="w-10 h-10 mr-4" />
                  Get in Touch
                </h2>
                <p className="text-xl mb-8 max-w-2xl">
                  Have questions about our terms? Need to modify or cancel your booking? Our support team is here to help.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
                    <Phone className="w-8 h-8 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Phone Support</h3>
                    <p className="text-lg font-bold">+91-7668570551</p>
                    <p className="text-sm opacity-80">24/7 Available</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
                    <Mail className="w-8 h-8 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Email Support</h3>
                    <p className="text-lg font-bold">cabstriveni@gmail.com</p>
                    <p className="text-sm opacity-80">Quick Response</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
                    <Globe className="w-8 h-8 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Website</h3>
                    <p className="text-lg font-bold">trivenicabs.in</p>
                    <p className="text-sm opacity-80">Online Booking</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-black to-gray-800 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#FACF2D]/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-xl"></div>
              
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Ride?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Now that you understand our terms, start your journey with Triveni Cabs. Professional, safe, and reliable transportation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => {
                      const phoneNumber = "7668570551";
                      const message = encodeURIComponent("Hi! I want to book a taxi with Triveni Cabs. Can you help me with the booking?");
                      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
                      window.open(whatsappURL, '_blank');
                    }}
                    className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 shadow-2xl hover:shadow-[#25D366]/25 transform hover:scale-105 hover:-translate-y-1"
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#128C7E] to-[#25D366] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    
                    {/* WhatsApp icon with animation */}
                    <div className="relative mr-3 transform group-hover:rotate-12 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                      </svg>
                    </div>
                    
                    <span className="relative font-bold">Book Now on WhatsApp</span>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                  
                  <button 
                    onClick={() => {
                      window.open('tel:+917668570551', '_self');
                    }}
                    className="group inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Call +91-7668570551
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;