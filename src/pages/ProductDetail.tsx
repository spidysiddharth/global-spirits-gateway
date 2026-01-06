import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Wine, MapPin, Droplets, Award, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Translate from "@/components/Translate";

// Import all product images
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

const products = [
  {
    id: 1,
    name: "Sterling Reserve Blend Whisky",
    category: "whiskey",
    region: "France",
    description: "Sterling Reserve Blend 10 is a harmonious blend of the finest Indian grain spirits and Scotch malts, each sourced from distinct barrel origins. This exceptional blend undergoes a chill-filtered process to achieve a perfect balance, resulting in a smooth finish and a symphony of 10 unique tasting notes.",
    image: sterlingW,
    volume: "750ml",
    abv: "42.8%",
    tastingNotes: "Rich oak, vanilla, caramel, subtle spice",
    awards: "Gold Medal - International Spirits Competition",
  },
  {
    id: 2,
    name: "Kyron Premium Brandy",
    category: "brandy",
    region: "France",
    description: "Kyron Premium Brandy is a rare, matured French brandy with exotic flavors, packaged in an alluring bottle.",
    image: kyronB,
    volume: "750ml",
    abv: "40%",
    tastingNotes: "Fruity notes, smooth oak finish",
    awards: "",
  },
  {
    id: 3,
    name: "Arthaus Collective Blended Malt Scotch Whisky",
    category: "whiskey",
    region: "France",
    description: "Arthaus is a fine blend malt Scotch whisky, crafted from Speyside and Highlands single malts. The whisky features a rich palette of aromas and flavors, with notes of vanilla, citrus, honey, and dried fruit.",
    image: arthausW,
    volume: "750ml",
    abv: "40%",
    tastingNotes: "Vanilla, citrus, honey, dried fruit",
    awards: "",
  },
  {
    id: 4,
    name: "Officer's Choice Brandy",
    category: "brandy",
    region: "Japan",
    description: "Officer's Choice Brandy is crafted for smoothness and flavor, blended from matured grape spirit and natural ingredients.",
    image: officerB,
    volume: "750ml",
    abv: "40%",
    tastingNotes: "Smooth grape, natural warmth",
    awards: "",
  },
  {
    id: 5,
    name: "Sterling Reserve Premium Cellar Brandy",
    category: "brandy",
    region: "England",
    description: "Sterling Reserve Premium Cellar Brandy is a smooth blend of French grape spirits with a rich aroma and fruity notes.",
    image: sterlingB,
    volume: "750ml",
    abv: "40%",
    tastingNotes: "French grape, rich aroma, fruity finish",
    awards: "",
  },
  {
    id: 6,
    name: "Officer's Choice Whisky",
    category: "whiskey",
    region: "Portugal",
    description: "Officer's Choice whisky, enjoyed worldwide, celebrates modern officers who pursue passions and inspire others.",
    image: officerW,
    volume: "750ml",
    abv: "42.8%",
    tastingNotes: "Smooth, balanced, easy drinking",
    awards: "",
  },
  {
    id: 7,
    name: "Iconiq White Whisky",
    category: "whiskey",
    region: "Portugal",
    description: "ICONiQ White is a blend of Scotch malts, matured malt, and Indian grain spirits, aged in bourbon oak casks.",
    image: iconicW,
    volume: "750ml",
    abv: "42.8%",
    tastingNotes: "Bourbon oak, malt sweetness",
    awards: "",
  },
  {
    id: 8,
    name: "ICONiQ Winter Whisky",
    category: "whiskey",
    region: "Portugal",
    description: "Rich harmony of scotch malts and Indian grain spirits with cinnamon, ginger, clove, nutmeg, pepper, and cardamom.",
    image: iconicwinterW,
    volume: "750ml",
    abv: "42.8%",
    tastingNotes: "Cinnamon, ginger, clove, nutmeg, pepper, cardamom",
    awards: "",
  },
  {
    id: 9,
    name: "X&O Barrel",
    category: "whiskey",
    region: "Portugal",
    description: "X&O is a premium blend of scotch malts and Indian grain spirits, offering a uniquely balanced taste and smooth finish. The brand name represents 'Kisses and Hugs.'",
    image: XWW,
    volume: "750ml",
    abv: "42.8%",
    tastingNotes: "Balanced, smooth, premium blend",
    awards: "",
  },
  {
    id: 10,
    name: "Srishti Premium Whisky",
    category: "whiskey",
    region: "Portugal",
    description: "Srishti Premium Whisky blends Scotch Malts, Indian grain spirits, and curcumin for a unique expression without altering taste, aroma, or color.",
    image: SrishtiW,
    volume: "750ml",
    abv: "42.8%",
    tastingNotes: "Scotch malt character, unique blend",
    awards: "",
  },
  {
    id: 11,
    name: "Officer's Choice Blue Whisky",
    category: "whiskey",
    region: "India",
    description: "Officer's Choice Blue is a premium whisky blend with a smooth palate experience. It features a subtle fruity, leafy, peaty, and woody aroma.",
    image: officerBlueW,
    volume: "750ml",
    abv: "42.8%",
    tastingNotes: "Fruity, leafy, peaty, woody",
    awards: "",
  },
  {
    id: 12,
    name: "Officer's Choice Blended Scotch Whisky",
    category: "whiskey",
    region: "India",
    description: "Limited-edition Officer's Choice Blended Scotch Whisky, sweet and spicy, distilled and bottled in Scotland.",
    image: officerblendedW,
    volume: "750ml",
    abv: "40%",
    tastingNotes: "Sweet, spicy, Scottish character",
    awards: "",
  },
  {
    id: 13,
    name: "Sterling Reserve B7 Cola Mix",
    category: "whiskey",
    region: "India",
    description: "Sterling Reserve B7 Whisky Cola Mix is a new whisky-flavored product with a unique cola infusion. It maintains its whisky color even when mixed with water or soda.",
    image: sterlingB7ColaW,
    volume: "750ml",
    abv: "42.8%",
    tastingNotes: "Whisky, cola infusion",
    awards: "",
  },
  {
    id: 14,
    name: "Sterling Reserve Blend 7 Whisky",
    category: "whiskey",
    region: "India",
    description: "Introducing the All-New Sterling Reserve B7! This enhanced blend is a masterpiece of whisky-making, meticulously crafted with imported Scotch malts aged in charred oak barrels and Indian grain spirits. Experience the pinnacle of whisky excellence!",
    image: sterb7W,
    volume: "750ml",
    abv: "42.8%",
    tastingNotes: "Scotch malts, charred oak, grain spirits",
    awards: "",
  },
  {
    id: 15,
    name: "Officer's Choice Star",
    category: "whiskey",
    region: "India",
    description: "Officer's Choice Star is a smooth, rich blend for everyday celebrations.",
    image: officestarW,
    volume: "750ml",
    abv: "42.8%",
    tastingNotes: "Smooth, rich, celebratory",
    awards: "",
  },
  {
    id: 16,
    name: "Zoya Special Batch Gin",
    category: "gin",
    region: "Scotland",
    description: "Zoya premium gin is a special batch Indian gin made from 100% grain and natural spirits.",
    image: zoyaspecialG,
    volume: "750ml",
    abv: "40%",
    tastingNotes: "Juniper, botanicals, grain spirit",
    awards: "",
  },
  {
    id: 17,
    name: "Zoya Watermelon Gin",
    category: "gin",
    region: "Scotland",
    description: "ZOYA Watermelon Gin is a special batch flavored gin made with watermelon, grain, and natural spirits.",
    image: zoyawatermelonG,
    volume: "750ml",
    abv: "40%",
    tastingNotes: "Fresh watermelon, juniper, refreshing",
    awards: "",
  },
  {
    id: 18,
    name: "Zoya Espresso Coffee Gin",
    category: "gin",
    region: "Scotland",
    description: "ZOYA Espresso Coffee Gin is a special batch flavored gin with classic espresso coffee, 100% grain, natural spirits, juniper, and botanicals.",
    image: zoyaespressoG,
    volume: "750ml",
    abv: "40%",
    tastingNotes: "Espresso coffee, juniper, botanicals",
    awards: "",
  },
  {
    id: 19,
    name: "Jolly Roger Rum",
    category: "rum",
    region: "Scotland",
    description: "Jolly Roger offers a flavorful blend of matured spirits, best enjoyed with friends.",
    image: jollyrogerR,
    volume: "750ml",
    abv: "40%",
    tastingNotes: "Matured, flavorful, smooth",
    awards: "",
  },
  {
    id: 20,
    name: "Officer's Choice Rum",
    category: "rum",
    region: "Scotland",
    description: "Officer's Choice Rum has a fruity quality with sweet, heavy, and wood flavors.",
    image: officerR,
    volume: "750ml",
    abv: "40%",
    tastingNotes: "Fruity, sweet, woody",
    awards: "",
  },
  {
    id: 21,
    name: "Class 21",
    category: "vodka",
    region: "Scotland",
    description: "Class 21 is a unique grain vodka with a fresh charm, achieved through an activated carbon treatment process.",
    image: class21V,
    volume: "750ml",
    abv: "40%",
    tastingNotes: "Clean, fresh, smooth grain",
    awards: "",
  },
];

