import { useEffect, useState } from 'react';

export function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      // If we are at the very bottom of the page, highlight the last section
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 20) {
        setActive(ids[ids.length - 1]);
        return;
      }

      let currentSection = ids[0];
      
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // If the top of the section is above the middle of our screen
          // (We use 250px here to guarantee it catches it early)
          if (rect.top <= 250) {
            currentSection = id;
          }
        }
      }
      
      setActive(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return active;
}