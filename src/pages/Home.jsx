import React from 'react'
import {Link} from 'react-router-dom'
import {ArrowRight, CheckCircle2, Code, Lightbulb, Palette, Sparkles} from 'lucide-react'
import Button from '../components/common/Button'
import PortfolioCard from '../components/common/PortfolioCard'
import SectionTitle from '../components/common/SectionTitle'
import {useSelector} from 'react-redux'
import {selectProjects} from '../store/portfolioSlice'

const Home = () => {

  const allProjects = useSelector(selectProjects);
  const featuredProjects = allProjects.slice(0,3);

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='pt-32 md:pt-40 pb-16 md:pb-24 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-700 transition-colors -z-10'></div>
        <div className='absolute top-20 right-0 w-72 h-72 bg-red-400/10 dark:bg-red-400/5 rounded-full filter blur-3xl -z-10'></div>
        <div className='absolute bottom-20 left-10 w-80 h-80 bg-blue-400/10 dark:bg-blue-400/5 rounded-full filter blur-3xl -z-10'></div>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-200 leading-tight'>
              We design <span className='text-blue-500'>digital experiences</span> that inspire and convert
            </h1>
            <p className='text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed'>
              A creative studio that blends design, strategy, and innovation to produce brands and digital products that are memorable and aid in the expansion of organizations.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
              to="/portfolio"
              variant="primary"
              size="lg"
              className="font-semibold"
              icon={<Sparkles size={20} />}>
                View Our Work
              </Button>
              <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="font-semibold">
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className='py-16 md:py-24 bg-white dark:bg-gray-700 transition-colors'>
        <div className='container mx-auto px-4 md:px-6'>
          <SectionTitle
          title= "What We Do"
          subtitle= "We provide a variety of services to make your company stand out online." />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Services Cards */}
            {[
              {
                icon: <Palette className="w-7 h-7 text-blue-500" />,
                title: "Web Design",
                description: "Beautiful, responsive websites that engage visitors and drive conversions.",
                link: "/services/web-design",
              },
              {
                icon: <Lightbulb className="w-7 h-7 text-orange-400" />,
                title: "Branding",
                description: "Strategic brand identity development that communicates your unique value.",
                link: "/services/branding",
              },
              {
                icon: <Code className="w-7 h-7 text-purple-500" />,
                title: "UI/UX Design",
                description: "User-centered design that creates intuitive, enjoyable digital experiences.",
                link: "/services/ui-ux",
              },
              {
                icon: <Sparkles className="w-7 h-7 text-pink-400" />,
                title: "Digital Marketing",
                description: "Strategic marketing campaigns that increase visibility and drive growth.",
                link: "/services/marketing",
              }
            ].map(({icon, title, description, link}, index)=> (
              <div key={index} className="bg-white dark:bg-blue-300/10 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
                <Link to={link} className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            )) }
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className='py-16 md:py-24 bg-white dark:bg-gray-700 transition-colors'>
        <div className='container mx-auto px-4 md:px-6'>
            <SectionTitle 
            title= 'Featured Work'
            subtitle= 'View our most recent projects to learn how we have assisted clients in reaching their objectives.'
            />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
              {featuredProjects.map(project => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>
            <div className="text-center mt-12">
            <Button to="/portfolio" variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-16 md:py-24 bg-white dark:bg-gray-700 transition-colors'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white'>
                Why Choose <span className="text-blue-500">Azim Studio</span>
              </h2>
              <p className='text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed'>
                We combine strategic thinking with creative execution to deliver results that exceed expectations. Our collaborative approach ensures that your vision is central to everything we create.
              </p>

              <div className='space-y-4'>
                {[
                  {
                    title: "Strategic Approach",
                    description: "We start with understanding your goals and audience to create purpose-driven designs.",
                  },
                  {
                    title: "Collaborative Process",
                    description: "We work closely with you at every stage to ensure the final product aligns with your vision.",
                  },
                  {
                    title: "Results-Focused",
                    description: "Our designs don't just look good—they're crafted to achieve your business objectives.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button to="/about" className="mt-8" icon={<ArrowRight size={16} />} iconPosition="right">
                More About Us
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Nexus Studio team collaborating" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-red-400/10 rounded-full filter blur-xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-400/10 rounded-full filter blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-500 text-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring your ideas to life?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Let's work together to create something exceptional. Contact us today to discuss your project.
          </p>
          <Button 
            to="/contact" 
            variant="accent" 
            size="lg" 
            className="font-semibold"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home