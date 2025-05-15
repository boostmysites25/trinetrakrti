// Scroll Animation Utilities

// Initialize scroll animations
export const initScrollAnimations = () => {
  const scrollElements = document.querySelectorAll('.ai-reveal');
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('active');
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove('active');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };
  
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
  
  // Initialize on page load
  handleScrollAnimation();
};

// Parallax effect
export const initParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('.ai-parallax');
  
  const handleParallax = () => {
    parallaxElements.forEach(element => {
      const scrollPosition = window.scrollY;
      const elementPosition = element.getBoundingClientRect().top + scrollPosition;
      const offset = window.innerHeight * 0.8;
      
      if (scrollPosition > elementPosition - offset) {
        const distance = (scrollPosition - (elementPosition - offset)) * 0.1;
        element.style.transform = `translateY(-${distance}px)`;
      }
    });
  };
  
  window.addEventListener('scroll', handleParallax);
  handleParallax(); // Initial check
};

// Staggered animations
export const initStaggeredAnimations = () => {
  const staggerContainers = document.querySelectorAll('.ai-stagger');
  
  staggerContainers.forEach(container => {
    const children = container.children;
    Array.from(children).forEach((child, index) => {
      child.style.animationDelay = `${index * 0.1}s`;
    });
  });
};

// Initialize all animations
export const initAllAnimations = () => {
  initScrollAnimations();
  initParallaxEffect();
  initStaggeredAnimations();
};

// Export a function to be called when component mounts
export default function setupAnimations() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'complete') {
    initAllAnimations();
  } else {
    window.addEventListener('load', initAllAnimations);
    // Cleanup
    return () => window.removeEventListener('load', initAllAnimations);
  }
}