const categoryLabels: Record<string, string> = {
  whiskey: "Whiskey",
  gin: "Gin",
  brandy: "Brandy",
  rum: "Rum",
  vodka: "Vodka",
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-serif text-4xl text-foreground mb-6">
              <Translate>Product Not Found</Translate>
            </h1>
            <Button variant="hero" onClick={() => navigate("/products")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              <Translate>Back to Products</Translate>
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Background */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="absolute inset-0 opacity-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/products")}
              className="gap-2 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <Translate>Back to Products</Translate>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Side - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              {/* Category Badge */}
              <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary mb-4">
                <Translate>{categoryLabels[product.category]}</Translate>
              </div>

              {/* Product Name */}
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Region */}
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{product.region}</span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-serif text-lg text-foreground mb-3">
                  <Translate>Description</Translate>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <Translate>{product.description}</Translate>
                </p>
              </div>

              {/* Product Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Volume */}
                <div className="glass-card p-4">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Package className="w-4 h-4" />
                    <span className="text-sm font-medium"><Translate>Volume</Translate></span>
                  </div>
                  <p className="text-foreground font-serif text-lg">{product.volume}</p>
                </div>

                {/* ABV */}
                <div className="glass-card p-4">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Droplets className="w-4 h-4" />
                    <span className="text-sm font-medium"><Translate>ABV</Translate></span>
                  </div>
                  <p className="text-foreground font-serif text-lg">{product.abv}</p>
                </div>
              </div>

              {/* Tasting Notes */}
              <div className="glass-card p-6 mb-6">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Wine className="w-5 h-5" />
                  <h3 className="font-serif text-lg"><Translate>Tasting Notes</Translate></h3>
                </div>
                <p className="text-muted-foreground">
                  <Translate>{product.tastingNotes}</Translate>
                </p>
              </div>

              {/* Awards (if any) */}
              {product.awards && (
                <div className="glass-card p-6 mb-8 border-primary/40">
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <Award className="w-5 h-5" />
                    <h3 className="font-serif text-lg"><Translate>Awards & Recognition</Translate></h3>
                  </div>
                  <p className="text-muted-foreground">
                    <Translate>{product.awards}</Translate>
                  </p>
                </div>
              )}

              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild className="flex-1">
                  <a href="/contact"><Translate>Inquire About This Product</Translate></a>
                </Button>
                <Button variant="outline" size="lg" asChild className="flex-1 border-primary/30 hover:bg-primary/10">
                  <a href="/products"><Translate>View All Products</Translate></a>
                </Button>
              </div>
            </motion.div>

            {/* Right Side - Product Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 lg:sticky lg:top-32"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden gold-border gold-glow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-8 bg-gradient-to-b from-card/50 to-background"
                />
                
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products Suggestion */}
      <section className="py-12 md:py-16 border-t border-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center glass-card p-8 md:p-12"
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
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductDetail;

