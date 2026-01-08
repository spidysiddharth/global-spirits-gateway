import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import whiskeyW from "@/assets/whisky.png";
import brandyB from "@/assets/brandy.jpg";
import rumR from "@/assets/rum2.jpg";
import Translate from "./Translate";
import heroBg from "@/assets/hero-bg.jpg";
import vodkaVV from "@/assets/vodkaVV.png";
import ginGG from "@/assets/ginGG.png";
const categories = [
  {
    id: "all",
    title: "All Products",
    description: "Explore our complete collection",
    image: heroBg,
  },
  {
    id: "whiskey",
    title: "Whiskey",
    description: "Distinguished single malts and heritage blends aged in timeless oak.",
    image: whiskeyW,
  },
  {
    id: "gin",
    title: "Gin",
    description: "Artisanal infusions crafted with rare botanicals and aromatic essences.",
    image: ginGG,
  },
  {
    id: "brandy",
    title: "Brandy",
    description: "Refined elixirs distilled from the finest fruit harvests.",
    image: brandyB,
  },
  {
    id: "rum",
    title: "Rum",
    description: "Golden cane spirits and rich reserves from tropical shores.",
    image: rumR,
  },
  {
    id: "vodka",
    title: "Vodka",
    description: "Pristine spirits defined by unmatched purity and clarity.",
    image: vodkaVV,
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
            <Translate>Exceptional Brands. Exquisite Selection. Engaging Markets.</Translate>
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Link to={`/products?category=${category.id}`} key={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden gold-border cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                {/* Content at bottom left with proper wrapping */}
                <div className="absolute bottom-0 left-0 p-6 pr-40">
                  <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    <Translate>{category.title}</Translate>
                  </h3>
                  <p className="text-muted-foreground text-sm break-words">
                    <Translate>{category.description}</Translate>
                  </p>
                </div>

                {/* View More button at bottom right */}
                <div className="absolute bottom-6 right-6">
                  <button className="px-6 py-2 bg-primary text-black font-medium hover:bg-primary/90 transition-colors">
                    <Translate>View More</Translate>
                  </button>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </Link>
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
