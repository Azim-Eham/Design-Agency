import { useState, useEffect } from "react";

const useScrollPosition = (threshold = 50) => {
    const [scrollPosition, setScrollPosition] = useState({
        scrollY: 0,
        scrollX: 0,
        direction: null,
        isScrolled: false,
    });

    useEffect(()=>{
        let lastScrollY = window.scrollY;

        const updateScrollPosition = ()=>{
            const currentScrollY = window.scrollY;
            const currentScrollX = window.scrollX;
            const direction = currentScrollY > lastScrollY ? 'down' : 'up';
            const isScrolled = currentScrollY > lastScrollY;

            setScrollPosition({
                scrollY: currentScrollY,
                scrollX: currentScrollX,
                direction,
                isScrolled,
            });

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', updateScrollPosition, {passive: true});

        updateScrollPosition();

        return () =>{
            window.removeEventListener('scroll', updateScrollPosition);
        };
    }, [threshold]);

    return scrollPosition;
}

export default useScrollPosition;