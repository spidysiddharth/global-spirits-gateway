import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Translate from "@/components/Translate";
import arthausW from "@/assets/arthaus-w.png";
import heroBg from "@/assets/hero-bg.jpg";
import officerW from "@/assets/officers-w.png";
import sterlingW from "@/assets/sterling-w.png";
import iconicW from "@/assets/iconic-W.png";
import iconicwinterW from "@/assets/iconicwinter-w.png";
import XWW from "@/assets/X&W-w.png";
import SrishtiW from "@/assets/srishti-w.png";
import officerBlueW from "@/assets/officerblue-w.png";
import officerblendedW from "@/assets/officerblended-w.png";
import sterlingB7ColaW from "@/assets/sterlingb7-w.png";
import sterb7W from "@/assets/sterb7-w.png";
import officestarW from "@/assets/officestar-w.png";
import zoyaspecialG from "@/assets/zoyaspecial-g.png";
import zoyawatermelonG from "@/assets/zoyawatermelon-g.png";
import zoyaespressoG from "@/assets/zoyacoffe-g.png";
import kyronB from "@/assets/kyron-b.png";
import officerB from "@/assets/officer-b.png";
import sterlingB from "@/assets/sterling-b.png";
import jollyrogerR from "@/assets/jolly-r.png";
import officerR from "@/assets/officer-r.png";
import class21V from "@/assets/class-v.png";
import whiskeyW from "@/assets/whisky.png";
import ginG from "@/assets/gin.jpg";
import brandyB from "@/assets/brandy.jpg";
import vodkaV from "@/assets/vodka.jpg";
import rumR from "@/assets/rum2.jpg";
const categories = [
  { id: "all", name: "All Products", image: heroBg },
  { id: "whiskey", name: "Whiskey", image: whiskeyW },
  { id: "gin", name: "Gin", image: ginG },
  { id: "brandy", name: "Brandy", image: brandyB },
  { id: "rum", name: "Rum", image: rumR },
  { id: "vodka", name: "Vodka", image: vodkaV },
];

