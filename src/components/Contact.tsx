import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };
    
    console.log('Form submitted:', values);
    alert('Thank you for your message! I will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Get In Touch</h2>
        <p className="text-muted-foreground text-lg mb-16 text-center max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <a href="mailto:mumov68@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    mumov68@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Phone</h4>
                  <a href="tel:+254799511751" className="text-muted-foreground hover:text-primary transition-colors">
                    +254799511751
                  </a>
                </div>
              </div>
              
              <div className="pt-8">
                <h4 className="font-medium text-lg mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-muted p-3 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-muted p-3 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form - Using plain HTML instead of React components */}
          <div className="bg-card p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Victor Mumo"
                  required 
                  minLength={2}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="email@example.com"
                  required
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Type your message here..." 
                  rows={5} 
                  required
                  minLength={10}
                  className="w-full px-3 py-2 border border-input rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary text-black dark:text-white bg-white dark:bg-background"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
