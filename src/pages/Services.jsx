import React from 'react';
import { Palette, Code, Lightbulb, Sparkles, Zap, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

const Services = () => {
  return (
    <div className='min-h-screen pt-16'>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-700 transition-colors">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We offer a comprehensive range of design and digital services to help your business stand out and succeed in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4 md:px-6">
          {/* Web Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 transition-colors">
                <Palette className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Web Design</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We create beautiful, responsive websites that engage visitors and drive conversions. Our web design process is focused on both aesthetics and functionality, ensuring your site not only looks great but performs exceptionally.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Responsive design for all devices',
                  'User-centered interfaces',
                  'Performance optimization',
                  'Search engine friendly architecture'
                ].map((text, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{text}</span>
                  </li>
                ))}
              </ul>
              <Button
                to="/services/web-design"
                variant="outline"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                Learn More
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://media.istockphoto.com/id/1305999733/photo/web-design-desktop.jpg?b=1&s=612x612&w=0&k=20&c=LKXpEzKWzu5Kbl4xL_O1CCtwIwItMTKzNOlhuy7kAJM="
                alt="Web Design"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Branding */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/7661184/pexels-photo-7661184.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Branding"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-6 transition-colors">
                <Lightbulb className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Branding</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We develop comprehensive brand identities that communicate your unique value and resonate with your target audience. Our strategic approach ensures your brand stands out in a crowded marketplace.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Logo design and visual identity',
                  'Brand strategy and positioning',
                  'Brand guidelines and assets',
                  'Brand messaging and voice'
                ].map((text, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-dark-600 dark:text-gray-300">{text}</span>
                  </li>
                ))}
              </ul>
              <Button
                to="/services/branding"
                variant="outline"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center mb-6 transition-colors">
                <Code className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">UI/UX Design</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We create intuitive, enjoyable user experiences and interfaces that keep users engaged and convert visitors into customers. Our design process is rooted in research and user-centered principles.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'User research and testing',
                  'Wireframing and prototyping',
                  'Interactive design',
                  'Usability optimization'
                ].map((text, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-pink-600 dark:text-pink-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{text}</span>
                  </li>
                ))}
              </ul>
              <Button
                to="/services/ui-ux"
                variant="outline"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                Learn More
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="UI/UX Design"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-700 transition-colors">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Additional Services"
            subtitle="Complementary services to enhance your digital presence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
                bg: 'bg-blue-50 dark:bg-blue-900/30',
                title: 'Digital Marketing',
                desc: 'Strategic marketing campaigns that increase visibility and drive growth. From social media to content marketing, we help you reach your target audience.',
                link: '/services/marketing',
              },
              {
                icon: <Zap className="w-7 h-7 text-orange-600 dark:text-orange-400" />,
                bg: 'bg-orange-100 dark:bg-orange-900/30',
                title: 'SEO Optimization',
                desc: 'Improve your search engine rankings and visibility. Our SEO services focus on sustainable, long-term strategies that drive organic traffic.',
                link: '/services/seo',
              },
              {
                icon: <BarChart3 className="w-7 h-7 text-violet-600 dark:text-violet-400" />,
                bg: 'bg-violet-100 dark:bg-violet-900/30',
                title: 'Analytics & Insights',
                desc: 'Data-driven analysis to optimize your digital performance. We help you understand your metrics and make informed decisions.',
                link: '/services/analytics',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-blue-300/10 p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className={`w-14 h-14 ${item.bg} rounded-lg flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.desc}</p>
                <Button
                  to={item.link}
                  variant="ghost"
                  size="sm"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