const products = [
  {
    id: 1,
    name: "Sterling Reserve Blend Whisky",
    category: "whiskey",
    region: "France",
    description: "Sterling Reserve Blend 10 is a harmonious blend of the finest Indian grain spirits and Scotch malts, each sourced from distinct barrel origins. This exceptional blend undergoes a chill-filtered process to achieve a perfect balance, resulting in a smooth finish and a symphony of 10 unique tasting notes.",
    image: sterlingW,
  },
  {
    id: 2,
    name: "Kyron Premium Brandy",
    category: "brandy",
    region: "France",
    description: "Kyron Premium Brandy is a rare, matured French brandy with exotic flavors, packaged in an alluring bottle.",
    image: kyronB,
  },
  {
    id: 3,
    name: "Arthaus Collective Blended Malt Scotch Whisky",
    category: "whiskey",
    region: "France",
    description: "Arthaus is a fine blend malt Scotch whisky, crafted from Speyside and Highlands single malts. The whisky features a rich palette of aromas and flavors, with notes of vanilla, citrus, honey, and dried fruit.",
    image: arthausW,
  },
  {
    id: 4,
    name: "Officer’s Choice Brandy",
    category: "brandy",
    region: "Japan",
    description: "Officer’s Choice Brandy is crafted for smoothness and flavor, blended from matured grape spirit and natural ingredients.",
    image: officerB,
  },
  {
    id: 5,
    name: "Sterling Reserve Premium Cellar Brandy",
    category: "brandy",
    region: "England",
    description: "Sterling Reserve Premium Cellar Brandy is a smooth blend of French grape spirits with a rich aroma and fruity notes.",
    image: sterlingB,
  },
  {
    id: 6,
    name: "Officer’s Choice Whisky",
    category: "whiskey",
    region: "Portugal",
    description: "Officer’s Choice whisky, enjoyed worldwide, celebrates modern officers who pursue passions and inspire others.",
    image: officerW,
  },
  {
    id: 7,
    name: "Iconiq White Whisky",
    category: "whiskey",
    region: "Portugal",
    description: "ICONiQ White is a blend of Scotch malts, matured malt, and Indian grain spirits, aged in bourbon oak casks.",
    image: iconicW,
  },
  {
    id: 8,
    name: "ICONiQ Winter Whisky",
    category: "whiskey",
    region: "Portugal",
    description: "Rich harmony of scotch malts and Indian grain spirits with cinnamon, ginger, clove, nutmeg, pepper, and cardamom.",
    image: iconicwinterW,
  },
  {
    id: 9,
    name: "X&O Barrel",
    category: "whiskey",
    region: "Portugal",
    description: "X&O is a premium blend of scotch malts and Indian grain spirits, offering a uniquely balanced taste and smooth finish. The brand name represents “Kisses and Hugs.”",
    image: XWW,
  },
  {
    id: 10,
    name: "Srishti Premium Whisky",
    category: "whiskey",
    region: "Portugal",
    description: "Srishti Premium Whisky blends Scotch Malts, Indian grain spirits, and curcumin for a unique expression without altering taste, aroma, or color.",
    image: SrishtiW,
  },
  {
    id: 11,
    name: "Officer’s Choice Blue Whisky",
    category: "whiskey",
    region: "India",
    description: "Officer’s Choice Blue is a premium whisky blend with a smooth palate experience. It features a subtle fruity, leafy, peaty, and woody aroma.",
    image: officerBlueW,
  },
  {
    id: 12,
    name: "Officer’s Choice Blended Scotch Whisky",
    category: "whiskey",
    region: "India",
    description: "Limited-edition Officer’s Choice Blended Scotch Whisky, sweet and spicy, distilled and bottled in Scotland.",
    image: officerblendedW,
  },
  {
    id: 13,
    name: "Sterling Reserve B7 Cola Mix",
    category: "whiskey",
    region: "India",
    description: "Sterling Reserve B7 Whisky Cola Mix is a new whisky-flavored product with a unique cola infusion. It maintains its whisky color even when mixed with water or soda.",
    image: sterlingB7ColaW,
  },
  {
    id: 14,
    name: "Sterling Reserve Blend 7 Whisky",
    category: "whiskey",
    region: "India",
    description: " Introducing the All-New Sterling Reserve B7! This enhanced blend is a masterpiece of whisky-making, meticulously crafted with imported Scotch malts aged in charred oak barrels and Indian grain spirits. Experience the pinnacle of whisky excellence!",
    image: sterb7W,
  },
  {
    id: 15,
    name: "Officer’s Choice Star",
    category: "whiskey",
    region: "India",
    description: "Officer’s Choice Star is a smooth, rich blend for everyday celebrations.",
    image: officestarW,
  },
  {
    id: 16,
    name: "Zoya Special Batch Gin",
    category: "gin",
    region: "Scotland",
    description: "Zoya premium gin is a special batch Indian gin made from 100% grain and natural spirits.",
    image: zoyaspecialG,
  },
  {
    id: 17,
    name: "Zoya Watermelon Gin",
    category: "gin",
    region: "Scotland",
    description: "ZOYA Watermelon Gin is a special batch flavored gin made with watermelon, grain, and natural spirits.",
    image: zoyawatermelonG,
  },
  {
    id: 18,
    name: "Zoya Espresso Coffee Gin",
    category: "gin",
    region: "Scotland",
    description: "ZOYA Espresso Coffee Gin is a special batch flavored gin with classic espresso coffee, 100% grain, natural spirits, juniper, and botanicals.",
    image: zoyaespressoG,
  },
  {
    id: 19,
    name: "Jolly Roger Rum",
    category: "rum",
    region: "Scotland",
    description: "Jolly Roger offers a flavorful blend of matured spirits, best enjoyed with friends.",
    image: jollyrogerR,
  },
  {
    id: 20,
    name: "Officer’s Choice Rum",
    category: "rum",
    region: "Scotland",
    description: "Officer’s Choice Rum has a fruity quality with sweet, heavy, and wood flavors.",
    image: officerR,
  },
  {
    id: 21,
    name: "Class 21",
    category: "vodka",
    region: "Scotland",
    description: "Class 21 is a unique grain vodka with a fresh charm, achieved through an activated carbon treatment process.",
    image: class21V,
  },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryFromUrl);

  // Set category from URL on mount
  useEffect(() => {
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  // Scroll to top instantly when category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeCategory]);

  const filteredProducts = !activeCategory 
    ? [] 
    : activeCategory === "all"
    ? products
    : products.filter((product) => product.category === activeCategory);

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
              <Translate>Our</Translate> <span className="italic text-primary"><Translate>Portfolio</Translate></span>
            </h1>
            <p className="text-xl text-muted-foreground">
              <Translate>Exceptional Brands. Exquisite Selection. Engaging Markets.</Translate>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories or Back Button */}
      {activeCategory && (
        <section className="py-6 border-b border-primary/10">
          <div className="container mx-auto px-4 md:px-6">
            <Button
              variant="ghost"
              onClick={() => setActiveCategory(null)}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <Translate>Back to Categories</Translate>
            </Button>
          </div>
        </section>
      )}

      {/* Category Selection or Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          {activeCategory === null ? (
            /* Category Selection - Image Grid */
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveCategory(category.id)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden gold-border">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    
                    {/* Category Name */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="font-serif text-3xl text-foreground text-center px-4 drop-shadow-lg group-hover:text-primary transition-colors">
                        <Translate>{category.name}</Translate>
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Show products for selected category (including "all") */
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    {/* <Link to={`/products/${product.id}`} className="group block"> */}
                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden gold-border mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                        
                        {/* Region badge */}
                        {/* <div className="absolute top-4 left-4 px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full text-xs text-primary border border-primary/30">
                          {product.region}
                        </div> */}

                        {/* View Details overlay on hover */}
                        {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
                          <span className="px-4 py-2 bg-primary text-background font-medium rounded-full text-sm">
                            <Translate>View Details</Translate>
                          </span>
                        </div> */}
                      </div>

                      <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        <Translate>{product.description}</Translate>
                      </p>
                    {/* </Link> */}
                  </motion.div>
                ))}
              </div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center mt-16 p-12 glass-card"
              >
                <h3 className="font-serif text-2xl text-foreground mb-4">
                  <Translate>Interested in Our Products?</Translate>
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  <Translate>Contact our team for detailed product catalogs, pricing, and partnership opportunities.</Translate>
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="/contact"><Translate>Contact Us</Translate></a>
                </Button>
              </motion.div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
