import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import Translate from "./Translate";

const testimonials = [
  {
    quote: "Working with this distributor has been a game changer for our business. Their exceptional selection and professional service have exceeded our expectations.",
    author: "Michael Thompson",
    role: "Beverage Director",
    company: "Prestige Wine & Spirits",
  },
  {
    quote: "An outstanding partner in the industry! Their expertise and commitment to quality make them a preferred choice for premium spirits.",
    author: "Sarah Collins",
    role: "Purchasing Manager",
    company: "Elite Liquor Distributors",
  },
  {
    quote: "The attention to detail in their logistics and the quality of their portfolio is unmatched. A truly reliable partner for luxury hospitality.",
    author: "James Chen",
    role: "F&B Director",
    company: "Grand Pacific Hotels",
  },
];

const Testimonials = () => {
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
            <span className="italic text-primary"><Translate>Testimonials</Translate></span>
          </h2>
          <p className="text-primary font-serif italic text-lg">
            <Translate>Trusted by Industry Leaders</Translate>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-8 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 relative z-10">
                "<Translate>{testimonial.quote}</Translate>"
              </p>

              {/* Author */}
              <div>
                <p className="font-serif text-foreground font-medium">
                  {testimonial.author}
                </p>
                <p className="text-muted-foreground text-sm">
                  <Translate>{testimonial.role}</Translate>
                </p>
                <p className="text-primary text-sm">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
