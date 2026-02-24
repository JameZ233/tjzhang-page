import { Link } from 'react-router';
import { ArrowRight, Download, GraduationCap, Briefcase, Award, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                Electrical Engineer • Robotics • Automotive
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6">
                Tianjian (James) Zhang
                <span className="block text-blue-600">Building the Future</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Recent MS graduate in Electrical Engineering from Columbia University, seeking full-time opportunities 
                as an Electrical Engineer, Robotics Engineer, or Deployment Engineer in robotics and automotive industries. 
                Proven track record from award-winning projects to peer-reviewed research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Get In Touch
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXIlMjB3b3Jrc3BhY2UlMjBjaXJjdWl0JTIwYm9hcmR8ZW58MXx8fHwxNzcxNzgyNTM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Electrical Engineering Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-gray-900">7+</div>
                    <div className="text-gray-600">Major Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-6">
                I recently graduated with my Master's in Electrical Engineering from Columbia University (GPA: 3.76), 
                where I focused on IoT, robotics, power electronics, and control systems. I graduated Magna Cum Laude 
                from UC Davis with a BS in Physics and Chemical Physics.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As Electronics Lead at Columbia Robotics Club, I led teams in developing autonomous robots with 
                custom PCB design and embedded control systems. My projects range from AWS-powered wearable devices 
                to earthquake simulation research that contributed to peer-reviewed publications.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I've won multiple hackathon awards and competed in robotics competitions, combining hands-on hardware 
                development with cutting-edge software solutions. I'm now seeking full-time opportunities to apply my 
                expertise in robotics and automotive engineering, creating technology that makes a real-world impact.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Experience</div>
                    <div className="text-gray-600">2+ Years Research</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Education</div>
                    <div className="text-gray-600">MS @ Columbia</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
                  <div className="text-gray-700">Major Projects</div>
                </div>
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">20+</div>
                  <div className="text-gray-700">Technical Skills</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">3+</div>
                  <div className="text-gray-700">Awards Won</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
                  <div className="text-gray-700">Publication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Education</h2>
            <p className="text-xl text-gray-600">My academic background and achievements</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Master's Degree */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      Master of Science in Electrical Engineering
                    </h3>
                    <p className="text-lg text-blue-600 mb-2">Columbia University</p>
                    <p className="text-gray-600">September 2024 - December 2025</p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                      GPA: 3.76/4.0
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Relevant Coursework</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Internet of Things</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Data Center Processing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Control Theory</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Energy Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Robotics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Reinforcement Learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Power Electronics</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Leadership & Activities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Electronics Lead - Columbia Robotics Club</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Research Assistant - DitecT Lab</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">3rd Place - AWS Innovation Challenge (2025)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">2nd Place - Hack & Build 2024 Hackathon</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bachelor's Degree */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      Bachelor of Science in Physics and Chemical Physics
                    </h3>
                    <p className="text-lg text-blue-600 mb-2">University of California, Davis</p>
                    <p className="text-gray-600">Minor in Mathematics</p>
                    <p className="text-gray-600 mt-1">Graduated June 2024</p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                      Magna Cum Laude
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Relevant Coursework</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Analog Circuits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Digital Circuits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Networks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Data Acquisition</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Quantum Computing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Probability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Numerical Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Machine Learning</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Honors & Awards</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Phi Beta Kappa (May 2023)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Golden Key International Honour Society (Nov 2023)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Dean's Honors List (Three Times - Jan, Mar, Jun 2024)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Outstanding Graduating Seniors with Department Citation in Chemistry (Jun 2024)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Certifications</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Quantum Computing</h4>
                      <p className="text-gray-600">Professional Certification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Product Management</h4>
                      <p className="text-gray-600">Professional Certification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Networking</h4>
                      <p className="text-gray-600">Professional Certification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Explore my latest engineering projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600">My areas of expertise and proficiency</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Programming</h3>
              <div className="space-y-3">
                {[
                  'Python',
                  'C/C++',
                  'MATLAB',
                  'Bash',
                  'Verilog',
                  'SQL',
                  'HTML',
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Frameworks & Libraries</h3>
              <div className="space-y-3">
                {[
                  'PyTorch',
                  'TensorFlow',
                  'Scikit-learn',
                  'OpenCV',
                  'FastAPI',
                  'Qiskit',
                  'ROS2',
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Hardware & Tools</h3>
              <div className="space-y-3">
                {[
                  'PCB Development',
                  'Altium',
                  'LTSpice',
                  'Simulink',
                  'Oscilloscope',
                  'Soldering',
                  'FPGA',
                  'ESP32',
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Platforms & Systems</h3>
              <div className="space-y-3">
                {[
                  'AWS',
                  'GCP',
                  'Docker',
                  'Raspberry Pi',
                  'MQTT',
                  'BLE',
                  '4G/5G Networks',
                  'Embedded IoT',
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Interested in working together? Let's connect!
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}