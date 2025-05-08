import React from 'react'
import {Link} from 'react-router-dom'
import {ArrowUpRight} from 'lucide-react'

const PortfolioCard = ({project}) => {
  return (
    <div className='group overflow-hidden rounded-lg bg-white dark:bg-blue-300/10  shadow-md hover:shadow-xl transition-all duration-300'>
      <div className='relative overflow-hidden aspect-video'>
        <img 
        src={project.image} 
        alt={project.title}
        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105:' />

        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6'>
          <div className='text-white'>
            <p className="text-sm font-medium mb-1">{project.category}</p>
            <h3 className="text-lg font-semibold">{project.title}</h3>
          </div>
        </div>
      </div>

      <div className='p-6'>
        <div className='flex justify-between items-start mb-4'>
          <div>
            <span className='inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-500/30 text-blue-700 dark:text-blue-300 rounded-full mb-2 transition-colors'>
              {project.category}
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">
              Client: {project.client}
            </p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 transition-colors">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link 
          to={`/portfolio/${project.id}`} 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          View Project <ArrowUpRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  )
}

export default PortfolioCard