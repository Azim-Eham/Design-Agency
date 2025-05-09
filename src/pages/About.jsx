import React from 'react'
import { Award, Users, Clock, Heart, CheckCircle, ArrowRight} from 'lucide-react'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'

const About = () => {
  return (
    <div className='min-h-screen pt-16'>
      {/* Hero Section */}
      <section className='py-16 md:py-24 bg-gray-50 dark:bg-gray-700 transition-colors'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl mx-auto text-center mb-12'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white'>
              About Azim Studio
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We're a team of passionate designers, developers, and strategists dedicated to creating exceptional digital experiences.
            </p>
          </div>
          <div className="relative mx-auto max-w-5xl">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Nexus Studio team" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-400/10 rounded-full filter blur-xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-red-400/10 rounded-full filter blur-xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Our Story" centered={false} className="mb-8" />
              <div className='text-gray-700 dark:text-gray-200'>
                <p className="leading-relaxed">
                  Founded in 2019, Nexus Studio began with a simple mission: to bridge the gap between aesthetics and functionality in digital design. Our founders, with backgrounds in both design and technology, saw an opportunity to create a studio that truly understood how to make beautiful designs that perform.
                </p>
                <p className="leading-relaxed">
                  Over the years, we've grown from a small team of three to a diverse group of creative professionals. We've expanded our services but maintained our core philosophy: that thoughtful design and technical excellence should work together to create meaningful experiences.
                </p>
                <p className="leading-relaxed">
                  Today, we partner with brands and businesses of all sizes who share our passion for quality and innovation. Every project we take on is an opportunity to push boundaries and create something truly impactful.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-blue-300/10 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">35+ Professionals</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our diverse team brings unique perspectives to every project.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-blue-300/10 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">15+ Awards</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our work has been recognized within the design industry.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-blue-300/10 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">6+ Years</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We've been creating exceptional digital experiences since 2019.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-blue-300/10 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">200+ Projects</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We've successfully delivered projects for clients worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Value */}
      <section className='py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors'>
        <div className='container mx-auto px-4 md:px-6'>
          <SectionTitle 
          title="Our Value" subtitle="The principles that guide our work and shape our culture."/>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className="bg-white dark:bg-blue-300/10 p-8 rounded-lg shadow-md transition-colors">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're committed to delivering exceptional quality in everything we do. We go above and beyond to ensure every detail is perfect.
              </p>
            </div>
            
            <div className="bg-white dark:bg-blue-300/10 p-8 rounded-lg shadow-md transition-colors">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We constantly explore new ideas and approaches to push boundaries and create forward-thinking solutions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-blue-300/10 p-8 rounded-lg shadow-md transition-colors">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe great ideas emerge from diverse perspectives. We work closely with clients and each other to create the best solutions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-blue-300/10 p-8 rounded-lg shadow-md transition-colors">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We operate with transparency and honesty. We take responsibility for our work and prioritize ethical business practices.
              </p>
            </div>
            
            <div className="bg-white dark:bg-blue-300/10 p-8 rounded-lg shadow-md transition-colors">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Adaptability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We embrace change and evolve with the industry. We're always learning and improving our skills to stay ahead.
              </p>
            </div>
            
            <div className="bg-white dark:bg-blue-300/10 p-8 rounded-lg shadow-md transition-colors">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Empathy</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We design with users in mind. We strive to understand their needs, motivations, and pain points to create meaningful solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-700 transition-colors">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Meet Our Team" subtitle="The talented individuals behind our creative work." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-100 dark:bg-blue-300/10 transition-colors rounded-lg overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src='https://images.pexels.com/photos/3760583/pexels-photo-3760583.jpeg?auto=compress&cs=tinysrgb&w=600'
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Sarah Johnson</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Creative Director</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  With over 15 years of experience in design and branding, Sarah leads our creative vision.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-gray-100 dark:bg-blue-300/10 transition-colors rounded-lg overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/769690/pexels-photo-769690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  
                  alt="David Chen" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-800 dark:text-white">David Chen</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Technical Director</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  David ensures that our designs are backed by solid technical implementation and innovation.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-gray-100 dark:bg-blue-300/10 transition-colors rounded-lg overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/10041273/pexels-photo-10041273.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Maria Rodriguez" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-800 dark:text-white">Maria Rodriguez</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">UX Director</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Maria specializes in creating intuitive user experiences that delight and engage.
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-gray-100 dark:bg-blue-300/10 transition-colors rounded-lg overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Alex Thompson" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Alex Thompson</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Strategy Lead</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Alex helps our clients align their business goals with effective design strategies.
                </p>
              </div>
            </div>
          <div className="text-center mt-12">
            <Button to="/contact" variant="primary" icon={<ArrowRight size={16} />} iconPosition="right">
              Work With Our Team
            </Button>
          </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default About