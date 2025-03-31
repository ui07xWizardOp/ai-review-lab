
// Utility to track mouse position and trigger animations

export function initMouseTracker() {
  let mouseX = 0;
  let mouseY = 0;
  
  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update CSS variables for mouse position
    document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);
    
    // Find hovered sections with data-animate attribute
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isHovered = 
        mouseX >= rect.left && 
        mouseX <= rect.right && 
        mouseY >= rect.top && 
        mouseY <= rect.bottom;
      
      if (isHovered) {
        section.classList.add('section-active');
      } else {
        section.classList.remove('section-active');
      }
    });
  };
  
  window.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}

export function useMouseAnimation(elementRef: React.RefObject<HTMLElement>, callback: (isHovered: boolean) => void) {
  if (!elementRef.current) return;
  
  const element = elementRef.current;
  
  const handleMouseEnter = () => {
    callback(true);
  };
  
  const handleMouseLeave = () => {
    callback(false);
  };
  
  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);
  
  return () => {
    element.removeEventListener('mouseenter', handleMouseEnter);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
}
