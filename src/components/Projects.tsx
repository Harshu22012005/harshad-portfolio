import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Xplorevo",
    desc: "Travel tech startup platform in development stage.",
    tags: ["Startup", "AI", "Travel Tech", "Innovation"],
    status: "In Development",
    link: "https://xplorevo.com/"
  },
  {
    title: "Bharat Sewa Gateway",
    desc: "Unified Government Services Gateway powered by AI.",
    tags: ["AI", "GovTech", "React"],
    status: "Live",
    link: "https://bharatsewagateway.netlify.app/"
  },
  {
    title: "AI Track Ration",
    desc: "Smart Ration Transparency System with Auth flow.",
    tags: ["Social Impact", "Transparency", "Web"],
    status: "Live",
    link: "https://aitrackration.netlify.app/auth"
  },
  {
    title: "AI Daily Taske",
    desc: "AI Productivity Assistant for daily management (Mobile-first).",
    tags: ["AI", "Productivity", "Tools"],
    status: "Live",
    link: "https://aidailytaske.netlify.app/"
  },
  {
    title: "Dairy Ambassador Quiz",
    desc: "Interactive Quiz engine.",
    tags: ["Quiz", "Interactive", "Web"],
    status: "Live",
    link: "https://dairy-ambassador-quiz.lovable.app/"
  },
  {
    title: "BVG APT-OC",
    desc: "Landing page + forms for BVG APT-OC.",
    tags: ["Landing Page", "Forms", "Web"],
    status: "Live",
    link: "https://bvgaptoc.gensparkspace.com/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono text-primary"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-primary/20 hover:border-primary/50 transition-all flex flex-col hover:shadow-[0_0_15px_rgba(0,196,255,0.15)]">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={project.status === "Live" ? "default" : "secondary"} className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.desc}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-primary/20 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}