import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, Award, Truck, Shield, Users, TrendingUp, Target, Star } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue the highest standards in every aspect of our business.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest partnerships built on trust and transparency.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Collaborative relationships with brands and clients alike.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Continuously evolving to meet market demands.",
  },
];

const expertise = [
  {
    icon: Target,
    title: "Market Insights",
    description: "Deep understanding of market trends and emerging opportunities in the luxury liquor sector.",
  },
  {
    icon: Users,
    title: "Consumer Behavior",
    description: "Tailored strategies based on in-depth analysis of consumer preferences and purchasing habits.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Marketing",
    description: "Innovative campaigns that enhance brand visibility and drive demand.",
  },
  {
    icon: Star,
    title: "Brand Development",
    description: "Proven track record of cultivating and expanding premium liquor brands in competitive markets.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
              About <span className="italic text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Singapore's Gateway to the World's Finest Spirits
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-6">
                Crafting Excellence.{" "}
                <span className="italic text-primary">Distributing Prestige.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in Singapore, we have established ourselves as the premier gateway 
                  connecting world-class spirits and wines to the rapidly growing markets of 
                  Asia-Pacific, Middle East, and Africa.
                </p>
                <p>
                  Our strategic location in Singapore positions us as the ideal logistics hub, 
                  enabling seamless distribution to luxury hotels, duty-free shops, and high-end 
                  retailers across emerging markets.
                </p>
                <p>
                  With decades of combined experience in the premium spirits industry, our team 
                  brings unparalleled expertise in brand positioning, market development, and 
                  regulatory compliance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden gold-border gold-glow">
                <img
                  src={aboutBg}
                  alt="Premium spirits"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/30 rounded-lg -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-primary/20 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Our <span className="italic text-primary">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Our <span className="italic text-primary">Expertise</span>
            </h2>
            <p className="text-primary font-serif italic text-lg">
              Built on Knowledge. Driven by Passion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
