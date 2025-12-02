import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Image, ExternalLink } from "lucide-react";

const graphicsLinks = [
  "https://drive.google.com/file/d/1--_NuECbvnjFkUs-bW1R4tTHW5hXbGSE/view?usp=sharing",
  "https://drive.google.com/file/d/1-UGPuAl_Ej_BYqeh9LzFS6Hw5JZsGiDk/view?usp=sharing",
  "https://drive.google.com/file/d/1-da91ToQBEjqiH36lclmZTV7qq9RwjOL/view?usp=sharing",
  "https://drive.google.com/file/d/1KgoIx0koGu0g2IT76IQvdk3C206tK1hg/view?usp=sharing",
  "https://drive.google.com/file/d/1ORn-4pxNVJJ-SNgJwsUMAnYqTtO2e9kA/view?usp=sharing",
  "https://drive.google.com/file/d/1f4oZ_WWBa97gjxqLscawBQZDNd7Eg8b4/view?usp=sharing",
  "https://drive.google.com/file/d/1jRigCPXgCcif5qnQsmPAr1GiDHFsLJWt/view?usp=sharing",
  "https://drive.google.com/file/d/1kNw8zJ5DDUOg4XqBt_arl-RCs2NWojNS/view?usp=sharing",
  "https://drive.google.com/file/d/1lBxkVTENVoulOJMWSB4MBZR-acVTn9wv/view?usp=sharing",
  "https://drive.google.com/file/d/1lwbT06lEoByn-PI2o94-JnaMWXXZV5Wg/view?usp=sharing",
  "https://drive.google.com/file/d/1tKAjFcUlXetvjWMlVO9C7d5BoUXVtWKa/view?usp=sharing",
  "https://drive.google.com/file/d/1xpu9EfyIGdY2g6752MQ-sNsDDveKuR3i/view?usp=sharing",
  "https://drive.google.com/file/d/1yLbECGP8R7khLlAhw5q8BZcr8FLpy5To/view?usp=sharing"
];

export default function Graphics() {
  return (
    <section id="graphics" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono text-primary"
        >
          Graphics Portfolio
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {graphicsLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Card className="aspect-square bg-card/50 border-primary/20 hover:border-primary/50 transition-all cursor-pointer group overflow-hidden">
                  <CardContent className="p-0 h-full flex items-center justify-center relative">
                    <Image className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col gap-2">
                      <ExternalLink className="h-6 w-6 text-primary" />
                      <span className="text-xs font-mono text-primary">View Graphic {index + 1}</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}