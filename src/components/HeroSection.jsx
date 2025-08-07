import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import { Heart, Users, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Children learning together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-4 sm:space-y-6 animate-fade-in text-center sm:text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Empowering Communities Through
              <span className="block sm:inline bg-gradient-primary bg-clip-text text-transparent"> Education</span>
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto sm:mx-0">
              At Basti Ki Pathshala, we believe every child deserves access to quality education. 
              Join us in building bridges to a brighter future, one community at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 pb-20 sm:pb-24 justify-center sm:justify-start">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/volunteer">Become a Volunteer</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-4">
          <div className="bg-card/95 backdrop-blur-sm rounded-lg p-2 sm:p-4 shadow-soft text-center">
            <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-gradient-primary rounded-full mx-auto mb-1 sm:mb-2">
              <BookOpen className="h-4 w-4 sm:h-6 sm:w-6 text-primary-foreground" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-foreground">500+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Children Educated</div>
          </div>
          
          <div className="bg-card/95 backdrop-blur-sm rounded-lg p-2 sm:p-4 shadow-soft text-center">
            <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-gradient-warm rounded-full mx-auto mb-1 sm:mb-2">
              <Users className="h-4 w-4 sm:h-6 sm:w-6 text-accent-foreground" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-foreground">50+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Active Volunteers</div>
          </div>
          
          <div className="bg-card/95 backdrop-blur-sm rounded-lg p-2 sm:p-4 shadow-soft text-center">
            <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-success rounded-full mx-auto mb-1 sm:mb-2">
              <Heart className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-foreground">15</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Communities Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;