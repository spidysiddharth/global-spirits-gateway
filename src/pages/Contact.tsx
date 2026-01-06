import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Linkedin,
  Building2,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Translate from "@/components/Translate";

const contactInfo = [
  {
    icon: Building2,
    title: "Headquarters",
    details: ["Zeliq Pte. Ltd.", "Singapore Business Hub", "1 Raffles Place, #50-01"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+65 6789 1234", "+65 6789 5678"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@premiumspirits.sg", "partnerships@premiumspirits.sg"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: By Appointment"],
  },
];

const offices = [
  { city: "Singapore (HQ)", country: "Singapore" },
  { city: "Dubai", country: "UAE" },
  { city: "Mumbai", country: "India" },
  { city: "Cape Town", country: "South Africa" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Message Sent",
          description: "Thank you for your inquiry. We'll get back to you shortly.",
        });
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <Translate>Contact</Translate> <span className="italic text-primary"><Translate>Us</Translate></span>
            </h1>
            <p className="text-xl text-muted-foreground">
              <Translate>Let's discuss how we can bring premium spirits to your market</Translate>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl text-foreground mb-6">
                <Translate>Send Us a Message</Translate>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      <Translate>Full Name</Translate> *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-secondary border-primary/20 focus:border-primary"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      <Translate>Email</Translate> *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-secondary border-primary/20 focus:border-primary"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      <Translate>Company</Translate>
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="bg-secondary border-primary/20 focus:border-primary"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      <Translate>Phone</Translate>
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-secondary border-primary/20 focus:border-primary"
                      placeholder="+65 1234 5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    <Translate>Message</Translate> *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-secondary border-primary/20 focus:border-primary min-h-[150px]"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <Translate>Sending...</Translate>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      <Translate>Send Message</Translate>
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl text-foreground mb-6">
                <Translate>Get in Touch</Translate>
              </h2>

              <div className="space-y-8 mb-12">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif text-foreground mb-1">
                        <Translate>{item.title}</Translate>
                      </h4>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Global Offices */}
              <div className="glass-card p-6">
                <h3 className="font-serif text-lg text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <Translate>Global Offices</Translate>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {offices.map((office) => (
                    <div key={office.city} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <div>
                        <p className="text-foreground text-sm">{office.city}</p>
                        <p className="text-muted-foreground text-xs">
                          {office.country}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <p className="text-muted-foreground text-sm mb-3"><Translate>Connect with us</Translate></p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <Translate>Follow on LinkedIn</Translate>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
