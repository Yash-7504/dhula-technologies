import { Separator } from "@/components/ui/separator";
import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-8 sm:py-10 md:py-12 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          {/* Company Info - Takes full width on mobile, 2 cols on large screens */}
          <div className="sm:col-span-2 lg:col-span-2">
            {/* Logo and Name */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">6</span>
              </div>
              <span className="heading-sm text-base sm:text-lg">Dhula Technologies</span>
            </div>
            
            {/* Description */}
            <p className="body-md text-muted-foreground max-w-md mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              A group of final year CSE students specializing in blockchain technologies, providing affordable and quality blockchain services.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="https://www.instagram.com/dhula_technologies?igsh=dnBwOGoyYjlsM3o0" 
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full glass-card flex items-center justify-center hover:border-brand-primary/50 transition-all touch-manipulation"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="mailto:dhulatechnologies@gmail.com"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full glass-card flex items-center justify-center hover:border-brand-primary/50 transition-all touch-manipulation"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-2 sm:mt-0">
            <h3 className="heading-sm mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {["Services", "About Us", "Technology", "Case Studies", "Blog"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="body-sm text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base inline-block py-0.5"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-2 sm:mt-0">
            <h3 className="heading-sm mb-3 sm:mb-4 text-base sm:text-lg">Contact</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              <li className="body-sm text-muted-foreground text-sm sm:text-base">
                <a 
                  href="mailto:dhulatechnologies@gmail.com" 
                  className="hover:text-foreground transition-colors break-all"
                >
                  dhulatechnologies@gmail.com
                </a>
              </li>
              <li className="body-sm text-muted-foreground text-sm sm:text-base">
                Chennai, India
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-6 sm:my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          
          {/* Copyright */}
          <p className="body-sm text-muted-foreground text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
            © 2025 Dhula Technologies. All rights reserved.
          </p>
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 order-1 sm:order-2">
            <a 
              href="#" 
              className="body-sm text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="body-sm text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm whitespace-nowrap"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
