import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Truck, FileCheck, Handshake } from "lucide-react";

const locations = [
  { name: "Singapore (HQ)", x: 72, y: 58 },
  { name: "Dubai", x: 55, y: 42 },
  { name: "Mumbai", x: 60, y: 48 },
  { name: "Hong Kong", x: 76, y: 45 },
  { name: "Cape Town", x: 42, y: 78 },
  { name: "Jakarta", x: 74, y: 62 },
];

const capabilities = [
  {
    icon: Globe,
    title: "Presence Across Multiple Regions",
    description: "Distribution channels spanning North America, Europe, Asia, and beyond.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description: "Long-standing relationships with prestigious wineries and distilleries worldwide.",
  },
  {
    icon: Truck,
    title: "Efficient Logistics",
    description: "State-of-the-art logistics solutions ensuring on-time delivery and product integrity.",
  },
  {
    icon: FileCheck,
    title: "Full Compliance",
    description: "In-depth knowledge of international regulations and import/export compliance.",
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
            Our Global <span className="italic text-primary">Reach</span>
          </h2>
          <p className="text-primary font-serif italic text-lg mb-4">
            Connecting World-Class Brands to Premium Markets
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With an extensive distribution network and strong relationships across key markets, 
            we bridge the gap between renowned international producers and discerning buyers.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="aspect-[16/9] relative rounded-lg overflow-hidden glass-card p-8">
            {/* World map SVG - simplified outline */}
            <svg
              viewBox="0 0 100 50"
              className="w-full h-full opacity-30"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
            >
              {/* Simplified world continents */}
              <path
                d="M10,20 Q15,15 25,18 T35,15 T45,18 T50,15"
                className="text-primary"
              />
              <path
                d="M25,25 Q30,28 35,25 T45,28"
                className="text-primary"
              />
              <path
                d="M50,20 Q55,18 60,22 T70,18 T80,22"
                className="text-primary"
              />
              <path
                d="M55,30 Q60,35 65,32 T75,35"
                className="text-primary"
              />
              <path
                d="M70,35 Q75,38 80,35"
                className="text-primary"
              />
            </svg>

            {/* Location dots */}
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="absolute group"
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
                  <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping" />
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-card border border-primary/30 px-3 py-1 rounded text-xs whitespace-nowrap">
                    {location.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="glass-card p-6"
            >
              <capability.icon className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-serif text-lg text-foreground mb-2">
                {capability.title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
