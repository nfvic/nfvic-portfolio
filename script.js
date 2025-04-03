
// DOM Elements
const header = document.querySelector('.header');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuButton = document.querySelector('.close-menu');
const themeToggleButtons = document.querySelectorAll('.theme-toggle');
const scrollTopButton = document.querySelector('.scroll-top');
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
const filterButtons = document.querySelectorAll('.filter-button');
const projectGrid = document.querySelector('.project-grid');
const contactForm = document.getElementById('contact-form');
const currentYearElement = document.getElementById('current-year');

// Set current year in footer
currentYearElement.textContent = new Date().getFullYear();

// Projects data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart, payment integration, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Web", "React", "Node.js"],
    link: "https://example.com/ecommerce",
    github: "https://github.com/example/ecommerce"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with a modern UI.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Web", "UI/UX", "JavaScript"],
    link: "https://example.com/portfolio",
    github: "https://github.com/example/portfolio"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React", "Firebase", "UI/UX"],
    link: "https://example.com/taskmanager",
    github: "https://github.com/example/taskmanager"
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "A weather application that shows current conditions and forecasts using a weather API.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    tags: ["JavaScript", "API", "Web"],
    link: "https://example.com/weather",
    github: "https://github.com/example/weather"
  }
];

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// Close mobile menu when clicking a nav item
mobileNavItems.forEach(item => {
  item.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// Theme Toggle
themeToggleButtons.forEach(button => {
  button.addEventListener('click', toggleTheme);
});

function toggleTheme() {
  document.body.classList.toggle('theme-red');
  localStorage.setItem('theme', document.body.classList.contains('theme-red') ? 'red' : 'blue');
}

// Check for saved theme preference
if (localStorage.getItem('theme') === 'red') {
  document.body.classList.add('theme-red');
}

// Scroll to top button
scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Project filtering
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const filter = button.dataset.filter;
    displayProjects(filter);
  });
});

// Display projects based on filter
function displayProjects(filter) {
  projectGrid.innerHTML = '';
  
  const filteredProjects = filter === 'all' ? 
    projects : 
    projects.filter(project => project.tags.includes(filter));
  
  filteredProjects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
            <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <span>Live Demo</span>
          </a>
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span>Source Code</span>
          </a>
        </div>
      </div>
    `;
    
    projectGrid.appendChild(projectCard);
  });
}

// Initialize projects
displayProjects('all');

// Form submission
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const values = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    
    console.log('Form submitted:', values);
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});
