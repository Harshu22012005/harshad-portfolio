import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Award, Users, Instagram, Palette } from "lucide-react";

const experiences = [
  {
    title: "Founder & CEO",
    org: "Xplorevo Pvt Ltd",
    period: "2025–Present",
    icon: Briefcase,
    details: ["Travel tech startup under Clause 39", "Ideation & funding phase", "Visit: xplorevo.com"]
  },
  {
    title: "Founder & Overall Coordinator",
    org: "E-Cell MESWCOE",
    period: "2024–Present",
    icon: Users,
    details: ["Led Illuminate, IGNITEPITCH & Innovatexpo", "Managed 30+ team", "Coordinated with industry mentors"]
  },
  {
    title: "Social Media Manager",
    org: "MESWCOE Instagram",
    period: "2024",
    icon: Instagram,
    details: ["Increased engagement by 40%", "Designed event marketing campaigns"]
  },
  {
    title: "Graphic Designer",
    org: "Electro Infinity Club",
    period: "2024–25",
    icon: Palette,
    details: ["Posters, banners, digital assets"]
  },
  {
    title: "Campus Ambassador",
    org: "IIT Mandi & IIT Bombay",
    period: "2024",
    icon: Award,
    details: ["Represented college at national level"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono text-primary"
        >
          Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-primary/20 hover:border-secondary/50 transition-all group">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:text-secondary transition-colors">
                    <exp.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{exp.org}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs font-mono text-secondary mb-4">{exp.period}</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-lg border border-accent/30 bg-accent/5 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-accent mb-4 font-mono">Key Achievements</h3>
          <ul className="grid md:grid-cols-3 gap-4 text-sm">
            <li className="flex items-center gap-2">
              <Award className="h-4 w-4 text-accent" />
              Top 10 NEC Finalist at E-Summit 2025, IIT Bombay
            </li>
            <li className="flex items-center gap-2">
              <Users className="h-4 w-4 text-accent" />
              Led VentureSphere team
            </li>
            <li className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-accent" />
              Organized Rajgad Trek (Pilot Trip of Xplorevo)
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}