import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";

const certLinks = [
  "https://drive.google.com/file/d/154zFM9uH1Zm462ypbygENxLtsBGDtU_k/view?usp=sharing",
  "https://drive.google.com/file/d/1EOsZeWoogeUr8U9v2kS4MiU_tCRPmDJg/view?usp=sharing",
  "https://drive.google.com/file/d/1F7SD2YB_S3c6OC-RJzyFbclefc0TZ1to/view?usp=sharing",
  "https://drive.google.com/file/d/1IYivtFykuFZFcfyxOCVhcwJ-LWmcHBJY/view?usp=sharing",
  "https://drive.google.com/file/d/1KKuxytFapbIsjOJK5LoxlfrCIw6oRQd2/view?usp=sharing",
  "https://drive.google.com/file/d/1M9mPA6cQSFOViAVC7_VrR6J1oHtuWcFN/view?usp=sharing",
  "https://drive.google.com/file/d/1O5xUbUksKSLc57aQrpXtc2DMSTVHqAM7/view?usp=sharing",
  "https://drive.google.com/file/d/1OZUwkhLRL8iip1oJTFivSg9CHL8BQnlc/view?usp=sharing",
  "https://drive.google.com/file/d/1QHYGrkVgvLeQ6COoEg8h3Xnbdf6sHo8n/view?usp=sharing",
  "https://drive.google.com/file/d/1QT3r8aJtmfQbGGS-K82w91k6wa7Q2mSd/view?usp=sharing",
  "https://drive.google.com/file/d/1R30az1PEnqErq6-qCQ40Sft90XRG2D5q/view?usp=sharing",
  "https://drive.google.com/file/d/1S2CYC49b2t4vmveQ3ZeLrPEHI1UTq5cB/view?usp=sharing",
  "https://drive.google.com/file/d/1UN_4HGSJjlRvl4GwH8vRLmwQ6L4VasL5/view?usp=sharing",
  "https://drive.google.com/file/d/1UPmlMFHDyGWfW2ksUwAgshY3tiBS0RQt/view?usp=sharing",
  "https://drive.google.com/file/d/1Xp9lp3OUp2caZnpDpvmhC7yYnw2tx7Za/view?usp=sharing",
  "https://drive.google.com/file/d/1_-cXFs_Z3MzaVmtgpLFyq4mk7PxN3xSl/view?usp=sharing",
  "https://drive.google.com/file/d/1dCXY2WIVF5SwGeqFjaeJ-UMtjkasRet2/view?usp=sharing",
  "https://drive.google.com/file/d/1j9zbfOc-JXTd-nUpijWyMuNRTsU8zOoI/view?usp=sharing",
  "https://drive.google.com/file/d/1paYHBfM_hn1r_Kjj2B3vIKUqDKcTXADa/view?usp=sharing",
  "https://drive.google.com/file/d/1psEqSsAAdz-agkovw_UDqPcTEb5eABFy/view?usp=sharing",
  "https://drive.google.com/file/d/1q2HK6V34-LsutcwoAliFTfFgTi4yraDj/view?usp=sharing",
  "https://drive.google.com/file/d/1uYVQ4rHPxpv0KGbxkcCu5SPvqFiVZp-g/view?usp=sharing",
  "https://drive.google.com/file/d/1vTF_frwhXToHahn4dwaNmFIrAsINXSM5/view?usp=sharing",
  "https://drive.google.com/file/d/1wd3Zde2OfAOOAXtte1ovjkLnditubsgi/view?usp=sharing",
  "https://drive.google.com/file/d/1zaL_X2TP1M4140Ate8E_OHNeiKadBEK3/view?usp=sharing"
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono text-primary"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Card className="bg-card/50 border-primary/20 hover:border-secondary/50 transition-all cursor-pointer group h-full hover:shadow-[0_0_15px_rgba(255,0,128,0.15)]">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4 h-full justify-center">
                    <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:text-secondary transition-colors">
                      <FileText className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-2">Certification {index + 1}</h3>
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                        <span>View Certificate</span>
                        <ExternalLink className="h-3 w-3" />
                      </div>
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