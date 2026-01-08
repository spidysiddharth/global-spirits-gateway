import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Truck, Shield } from "lucide-react";
// import zeliqLogo from "@/assets/zeliq-logo.jpeg";
// If you have a video, uncomment and update the filename below:
import zeliqVideo from "@/assets/zeliq-animation.mp4";
import Translate from "./Translate";

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
    description: "Quality packaging, compliant delivery",
  },
  {
    icon: Shield,
    title: "Full Compliance",
    description: "International regulatory compliance",
  },
];

const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-1 md:px-2">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              <Translate>About Us</Translate>
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-6">
              <Translate>Crafting Excellence.</Translate>{" "}
              <span className="italic text-primary"><Translate>Distributing Prestige.</Translate></span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              <Translate>We are a leading global distributor of the world's finest wines and spirits, dedicated to delivering unparalleled quality and service. With an exclusive selection of renowned brands, we bring the best of the world to your business.</Translate>
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
                    <h4 className="font-serif text-foreground mb-1"><Translate>{feature.title}</Translate></h4>
                    <p className="text-muted-foreground text-sm"><Translate>{feature.description}</Translate></p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="hero" className="group">
                <Translate>Learn More About Us</Translate>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-lg gold-border gold-glow bg-black flex items-center justify-center overflow-hidden">
              {/* Video - Uncomment when you add your video file */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover relative z-10"
              >
                <source src={zeliqVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Fallback Logo - Comment out when using video */}
              {/* <img
                src={zeliqLogo}
                alt="Zeliq Logo"
                className="w-4/5 h-4/5 object-contain relative z-10"
              /> */}
              
              {/* <div className="w-full h-full relative z-10 flex items-center justify-center">
                <p className="text-primary text-center px-8">
                  Place your video file in: <br />
                  <code className="text-xs">src/assets/zeliq-animation.mp4</code><br />
                  <span className="text-sm mt-2 block">Then uncomment the video code above</span>
                </p>
              </div> */}
              
              {/* Animated glow effects - These will work with video too */}
              <motion.div
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[10%] top-[25%] w-12 h-12 bg-primary rounded-full blur-lg"
              />
              <motion.div
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute left-[8%] top-[50%] w-14 h-14 bg-primary rounded-full blur-lg"
              />
              <motion.div
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute left-[10%] top-[75%] w-12 h-12 bg-primary rounded-full blur-lg"
              />

              {/* Animated glow effects on laurel leaves - Right side */}
              <motion.div
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute right-[10%] top-[25%] w-12 h-12 bg-primary rounded-full blur-lg"
              />
              <motion.div
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="absolute right-[8%] top-[50%] w-14 h-14 bg-primary rounded-full blur-lg"
              />
              <motion.div
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.3,
                }}
                className="absolute right-[10%] top-[75%] w-12 h-12 bg-primary rounded-full blur-lg"
              />

              {/* Top center glow */}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="absolute top-[15%] left-1/2 -translate-x-1/2 w-16 h-16 bg-primary rounded-full blur-xl"
              />

              {/* Bottom center glow */}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-16 h-16 bg-primary rounded-full blur-xl"
              />
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
