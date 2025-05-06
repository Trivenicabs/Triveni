'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      setError('Please fill out all required fields');
      setLoading(false);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }
    
    // Simulate form submission - replace with actual implementation later
    setTimeout(() => {
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setSuccess(true);
      setLoading(false);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1000);
  };
  
  return (
    <>
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-50 text-green-600 text-sm rounded-lg">
          Thank you for your message! We'll get back to you shortly.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              className="block text-sm text-start text-gray-700 font-medium mb-1"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-200"
              placeholder="John"
            />
          </div>
          <div>
            <label
              className="block text-sm text-gray-700 text-start font-medium mb-1"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-200"
              placeholder="Doe"
            />
          </div>
        </div>
        <div>
          <label
            className="block text-sm text-gray-700 text-start font-medium mb-1"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-200"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label
            className="block text-sm text-gray-700 text-start font-medium mb-1"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-200"
            placeholder="How can we help?"
          />
        </div>
        <div>
          <label
            className="block text-sm text-gray-700 text-start font-medium mb-1"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-200"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2 group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span>{loading ? 'Sending...' : 'Send Message'}</span>
          <Send className="w-5 h-5 transform group-hover:translate-x-1 transition duration-300" />
        </button>
      </form>
    </>
  );
}