import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import zeliqLogo from "@/assets/zeliq-logo.jpeg";
import LanguageSwitcher from "./LanguageSwitcher";
import Translate from "./Translate";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

const marketResearchLocations = [
  // Asia
  { name: "Singapore", region: "Asia" },
  { name: "Malaysia", region: "Asia" },
  { name: "Philippines", region: "Asia" },
  { name: "Vietnam", region: "Asia" },
  { name: "Laos", region: "Asia" },
  { name: "India", region: "Asia" },
  
  // Middle East
  { name: "United Arab Emirates", region: "Middle East" },
  { name: "Saudi Arabia", region: "Middle East" },
  { name: "Lebanon", region: "Middle East" },
  { name: "Qatar", region: "Middle East" },
  { name: "Egypt", region: "Middle East" },
  
  // Africa
  { name: "South Africa", region: "Africa" },
  { name: "Nigeria", region: "Africa" },
  { name: "Kenya", region: "Africa" },
  { name: "Ethiopia", region: "Africa" },
  { name: "Angola", region: "Africa" },
];

const regions = ["Asia", "Middle East", "Africa"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMarketResearchOpen, setIsMarketResearchOpen] = useState(false);
  const [openRegion, setOpenRegion] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={zeliqLogo} alt="Zeliq" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" />
            <span className="font-serif text-xl text-foreground tracking-wide">
              Zeliq
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm tracking-wider uppercase transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <Translate>{link.name}</Translate>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                  />
                )}
              </Link>
            ))}
            
            {/* Market Research Dropdown */}
            <DropdownMenu open={isMarketResearchOpen} onOpenChange={setIsMarketResearchOpen}>
              <DropdownMenuTrigger 
                className="relative text-sm tracking-wider uppercase transition-colors hover:text-primary text-muted-foreground flex items-center gap-1"
                onMouseEnter={() => setIsMarketResearchOpen(true)}
              >
                <Translate>Market Research</Translate>
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="relative text-sm tracking-wider uppercase transition-colors text-white/70"
                onMouseEnter={() => setIsMarketResearchOpen(true)}
                onMouseLeave={() => {
                  setIsMarketResearchOpen(false);
                  setOpenRegion(null);
                }}
              >
                {/* <DropdownMenuLabel></DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                {regions.map((region) => (
                  <DropdownMenuSub 
                    key={region}
                    open={openRegion === region}
                    onOpenChange={(open) => setOpenRegion(open ? region : null)}
                  >
                    <DropdownMenuSubTrigger
                      onMouseEnter={() => setOpenRegion(region)}
                    >
                      <span>{region}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent 
                      className="w-56"
                      onMouseLeave={() => setOpenRegion(null)}
                    >
                      {marketResearchLocations
                        .filter((loc) => loc.region === region)
                        .map((country) => (
                          <DropdownMenuItem
                            key={country.name}
                            onClick={() => {
                              const countrySlug = country.name.toLowerCase().replace(/\s+/g, "-");
                              navigate(`/market-research/${countrySlug}`);
                              setIsMarketResearchOpen(false);
                              setOpenRegion(null);
                            }}
                          >
                            {country.name}
                          </DropdownMenuItem>
                        ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="hero" size="sm">
              <Link to="/contact">
                <Translate>Partner With Us</Translate>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-primary/10 mt-4 max-h-[70vh] overflow-y-auto overscroll-contain"
          >
            <div className="flex flex-col gap-4 py-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-wider uppercase py-2 transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Translate>{link.name}</Translate>
                </Link>
              ))}
              
              {/* Market Research - Simple collapsible for mobile */}
              <div className="border-t border-primary/10 pt-4">
                <details className="group">
                  <summary className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary flex items-center justify-between cursor-pointer py-2 list-none">
                    <Translate>Market Research</Translate>
                    <ChevronDown className="w-3 h-3 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-2 pl-4 space-y-4">
                    {regions.map((region) => (
                      <details key={region} className="group/region">
                        <summary className="text-xs tracking-wider uppercase text-primary/80 hover:text-primary flex items-center justify-between cursor-pointer py-2 list-none">
                          {region}
                          <ChevronDown className="w-3 h-3 transition-transform group-open/region:rotate-180" />
                        </summary>
                        <div className="mt-2 pl-4 space-y-2">
                          {marketResearchLocations
                            .filter((loc) => loc.region === region)
                            .map((country) => (
                              <Link
                                key={country.name}
                                to={`/market-research/${country.name.toLowerCase().replace(/\s+/g, "-")}`}
                                className="block text-xs uppercase text-muted-foreground hover:text-primary py-1.5 transition-colors"
                                onClick={() => setIsMobileOpen(false)}
                              >
                                {country.name}
                              </Link>
                            ))}
                        </div>
                      </details>
                    ))}
                  </div>
                </details>
              </div>
              
              <div className="py-2 border-t border-primary/10">
                <LanguageSwitcher />
              </div>
              <Button variant="hero" size="sm" className="w-full mt-2">
                <Link to="/contact">
                  <Translate>Partner With Us</Translate>
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
