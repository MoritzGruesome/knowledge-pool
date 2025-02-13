
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 animate-fade-up">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Get In Touch
      </h2>
      <div className="max-w-md mx-auto space-y-8">
        <div className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors">
          <Mail className="w-6 h-6" />
          <a href="mailto:moritzgruss@hotmail.se" className="text-lg">
            moritzgruss@hotmail.se
          </a>
        </div>
        <div className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors">
          <Phone className="w-6 h-6" />
          <span className="text-lg">+31 6 15 18 40 36</span>
        </div>
        <div className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors">
          <Linkedin className="w-6 h-6" />
          <a 
            href="https://www.linkedin.com/in/moritz-grüss-b92b79282/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
