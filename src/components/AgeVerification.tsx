import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Wine } from "lucide-react";

interface AgeVerificationProps {
  onVerified: () => void;
}

const AgeVerification = ({ onVerified }: AgeVerificationProps) => {
  const [birthDate, setBirthDate] = useState({ day: "", month: "", year: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const day = parseInt(birthDate.day);
    const month = parseInt(birthDate.month);
    const year = parseInt(birthDate.year);

    if (!day || !month || !year || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
      setError("Please enter a valid date of birth");
      return;
    }

    const birthDateObj = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }

    if (age >= 18) {
      localStorage.setItem("ageVerified", "true");
      onVerified();
    } else {
      setError("You must be 18 years or older to enter this website");
    }
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
              <Wine className="w-16 h-16 mx-auto text-primary animate-pulse-slow" />
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
              Premium Spirits Collection
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
                Please enter your date of birth to verify your age
              </p>

              <div className="flex gap-3 justify-center">
                <div className="flex flex-col">
                  <label className="text-xs text-muted-foreground mb-1">Day</label>
                  <input
                    type="text"
                    maxLength={2}
                    placeholder="DD"
                    value={birthDate.day}
                    onChange={(e) => setBirthDate({ ...birthDate, day: e.target.value.replace(/\D/g, "") })}
                    className="w-16 h-12 text-center bg-secondary border border-primary/30 rounded-md text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs text-muted-foreground mb-1">Month</label>
                  <input
                    type="text"
                    maxLength={2}
                    placeholder="MM"
                    value={birthDate.month}
                    onChange={(e) => setBirthDate({ ...birthDate, month: e.target.value.replace(/\D/g, "") })}
                    className="w-16 h-12 text-center bg-secondary border border-primary/30 rounded-md text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs text-muted-foreground mb-1">Year</label>
                  <input
                    type="text"
                    maxLength={4}
                    placeholder="YYYY"
                    value={birthDate.year}
                    onChange={(e) => setBirthDate({ ...birthDate, year: e.target.value.replace(/\D/g, "") })}
                    className="w-20 h-12 text-center bg-secondary border border-primary/30 rounded-md text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
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

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                Verify Age & Enter
              </Button>
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
