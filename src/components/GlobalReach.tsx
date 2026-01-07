import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Truck, FileCheck, Handshake } from "lucide-react";
import Translate from "./Translate";
import worldMap from "@/assets/world-map.png";

const locations = [
  // Asia
  { name: "Singapore", x: 77.8, y: 58, region: "Asia" },
  { name: "Malaysia", x: 77.2, y: 57, region: "Asia" },
  { name: "Philippines", x: 80.5, y: 55, region: "Asia" },
  { name: "Vietnam", x: 76.5, y: 54, region: "Asia" },
  { name: "Laos", x: 76, y: 52, region: "Asia" },
  { name: "India", x: 67.5, y: 52, region: "Asia" },
  
  // Middle East
  { name: "United Arab Emirates", x: 60.5, y: 50, region: "Middle East" },
  { name: "Saudi Arabia", x: 58, y: 51, region: "Middle East" },
  { name: "Lebanon", x: 56.5, y: 48, region: "Middle East" },
  { name: "Qatar", x: 60, y: 50.5, region: "Middle East" },
  { name: "Egypt", x: 54.5, y: 50, region: "Middle East" },
  
  // Africa
  { name: "South Africa", x: 53.5, y: 85, region: "Africa" },
  { name: "Nigeria", x: 50.2, y: 56, region: "Africa" },
  { name: "Kenya", x: 56.5, y: 60, region: "Africa" },
  { name: "Ethiopia", x: 57, y: 57, region: "Africa" },
  { name: "Angola", x: 51.5, y: 66, region: "Africa" },
];

const capabilities = [
  {
    icon: Globe,
    title: "Presence Across Multiple Regions",
    description: "Distribution channels spanning Asia, Middle East, and Africa.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description: "Long-standing relationships with prestigious wineries and distilleries worldwide.",
  },
  {
    icon: Truck,
    title: "Efficient Logistics",
    description: "State-of-the-art logistics partnerships ensuring on-time delivery and product integrity.",
  },
  {
    icon: FileCheck,
    title: "Full Compliance",
    description: "In-depth compliance to international regulations for import and export.",
  },
];

const GlobalReach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20 bg-gradient-radial from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
            <Translate>Our Global</Translate> <span className="italic text-primary"><Translate>Reach</Translate></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <Translate>With an extensive distribution network and strong relationships across key markets, we bridge the gap between renowned international producers and discerning buyers.</Translate>
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto mb-16"
        >
          <div className="relative rounded-xl overflow-hidden glass-card">
            {/* World map image background */}
            <div className="relative w-full aspect-[2/1]">
              <img 
                src={worldMap} 
                alt="World Map" 
                className="w-full h-full object-cover opacity-40"
              />
              
              {/* Gradient overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />

              {/* Location markers with glow effect */}
              {locations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.05, type: "spring", stiffness: 200 }}
                  className="absolute group cursor-pointer z-10"
                  style={{ left: `${location.x}%`, top: `${location.y}%` }}
                >
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    {/* Outer glow ring */}
                    <motion.div
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="absolute inset-0 w-6 h-6 -m-2 bg-primary/40 rounded-full blur-md"
                    />
                    
                    {/* Main dot */}
                    <div className="relative w-3 h-3 bg-primary rounded-full shadow-xl shadow-primary/60 group-hover:scale-150 transition-transform border-2 border-primary/20" />
                    
                    {/* Pulse effect */}
                    <motion.div
                      animate={{
                        scale: [1, 2.5, 1],
                        opacity: [0.8, 0, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="absolute inset-0 w-3 h-3 bg-primary rounded-full"
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                    <div className="bg-card/95 backdrop-blur-sm border border-primary/40 px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
                      <p className="text-foreground font-semibold text-sm">{location.name}</p>
                      <p className="text-primary text-xs mt-0.5">{location.region}</p>
                    </div>
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                      <div className="border-[5px] border-transparent border-t-primary/40" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 right-4 glass-card p-4 text-xs border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50 animate-pulse" />
                <span className="text-foreground font-medium">Distribution Network</span>
              </div>
              <div className="text-[11px] text-muted-foreground space-y-1">
                <div className="flex justify-between gap-4">
                  <span>Asia:</span>
                  <span className="text-primary font-medium">6 markets</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Middle East:</span>
                  <span className="text-primary font-medium">5 markets</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Africa:</span>
                  <span className="text-primary font-medium">5 markets</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Capabilities - Infinite Scroll */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1600],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {/* Render capabilities twice for seamless loop */}
            {[...capabilities, ...capabilities].map((capability, index) => (
              <div
                key={index}
                className="glass-card p-6 flex-shrink-0 w-[350px]"
              >
                <capability.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-serif text-lg text-foreground mb-2">
                  <Translate>{capability.title}</Translate>
                </h4>
                <p className="text-muted-foreground text-sm">
                  <Translate>{capability.description}</Translate>
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
