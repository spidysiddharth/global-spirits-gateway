import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Wine, Martini, Coffee, Star } from "lucide-react";
import winesImg from "@/assets/wines.jpg";
import spiritsImg from "@/assets/spirits.jpg";
import rareImg from "@/assets/rare.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const categories = [
  { id: "all", name: "All Products", icon: Star },
  { id: "wines", name: "Fine Wines", icon: Wine },
  { id: "spirits", name: "Luxury Spirits", icon: Martini },
  { id: "rare", name: "Rare & Limited", icon: Coffee },
];

const products = [
  {
    id: 1,
    name: "Single Malt Scotch Whisky",
    category: "spirits",
    region: "Scotland",
    description: "18-year aged single malt with notes of oak and honey",
    image: spiritsImg,
  },
  {
    id: 2,
    name: "Grand Cru Bordeaux",
    category: "wines",
    region: "France",
    description: "Prestigious vintage from premier Bordeaux estates",
    image: winesImg,
  },
  {
    id: 3,
    name: "Limited Edition Cognac",
    category: "rare",
    region: "France",
    description: "Exclusive XO cognac in presentation box",
    image: rareImg,
  },
  {
    id: 4,
    name: "Premium Vodka Collection",
    category: "spirits",
    region: "Russia",
    description: "Triple-distilled for exceptional smoothness",
    image: spiritsImg,
  },
  {
    id: 5,
    name: "Reserve Champagne",
    category: "wines",
    region: "France",
    description: "Vintage champagne from renowned houses",
    image: winesImg,
  },
  {
    id: 6,
    name: "Collector's Whisky Set",
    category: "rare",
    region: "Japan",
    description: "Rare Japanese whisky collection",
    image: rareImg,
  },
  {
    id: 7,
    name: "London Dry Gin",
    category: "spirits",
    region: "England",
    description: "Craft gin with botanical infusions",
    image: spiritsImg,
  },
  {
    id: 8,
    name: "Vintage Port Wine",
    category: "wines",
    region: "Portugal",
    description: "Decades-aged port from historic vineyards",
    image: winesImg,
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = products.filter(
    (product) => activeCategory === "all" || product.category === activeCategory
  );

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
              Our <span className="italic text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Exceptional Brands. Exquisite Selection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "gold" : "ghost"}
                onClick={() => setActiveCategory(category.id)}
                className="gap-2"
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden gold-border mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  
                  {/* Region badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full text-xs text-primary border border-primary/30">
                    {product.region}
                  </div>
                </div>

                <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-12 glass-card"
          >
            <h3 className="font-serif text-2xl text-foreground mb-4">
              Interested in Our Products?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Contact our team for detailed product catalogs, pricing, and partnership opportunities.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
