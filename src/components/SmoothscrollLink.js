import React from 'react'

function SmoothscrollLink({ targetId, title }) {
    const scrollToSection = (e) => {
        e.preventDefault();
        const section = document.getElementById(targetId);
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            scrollDuration: 5000,
         });
    };

    return (
        <a href={`#${targetId}`} className="mr-5 hover:text-white" onClick={scrollToSection}>
            {title}
        </a>
    );
}

export default SmoothscrollLink