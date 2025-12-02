import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    year: "2023–2027",
    degree: "TE Computer Engineering",
    school: "MESWCOE",
    score: "CGPA 8.0"
  },
  {
    year: "2021–2023",
    degree: "HSC",
    school: "Venkatrao Deshmukh College",
    score: "70.60%"
  },
  {
    year: "2020–2021",
    degree: "SSC",
    school: "Janta Vidya Mandir",
    score: "90.20%"
  }
];

export default function Education() {
  return (
    <section className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono text-primary"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(0,196,255,0.1)]">
                <CardHeader>
                  <div className="text-secondary font-mono text-sm mb-2">{item.year}</div>
                  <CardTitle className="text-xl">{item.degree}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{item.school}</p>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                    {item.score}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
