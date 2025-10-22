import { MessageSquare, Palette, Code, TestTube, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "We discuss your requirements and help you define the optimal blockchain strategy",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Architecture design and technology stack selection tailored to your needs",
  },
  {
    icon: Code,
    title: "Development",
    description: "Agile development with regular updates and transparent communication",
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Comprehensive testing including security audits and performance optimization",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Smooth deployment to mainnet with monitoring and analytics setup",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Ongoing maintenance, updates, and 24/7 technical support",
  },
];

export function Process() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="heading-lg mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Our streamlined process takes you from concept to production
          </p>
        </div>

        {/* Steps Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="glass-card p-5 sm:p-6 rounded-xl hover:border-brand-primary/50 transition-all group h-full">
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center body-sm font-bold text-white text-sm shadow-lg">
                      {index + 1}
                    </div>
                    
                    {/* Icon Container */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="heading-sm mb-2 text-base sm:text-lg md:text-xl">
                      {step.title}
                    </h3>
                    <p className="body-sm text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Line for Desktop */}
                  {index < steps.length - 1 && (
                    <>
                      {/* Horizontal connector for desktop (3 columns) */}
                      <div className="hidden lg:block absolute top-1/2 -right-5 w-10 h-0.5 bg-gradient-to-r from-brand-primary/50 to-transparent transform -translate-y-1/2" />
                      
                      {/* Horizontal connector for tablet (2 columns) */}
                      {index % 2 === 0 && index < steps.length - 1 && (
                        <div className="hidden sm:block lg:hidden absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-brand-primary/50 to-transparent transform -translate-y-1/2" />
                      )}
                    </>
                  )}

                  {/* Vertical Connector for Mobile */}
                  {index < steps.length - 1 && (
                    <div className="sm:hidden absolute bottom-0 left-1/2 w-0.5 h-6 bg-gradient-to-b from-brand-primary/50 to-transparent transform -translate-x-1/2 translate-y-6" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA (Optional) */}
        <div className="text-center mt-10 sm:mt-12 md:mt-14 lg:mt-16">
          <p className="body-md text-muted-foreground mb-4 text-sm sm:text-base px-4">
            Ready to get started with your blockchain project?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-lg hover:opacity-90 transition-all font-medium text-sm sm:text-base touch-manipulation"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
