"use client";

import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-gray-400 font-fira-code text-sm mb-2 font-bold">
            # Get in touch
          </div>
          <h2 className="text-xl sm:text-3xl font-bold whitespace-nowrap flex items-center justify-center gap-2">
            <span className="text-blue-400 font-fira-code">def</span>
            <span className="text-white font-fira-code">contact_</span>
            <span className="text-green-400 font-fira-code">me</span>
            <span className="text-white font-fira-code">(message):</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all">
            <div className="font-fira-code mb-6">
              <div className="text-green-400"># Send me a message</div>
              <div className="text-gray-400 text-sm">return response</div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                  name = <span className="text-green-400">input</span>("Your Name")
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#2d2d2d] border border-gray-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                  email = <span className="text-green-400">input</span>("Your Email")
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#2d2d2d] border border-gray-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                  message = <span className="text-green-400">input</span>("Your Message")
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-[#2d2d2d] border border-gray-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Hello, I'd like to talk about..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`w-full font-fira-code text-white focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center transition-colors ${
                  formStatus === 'submitting' 
                    ? 'bg-blue-600 cursor-wait' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {formStatus === 'submitting' 
                  ? 'send_message()...' 
                  : formStatus === 'success' 
                    ? 'Message sent!' 
                    : 'send_message()'}
              </button>
              
              {formStatus === 'success' && (
                <div className="p-4 mt-4 text-sm text-green-400 rounded-lg bg-[#2d2d2d]" role="alert">
                  <span className="font-fira-code">return</span> "Thank you for your message! I'll respond as soon as possible."
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="p-4 mt-4 text-sm text-red-400 rounded-lg bg-[#2d2d2d]" role="alert">
                  <span className="font-fira-code">raise Exception</span>("Something went wrong. Please try again later.")
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 mb-6">
              <div className="font-fira-code mb-6">
                <div className="text-green-400"># Contact information</div>
                <div className="text-gray-400 text-sm">contact_details = {'{}'}</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="text-blue-400 mr-3 mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-fira-code">contact_details["email"] = </div>
                    <a href="mailto:hunnyjain711@gmail.com" className="text-white hover:text-blue-400">
                      hunnyjain711@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="text-blue-400 mr-3 mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-fira-code">contact_details["location"] = </div>
                    <p className="text-white">
                      Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="text-blue-400 mr-3 mt-1">
                    <FaPhone />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-fira-code">contact_details["phone"] = </div>
                    <a href="tel:+917567707082" className="text-white hover:text-blue-400">
                      +91 7567707082
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
              <div className="font-fira-code mb-6">
                <div className="text-green-400"># Social profiles</div>
                <div className="text-gray-400 text-sm">social_links = []</div>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="https://github.com/Hunnyjain7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-blue-400 transition-colors"
                >
                  <FaGithub className="mr-3" />
                  <div>
                    <div className="text-sm text-gray-400 font-fira-code">social_links.append("GitHub")</div>
                    <span>github.com/Hunnyjain7</span>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/hunnyjain7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin className="mr-3" />
                  <div>
                    <div className="text-sm text-gray-400 font-fira-code">social_links.append("LinkedIn")</div>
                    <span>linkedin.com/in/hunnyjain7</span>
                  </div>
                </a>

                <a 
                  href="https://x.com/hunnyjain5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-blue-400 transition-colors"
                >
                  <FaTwitter className="mr-3" />
                  <div>
                    <div className="text-sm text-gray-400 font-fira-code">social_links.append("X")</div>
                    <span>x.com/hunnyjain5</span>
                  </div>
                </a>

                <a 
                  href="https://leetcode.com/hunnyjain711" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-blue-400 transition-colors"
                >
                  <SiLeetcode className="mr-3" />
                  <div>
                    <div className="text-sm text-gray-400 font-fira-code">social_links.append("LeetCode")</div>
                    <span>leetcode.com/hunnyjain711</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 