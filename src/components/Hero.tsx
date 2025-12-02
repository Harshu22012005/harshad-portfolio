import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <h2 className="text-primary font-mono mb-4">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 cyber-glitch" data-text="Harshad Pakhale">
            Harshad Pakhale
          </h1>
          <h3 className="text-xl md:text-3xl text-secondary font-mono mb-6">
            AI Enthusiast & Full Stack Developer
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Building innovative solutions at the intersection of technology and entrepreneurship.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono" size="lg" asChild>
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-mono" size="lg" asChild>
              <a href="#contact">
                Contact Me <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="p-4 border border-primary/30 bg-primary/5 rounded-lg backdrop-blur-sm inline-block">
            <p className="font-mono text-sm text-primary">
              Founder of <span className="font-bold">Xplorevo</span> | E-Cell MESWCOE Leader | Web Developer
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 border-2 border-primary rounded-full animate-pulse" />
            <div className="absolute inset-4 border-2 border-secondary rounded-full" />
            <img
              src="https://harmless-tapir-303.convex.cloud/api/storage/d12054a2-4720-48ba-8714-f2dc9d5e8664"
              alt="Harshad Pakhale"
              className="w-full h-full object-cover rounded-full p-8"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}