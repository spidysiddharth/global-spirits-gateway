import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Truck, Shield } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Distribution across Asia-Pacific, Middle East & Africa",
  },
  {
    icon: Award,
    title: "Premium Selection",
    description: "Curated collection of world-renowned brands",
  },
  {
    icon: Truck,
    title: "Expert Logistics",
    description: "Temperature-controlled, compliant delivery",
  },
  {
    icon: Shield,
    title: "Full Compliance",
    description: "International regulatory expertise",
  },
];

const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-6">
              Crafting Excellence.{" "}
              <span className="italic text-primary">Distributing Prestige.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We are a leading importer and distributor of the world's finest wines 
              and spirits, dedicated to delivering unparalleled quality and service. 
              With an exclusive selection of renowned brands, we bring the best of 
              the world to your business.
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="hero" className="group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden gold-border gold-glow">
              <img
                src={aboutBg}
                alt="Premium spirits on oak barrel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/30 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
