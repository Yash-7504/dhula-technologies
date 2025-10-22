const technologies = [
  {
    name: "Ethereum",
    image: "https://images.unsplash.com/photo-1651055749491-7be14d8a3ef0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxldGhlcmV1bSUyMGxvZ28lMjBjcnlwdG9jdXJyZW5jeXxlbnwwfDJ8fHwxNzYwNjc4OTE5fDA&ixlib=rb-4.1.0&q=85",
    alt: "Ethereum logo - Mariia Shalabaieva on Unsplash",
  },
  {
    name: "Polygon",
    image: "https://images.unsplash.com/photo-1651055749491-7be14d8a3ef0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxldGhlcmV1bSUyMGxvZ28lMjBjcnlwdG9jdXJyZW5jeXxlbnwwfDJ8fHwxNzYwNjc4OTE5fDA&ixlib=rb-4.1.0&q=85",
    alt: "Polygon logo - Mariia Shalabaieva on Unsplash",
  },
  {
    name: "Solana",
    image: "https://images.unsplash.com/photo-1651054558996-03455fe2702f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxzb2xhbmElMjBibG9ja2NoYWluJTIwY3J5cHRvY3VycmVuY3l8ZW58MHwyfHx8MTc2MDY3ODkxOXww&ixlib=rb-4.1.0&q=85",
    alt: "Solana logo - Mariia Shalabaieva on Unsplash",
  },
  {
    name: "Hyperledger",
    image: "https://images.unsplash.com/photo-1720983415059-43ec4007cf97?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxoeXBlcmxlZGdlciUyMGJsb2NrY2hhaW4lMjB0ZWNobm9sb2d5fGVufDB8Mnx8fDE3NjA2Nzg5MjB8MA&ixlib=rb-4.1.0&q=85",
    alt: "Hyperledger logo - Milad Fakurian on Unsplash",
  },
  {
    name: "Binance Smart Chain",
    image: "https://images.unsplash.com/photo-1651055699023-36d26d793a21?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxldGhlcmV1bSUyMGxvZ28lMjBjcnlwdG9jdXJyZW5jeXxlbnwwfDJ8fHwxNzYwNjc4OTE5fDA&ixlib=rb-4.1.0&q=85",
    alt: "BSC logo - Mariia Shalabaieva on Unsplash",
  },
  {
    name: "Avalanche",
    image: "https://images.unsplash.com/photo-1651055705032-d4187855b004?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxMHx8ZXRoZXJldW0lMjBsb2dvJTIwY3J5cHRvY3VycmVuY3l8ZW58MHwyfHx8MTc2MDY3ODkxOXww&ixlib=rb-4.1.0&q=85",
    alt: "Avalanche logo - Mariia Shalabaieva on Unsplash",
  },
];

export function TechStack() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          <h2 className="heading-lg mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Supported Blockchain Networks
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-4 leading-relaxed">
            We work with leading blockchain platforms to deliver the best solution for your needs
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6 lg:gap-7 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="glass-card p-4 sm:p-5 md:p-6 rounded-xl flex flex-col items-center justify-center gap-3 sm:gap-4 hover:scale-105 sm:hover:scale-110 hover:border-brand-primary/50 transition-all duration-300 group touch-manipulation"
            >
              {/* Logo Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center group-hover:from-brand-primary/30 group-hover:to-brand-secondary/30 transition-all duration-300 group-hover:scale-110">
                <img
                  src={tech.image}
                  alt={tech.alt}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 object-contain"
                  loading="lazy"
                />
              </div>
              
              {/* Technology Name */}
              <span className="body-sm font-medium text-center text-xs sm:text-sm md:text-base leading-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Optional Badge/Trust Indicator */}
        <div className="text-center mt-10 sm:mt-12 md:mt-14 lg:mt-16">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Trusted by developers worldwide for secure blockchain solutions
          </p>
        </div>
      </div>
    </section>
  );
}
