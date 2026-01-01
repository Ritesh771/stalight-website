import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    label: "Email",
    value: "info@stalight.tech",
    link: "mailto:infostalight@gmail.com"
  },
  {
    icon: <Phone className="h-5 w-5 text-primary" />,
    label: "Phone",
    value: "+91 8660144040",
    link: "tel:+918660144040"
  },
  {
    icon: <MapPin className="h-5 w-5 text-primary" />,
    label: "Address",
    value: "StalightTechnology, 12.9330376, 77.560489",
    link: "https://maps.google.com/?q=12.9330376,77.560489"
  },
  {
    icon: <Clock className="h-5 w-5 text-primary" />,
    label: "Office Hours",
    value: "Mon-Fri: 4:00 PM - 9:00 PM\nSat: 11:00 AM - 4:00 PM\nSun: Closed",
    link: ""
  }
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 bg-[#030304]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/10 via-transparent to-blue-950/10"></div>
      
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Developer Profile Cards */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 title-gradient">
                Meet Our Team
              </h2>
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
                The talented developers behind Stalight Technology's innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Lead Developer Card */}
              <a
                href="https://riteshn.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="relative glass-panel p-8 rounded-xl border border-white/10 overflow-hidden"
              >
                <div className="relative z-10 text-center">
                  {/* Profile Avatar */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/50">
                    <img 
                      src="/ceo.jpg" 
                      alt="Ritesh N - CEO"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-sm text-primary font-semibold mb-2">Lead Developer</div>
                  <div className="text-xl font-bold text-white mb-3">Ritesh N</div>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    Passionate full-stack developer with expertise in React, Node.js, and AI technologies.
                    Leading the development of innovative solutions at Stalight Technology.
                  </p>

                  <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium">
                    <span>View Portfolio</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </a>

              {/* Co-Lead Developer Card */}
              <a
                href="https://pannagaja.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="relative glass-panel p-8 rounded-xl border border-white/10 overflow-hidden"
              >
                <div className="relative z-10 text-center">
                  {/* Profile Avatar */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-accent/50">
                    <img 
                      src="/cto.jpg" 
                      alt="Pannaga J - CTO"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-sm text-accent font-semibold mb-2">Co-Lead Developer</div>
                  <div className="text-xl font-bold text-white mb-3">Pannaga J</div>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    Creative frontend specialist and UI/UX enthusiast. Expert in modern web technologies
                    and user experience design, bringing innovative interfaces to life.
                  </p>

                  <div className="flex items-center justify-center gap-2 text-accent text-sm font-medium">
                    <span>View Portfolio</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="text-center mb-10 lg:mb-12">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 text-white">
              Get In <span className="title-gradient">Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
              Have questions or want to learn more about our services? We'd love to hear from you!
            </p>
          </div>

          {/* Contact Illustration */}
          <div className="flex justify-center mb-12">
            <img 
              src="/svg/undraw_contact-us_kcoa.svg"
              alt="Contact Us"
              className="w-full max-w-md lg:max-w-lg opacity-80"
            />
          </div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  {info.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-3 text-lg">{info.label}</h4>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-muted-foreground text-sm leading-relaxed block"
                    {...(info.link.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm whitespace-pre-line leading-relaxed">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
