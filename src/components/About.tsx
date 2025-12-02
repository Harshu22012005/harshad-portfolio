import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, GraduationCap, Languages, Heart, User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-primary">About Me</h2>
          <p className="text-muted-foreground">Computer Engineer | AI Enthusiast | Entrepreneur</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Motivated and creative Computer Engineering student with a passion for AI, entrepreneurship, web development, and innovation. Led E-Cell MESWCOE to <span className="text-secondary font-bold">Top 4 rank at IIT Bombay NEC</span> and <span className="text-secondary font-bold">Top 10 in India at NEC Finals</span>. Founder of Xplorevo. Skilled in social media strategy, leadership, and full stack development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-6 grid gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-primary h-5 w-5" />
                  <span>harshadpakhale@xplorevo.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary h-5 w-5" />
                  <span>+91 9067572205</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-primary h-5 w-5" />
                  <span>SE Computer Engineering (8 CGPA)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Languages className="text-primary h-5 w-5" />
                  <span>English, Marathi, Hindi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="text-primary h-5 w-5" />
                  <span>Trekking, Writing, Public Speaking</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
