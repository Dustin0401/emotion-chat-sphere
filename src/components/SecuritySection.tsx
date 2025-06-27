
import React from 'react';
import { Shield, Lock, Eye, Server, Award, CheckCircle } from 'lucide-react';

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'End-to-End Encryption',
      description: 'All conversations are encrypted in transit and at rest using AES-256 encryption.'
    },
    {
      icon: Lock,
      title: 'Zero-Knowledge Architecture',
      description: 'We cannot access your conversations. Your privacy is guaranteed by design.'
    },
    {
      icon: Eye,
      title: 'No Data Retention',
      description: 'Conversations are processed in real-time and not stored on our servers.'
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Hosted on enterprise-grade cloud infrastructure with 99.9% uptime SLA.'
    }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR Compliant', status: 'Verified' },
    { name: 'HIPAA Ready', status: 'Available' },
    { name: 'PCI DSS', status: 'Compliant' },
    { name: 'Privacy Shield', status: 'Certified' }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white font-space-grotesk">
            Security & Privacy
          </h2>
          <p className="text-xl text-gray-400 font-space-grotesk">
            Enterprise-grade security with complete privacy protection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-card/30 backdrop-blur-sm rounded-2xl border border-lime-500/20 p-6 text-center hover:border-lime-500/40 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 text-lime-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3 font-space-grotesk">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm font-space-grotesk">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-lime-500/20 p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-8">
            <Award className="w-16 h-16 text-lime-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2 font-space-grotesk">
              Trust & Compliance
            </h3>
            <p className="text-gray-400 font-space-grotesk">
              Certified and compliant with global security standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="flex items-center space-x-3 p-4 bg-lime-500/5 rounded-xl border border-lime-500/20"
              >
                <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium font-space-grotesk">
                    {cert.name}
                  </div>
                  <div className="text-lime-400 text-sm font-jetbrains-mono">
                    {cert.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-400 font-space-grotesk">
            Have security questions? <span className="text-lime-400 hover:text-lime-300 cursor-pointer">Contact our security team</span> for a detailed security review.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
