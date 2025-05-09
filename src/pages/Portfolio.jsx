import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredProjects, selectActiveFilter, filterProjects } from '../store/portfolioSlice';
import SectionTitle from '../components/common/SectionTitle';
import PortfolioCard from '../components/common/PortfolioCard';

const Portfolio = () => {
  const dispatch = useDispatch();
  const projects = useSelector(selectFilteredProjects);
  const activeFilter = useSelector(selectActiveFilter);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const handleFilterChange = (filter) => {
    dispatch(filterProjects(filter));
  };

  const categories = useSelector((state) => {
    const projects = state.portfolio.projects;
    return ['All', ...new Set(projects.map((project) => project.category))];
  });

  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-700 transition-colors">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Our Portfolio
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore our work and see how we've helped brands achieve their goals through strategic design and creative solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-dark-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-gray-100 dark:bg-gray-700 rounded-lg h-80 animate-pulse transition-colors"></div>
              ))}
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                No projects found in this category
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try selecting a different category to view more projects.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-700 transition-colors">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Client Testimonials" 
            subtitle="What our clients say about working with us."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-blue-300/10 transition-colors p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-blue-500 dark:text-blue-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "Nexus Studio transformed our brand with a stunning website redesign. Their team was professional, creative, and delivered beyond our expectations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Jennifer Adams</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">CMO, TechVision AI</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-blue-300/10 transition-colors p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-blue-500 dark:text-blue-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "Working with Nexus Studio on our brand identity was an incredible experience. They took the time to understand our vision and created a brand that perfectly represents us."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Michael Johnson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Founder, EcoStyle</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-blue-300/10 transition-colors p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-blue-500 dark:text-blue-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "The UI/UX design work that Nexus Studio did for our app completely transformed the user experience. The result was an immediate increase in user engagement and retention."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Sarah Thompson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Product Manager, FitTrack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
