import { Link } from "react-router-dom";
import { Wine, MapPin, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/10">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Wine className="w-8 h-8 text-primary" />
              <span className="font-serif text-xl text-foreground tracking-wide">
                Zilaq<span className="text-primary">Global</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              Singapore's premier distributor of world-class wines and spirits. 
              Bridging global luxury brands to emerging markets across Asia-Pacific, 
              Middle East, and Africa.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Singapore • Dubai • Mumbai • Cape Town</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Products", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@premiumspirits.sg"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@premiumspirits.sg
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Zilaq Global Pte. Ltd. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs italic">
            Please enjoy responsibly. Must be of legal drinking age.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
