import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import { Heart, Users, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Children learning together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Empowering Communities Through
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Education</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              At Basti Ki Pathshala, we believe every child deserves access to quality education. 
              Join us in building bridges to a brighter future, one community at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 pb-12 sm:pb-16">
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
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-soft text-center">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full mx-auto mb-2">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-foreground">500+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Children Educated</div>
          </div>
          
          <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-soft text-center">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-warm rounded-full mx-auto mb-2">
              <Users className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-foreground">50+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Active Volunteers</div>
          </div>
          
          <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-soft text-center">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-success rounded-full mx-auto mb-2">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-foreground">15</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Communities Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;