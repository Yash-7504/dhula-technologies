import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, DollarSign, Image, Fingerprint } from "lucide-react";

const useCases = [
  {
    icon: Package,
    title: "Supply Chain",
    description: "Track products from manufacture to delivery with immutable records",
    benefits: ["Transparency", "Traceability", "Authenticity"],
  },
  {
    icon: DollarSign,
    title: "DeFi Solutions",
    description: "Build decentralized financial applications and protocols",
    benefits: ["Lending Platforms", "DEX", "Yield Farming"],
  },
  {
    icon: Image,
    title: "NFT Marketplaces",
    description: "Create and manage digital asset marketplaces",
    benefits: ["Minting", "Trading", "Royalties"],
  },
  {
    icon: Fingerprint,
    title: "Identity Management",
    description: "Secure digital identity and credential verification",
    benefits: ["Self-Sovereign ID", "KYC/AML", "Access Control"],
  },
];

export function UseCases() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          <h2 className="heading-lg mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Real-World Applications
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-4 leading-relaxed">
            Discover how blockchain technology can transform your industry
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={index}
                className="glass-card border-border/50 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 group overflow-hidden"
              >
                <CardHeader className="p-5 sm:p-6 md:p-7">
                  {/* Icon Container */}
                  <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-8 lg:h-8 text-brand-accent" />
                  </div>
                  
                  {/* Title */}
                  <CardTitle className="heading-sm text-base sm:text-lg md:text-xl lg:text-2xl mb-2">
                    {useCase.title}
                  </CardTitle>
                  
                  {/* Description */}
                  <CardDescription className="body-sm text-xs sm:text-sm md:text-base leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                
                {/* Benefits List */}
                <CardContent className="p-5 sm:p-6 md:p-7 pt-0">
                  <div className="space-y-2 sm:space-y-2.5">
                    {useCase.benefits.map((benefit, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-2 sm:gap-3 body-sm text-muted-foreground text-xs sm:text-sm md:text-base group-hover:text-foreground transition-colors"
                      >
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-brand-accent flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20">
          <p className="body-md text-muted-foreground mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg px-4">
            Have a unique use case in mind?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 bg-gradient-to-br from-brand-accent to-brand-primary text-white rounded-lg hover:opacity-90 hover:scale-105 transition-all font-semibold text-sm sm:text-base md:text-lg touch-manipulation shadow-lg hover:shadow-xl"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
