import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import zeliqLogo from "@/assets/zeliq-logo.jpeg";
import { useLanguage, LANGUAGES } from "@/contexts/LanguageContext";
import { Globe, Mail } from "lucide-react";

interface AgeVerificationProps {
  onVerified: () => void;
}

const AgeVerification = ({ onVerified }: AgeVerificationProps) => {
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language, setLanguage } = useLanguage();

  // Generate year list from 1900 to current year
  const yearList = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let y = currentYear; y >= 1900; y--) {
      years.push(y);
    }
    return years;
  }, []);

  const saveEmailToDatabase = async (emailAddress: string) => {
    try {
      const response = await fetch('http://localhost:3001/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailAddress }),
      });

      const data = await response.json();
      if (!data.success) {
        console.error('Failed to save email:', data.message);
      }
    } catch (error) {
      console.error('Error saving email:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent, skipEmail = false) => {
    e.preventDefault();
    setError("");

    if (!year) {
      setError("Please select your birth year");
      return;
    }

    const birthYear = parseInt(year);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if (age < 18) {
      setError("You must be 18 years or older to enter this website");
      return;
    }

    setIsSubmitting(true);

    // Save email to database if provided
    if (!skipEmail && email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address");
        setIsSubmitting(false);
        return;
      }
      await saveEmailToDatabase(email);
    }

    localStorage.setItem("ageVerified", "true");
    setIsSubmitting(false);
    onVerified();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-2xl" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative z-10 max-w-md w-full mx-4"
        >
          <div className="glass-card p-8 md:p-12 text-center gold-glow">
            {/* Logo/Icon */}
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <img src={zeliqLogo} alt="Zeliq" className="w-20 h-20 mx-auto object-contain animate-pulse-slow" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-serif text-3xl md:text-4xl text-foreground mb-2"
            >
              Welcome
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-primary font-serif italic text-lg mb-8"
            >
              Zeliq
            </motion.p>

            {/* Age verification form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <p className="text-muted-foreground text-sm mb-4">
                Please select your language and birth year
              </p>

              {/* Language Selection */}
              <div className="flex flex-col items-center">
                <label className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                  <Globe className="w-3 h-3" />
                  Select Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="w-full max-w-xs h-12 px-4 bg-secondary border border-primary/30 rounded-md text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.nativeName} ({lang.name})
                    </option>
                  ))}
                </select>
              </div>

              {/* Email Input (Optional) */}
              <div className="flex flex-col items-center">
                <label className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                  <Mail className="w-3 h-3" />
                  Email (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full max-w-xs h-12 px-4 bg-secondary border border-primary/30 rounded-md text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
                <p className="text-[10px] text-muted-foreground/70 mt-1 text-center">
                  Stay updated with our latest offerings
                </p>
              </div>

              {/* Birth Year Selection */}
              <div className="flex flex-col items-center">
                <label className="text-xs text-muted-foreground mb-3">Birth Year</label>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-32 h-12 text-center bg-secondary border border-primary/30 rounded-md text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer px-3"
                >
                  <option value="">Select Year</option>
                  {yearList.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-destructive text-sm"
                >
                  {error}
                </motion.p>
              )}

              <div className="space-y-3">
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Verifying..." : "Verify Age & Enter"}
                </Button>
                
                {/* <Button 
                  type="button"
                  onClick={(e) => handleSubmit(e, true)}
                  variant="outline" 
                  size="lg" 
                  className="w-full border-primary/30 hover:bg-primary/10"
                  disabled={isSubmitting}
                >
                  Continue without Email
                </Button> */}
              </div>
            </motion.form>

            {/* Disclaimer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 text-xs text-muted-foreground"
            >
              By entering this site, you agree that you are of legal drinking age in your country of residence.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AgeVerification;
