import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Phone, Linkedin, Loader2, Instagram, Calendar } from "lucide-react";

export default function Contact() {
  const sendMessage = useMutation(api.messages.send);
  const [isLoading, setIsLoading] = useState(false);
  const [isAppointment, setIsAppointment] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    try {
      await sendMessage({
        name,
        email,
        message,
        isAppointment,
      });
      
      toast.success("Message sent successfully!");
      
      // WhatsApp Redirection
      const phoneNumber = "919067572205";
      const whatsappMessage = `*New Contact Form Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}\n*Book Appointment:* ${isAppointment ? "YES" : "No"}`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      
      window.open(whatsappUrl, "_blank");

      (e.target as HTMLFormElement).reset();
      setIsAppointment(false);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono text-primary"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 border-primary/20 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-mono text-secondary">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Feel free to reach out for collaborations, opportunities, or just to say hi!
                </p>
                
                <div className="space-y-4">
                  <a href="mailto:harshadpakhale757@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>harshadpakhale757@gmail.com</span>
                  </a>
                  
                  <a href="tel:+919067572205" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span>+91 9067572205</span>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/harshad-pakhale-221hp/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <span>LinkedIn Profile</span>
                  </a>

                  <a href="https://www.instagram.com/harshad.h.pakhale.01?igsh=MXM1MWhtYmFxcjBhbg==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <span>Instagram Profile</span>
                  </a>
                </div>

                <p className="text-xs text-muted-foreground mt-8">
                  "Your contact info will only be used to respond."
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" name="name" required placeholder="Your Name" className="bg-background/50 border-primary/20" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" name="email" type="email" required placeholder="your@email.com" className="bg-background/50 border-primary/20" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" name="message" required placeholder="How can I help you?" className="min-h-[150px] bg-background/50 border-primary/20" />
                  </div>

                  <div className="flex items-center space-x-2 py-2">
                    <Checkbox 
                      id="appointment" 
                      checked={isAppointment}
                      onCheckedChange={(checked) => setIsAppointment(checked as boolean)}
                      className="border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <label
                      htmlFor="appointment"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2 cursor-pointer"
                    >
                      <Calendar className="h-4 w-4 text-secondary" />
                      Book an appointment
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={isLoading}>
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send Message & Notify WhatsApp"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}