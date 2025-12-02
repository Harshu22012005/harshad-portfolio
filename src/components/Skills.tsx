import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = {
  "Web Development": ["HTML", "CSS", "JS", "React", "WordPress", "Wix", "Supabase"],
  "AI Tools": ["Lovable AI", "Cursor AI", "ChatGPT", "AI Integrations"],
  "Other Tools": ["Canva", "Meta Business Suite", "Digital Marketing", "Blogging"]
};

export default function Skills() {
  return (
    <section className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono text-primary"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-secondary font-mono text-center">{category}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {items.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="border-primary/30 text-foreground hover:bg-primary/20 transition-colors py-2 px-4"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
