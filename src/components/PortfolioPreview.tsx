import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import whiskeyW from "@/assets/whisky.png";
import ginG from "@/assets/gin.jpg";
import brandyB from "@/assets/brandy.jpg";
import vodkaV from "@/assets/vodka.jpg";
import rumR from "@/assets/rum2.jpg";
import Translate from "./Translate";

const categories = [
  {
    title: "Whiskey",
    description: "Exceptional vintages from world-renowned vineyards",
    image: whiskeyW,
  },
  {
    title: "Gin",
    description: "Premium whisky, vodka, gin & cognac collections",
    image: ginG,
  },
  {
    title: "Brandy",
    description: "Exclusive collector's items and rare finds",
    image: brandyB,
  },{
    title: "Rum",
    description: "Exclusive collector's items and rare finds",
    image: rumR,
  },{
    title: "Vodka",
    description: "Exclusive collector's items and rare finds",
    image: vodkaV,
  },
];

const PortfolioPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
            <Translate>Our</Translate> <span className="italic text-primary"><Translate>Portfolio</Translate></span>
          </h2>
          <p className="text-primary font-serif italic text-lg">
            <Translate>Exceptional Brands. Exquisite Selection.</Translate>
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden gold-border"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl text-foreground mb-2">
                  <Translate>{category.title}</Translate>
                </h3>
                <p className="text-muted-foreground text-sm">
                  <Translate>{category.description}</Translate>
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link to="/products">
            <Button variant="hero" size="lg" className="group">
              <Translate>Explore Our Portfolio</Translate>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
