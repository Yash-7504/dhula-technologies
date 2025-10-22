import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Mail, MapPin, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">
          
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 flex-shrink-0 touch-manipulation"
            aria-label="Dhula Technologies Home"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm">6</span>
            </div>
            <span className="heading-sm text-sm sm:text-base md:text-lg whitespace-nowrap">
              Dhula Technologies
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="body-md text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button 
              size="sm" 
              className="text-xs lg:text-sm h-9 lg:h-10" 
              asChild
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-9 h-9 sm:w-10 sm:h-10 touch-manipulation"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </Button>
            </SheetTrigger>
            
            {/* Ultra Clean Mobile Menu Drawer */}
            <SheetContent 
              side="right" 
              className="w-[300px] xs:w-[340px] sm:w-[400px] flex flex-col p-0 gap-0"
            >
              {/* Logo Header */}
              <div className="px-6 py-5 border-b border-border/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h2 className="text-base font-semibold">Dhula Technologies</h2>
                    <p className="text-xs text-muted-foreground">Blockchain Solutions</p>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-4 py-6" aria-label="Mobile navigation">
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3.5 text-base font-medium text-foreground hover:bg-accent/50 rounded-xl transition-all touch-manipulation group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  ))}
                </div>
              </nav>

              {/* Bottom Section: Contact + CTA */}
              <div className="mt-auto">
                <Separator className="mb-4" />
                
                {/* Contact Info */}
                <div className="px-6 pb-5 space-y-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Get in Touch
                  </p>
                  
                  <a
                    href="mailto:dhulatechnologies@gmail.com"
                    className="flex items-start gap-3 text-sm group touch-manipulation"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:from-brand-primary/20 group-hover:to-brand-secondary/20 transition-all">
                      <Mail className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-brand-primary transition-colors break-all">
                        dhulatechnologies@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-brand-accent" />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                      <p className="text-sm font-medium text-foreground">Chennai, India</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="px-6 pb-6">
                  <Button 
                    className="w-full h-12 text-base font-semibold group touch-manipulation shadow-lg hover:shadow-xl transition-all" 
                    asChild
                  >
                    <a href="#contact" onClick={() => setIsOpen(false)}>
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
