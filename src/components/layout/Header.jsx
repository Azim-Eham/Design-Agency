import React, {useState} from 'react'
import {NavLink, Link, useLocation} from 'react-router-dom'
import {Menu, X, Moon, Sun} from 'lucide-react'
import useScrollPosition from '../../hooks/useScrollPosition'
import useDarkMode from '../../hooks/useDarkMode'


const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const {isScrolled} = useScrollPosition(50);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();


    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);


    const navLinks = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Services', path: '/services'},
        {name: 'Portfolio', path: '/portfolio'},
        {name: 'Contact', path: '/contact'},
    ]

  return (
    <>
    <header className={`fixed w-full z-50 transition-all duration-300 bg-white dark:bg-gray-800 ${
        isScrolled || isMenuOpen ? 
        'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-md py-4':
        'bg-transparent py-4 '
    }`} >
        <div className='container mx-auto px-4 md:px-6 flex justify-between items-center'>
            <Link
            to='/'
            onClick={closeMenu}
            className='text-2xl font-bold text-blue-500 flex items-center'>
                Azim <span className='text-gray-800 dark:text-gray-200 transition-colors'>Studio</span>
            </Link>

            {/*Desktop Menu*/}
            <nav className='hidden md:flex items-center space-x-4'>
                {navLinks.map(link=>(
                    <NavLink
                    key={link.name}
                    to={link.path}
                    className={({isActive}) => `hover:text-blue-400 font-medium transition-colors ${isActive ? 'text-blue-500' : 'text-gray-800 dark:text-gray-200'}`}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </nav>

            <div className='flex items-center space-x-4'>
                <button
                onClick={()=> setDarkMode(!darkMode)}
                className='p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-400/90 dark:hover:bg-gray-700 transition-colors'>
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Mobile menu button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>
    </header>
    {/*Mobile Menu*/}
    <div
        className={`md:hidden fixed top-[4.5rem] left-0 right-0 bg-white/90 dark:bg-gray-800/90 transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0 backdrop-blur-md shadow-lg z-50' : '-translate-y-full'
          }`}>
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navLinks.map(link=>(
                    <Link
                    key={link.name}
                    to={link.path}
                    onClick={closeMenu}
                    className={`px-4 py-2 font-medium transition-colors ${
                        location.pathname === link.path
                        ? 'text-blue-500 dark:text-blue-400 bg-gray-200 dark:bg-gray-700 rounded-md'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}>
                    {link.name}
                    </Link>
                ))}
            </nav>
        </div>
    </>
  )
}

export default Header