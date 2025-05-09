import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    budget: '',
    service: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          budget: '',
          service: '',
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-700 transition-colors">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Let's work together to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
                Contact Information
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 transition-colors rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                      Our Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Azim Villa<br />
                      Chittagong<br />
                      Bangladesh
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 transition-colors rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                      Phone Number
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="tel: 0123456789" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        0123456789
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 transition-colors rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                      Email Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="mailto:hello@nexusstudio.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        xyz@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-700 transition-colors p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We've received your inquiry and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${
                          errors.name 
                            ? 'border-red-500 dark:border-red-400' 
                            : 'border-gray-300 dark:border-gray-500'
                        } bg-white dark:bg-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                      )}
                    </div>
                    
                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors mb-1">
                        Your Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${
                          errors.email 
                            ? 'border-red-500 dark:border-red-400' 
                            : 'border-gray-300 dark:border-gray-500'
                        } bg-white dark:bg-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="0123456789"
                      />
                    </div>
                    
                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors">
                        Subject*
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${
                          errors.subject 
                            ? 'border-red-500 dark:border-red-400' 
                            : 'border-gray-300 dark:border-gray-500'
                        } bg-white dark:bg-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                        placeholder="Project Inquiry"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Service Field */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Branding">Branding</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    {/* Budget Field */}
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-600 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000+">$25,000+</option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-2 rounded-md border text-gray-800 dark:text-white ${
                        errors.message 
                          ? 'border-red-500 dark:border-red-400' 
                          : 'border-gray-300 dark:border-gray-500'
                      } bg-white dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                    icon={isSubmitting ? undefined : <Send size={18} />}
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-700 transition-colors">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about working with us."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-700 transition-colors p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                What's your typical process for new projects?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We follow a structured approach that includes discovery, strategy, design, development, testing, and launch. Each project is unique, but this framework ensures we deliver consistent results.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 transition-colors p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                How long does a typical project take?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Project timelines vary based on scope and complexity. A website redesign typically takes 6-12 weeks, while a complete brand identity might take 8-16 weeks. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 transition-colors rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                Do you offer maintenance services?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we provide ongoing maintenance and support for websites and digital platforms we create. We offer various packages tailored to different needs, from basic updates to comprehensive support.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 transition-colors p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                Can you work with clients remotely?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! We work with clients worldwide using tools like Zoom, Slack, and Figma. Our process is designed to ensure clear communication and collaboration regardless of location.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              to="/faq" 
              variant="outline"
              icon={<ArrowRight size={16} />}
              iconPosition="right"
            >
              View All FAQs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
