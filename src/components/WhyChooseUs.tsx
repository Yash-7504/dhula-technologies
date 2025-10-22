import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Fresh Perspective",
    description: "We bring innovative ideas and modern approaches to blockchain development",
  },
  {
    title: "Affordable Pricing",
    description: "Student-friendly rates without compromising on quality or dedication",
  },
  {
    title: "Latest Technologies",
    description: "We stay updated with the newest blockchain frameworks and best practices",
  },
  {
    title: "Passionate Team",
    description: "Driven by passion for blockchain and commitment to delivering excellence",
  },
  {
    title: "Flexible Approach",
    description: "We adapt to your needs and work closely with you throughout the project",
  },
  {
    title: "Learning & Growing",
    description: "We're constantly learning and improving, bringing fresh knowledge to every project",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start lg:items-center max-w-7xl mx-auto">
          
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <Badge className="mb-3 sm:mb-4 bg-brand-accent/10 text-brand-accent border-brand-accent/20 text-xs sm:text-sm">
              Why Choose Us
            </Badge>
            
            <h2 className="heading-lg mb-4 sm:mb-5 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Your Partner in
              <span className="gradient-text"> Blockchain Innovation</span>
            </h2>
            
            <p className="body-lg text-muted-foreground mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
              As final year CSE students specializing in blockchain, we combine academic knowledge with practical skills to deliver quality solutions at affordable prices.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-lg glass-card hover:border-brand-primary/30 transition-all group touch-manipulation"
                >
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 text-brand-accent flex-shrink-0 mt-0.5 sm:mt-1 group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <h3 className="heading-sm mb-0.5 sm:mb-1 text-sm sm:text-base md:text-lg">
                      {benefit.title}
                    </h3>
                    <p className="body-sm text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative order-1 lg:order-2">
            <div className="glass-card p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                
                {/* Stat Card 1 */}
                <div className="flex items-center justify-between p-4 sm:p-5 md:p-6 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-xl hover:scale-[1.02] transition-transform">
                  <div>
                    <div className="heading-md gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                      2025
                    </div>
                    <div className="body-sm text-muted-foreground text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
                      Founded This Year
                    </div>
                  </div>
                </div>
                
                {/* Stat Card 2 */}
                <div className="flex items-center justify-between p-4 sm:p-5 md:p-6 bg-gradient-to-r from-brand-secondary/10 to-brand-accent/10 rounded-xl hover:scale-[1.02] transition-transform">
                  <div>
                    <div className="heading-md gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                      100%
                    </div>
                    <div className="body-sm text-muted-foreground text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
                      Commitment to Quality
                    </div>
                  </div>
                </div>
                
                {/* Stat Card 3 */}
                <div className="flex items-center justify-between p-4 sm:p-5 md:p-6 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-xl hover:scale-[1.02] transition-transform">
                  <div>
                    <div className="heading-md gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                      Affordable
                    </div>
                    <div className="body-sm text-muted-foreground text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
                      Student-Friendly Rates
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements - Hidden on mobile for performance */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-brand-primary/20 rounded-full blur-2xl" />
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-brand-secondary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
