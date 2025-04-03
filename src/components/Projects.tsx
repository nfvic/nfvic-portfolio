
import React, { useState } from 'react';
import { projects } from '@/data/projectData';
import { Github, Link } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(projects);
  
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  const filters = ['All', ...allTags];
  
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setVisibleProjects(projects);
    } else {
      const filtered = projects.filter(project => project.tags.includes(filter));
      setVisibleProjects(filtered);
    }
  };

  return (
    <section id="projects" className="section-padding bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">My Projects</h2>
        <p className="text-muted-foreground text-lg mb-10 text-center max-w-2xl mx-auto">
          Discover my latest work and personal projects, where creativity meets code. Each project reflects my skills, passion, and dedication to crafting exceptional web experiences.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-primary/20'
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-xl overflow-hidden shadow-md card-hover"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-secondary px-3 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.link} 
                    className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Link className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
