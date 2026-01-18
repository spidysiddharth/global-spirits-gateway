import { Link } from "react-router-dom";
import { MapPin, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import zeliqLogo from "@/assets/zeliq-logo.jpeg";
import Translate from "./Translate";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/10">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={zeliqLogo} alt="Zeliq" className="w-10 h-10 object-contain" />
              <span className="font-serif text-xl text-foreground tracking-wide">
                Zeliq
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              <Translate>Singapore's premier distributor of world-class wines and spirits. Bringing premium luxury brands to global markets.</Translate>
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Asia, Middle East, and Africa</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4"><Translate>Quick Links</Translate></h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Products", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    <Translate>{link}</Translate>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4"><Translate>Connect</Translate></h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@premiumspirits.sg"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  partner@zeliqglobal.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+65 8147 9303"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +65 8147 9303
                </a>
                <a
                  href="tel:+971552251680"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +971 552 251 680
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/971552251680?text=Hello%2C%20Team%20Zeliq.%20I'm%20interested%20in%20learning%20more%20about%20your%20premium%20spirits%20portfolio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              {/* <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 pt-8 grid grid-cols-3 items-center gap-4">
          <p className="text-muted-foreground text-xs text-left">
            © 2025 Zeliq Global Pte. Ltd.
          </p>
          <p className="text-muted-foreground text-xs text-center">
            <Translate>All rights reserved.</Translate>
          </p>
          <p className="text-muted-foreground text-xs italic text-right pr-10">
            <Translate>Intended for audiences of legal drinking age only. Enjoy liquor responsibly.</Translate>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
