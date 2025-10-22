import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-background to-brand-secondary/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-brand-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-brand-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        {/* Network Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-20">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-card mb-6 sm:mb-8 animate-fade-in">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-brand-accent" />
            <span className="body-sm text-muted-foreground text-xs sm:text-sm">Blockchain as a Service</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-xl mb-4 sm:mb-6 animate-fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight px-2">
            Build Your Blockchain
            <br />
            <span className="gradient-text">Without the Complexity</span>
          </h1>

          {/* Subheading */}
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-in-up delay-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
            We are a group of final year CSE students specializing in blockchain technologies. Our mission is to provide affordable, high-quality blockchain services to help businesses embrace decentralized solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up delay-400 px-4">
            <Button 
              size="lg" 
              className="group w-full sm:w-auto text-sm sm:text-base h-11 sm:h-12 touch-manipulation" 
              asChild
            >
              <a href="#contact">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card w-full sm:w-auto text-sm sm:text-base h-11 sm:h-12 touch-manipulation" 
              asChild
            >
              <a href="#contact">
                Schedule Consultation
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 animate-fade-in-up delay-600 px-2">
            {[
              { value: "Fresh", label: "Innovative Ideas" },
              { value: "Affordable", label: "Pricing" },
              { value: "Dedicated", label: "Support" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="glass-card p-4 sm:p-5 md:p-6 rounded-xl hover:border-brand-primary/50 transition-all"
              >
                <div className="heading-md gradient-text mb-1 sm:mb-2 text-xl sm:text-2xl md:text-3xl">
                  {stat.value}
                </div>
                <div className="body-sm text-muted-foreground text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
