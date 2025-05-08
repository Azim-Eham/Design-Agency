import React from 'react'

const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  className = '',
  textColor = 'text-gray-800 dark:text-white',
  subtitleColor = 'text-gray-500 dark:text-gray-300',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;