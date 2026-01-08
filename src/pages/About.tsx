import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, Award, Truck, Shield, Users, TrendingUp, Target, Star } from "lucide-react";
// import aboutBg from "@/assets/zeliq-logo.jpeg";
import heroBg from "@/assets/hero-bg.jpg";
// If you have a video, uncomment and update the filename below:
import zeliqVideo from "@/assets/zeliq-animation.mp4";
import Translate from "@/components/Translate";

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
              <Translate>About</Translate> <span className="italic text-primary"><Translate>Us</Translate></span>
            </h1>
            <p className="text-xl text-muted-foreground">
              <Translate>Singapore's Gateway to the World's Finest Spirits</Translate>
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
                <Translate>Our Story</Translate>
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-6">
                <Translate>Crafting Excellence.</Translate>{" "}
                <span className="italic text-primary"><Translate>Distributing Prestige.</Translate></span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <Translate>Founded in Singapore, we have established ourselves as the premier gateway connecting world-class spirits and wines to the rapidly growing markets of Asia, Middle East, and Africa.</Translate>
                </p>
                <p>
                  <Translate>Our strategic location in Singapore positions us as the ideal logistics hub, enabling seamless distribution accross global markets.</Translate>
                </p>
                <p>
                  <Translate>With significant experience in the premium spirits industry, our team brings unparalleled expertise in brand positioning, market development, and regulatory compliance.</Translate>
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
              <div className="aspect-square rounded-lg gold-border gold-glow bg-black flex items-center justify-center overflow-hidden">
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
                  src={aboutBg}
                  alt="Premium spirits"
                  className="w-4/5 h-4/5 object-contain relative z-10"
                /> */}
                
                
                
                {/* Animated glow effects - Left side */}
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

                {/* Animated glow effects - Right side */}
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
              <Translate>Our</Translate> <span className="italic text-primary"><Translate>Values</Translate></span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              <Translate>The principles that guide everything we do</Translate>
            </p>
          </motion.div>

          {/* Values - Infinite Scroll */}
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
              {/* Render values twice for seamless loop */}
              {[...values, ...values].map((value, index) => (
                <div
                  key={index}
                  className="glass-card p-8 text-center flex-shrink-0 w-[350px]"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">
                    <Translate>{value.title}</Translate>
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    <Translate>{value.description}</Translate>
                  </p>
                </div>
              ))}
            </motion.div>
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
              <Translate>Our</Translate> <span className="italic text-primary"><Translate>Expertise</Translate></span>
            </h2>
            <p className="text-primary font-serif italic text-lg">
              <Translate>Built on Knowledge. Driven by Passion.</Translate>
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
                    <Translate>{item.title}</Translate>
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    <Translate>{item.description}</Translate>
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
