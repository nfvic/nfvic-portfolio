
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">About Me</h2>
        <p className="text-muted-foreground text-lg mb-10 text-center max-w-2xl mx-auto">
          Get to know me better - my background, passion, and what drives me in the tech world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Background</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate web developer with expertise in building modern, responsive web applications. 
                With a background in computer science, I've been coding for over 5 years and continue to expand my knowledge daily.
              </p>
              <p>
                My journey began with simple HTML websites and has evolved to creating complex applications using the latest frameworks and technologies.
              </p>
              <p>
                What drives me is the ability to solve real-world problems through elegant code solutions. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">Educational Background</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex flex-col">
                <span className="font-medium text-foreground">BSc in Computer Science</span>
                <span>University of Technology, 2018 - 2022</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-foreground">Full-Stack Web Development Certification</span>
                <span>Tech Academy, 2022</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-foreground">Advanced JavaScript & React Specialization</span>
                <span>Online Learning Platform, 2023</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="/Victor_Daniel_CV.pdf" 
                download 
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Professional Interests</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm particularly interested in frontend development with React, building intuitive user interfaces that solve complex problems with simple designs. My goal is to create web applications that are both functional and aesthetically pleasing.
              </p>
              
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-foreground">What excites me about tech:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Building accessible web applications that can be used by everyone</li>
                  <li>Exploring new frameworks and libraries to enhance development workflows</li>
                  <li>The rapidly evolving nature of web technologies</li>
                  <li>Creating performant applications that provide excellent user experiences</li>
                  <li>Collaborating with teams to solve complex technical challenges</li>
                </ul>
              </div>
              
              <div className="space-y-2 mt-6">
                <h4 className="text-lg font-semibold text-foreground">Programming Languages I'm Proficient In:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-md text-center">
                    <span className="font-medium">JavaScript/TypeScript</span>
                    <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-accent h-full rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-md text-center">
                    <span className="font-medium">HTML/CSS</span>
                    <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-accent h-full rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-md text-center">
                    <span className="font-medium">Python</span>
                    <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-accent h-full rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-md text-center">
                    <span className="font-medium">Java</span>
                    <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-accent h-full rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
