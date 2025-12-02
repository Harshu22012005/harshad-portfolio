import { motion } from "framer-motion";

const journey = [
  {
    period: "1st–5th",
    title: "Terana Sakhar Kharkhana Prathmik Vidyalaya",
    location: "Dhoki Town"
  },
  {
    period: "6th–10th",
    title: "Janta Vidya Mandir",
    location: "Murud"
  },
  {
    period: "11th–12th",
    title: "Venkatrao Deshmukh Juniour College",
    location: "Latur"
  },
  {
    period: "B.E Computer Engineering",
    title: "MESWCOE Pune",
    location: "Pune"
  }
];

export default function Timeline() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center font-mono text-primary"
        >
          My Journey
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30" />

          <div className="space-y-12">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center justify-between ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-5/12" />
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(0,196,255,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="w-5/12">
                  <div className="p-6 rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                    <span className="text-secondary font-mono text-sm">{item.period}</span>
                    <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
