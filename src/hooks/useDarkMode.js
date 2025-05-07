import {useState, useEffect} from 'react';

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useState(() =>{
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else{
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode]
}

