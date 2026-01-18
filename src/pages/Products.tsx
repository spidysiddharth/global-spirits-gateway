import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Translate from "@/components/Translate";
// import arthausW from "@/assets/arthaus-w.png";
import heroBg from "@/assets/hero-bg.jpg";
// import officerW from "@/assets/officers-w.png";
// import sterlingW from "@/assets/sterling-w.png";
// import iconicW from "@/assets/iconic-W.png";
// import iconicwinterW from "@/assets/iconicwinter-w.png";
// import XWW from "@/assets/X&W-w.png";
// import SrishtiW from "@/assets/srishti-w.png";
// import officerBlueW from "@/assets/officerblue-w.png";
// import officerblendedW from "@/assets/officerblended-w.png";
// import sterlingB7ColaW from "@/assets/sterlingb7-w.png";
// import sterb7W from "@/assets/sterb7-w.png";
// import officestarW from "@/assets/officestar-w.png";
// import zoyaspecialG from "@/assets/zoyaspecial-g.png";
// import zoyawatermelonG from "@/assets/zoyawatermelon-g.png";
// import zoyaespressoG from "@/assets/zoyacoffe-g.png";
// import kyronB from "@/assets/kyron-b.png";
// import officerB from "@/assets/officer-b.png";
// import sterlingB from "@/assets/sterling-b.png";
// import jollyrogerR from "@/assets/jolly-r.png";
// import officerR from "@/assets/officer-r.png";
// import class21V from "@/assets/class-v.png";
import whiskeyW from "@/assets/whisky.png";
import brandyB from "@/assets/brandy.jpg";
// import vodkaV from "@/assets/vodka.jpg";
import rumR from "@/assets/rum2.jpg";
import ginGG from "@/assets/ginGG.png";
import vodkaVV from "@/assets/vodkaVV.png";
import alexanderV from "@/alexandrion-assets/alexandervodka.png";
import alexandrion5B from "@/alexandrion-assets/alexandrion5starbrandy.png";
import alexandrion7B from "@/alexandrion-assets/alexandrion7starbrandy.png";
import alexandrionOrange from "@/alexandrion-assets/alexandriongreekorange.png";
import alexandrionCoffee from "@/alexandrion-assets/alexandrionbraziliancoffee.png";
import brancoveanuVSOP from "@/alexandrion-assets/brancoveanuvsopbrandy.png";
import brancoveanuXO from "@/alexandrion-assets/brancoveaanuxobrandy.png";
import brancoveanuVS from "@/alexandrion-assets/brancoveanuvs.brandy.png";
import carpathianW from "@/alexandrion-assets/carpathionsinglemaltwhisky.png";
import highlandW from "@/alexandrion-assets/highlandmountainwhiskey.jpeg";
import highlandPeatedW from "@/alexandrion-assets/highlandmountainwhiskeypeated.jpeg";
import jaarBourbonW from "@/alexandrion-assets/singlemaltwhiskey.png";
import jaarOlorosoW from "@/alexandrion-assets/arsinglemaltwhiskey.png";
import jaarVinsantoW from "@/alexandrion-assets/vinsatosinglemaltwhiskey.png";
import kreskovaV from "@/alexandrion-assets/kreskovavodka.png";
import redBowlerW from "@/alexandrion-assets/redbowlerwhiskey.png";
import siginiaG from "@/alexandrion-assets/singlemaltwhiskey.png";
const categories = [
  { id: "all", name: "All Products", description: "Explore our complete collection", image: heroBg },
  { id: "whiskey", name: "Whiskey", description: "Distinguished single malts and heritage blends aged in timeless oak.", image: whiskeyW },
  { id: "gin", name: "Gin", description: "Artisanal infusions crafted with rare botanicals and aromatic essences.", image: ginGG },
  { id: "brandy", name: "Brandy", description: "Refined elixirs distilled from the finest fruit harvests.", image: brandyB },
  // { id: "rum", name: "Rum", description: "Golden cane spirits and rich reserves from tropical shores.", image: rumR },
  { id: "vodka", name: "Vodka", description: "Pristine spirits defined by unmatched purity and clarity.", image: vodkaVV },
];
const products = [
  {
    id: 1,
    name: "Alexander Vodka",
    category: "vodka",
    region: "Romania",
    description: "A brand with a rich history, Alexander Vodka is defined by unmatched purity and clarity. 40% ABV. Perfect for refreshing cocktails or neat serves.",
    image: alexanderV,
  },
  {
    id: 2,
    name: "Alexandrion 5 Star Brandy",
    category: "brandy",
    region: "Romania",
    description: "Everyday Greatness. A pleasant fruity bouquet with subtle woody notes reminiscent of delicate Mediterranean flavours. Features sweet notes of ripe grapes, licorice, and a vanilla finish.",
    image: alexandrion5B,
  },
  {
    id: 3,
    name: "Alexandrion 7 Star Brandy",
    category: "brandy",
    region: "Romania",
    description: "The Premium Collection. A refined spirit with a pleasant fruity bouquet and subtle woody notes. Perfect for sharing everyday greatness with friends and family.",
    image: alexandrion7B,
  },
  {
    id: 4,
    name: "Alexandrion Greek Orange",
    category: "brandy", // Flavored Brandy/Liqueur base
    region: "Greece",
    description: "The Sunshine! A flavourful variation of the original recipe, balanced with the freshness, juiciness, and sweetness of Greek oranges. Notes of copper, orange peel, and liquorice.",
    image: alexandrionOrange,
  },
  {
    id: 5,
    name: "Alexandrion Brazilian Coffee",
    category: "brandy", // Flavored Brandy/Liqueur base
    region: "Brazil",
    description: "The Exotic! An ingenious combination of flavorful Brazilian coffee and refined Alexandrion Original. Features sweet notes of walnut, dark chocolate, roasted coffee, and vanilla.",
    image: alexandrionCoffee,
  },
  {
    id: 6,
    name: "Brâncoveanu V.S.O.P Vinars",
    category: "brandy",
    region: "Romania",
    description: "Centuries Old Romanian Craft. Aged in oak barrels, this V.S.O.P is a testament to tradition, offering a distinguished taste profile.",
    image: brancoveanuVSOP,
  },
  {
    id: 7,
    name: "Brâncoveanu XO Noble",
    category: "brandy",
    region: "Romania",
    description: "Ennobled through fire and enriched by time. A premium XO Vinars that offers a complex, velvety experience for the true connoisseur.",
    image: brancoveanuXO,
  },
  {
    id: 8,
    name: "Brâncoveanu V.S.",
    category: "brandy",
    region: "Romania",
    description: "Representative of the courage of youngsters. A vibrant and accessible Vinars that maintains the high standards of the Brâncoveanu craft.",
    image: brancoveanuVS,
  },
  {
    id: 9,
    name: "Carpathian Single Malt Whisky",
    category: "whiskey",
    region: "Romania",
    description: "An Odyssey of Tastes. The first Romanian Single Malt Whisky, distilled and matured in the heart of the Carpathian Mountains. 46% ABV.",
    image: carpathianW,
  },
  {
    id: 10,
    name: "Highland Mountain Blended Scotch",
    category: "whiskey",
    region: "Scotland",
    description: "Be An Urban Highlander. A classic blended Scotch whisky delivering authentic Scottish heritage and smooth flavor.",
    image: highlandW,
  },
  {
    id: 11,
    name: "Highland Mountain Peated Scotch",
    category: "whiskey",
    region: "Scotland",
    description: "A Peated Blended Scotch Whisky for those who appreciate smoky depth and character. Be An Urban Highlander.",
    image: highlandPeatedW,
  },
  {
    id: 12,
    name: "JA.AR Bourbon Cask Single Malt",
    category: "whiskey",
    region: "International",
    description: "Alchemy Of Flavor & Fire. A multi-award winning Single Malt Whiskey aged in Bourbon casks for a rich, deep profile.",
    image: jaarBourbonW,
  },
  {
    id: 13,
    name: "JA.AR Oloroso Cask Single Malt",
    category: "whiskey",
    region: "International",
    description: "Born Out Of Fire. An exquisite Single Malt Whiskey matured in Oloroso Sherry casks, delivering layers of complexity.",
    image: jaarOlorosoW,
  },
  {
    id: 14,
    name: "JA.AR Vinsanto Cask Single Malt",
    category: "whiskey",
    region: "International",
    description: "An Audacious Journey Into The Extraordinary. A unique Single Malt Whiskey finished in Vinsanto wine casks.",
    image: jaarVinsantoW,
  },
  {
    id: 15,
    name: "Kreskova Vodka",
    category: "vodka",
    region: "Romania",
    description: "Life is better with friends and 'K'ocktails. A premium vodka ensuring purity and smoothness for every occasion.",
    image: kreskovaV,
  },
  {
    id: 16,
    name: "Red Bowler Scotch Whisky",
    category: "whiskey",
    region: "Scotland",
    description: "Be Yourself. A bold Blended Scotch Whisky available in multiple formats, designed for those who stand out from the crowd.",
    image: redBowlerW,
  },
  {
    id: 17,
    name: "Siginia Italian Gin",
    category: "gin",
    region: "Italy",
    description: "Relive An Experience. A premium Italian Gin crafted to capture the essence of the Mediterranean. 40% ABV.",
    image: siginiaG,
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
                  className="group relative aspect-[3/4] rounded-lg overflow-hidden gold-border cursor-pointer"
                  onClick={() => setActiveCategory(category.id)}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  
                  {/* Content at bottom left with proper wrapping */}
                  <div className="absolute bottom-0 left-0 p-6 pr-40">
                    <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      <Translate>{category.name}</Translate>
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
