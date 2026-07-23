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
import brandyB from "@/assets/brandy.jpg";
import vodkaV from "@/assets/vodka.jpg";
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
import siginiaG from "@/alexandrion-assets/siginia.png";
import lordmasterB from "@/assets/lordmaster-b.png";
const categories = [
  { id: "all", name: "All Products", description: "Explore our complete collection", image: heroBg },
  { id: "whiskey", name: "Whiskey", description: "Distinguished single malts and heritage blends aged in timeless oak.", image: whiskeyW },
  { id: "gin", name: "Gin", description: "Artisanal infusions crafted with rare botanicals and aromatic essences.", image: ginGG },
  { id: "brandy", name: "Brandy", description: "Refined elixirs distilled from the finest fruit harvests.", image: brandyB },
  { id: "rum", name: "Rum", description: "Golden cane spirits and rich reserves from tropical shores.", image: rumR },
  { id: "vodka", name: "Vodka", description: "Pristine spirits defined by unmatched purity and clarity.", image: vodkaVV },
];

const abdProducts = [
  {
    id: 1,
    name: "Iconiq White Whisky",
    category: "whiskey",
    region: "Portugal",
    description: "ICONiQ White is a blend of Scotch malts, matured malt, and Indian grain spirits, aged in bourbon oak casks.",
    image: iconicW,
  },
  {
    id: 2,
    name: "Sterling Reserve B7 Cola Mix",
    category: "whiskey",
    region: "India",
    description: "Sterling Reserve B7 Whisky Cola Mix is a new whisky-flavored product with a unique cola infusion. It maintains its whisky color even when mixed with water or soda.",
    image: sterlingB7ColaW,
  },
  {
    id: 3,
    name: "Sterling Reserve Blend Whisky",
    category: "whiskey",
    region: "France",
    description: "Sterling Reserve Blend 10 is a harmonious blend of the finest Indian grain spirits and Scotch malts, each sourced from distinct barrel origins. This exceptional blend undergoes a chill-filtered process to achieve a perfect balance, resulting in a smooth finish and a symphony of 10 unique tasting notes.",
    image: sterlingW,
  },
  {
    id: 4,
    name: "Kyron Premium Brandy",
    category: "brandy",
    region: "France",
    description: "Kyron Premium Brandy is a rare, matured French brandy with exotic flavors, packaged in an alluring bottle.",
    image: kyronB,
  },
  {
    id: 5,
    name: "Arthaus Collective Blended Malt Scotch Whisky",
    category: "whiskey",
    region: "France",
    description: "Arthaus is a fine blend malt Scotch whisky, crafted from Speyside and Highlands single malts. The whisky features a rich palette of aromas and flavors, with notes of vanilla, citrus, honey, and dried fruit.",
    image: arthausW,
  },
  {
    id: 6,
    name: "Officer’s Choice Brandy",
    category: "brandy",
    region: "Japan",
    description: "Officer’s Choice Brandy is crafted for smoothness and flavor, blended from matured grape spirit and natural ingredients.",
    image: officerB,
  },
  {
    id: 7,
    name: "Sterling Reserve Premium Cellar Whisky",
    category: "whiskey",
    region: "England",
    description: "Sterling Reserve Premium Cellar Whisky is a smooth blend of French grape spirits with a rich aroma and fruity notes.",
    image: sterlingB,
  },
  {
    id: 8,
    name: "Officer’s Choice Whisky",
    category: "whiskey",
    region: "Portugal",
    description: "Officer’s Choice whisky, enjoyed worldwide, celebrates modern officers who pursue passions and inspire others.",
    image: officerW,
  },
  
  {
    id: 9,
    name: "ICONiQ Winter Whisky",
    category: "whiskey",
    region: "Portugal",
    description: "Rich harmony of scotch malts and Indian grain spirits with cinnamon, ginger, clove, nutmeg, pepper, and cardamom.",
    image: iconicwinterW,
  },
  {
    id: 10,
    name: "X&O Barrel",
    category: "whiskey",
    region: "Portugal",
    description: "X&O is a premium blend of scotch malts and Indian grain spirits, offering a uniquely balanced taste and smooth finish. The brand name represents “Kisses and Hugs.”",
    image: XWW,
  },
  {
    id: 11,
    name: "Srishti Premium Whisky",
    category: "whiskey",
    region: "Portugal",
    description: "Srishti Premium Whisky blends Scotch Malts, Indian grain spirits, and curcumin for a unique expression without altering taste, aroma, or color.",
    image: SrishtiW,
  },
  {
    id: 12,
    name: "Officer’s Choice Blue Whisky",
    category: "whiskey",
    region: "India",
    description: "Officer’s Choice Blue is a premium whisky blend with a smooth palate experience. It features a subtle fruity, leafy, peaty, and woody aroma.",
    image: officerBlueW,
  },
  {
    id: 13,
    name: "Officer’s Choice Blended Scotch Whisky",
    category: "whiskey",
    region: "India",
    description: "Limited-edition Officer’s Choice Blended Scotch Whisky, sweet and spicy, distilled and bottled in Scotland.",
    image: officerblendedW,
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
  {
    id: 39,
    name: "Lord & Master Brandy",
    category: "brandy",
    region: "Romania",
    description: "Lord & Master Brandy is masterfully blended from premium grape spirit and natural flavors, delivering a rich and velvety smoothness.",
    image: lordmasterB,
  }
];

const alexandrionProducts = [
  {
  id: 22,
    name: "Alexander Vodka",
    category: "vodka",
    region: "Romania",
    description: "A brand with a rich history, Alexander Vodka is defined by unmatched purity and clarity. 40% ABV. Perfect for refreshing cocktails or neat serves.",
    image: alexanderV,
  },
  {
    id: 23,
    name: "Alexandrion 5 Star Brandy",
    category: "brandy",
    region: "Romania",
    description: "Everyday Greatness. A pleasant fruity bouquet with subtle woody notes reminiscent of delicate Mediterranean flavours. Features sweet notes of ripe grapes, licorice, and a vanilla finish.",
    image: alexandrion5B,
  },
  {
    id: 24,
    name: "Alexandrion 7 Star Brandy",
    category: "brandy",
    region: "Romania",
    description: "The Premium Collection. A refined spirit with a pleasant fruity bouquet and subtle woody notes. Perfect for sharing everyday greatness with friends and family.",
    image: alexandrion7B,
  },
  {
    id: 25,
    name: "Alexandrion Greek Orange",
    category: "brandy", // Flavored Brandy/Liqueur base
    region: "Greece",
    description: "The Sunshine! A flavourful variation of the original recipe, balanced with the freshness, juiciness, and sweetness of Greek oranges. Notes of copper, orange peel, and liquorice.",
    image: alexandrionOrange,
  },
  {
    id: 26,
    name: "Alexandrion Brazilian Coffee",
    category: "brandy", // Flavored Brandy/Liqueur base
    region: "Brazil",
    description: "The Exotic! An ingenious combination of flavorful Brazilian coffee and refined Alexandrion Original. Features sweet notes of walnut, dark chocolate, roasted coffee, and vanilla.",
    image: alexandrionCoffee,
  },
  {
    id: 27,
    name: "Brâncoveanu V.S.O.P Vinars",
    category: "brandy",
    region: "Romania",
    description: "Centuries Old Romanian Craft. Aged in oak barrels, this V.S.O.P is a testament to tradition, offering a distinguished taste profile.",
    image: brancoveanuVSOP,
  },
  {
    id: 28,
    name: "Brâncoveanu XO Noble",
    category: "brandy",
    region: "Romania",
    description: "Ennobled through fire and enriched by time. A premium XO Vinars that offers a complex, velvety experience for the true connoisseur.",
    image: brancoveanuXO,
  },
  {
    id: 29,
    name: "Brâncoveanu V.S.",
    category: "brandy",
    region: "Romania",
    description: "Representative of the courage of youngsters. A vibrant and accessible Vinars that maintains the high standards of the Brâncoveanu craft.",
    image: brancoveanuVS,
  },
  {
    id: 30,
    name: "Carpathian Single Malt Whisky",
    category: "whiskey",
    region: "Romania",
    description: "An Odyssey of Tastes. The first Romanian Single Malt Whisky, distilled and matured in the heart of the Carpathian Mountains. 46% ABV.",
    image: carpathianW,
  },
  {
    id: 31,
    name: "Highland Mountain Blended Scotch",
    category: "whiskey",
    region: "Scotland",
    description: "Be An Urban Highlander. A classic blended Scotch whisky delivering authentic Scottish heritage and smooth flavor.",
    image: highlandW,
  },
  {
    id: 32,
    name: "Highland Mountain Peated Scotch",
    category: "whiskey",
    region: "Scotland",
    description: "A Peated Blended Scotch Whisky for those who appreciate smoky depth and character. Be An Urban Highlander.",
    image: highlandPeatedW,
  },
  {
    id: 33,
    name: "JA.AR Bourbon Cask Single Malt",
    category: "whiskey",
    region: "International",
    description: "Alchemy Of Flavor & Fire. A multi-award winning Single Malt Whiskey aged in Bourbon casks for a rich, deep profile.",
    image: jaarBourbonW,
  },
  {
    id: 34,
    name: "JA.AR Oloroso Cask Single Malt",
    category: "whiskey",
    region: "International",
    description: "Born Out Of Fire. An exquisite Single Malt Whiskey matured in Oloroso Sherry casks, delivering layers of complexity.",
    image: jaarOlorosoW,
  },
  {
    id: 35,
    name: "JA.AR Vinsanto Cask Single Malt",
    category: "whiskey",
    region: "International",
    description: "An Audacious Journey Into The Extraordinary. A unique Single Malt Whiskey finished in Vinsanto wine casks.",
    image: jaarVinsantoW,
  },
  {
    id: 36,
    name: "Kreskova Vodka",
    category: "vodka",
    region: "Romania",
    description: "Life is better with friends and 'K'ocktails. A premium vodka ensuring purity and smoothness for every occasion.",
    image: kreskovaV,
  },
  {
    id: 37,
    name: "Red Bowler Scotch Whisky",
    category: "whiskey",
    region: "Scotland",
    description: "Be Yourself. A bold Blended Scotch Whisky available in multiple formats, designed for those who stand out from the crowd.",
    image: redBowlerW,
  },
  {
    id: 38,
    name: "Siginia Italian Gin",
    category: "gin",
    region: "Italy",
    description: "Relive An Experience. A premium Italian Gin crafted to capture the essence of the Mediterranean. 40% ABV.",
    image: siginiaG,
  },
  
];

const brandTitles: Record<string, string> = {
  alexandrion: "Alexandrion",
  abd: "Allied Blenders & Distillers",
};

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const brandFromUrl = searchParams.get("brand");

  const [activeCategory, setActiveCategory] = useState<string | null>(categoryFromUrl);
  const [activeBrand, setActiveBrand] = useState<string | null>(brandFromUrl);

  // Sync category/brand from URL on mount or change (brand switch resets to category grid)
  useEffect(() => {
    setActiveBrand(brandFromUrl);
    setActiveCategory(categoryFromUrl);
  }, [categoryFromUrl, brandFromUrl]);

  // Scroll to top instantly when category or brand changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeCategory, activeBrand]);

  const filteredAbdProducts = !activeCategory || activeBrand === "alexandrion"
    ? []
    : activeCategory === "all"
    ? abdProducts
    : abdProducts.filter((product) => product.category === activeCategory);

  const filteredAlexandrionProducts = !activeCategory || activeBrand === "abd"
    ? []
    : activeCategory === "all"
    ? alexandrionProducts
    : alexandrionProducts.filter((product) => product.category === activeCategory);

  const brandProducts =
    activeBrand === "abd" ? abdProducts : activeBrand === "alexandrion" ? alexandrionProducts : null;

  const visibleCategories = brandProducts
    ? categories.filter(
        (category) => category.id === "all" || brandProducts.some((p) => p.category === category.id)
      )
    : categories;

  const brandTitle = activeBrand ? brandTitles[activeBrand] : null;
  const showBrandSectionHeadings = !activeBrand;

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
            key={activeBrand ?? "all"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            {brandTitle ? (
              <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
                <span className="italic text-primary"><Translate>{brandTitle}</Translate></span>
              </h1>
            ) : (
              <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
                <Translate>Our</Translate> <span className="italic text-primary"><Translate>Portfolio</Translate></span>
              </h1>
            )}
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
              {visibleCategories.map((category, index) => (
                <motion.div
                  key={`${activeBrand ?? "all"}-${category.id}`}
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
              {filteredAbdProducts.length > 0 && (
                <div className="mb-16">
                  {showBrandSectionHeadings && (
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                      <Translate>Allied Blenders & Distillers</Translate>
                    </h2>
                  )}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredAbdProducts.map((product, index) => (
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
                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                        </div>

                        <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          <Translate>{product.description}</Translate>
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {filteredAlexandrionProducts.length > 0 && (
                <div>
                  {showBrandSectionHeadings && (
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                      <Translate>Alexandrion</Translate>
                    </h2>
                  )}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredAlexandrionProducts.map((product, index) => (
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
                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                        </div>

                        <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          <Translate>{product.description}</Translate>
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

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
