
import React from 'react';
import { CV_DATA } from './constants';
import { Navbar } from './components/Navbar';
import { SectionHeading } from './components/SectionHeading';
// import { AIChatAssistant } from './components/AIChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-4xl text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]">
            Muhammed <span className="gradient-text">Rahees</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Frontend Developer & ERP Specialist crafting high-performance, responsive web applications with React & TypeScript.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_30px_-10px_rgba(37,99,235,0.6)]"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-bold rounded-xl transition-all"
            >
              View Work
            </a>
          </div>
          <div className="flex justify-center gap-6 pt-8 text-zinc-500">
             <a href={`https://${CV_DATA.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
             <a href={CV_DATA.github[0]} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
             <a href={`mailto:${CV_DATA.email}`} className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Crafting the digital future with modern technologies.">About Me</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                {CV_DATA.summary}
              </p>
              <p>
                My journey in tech began with a curiosity for how complex systems work, leading me to a degree in Computer Applications and eventually specialized roles in ERP systems and Frontend Engineering.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex-1 min-w-[200px]">
                  <div className="text-3xl font-bold text-blue-500">2+</div>
                  <div className="text-zinc-500 text-sm">Years Experience</div>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex-1 min-w-[200px]">
                  <div className="text-3xl font-bold text-purple-500">10+</div>
                  <div className="text-zinc-500 text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-zinc-800 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/rahees-tech/800/800" 
                  alt="Tech Setup" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 glass-morphism rounded-2xl border border-zinc-700 max-w-[200px]">
                <p className="text-xs text-zinc-400 font-medium">B.Com Computer Application</p>
                <p className="text-sm font-bold">University of Calicut</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="The path that shaped my professional expertise.">Work Experience</SectionHeading>
          <div className="space-y-12">
            {CV_DATA.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 h-full w-px bg-zinc-800 hidden md:block md:left-1/2"></div>
                
                <div className={`flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className="glass-morphism p-8 rounded-3xl border border-zinc-800/50 hover:border-blue-500/30 transition-all group">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                          <p className="text-blue-500 font-medium">{exp.company}</p>
                        </div>
                        <span className="text-xs font-semibold bg-zinc-800 px-3 py-1 rounded-full text-zinc-400">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-zinc-500 text-sm mb-4 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {exp.location}
                      </p>
                      <ul className="space-y-3">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="text-zinc-400 text-sm flex gap-3">
                            <span className="text-blue-500 mt-1">•</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Practical solutions built to solve real-world problems.">Featured Projects</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            {CV_DATA.projects.map((project, idx) => (
              <div key={idx} className="group glass-morphism rounded-3xl overflow-hidden border border-zinc-800/50 hover:border-zinc-600 transition-all">
                <div className="aspect-video w-full bg-zinc-800 relative overflow-hidden">
                   <img 
                    src={`https://picsum.photos/seed/${project.title.replace(/\s/g, '')}/800/450`} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-zinc-400 text-sm line-clamp-1">{project.description}</p>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-zinc-400 flex gap-2">
                         <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="My toolkit for building modern web experiences.">Technical Arsenal</SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CV_DATA.skills.map((cat, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl space-y-6 hover:shadow-2xl hover:shadow-blue-900/10 transition-all">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 text-sm rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Ready to build something <br />
              <span className="opacity-70 italic underline">exceptional?</span>
            </h2>
            <p className="text-blue-100 text-xl max-w-lg">
              I'm currently looking for new opportunities as a Frontend Developer. Let's talk about your next project!
            </p>
            <div className="space-y-6 pt-4">
              <a href={`mailto:${CV_DATA.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white transition-all duration-300">
                  <svg className="w-6 h-6 text-white group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-blue-100 text-xs font-bold uppercase tracking-widest">Email me</div>
                  <div className="text-white font-bold text-lg">{CV_DATA.email}</div>
                </div>
              </a>
              <a href={`tel:${CV_DATA.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white transition-all duration-300">
                  <svg className="w-6 h-6 text-white group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="text-blue-100 text-xs font-bold uppercase tracking-widest">Call me</div>
                  <div className="text-white font-bold text-lg">{CV_DATA.phone}</div>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:${CV_DATA.email}?subject=Inquiry from Portfolio&body=Hi Muhammed, I'd like to talk about...`;
            }}>
              <div className="space-y-2">
                <label className="text-zinc-600 text-sm font-bold uppercase tracking-wider">Your Name</label>
                <input required type="text" className="w-full bg-zinc-100 border-none rounded-xl px-4 py-3 text-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-zinc-600 text-sm font-bold uppercase tracking-wider">Email Address</label>
                <input required type="email" className="w-full bg-zinc-100 border-none rounded-xl px-4 py-3 text-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-zinc-600 text-sm font-bold uppercase tracking-wider">Message</label>
                <textarea required rows={4} className="w-full bg-zinc-100 border-none rounded-xl px-4 py-3 text-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder="Hello! I'm interested in working with you..."></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-zinc-900 text-white font-black py-4 rounded-xl transition-all uppercase tracking-widest">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black">M<span className="text-blue-500">R</span>.</div>
          <div className="flex gap-8 text-zinc-500 text-sm">
            <a href={`https://${CV_DATA.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            {CV_DATA.github.map((gh, i) => (
              <a key={i} href={gh} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub {i+1}</a>
            ))}
          </div>
          <div className="text-zinc-500 text-xs text-center md:text-right">
            © {new Date().getFullYear()} Muhammed Rahees. <br />
            Built with React, TypeScript & Tailwind.
          </div>
        </div>
      </footer>

      {/* <AIChatAssistant /> */}
    </div>
  );
};

export default App;
