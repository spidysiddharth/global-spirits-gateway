import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import zeliqLogo from "@/assets/zeliq-logo.jpeg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center px-4"
      >
        <img src={zeliqLogo} alt="Zeliq" className="w-24 h-24 mx-auto object-contain mb-8 opacity-50" />
        
        <h1 className="font-serif text-6xl md:text-8xl text-foreground mb-4">
          404
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for seems to have been lost in our cellar.
        </p>
        
        <Link to="/">
          <Button variant="hero" size="lg">
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </Button>
        </Link>
      </motion.div>
    </main>
  );
};

export default NotFound;
