
import React from 'react';
import { MessageCircle, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm py-16 px-6 border-t border-lime-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-lime-500 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-black" />
              </div>
              <span className="text-2xl font-bold text-white">AI Chat</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Experience the future of AI conversation with deep empathy, 
              compassion, and emotional intelligence in every interaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'About', 'Support'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-lime-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">support@aichat.ai</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-lime-500/10">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 AI Chat Interface. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {[
              { icon: Twitter, href: '#' },
              { icon: Github, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Mail, href: '#' }
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="w-10 h-10 bg-lime-500/10 hover:bg-lime-500/20 rounded-lg flex items-center justify-center transition-colors duration-200 group"
              >
                <Icon className="w-5 h-5 text-lime-400 group-hover:text-lime-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
