import { Linkedin, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-primary/20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © 2025 Harshad Harishchandra Pakhale. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6 text-sm font-mono">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="mailto:harshadpakhale757@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </a>
          <a href="tel:+919067572205" className="text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/harshad-pakhale-221hp/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/harshad.h.pakhale.01?igsh=MXM1MWhtYmFxcjBhbg==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}