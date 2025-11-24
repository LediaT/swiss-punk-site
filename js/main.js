 /**
 * SWISS PUNK MAIN JAVASCRIPT
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // Scroll reveal animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.scroll-reveal');
  revealElements.forEach(el => observer.observe(el));

  // Console message
  console.log('%c SWISS PUNK ', 
    'background: #FF0000; color: #FFFFFF; font-size: 24px; font-weight: bold; padding: 10px;'
  );
  console.log('Break the Grid! Created by Ledia');

});