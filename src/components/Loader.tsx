import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 80); // 5 seconds approx (100/2 * 80ms = 4000ms + buffer)

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Rotating Rings */}
        <motion.div
          className="absolute inset-0 border-4 border-primary/30 rounded-full border-t-primary"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-4 border-4 border-secondary/30 rounded-full border-b-secondary"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Profile Image */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-primary shadow-[0_0_20px_rgba(0,196,255,0.5)]">
          <img 
            src="https://harmless-tapir-303.convex.cloud/api/storage/d12054a2-4720-48ba-8714-f2dc9d5e8664" 
            alt="Harshad Pakhale" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-xl font-mono text-primary mb-2 tracking-widest">
          INITIALIZING SYSTEM...
        </h2>
        <p className="text-muted-foreground font-mono text-sm">
          Harshad Pakhale – Loading Your Experience… {progress}%
        </p>
        <div className="w-64 h-1 bg-muted mt-4 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    </div>
  );
}
