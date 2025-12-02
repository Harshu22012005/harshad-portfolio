import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";

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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: item * 0.05 }}
            >
              <Card className="aspect-square bg-card/50 border-primary/20 hover:border-primary/50 transition-all cursor-pointer group overflow-hidden">
                <CardContent className="p-0 h-full flex items-center justify-center relative">
                  <Image className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs font-mono text-primary">View</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8 text-sm">
          * Gallery placeholders. Connect Google Drive links here.
        </p>
      </div>
    </section>
  );
}
