'use client';

import React, { useState } from 'react';
import { 
  RotateCcw, 
  Calendar, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  RefreshCw,
  Phone, 
  Mail, 
  CreditCard,
  UserX,
  ArrowRight,
  ShieldCheck,
  Timer,
  DollarSign,
  MapPin,
  Zap
} from 'lucide-react';

const CancellationRefundPolicy = () => {
  const [activeTab, setActiveTab] = useState('customer');

  const cancellationTiers = [
    {
      timeframe: '7+ Days Before',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      refund: '100%',
      status: 'Full Refund',
      description: 'Cancel worry-free with complete refund',
      emoji: '✅'
    },
    {
      timeframe: '3-6 Days Before',
      icon: RefreshCw,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-700',
      refund: '50%',
      status: 'Partial Refund',
      description: 'Half of your advance amount returned',
      emoji: '🔁'
    },
    {
      timeframe: 'Within 72 Hours',
      icon: XCircle,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-700',
      refund: '0%',
      status: 'No Refund',
      description: 'No refund available for last-minute cancellations',
      emoji: '❌'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Contact Us',
      description: 'Call or WhatsApp us with your booking details',
      icon: Phone,
      color: 'bg-blue-500'
    },
    {
      step: 2,
      title: 'Verification',
      description: 'We verify your booking and cancellation eligibility',
      icon: ShieldCheck,
      color: 'bg-purple-500'
    },
    {
      step: 3,
      title: 'Processing',
      description: 'Refund processed within 5-7 working days',
      icon: Timer,
      color: 'bg-green-500'
    },
    {
      step: 4,
      title: 'Completion',
      description: 'Amount credited to your original payment method',
      icon: CreditCard,
      color: 'bg-[#FACF2D]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl mb-8 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
            <RotateCcw className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Cancellation &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Refund Policy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Fair, transparent, and customer-friendly cancellation terms designed for your peace of mind
          </p>
          
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
            <Calendar className="w-5 h-5 mr-2 text-blue-300" />
            Flexible booking modifications available
          </div>
        </div>
      </div>

      {/* Quick Overview Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {cancellationTiers.map((tier, index) => (
            <div 
              key={index}
              className={`${tier.bgColor} ${tier.borderColor} border-2 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group`}
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${tier.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className={`text-2xl font-bold ${tier.textColor} mb-2`}>
                  {tier.timeframe}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-black text-gray-800">{tier.refund}</span>
                  <span className={`text-lg font-semibold ${tier.textColor} ml-2`}>REFUND</span>
                </div>
                
                <div className={`${tier.textColor} bg-white/70 rounded-full px-4 py-2 font-semibold mb-3`}>
                  {tier.emoji} {tier.status}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Policy Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-lg p-2 border border-gray-100">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTab('customer')}
                  className={`flex-1 flex items-center justify-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'customer' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <UserX className="w-5 h-5 mr-2" />
                  Customer Cancellation
                </button>
                <button
                  onClick={() => setActiveTab('company')}
                  className={`flex-1 flex items-center justify-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'company' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <ShieldCheck className="w-5 h-5 mr-2" />
                  Company Cancellation
                </button>
              </div>
            </div>

            {/* Customer Cancellation Content */}
            {activeTab === 'customer' && (
              <div className="space-y-6">
                <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                  <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                    <Calendar className="w-8 h-8 mr-3 text-blue-500" />
                    Customer Cancellation Policy
                  </h2>
                  
                  <div className="space-y-6">
                    {cancellationTiers.map((tier, index) => (
                      <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className={`p-3 bg-gradient-to-br ${tier.color} rounded-xl`}>
                              <tier.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">{tier.timeframe}</h3>
                              <p className="text-gray-600">From your journey date</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-black text-gray-800">{tier.refund}</div>
                            <div className="text-sm text-gray-500">Refund</div>
                          </div>
                        </div>
                        <p className="text-gray-700 bg-gray-50 rounded-lg p-4">{tier.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* No Show Policy */}
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20"></div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <MapPin className="w-7 h-7 mr-3" />
                      No Show Policy
                    </h3>
                    <p className="text-lg leading-relaxed">
                      If you fail to show up at the pickup location at the scheduled time without prior notice, 
                      the booking will be considered a No Show and <strong>no refund will be issued</strong>.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Company Cancellation Content */}
            {activeTab === 'company' && (
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                  <ShieldCheck className="w-8 h-8 mr-3 text-green-500" />
                  Cancellation by Triveni Cabs
                </h2>
                
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
                  <p className="text-lg text-green-800 leading-relaxed mb-4">
                    In the rare event that Triveni Cabs cancels a confirmed booking due to unavoidable circumstances 
                    (natural calamity, breakdown, driver emergency), we will:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-500 p-3 rounded-xl mr-4">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-800">Full Refund</h3>
                    </div>
                    <p className="text-blue-700">
                      Complete refund of all paid amounts within 5-7 working days
                    </p>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-500 p-3 rounded-xl mr-4">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-purple-800">Alternative Options</h3>
                    </div>
                    <p className="text-purple-700">
                      Alternate vehicle or rescheduled date as per your preference
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Refund Process Timeline */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                <Zap className="w-8 h-8 mr-3 text-yellow-500" />
                Refund Process Timeline
              </h2>
              
              <div className="relative">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-center mb-8 last:mb-0">
                    <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-6 shadow-lg`}>
                      {step.step}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                        <step.icon className="w-5 h-5 mr-2" />
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-gray-400 ml-6" />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-8">
                <p className="text-blue-800 font-semibold text-center">
                  ⏱️ All eligible refunds processed within 5-7 working days to original payment method
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 sticky top-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <Phone className="w-6 h-6 mr-2 text-[#FACF2D]" />
                Need to Cancel?
              </h3>
              
              <p className="text-gray-600 mb-6">
                Contact us immediately for quick assistance with your cancellation
              </p>
              
              <div className="space-y-4">
                <button 
                  onClick={() => {
                    const phoneNumber = "7668570551";
                    const message = encodeURIComponent("Hi! I need to cancel my booking. Can you help me with the cancellation process?");
                    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
                    window.open(whatsappURL, '_blank');
                  }}
                  className="w-full group relative inline-flex items-center justify-center bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-6 py-4 rounded-2xl font-bold overflow-hidden transition-all duration-300 shadow-lg hover:shadow-[#25D366]/25 transform hover:scale-105"
                >
                  <div className="relative mr-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                    </svg>
                  </div>
                  <span className="relative">WhatsApp Cancel Request</span>
                </button>
                
                <button 
                  onClick={() => window.open('tel:+917668570551', '_self')}
                  className="w-full flex items-center justify-center bg-gray-800 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-gray-700 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91-7668570551
                </button>
                
                <button 
                  onClick={() => window.open('mailto:cabstriveni@gmail.com?subject=Cancellation Request', '_blank')}
                  className="w-full flex items-center justify-center bg-blue-600 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Request
                </button>
              </div>
            </div>

            {/* Key Points */}
            <div className="bg-gradient-to-br from-[#FACF2D] to-yellow-400 rounded-3xl p-8 text-black">
              <h3 className="text-2xl font-bold mb-6">Key Points</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-700" />
                  <span className="font-medium">7+ days = Full refund</span>
                </li>
                <li className="flex items-center space-x-3">
                  <RefreshCw className="w-5 h-5 text-orange-700" />
                  <span className="font-medium">3-6 days = 50% refund</span>
                </li>
                <li className="flex items-center space-x-3">
                  <XCircle className="w-5 h-5 text-red-700" />
                  <span className="font-medium">Under 72 hours = No refund</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-700" />
                  <span className="font-medium">5-7 days processing time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;