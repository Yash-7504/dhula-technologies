import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Smart Contract Development",
    description: "Custom smart contract development and auditing for Ethereum, Polygon, and other EVM-compatible chains.",
    features: ["Solidity Development", "Security Audits", "Gas Optimization"],
  },
  {
    icon: Database,
    title: "Blockchain Infrastructure",
    description: "Managed blockchain nodes, APIs, and infrastructure with 99.9% uptime guarantee.",
    features: ["Node Management", "API Access", "Scalable Architecture"],
  },
  {
    icon: Zap,
    title: "Custom dApp Development",
    description: "End-to-end decentralized application development from concept to deployment.",
    features: ["Frontend Integration", "Web3 Wallets", "IPFS Storage"],
  },
  {
    icon: Shield,
    title: "Consulting & Strategy",
    description: "Expert blockchain consulting to help you choose the right technology stack and architecture.",
    features: ["Technology Selection", "Architecture Design", "Best Practices"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 relative scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          <h2 className="heading-lg mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Our BaaS Offerings
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-4 leading-relaxed">
            Comprehensive blockchain solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="glass-card border-border/50 hover:border-brand-primary/50 transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] md:hover:scale-[1.03] lg:hover:scale-105 group overflow-hidden"
              >
                <CardHeader className="p-5 sm:p-6 md:p-7 lg:p-8">
                  {/* Icon Container */}
                  <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center mb-3 sm:mb-4 lg:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <CardTitle className="heading-sm text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3">
                    {service.title}
                  </CardTitle>
                  
                  {/* Description */}
                  <CardDescription className="body-md text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                {/* Features List */}
                <CardContent className="p-5 sm:p-6 md:p-7 lg:p-8 pt-0">
                  <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center gap-2 sm:gap-3 body-sm text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg group-hover:text-foreground transition-colors"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2 md:h-2 rounded-full bg-brand-accent flex-shrink-0 group-hover:scale-125 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20">
          <div className="max-w-3xl mx-auto px-4">
            <p className="body-md text-muted-foreground mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg">
              Need a custom solution? We've got you covered.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-lg hover:opacity-90 hover:scale-105 transition-all font-semibold text-sm sm:text-base md:text-lg touch-manipulation shadow-lg hover:shadow-xl"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
