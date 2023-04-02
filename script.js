// Toggle navigation menu for mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu--visible');
});

// Smooth scroll to anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

for (let anchorLink of anchorLinks) {
  anchorLink.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
}
